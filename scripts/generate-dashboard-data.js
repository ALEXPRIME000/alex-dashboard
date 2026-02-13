#!/usr/bin/env node
/**
 * generate-dashboard-data.js
 * Reads workspace files and generates fresh status.json + data.json for dashboards.
 * Run: node scripts/generate-dashboard-data.js
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const WORKSPACE = '/home/ubuntu/.openclaw/workspace';
const DASHBOARD = path.join(WORKSPACE, 'dashboard');
const NOW = new Date().toISOString();

// --- Parse TODO.md ---
function parseTodo() {
  const todo = fs.readFileSync(path.join(WORKSPACE, 'TODO.md'), 'utf-8');
  
  const completed = [];
  const inProgress = [];
  const pending = [];
  
  let section = null;
  for (const line of todo.split('\n')) {
    if (line.includes('COMPLETED')) section = 'completed';
    else if (line.includes('IN PROGRESS')) section = 'inprogress';
    else if (line.includes('PENDING')) section = 'pending';
    
    if (section === 'completed' && (line.startsWith('### ✅') || line.match(/^- \[x\]/))) {
      completed.push(line.replace(/^### ✅\s*|^- \[x\]\s*/,'').trim());
    }
    if (section === 'inprogress' && (line.startsWith('### 🎨') || line.startsWith('### 🔍') || line.match(/^- \[.\]/))) {
      const text = line.replace(/^### [^\s]+\s*|^- \[.\]\s*/,'').trim();
      if (text) inProgress.push(text);
    }
    if (section === 'pending' && line.match(/^- \[ \]/)) {
      const text = line.replace(/^- \[ \]\s*/,'').replace(/\*\*/g,'').trim();
      if (text) pending.push(text);
    }
  }
  
  return { completed, inProgress, pending };
}

// --- List memory files ---
function getMemoryFiles() {
  const memDir = path.join(WORKSPACE, 'memory');
  if (!fs.existsSync(memDir)) return [];
  return fs.readdirSync(memDir).filter(f => f.endsWith('.md')).map(f => `memory/${f}`);
}

// --- List prospect files ---
function getProspects() {
  const dir = path.join(WORKSPACE, 'prospects');
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter(f => f.endsWith('.md')).map(f => {
    const content = fs.readFileSync(path.join(dir, f), 'utf-8');
    return { name: f.replace('.md',''), path: `prospects/${f}`, preview: content.substring(0, 200) };
  });
}

// --- List draft files ---
function getDrafts() {
  const dir = path.join(WORKSPACE, 'drafts');
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter(f => f.endsWith('.md') || f.endsWith('.html')).map(f => ({
    name: f, path: `drafts/${f}`,
    modified: fs.statSync(path.join(dir, f)).mtime.toISOString().split('T')[0]
  }));
}

// --- Get recent git actions ---
function getRecentActions() {
  try {
    const log = execSync('git log --oneline -10 --format="%s"', { cwd: DASHBOARD, encoding: 'utf-8' });
    return log.trim().split('\n').filter(Boolean).slice(0, 5);
  } catch { return []; }
}

// --- Count workspace ---
function countWorkspace() {
  try {
    const files = execSync(`find ${WORKSPACE} -maxdepth 3 -type f \\( -name "*.md" -o -name "*.html" -o -name "*.json" -o -name "*.sh" -o -name "*.css" -o -name "*.js" -o -name "*.tsx" \\) | wc -l`, { encoding: 'utf-8' });
    const folders = execSync(`find ${WORKSPACE} -maxdepth 3 -type d | wc -l`, { encoding: 'utf-8' });
    return { files: parseInt(files.trim()), folders: parseInt(folders.trim()) };
  } catch { return { files: 0, folders: 0 }; }
}

// --- Main ---
const tasks = parseTodo();
const memFiles = getMemoryFiles();
const prospects = getProspects();
const drafts = getDrafts();
const recentActions = getRecentActions();
const workspace = countWorkspace();

// Generate status.json
const status = {
  agent: "Alex Prime",
  status: "active",
  lastUpdate: NOW,
  lastHeartbeat: NOW,
  session: "main",
  model: "anthropic/claude-opus-4-6",
  currentTask: tasks.inProgress[0] || "Monitoring",
  stats: {
    tasksInProgress: tasks.inProgress.length,
    tasksPending: tasks.pending.length,
    tasksCompleted: tasks.completed.length,
    totalFiles: workspace.files,
    totalFolders: workspace.folders
  },
  recentActions,
  pendingTasks: tasks.pending.map(t => ({ name: t, priority: "medium" })),
  inProgressTasks: tasks.inProgress,
  completedCount: tasks.completed.length,
  heartbeat: {
    lastCheck: NOW,
    interval: "10m"
  }
};

