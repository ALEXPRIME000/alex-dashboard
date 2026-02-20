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
  const blocked = [];
  
  let currentSection = '';
  let currentItem = null;
  
  for (const line of todo.split('\n')) {
    // Track sections
    if (line.match(/^##\s/)) {
      if (line.includes('COMPLETED')) currentSection = 'completed';
      else if (line.includes('THIS WEEK') || line.includes('NEXT WEEK') || line.includes('MARCH') || line.includes('Q2')) currentSection = 'active';
      else if (line.includes('BLOCKED')) currentSection = 'blocked';
    }
    
    // Parse checkbox items anywhere in the file
    const checkboxMatch = line.match(/^- \[(x| )\]\s+(.+)/);
    if (checkboxMatch) {
      const isDone = checkboxMatch[1] === 'x';
      const text = checkboxMatch[2].replace(/\*\*/g, '').trim();
      if (isDone) {
        completed.push(text);
      } else {
        // Check if blocked by looking at next lines context or section
        currentItem = { text, section: currentSection };
        pending.push(text);
      }
    }
  }
  
  // Also parse blocked table
  const blockedSection = todo.split('BLOCKED')[1];
  if (blockedSection) {
    for (const line of blockedSection.split('\n')) {
      const tableMatch = line.match(/^\|\s*(.+?)\s*\|\s*(.+?)\s*\|\s*(.+?)\s*\|/);
      if (tableMatch && !line.includes('Task') && !line.includes('---')) {
        blocked.push({ task: tableMatch[1].trim(), need: tableMatch[2].trim(), priority: tableMatch[3].trim() });
      }
    }
  }
  
  return { completed, inProgress, pending, blocked };
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

// --- Parse expanded prospect list for dashboard ---
function getProspectLeads() {
  const file = path.join(WORKSPACE, 'prospects/expanded-prospect-list-20.md');
  if (!fs.existsSync(file)) return [];
  const content = fs.readFileSync(file, 'utf-8');
  const leads = [];
  let tier = '';
  for (const line of content.split('\n')) {
    if (line.startsWith('## ')) {
      if (line.includes('TIER 1')) tier = 'hot';
      else if (line.includes('TIER 2')) tier = 'warm';
      else if (line.includes('TIER 3')) tier = 'new';
      else if (line.includes('TIER 4')) tier = 'cold';
    }
    // Parse table rows: | # | **Name** | Type | Address | Phone | Status | ... |
    const match = line.match(/^\|\s*(\d+)\s*\|\s*\*\*(.+?)\*\*\s*\|\s*(.+?)\s*\|\s*(.+?)\s*\|\s*(.+?)\s*\|\s*(.+?)\s*\|/);
    if (match) {
      leads.push({
        id: parseInt(match[1]),
        name: match[2].trim(),
        type: match[3].trim(),
        address: match[4].trim(),
        phone: match[5].trim(),
        webStatus: match[6].trim().replace(/[❌⚠️]/g, '').trim(),
        tier
      });
    }
  }
  return leads;
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

// --- Parse marketing content ---
function getMarketingContent() {
  const result = { linkedin: [], strategy: [] };
  const linkedinFile = path.join(WORKSPACE, 'marketing/linkedin/posts-batch-1.md');
  if (fs.existsSync(linkedinFile)) {
    const content = fs.readFileSync(linkedinFile, 'utf-8');
    const posts = content.split(/^## Post \d+/m).slice(1);
    posts.forEach((post, i) => {
      const titleMatch = post.match(/^:\s*(.+)/m);
      const typeMatch = post.match(/\*\*Type:\*\*\s*(.+?)(?:\s*\||\n)/);
      result.linkedin.push({
        id: i + 1,
        title: titleMatch ? titleMatch[1].trim() : `Post ${i + 1}`,
        type: typeMatch ? typeMatch[1].trim() : 'Text',
        status: 'draft',
        preview: post.substring(0, 200).replace(/[#*|]/g, '').trim()
      });
    });
  }
  // Check for strategy files
  const stratFiles = ['LINKEDIN-STRATEGY.md', 'MASTER-STRATEGY.md', 'YOUTUBE-STRATEGY.md'];
  for (const f of stratFiles) {
    const fp = path.join(WORKSPACE, 'docs', f);
    if (fs.existsSync(fp)) result.strategy.push({ name: f, path: `docs/${f}` });
  }
  return result;
}

// --- Count workspace ---
function countWorkspace() {
  try {
    const files = execSync(`find ${WORKSPACE} -maxdepth 3 -type f \\( -name "*.md" -o -name "*.html" -o -name "*.json" -o -name "*.sh" -o -name "*.css" -o -name "*.js" -o -name "*.tsx" \\) | wc -l`, { encoding: 'utf-8' });
    const folders = execSync(`find ${WORKSPACE} -maxdepth 3 -type d | wc -l`, { encoding: 'utf-8' });
    return { files: parseInt(files.trim()), folders: parseInt(folders.trim()) };
  } catch { return { files: 0, folders: 0 }; }
}

// --- Generate gallery data ---
function generateGallery() {
  const companies = [
    { id: 'pulse-graphix', name: 'Pulse Graphix' },
    { id: 'nexus-ai-academy', name: 'Nexus AI Academy' },
    { id: 'invest-in-congo', name: 'Invest in Congo' },
    { id: 'pulse-architects', name: 'Pulse Architects' }
  ];
  
  const assetTypes = [
    { filename: 'profile-picture', name: 'Profile Picture', type: 'Profile', dimensions: '800×800' },
    { filename: 'banner-linkedin', name: 'LinkedIn Banner', type: 'Banner', dimensions: '1584×396' },
    { filename: 'banner-facebook', name: 'Facebook Banner', type: 'Banner', dimensions: '851×315' },
    { filename: 'banner-youtube', name: 'YouTube Banner', type: 'Banner', dimensions: '2560×1440' },
    { filename: 'post-template', name: 'Post Template', type: 'Post', dimensions: '1080×1080' },
    { filename: 'story-template', name: 'Story Template', type: 'Story', dimensions: '1080×1920' }
  ];
  
  const gallery = [];
  
  for (const company of companies) {
    for (const asset of assetTypes) {
      for (let version = 1; version <= 2; version++) {
        gallery.push({
          category: 'Social Media',
          company: company.name,
          name: `${asset.name} V${version}`,
          filename: `${asset.filename}-v${version}.png`,
          type: asset.type,
          dimensions: asset.dimensions,
          url: `https://raw.githubusercontent.com/ALEXPRIME000/social-media-assets/main/${company.id}/${asset.filename}-v${version}.png`
        });
      }
    }
  }
  
  return gallery;
}

// --- Main ---
const tasks = parseTodo();
const memFiles = getMemoryFiles();
const prospects = getProspects();
const drafts = getDrafts();
const recentActions = getRecentActions();
const workspace = countWorkspace();
const prospectLeads = getProspectLeads();
const gallery = generateGallery();

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
  blockedTasks: tasks.blocked || [],
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
    pending: tasks.pending.map(t => ({ name: t, priority: "medium" })),
    blocked: (tasks.blocked || []).map(b => ({ name: b.task, need: b.need, priority: b.priority }))
  },
  workspace: { totalFiles: workspace.files, totalFolders: workspace.folders, lastCommit: new Date().toISOString().split('T')[0] },
  memory: { files: memFiles, coreFiles: ["MEMORY.md", "TODO.md", "HEARTBEAT.md", "SOUL.md", "USER.md"] },
  prospects: prospects,
  prospectLeads: prospectLeads,
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
    { name: "Prospect Pipeline (Torcy)", status: "active", progress: 75, description: "20 local businesses identified, call scripts ready, expanded from 4→20 leads", revenue: "€4,500-12,000 pipeline" },
    { name: "LinkedIn Marketing", status: "review", progress: 90, description: "5 posts drafted (thought leadership, portfolio, checklist, story, poll). Awaiting review.", revenue: "Lead generation" },
    { name: "Dashboard System", status: "active", progress: 85, description: "Alex Prime + Pulse Graphix dashboards live on Vercel. Adding real-time data feeds." },
    { name: "Animated Template Business", status: "planning", progress: 15, description: "AI-powered templates for Framer/Webflow marketplace", revenue: "€10k/mo target" },
    { name: "Client Proposal System", status: "completed", progress: 100, description: "Branded proposal template + devis/invoice FR/EN done", revenue: "Sales tool ready" },
    { name: "Social Media Strategy", status: "completed", progress: 100, description: "8 strategy docs across 5 platforms (LinkedIn, YouTube, TikTok, Twitter/X, Facebook)" },
    { name: "Cold Outreach Prep", status: "review", progress: 80, description: "Call kit ready, email follow-up templates, objection handling scripts", revenue: "First calls pending approval" }
  ],
  skills: [
    "frontend-design", "designer", "shadcn-ui", "color-palette", 
    "happy-hues", "colors", "graphic-design", "openai-image-gen",
    "weather", "gog", "tmux", "healthcheck", "skill-creator"
  ],
  marketing: getMarketingContent(),
  gallery: gallery,
  approvals: [
    { item: "5 LinkedIn Posts — Review & Approve", file: "marketing/linkedin/posts-batch-1.md", priority: "high", created: "Feb 20" },
    { item: "Start Cold Calls (4 leads ready)", file: "prospects/call-kit-ready.md", priority: "high", created: "Feb 17" },
    { item: "Google OAuth Re-auth (blocks email/calendar)", file: "scripts/fix-oauth.sh", priority: "high", created: "Feb 14" },
    { item: "Enable UFW Firewall", file: "N/A", priority: "medium", created: "Feb 14" },
    { item: "Create Framer Account", file: "docs/FRAMER-ACCOUNT-SETUP.md", priority: "medium", created: "Feb 14" },
    { item: "LinkedIn Profile Optimization", file: "drafts/LINKEDIN_PROFILE_FINAL.md", priority: "medium", created: "Feb 14" }
  ]
};

fs.writeFileSync(path.join(DASHBOARD, 'status.json'), JSON.stringify(status, null, 2));
fs.writeFileSync(path.join(DASHBOARD, 'data.json'), JSON.stringify(data, null, 2));

console.log(`✅ Dashboard data synced at ${NOW}`);
console.log(`   Tasks: ${tasks.completed.length} done, ${tasks.inProgress.length} active, ${tasks.pending.length} pending`);
console.log(`   Workspace: ${workspace.files} files, ${workspace.folders} folders`);
