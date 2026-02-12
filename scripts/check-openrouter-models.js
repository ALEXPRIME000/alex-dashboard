#!/usr/bin/env node
/**
 * Daily OpenRouter Free Model Checker
 * Queries OpenRouter API for free models with >32k context
 * Updates fallback chain configuration if changes detected
 * Logs results to memory file
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const CONFIG_PATH = '/home/ubuntu/.openclaw/openclaw.json';
const MEMORY_DIR = '/home/ubuntu/.openclaw/workspace/memory';
const LOG_PATH = path.join(MEMORY_DIR, 'openrouter-models.json');

// Minimum context window filter (32k tokens)
const MIN_CONTEXT = 32768;

async function fetchModels() {
  return new Promise((resolve, reject) => {
    const req = https.get('https://openrouter.ai/api/v1/models', {
      headers: {
        'Authorization': 'Bearer ' + process.env.OPENROUTER_API_KEY,
        'HTTP-Referer': 'https://pulsegraphix.net',
        'X-Title': 'Pulse Graphix OpenClaw'
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(new Error(`Parse error: ${e.message}`));
        }
      });
    });
    req.on('error', reject);
    req.setTimeout(30000, () => {
      req.destroy();
      reject(new Error('Timeout'));
    });
  });
}

async function main() {
  const timestamp = new Date().toISOString();
  const logEntry = {
    timestamp,
    status: 'unknown',
    models: [],
    errors: [],
    configUpdated: false
  };

  try {
    // Ensure memory directory exists
    if (!fs.existsSync(MEMORY_DIR)) {
      fs.mkdirSync(MEMORY_DIR, { recursive: true });
    }

    // Fetch models from OpenRouter
    console.log('Fetching OpenRouter models...');
    const response = await fetchModels();
    
    if (!response.data || !Array.isArray(response.data)) {
      throw new Error('Invalid API response format');
    }

    // Filter free models with >32k context
    const freeModels = response.data.filter(m => {
      const isFree = m.id.includes(':free') || 
                     (m.pricing?.prompt === 0 && m.pricing?.completion === 0);
      const hasContext = (m.context_length || 0) >= MIN_CONTEXT;
      return isFree && hasContext;
    }).map(m => ({
      id: m.id,
      name: m.name,
      context_length: m.context_length,
      pricing: m.pricing,
      description: m.description?.substring(0, 200)
    }));

    logEntry.status = 'success';
    logEntry.models = freeModels;
    logEntry.modelCount = freeModels.length;

    // Sort by context length (descending)
    freeModels.sort((a, b) => (b.context_length || 0) - (a.context_length || 0));

    // Read current config
    const config = JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf8'));
    const currentProviderModels = config.models?.providers?.openrouter?.models || [];
    
    // Check if there are new free models
    const currentIds = new Set(currentProviderModels.map(m => m.id));
    const newModels = freeModels.filter(m => !currentIds.has(m.id));
    
    if (newModels.length > 0) {
      console.log(`Found ${newModels.length} new free models:`);
      newModels.forEach(m => console.log(`  - ${m.id} (${m.context_length} ctx)`));
      
      // Add new models to config
      newModels.forEach(m => {
        config.models.providers.openrouter.models.push({
          id: m.id,
          name: m.name || m.id.split('/').pop(),
          reasoning: m.id.includes('reasoning') || m.id.includes('qwen3'),
          input: ['text'],
          cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
          contextWindow: m.context_length || 128000,
          maxTokens: 8192
        });
      });

      // Update fallback chain - prioritize >128k context models first
      const prioritized = freeModels
        .filter(m => m.context_length >= 128000)
        .map(m => `openrouter/${m.id}`);
      
      const existingFallbacks = config.agents?.defaults?.model?.fallbacks || [];
      const nonOpenRouterFallbacks = existingFallbacks.filter(f => !f.startsWith('openrouter/'));
      config.agents.defaults.model.fallbacks = [
        ...prioritized.slice(0, 4),
        ...nonOpenRouterFallbacks
      ];

      // Write updated config
      fs.writeFileSync(CONFIG_PATH, JSON.stringify(config, null, 2));
      logEntry.configUpdated = true;
      logEntry.newModelsAdded = newModels.length;
      console.log('Configuration updated successfully');
    } else {
      console.log('No new free models found');
    }

  } catch (error) {
    logEntry.status = 'error';
    logEntry.errors.push(error.message);
    console.error('Error:', error.message);
  }

  // Append to log file
  let existingLog = [];
  if (fs.existsSync(LOG_PATH)) {
    try {
      existingLog = JSON.parse(fs.readFileSync(LOG_PATH, 'utf8'));
      if (!Array.isArray(existingLog)) existingLog = [];
    } catch {
      existingLog = [];
    }
  }
  
  // Keep only last 30 entries
  existingLog.push(logEntry);
  if (existingLog.length > 30) existingLog = existingLog.slice(-30);
  
  fs.writeFileSync(LOG_PATH, JSON.stringify(existingLog, null, 2));
  
  // Also write latest status
  fs.writeFileSync(
    path.join(MEMORY_DIR, 'openrouter-latest.json'),
    JSON.stringify(logEntry, null, 2)
  );
  
  console.log(`\nLog saved to ${LOG_PATH}`);
  console.log(`Models found: ${logEntry.models?.length || 0}`);
  console.log(`Status: ${logEntry.status}`);
}

main().catch(e => {
  console.error('Fatal error:', e);
  process.exit(1);
});