// Generate data.json (comprehensive)
const data = {
  lastGenerated: NOW,
  tasks: {
    completed: tasks.completed.map(t => ({ name: t, date: new Date().toISOString().split('T')[0] })),
    inProgress: tasks.inProgress.map(t => ({ name: t, status: "active" })),
    pending: tasks.pending.map(t => ({ name: t, priority: "medium" }))
  },
  workspace: { totalFiles: workspace.files, totalFolders: workspace.folders, lastCommit: new Date().toISOString().split('T')[0] },
  memory: { files: memFiles, coreFiles: ["MEMORY.md", "TODO.md", "HEARTBEAT.md", "SOUL.md", "USER.md"] },
  prospects: prospects,
  drafts: drafts,
  integrations: {
    services: [
      { name: "GitHub", status: "connected", user: "ALEXPRIME000" },
      { name: "Vercel", status: "connected", notes: "Auto-deploy active" },
      { name: "Google Workspace", status: "expired", notes: "OAuth needs browser re-auth" },
      { name: "Telegram", status: "connected" },
      { name: "n8n", status: "available", url: "https://n8n.nexusaiacademy.app" },
      { name: "Brave Search", status: "connected" }
    ],
    models: [
      { provider: "Anthropic", model: "Claude Opus 4.6", role: "Primary", status: "active" },
      { provider: "Groq", model: "Llama 3.3 70B", role: "Fast fallback", status: "active" },
      { provider: "NVIDIA", model: "Kimi K2.5", role: "Backup", status: "active" },
      { provider: "OpenRouter", model: "Various", role: "Fallback", status: "active" }
    ]
  },
  goals: {
    life: [
      { goal: "Buy house in France", target: "€300k-500k", progress: 0 },
      { goal: "Holiday home abroad", target: "€100k-200k", progress: 0 }
    ],
    business: [
      { goal: "€10k/mo template revenue", target: "6 months", progress: 5 },
      { goal: "50 artisans digitalized", target: "2026", progress: 4 },
      { goal: "LinkedIn weekly posts", target: "Ongoing", progress: 20 },
      { goal: "YouTube channel", target: "Q2 2026", progress: 0 }
    ]
  },
  projects: [
    { name: "Animated Template Business", status: "planning", progress: 15, description: "AI-powered templates on Framer/Webflow", revenue: "€10k/mo target" },
    { name: "Prospect Pipeline (Torcy)", status: "active", progress: 60, description: "Local business prospecting", revenue: "€2,400-4,500 pipeline" },
    { name: "Dashboard System", status: "active", progress: 80, description: "Real-time executive dashboard" },
    { name: "Invoice/Devis Templates", status: "completed", progress: 100, description: "FR/EN templates done" },
    { name: "LinkedIn Marketing", status: "review", progress: 80, description: "4 posts + profile ready for approval" }
  ],
  skills: [
    "frontend-design", "designer", "shadcn-ui", "color-palette", 
    "happy-hues", "colors", "graphic-design", "openai-image-gen",
    "weather", "gog", "tmux", "healthcheck", "skill-creator"
  ],
  approvals: [
    { item: "LinkedIn Posts (4)", file: "drafts/linkedin-posts-feb2026.md", priority: "high" },
    { item: "Prospect Outreach", file: "prospects/torcy-expanded.md", priority: "high" },
    { item: "Template Business Strategy", file: "business/template-blueprint-strategy.md", priority: "high" },
    { item: "Google OAuth Re-auth", file: "scripts/fix-oauth.sh", priority: "high" },
    { item: "LinkedIn Profile", file: "drafts/LINKEDIN_PROFILE_FINAL.md", priority: "medium" },
    { item: "Malt Profile", file: "drafts/MALT_PROFILE_DRAFT.md", priority: "medium" }
  ]
};

fs.writeFileSync(path.join(DASHBOARD, 'status.json'), JSON.stringify(status, null, 2));
fs.writeFileSync(path.join(DASHBOARD, 'data.json'), JSON.stringify(data, null, 2));

console.log(`✅ Dashboard data synced at ${NOW}`);
console.log(`   Tasks: ${tasks.completed.length} done, ${tasks.inProgress.length} active, ${tasks.pending.length} pending`);
console.log(`   Workspace: ${workspace.files} files, ${workspace.folders} folders`);
