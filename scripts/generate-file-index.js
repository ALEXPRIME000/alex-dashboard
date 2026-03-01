#!/usr/bin/env node
// Generate file-index.json for dashboard File Explorer
// Scans workspace directories and creates a JSON index with file content for markdown files

const fs = require('fs');
const path = require('path');

const WORKSPACE = '/home/ubuntu/.openclaw/workspace';
const DASHBOARD_DIR = path.join(WORKSPACE, 'dashboard');

// Directories to scan
const SCAN_DIRS = [
  'prospects',
  'marketing',
  'templates',
  'business',
  'research',
  'docs',
  'memory',
  'scripts',
  'strategies'
];

// Also include key root files
const ROOT_FILES = [
  'TODO.md',
  'MEMORY.md',
  'WEEKLY-PLAN-FEB17-21.md',
  'PROACTIVE-IDEAS.md',
  'HEARTBEAT.md',
  'TOOLS.md'
];

function getFileType(ext) {
  const map = {
    '.md': 'markdown', '.html': 'html', '.json': 'json', '.sh': 'script',
    '.js': 'script', '.css': 'style', '.txt': 'text', '.py': 'script',
    '.yml': 'config', '.yaml': 'config', '.env': 'config',
    '.png': 'image', '.jpg': 'image', '.jpeg': 'image', '.gif': 'image',
    '.svg': 'image', '.webp': 'image', '.pdf': 'document'
  };
  return map[ext.toLowerCase()] || 'text';
}

function getFileIcon(type) {
  const icons = {
    'markdown': '📝', 'html': '🌐', 'json': '📊', 'script': '⚙️',
    'style': '🎨', 'text': '📄', 'config': '🔧', 'image': '🖼️',
    'document': '📑'
  };
  return icons[type] || '📄';
}

function formatSize(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
}

function scanDir(dirPath, relativeTo) {
  const files = [];
  if (!fs.existsSync(dirPath)) return files;
  
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    const relPath = path.relative(relativeTo, fullPath);
    
    if (entry.name.startsWith('.')) continue;
    if (entry.name === 'node_modules') continue;
    
    if (entry.isDirectory()) {
      // Recurse but skip certain dirs
      if (!['dashboard', 'pulse-graphix-dashboard', '.git', 'node_modules', 'assets', 'downloads'].includes(entry.name)) {
        files.push(...scanDir(fullPath, relativeTo));
      }
    } else {
      const stat = fs.statSync(fullPath);
      const ext = path.extname(entry.name);
      const type = getFileType(ext);
      
      const fileEntry = {
        name: entry.name,
        path: relPath,
        folder: path.dirname(relPath),
        size: stat.size,
        sizeHuman: formatSize(stat.size),
        sizeFormatted: formatSize(stat.size),
        modified: stat.mtime.toISOString(),
        category: type,
        type: type,
        icon: getFileIcon(type),
        ext: ext
      };
      
      // Include content for text-based files under 100KB
      if (['markdown', 'html', 'json', 'script', 'text', 'config', 'style'].includes(type) && stat.size < 100000) {
        try {
          fileEntry.content = fs.readFileSync(fullPath, 'utf8');
        } catch(e) { /* skip unreadable */ }
      }
      
      files.push(fileEntry);
    }
  }
  return files;
}

// Scan all directories
let allFiles = [];

for (const dir of SCAN_DIRS) {
  const dirPath = path.join(WORKSPACE, dir);
  allFiles.push(...scanDir(dirPath, WORKSPACE));
}

// Add root files
for (const f of ROOT_FILES) {
  const fp = path.join(WORKSPACE, f);
  if (fs.existsSync(fp)) {
    const stat = fs.statSync(fp);
    const ext = path.extname(f);
    const type = getFileType(ext);
    const entry = {
      name: f, path: f, folder: '.', size: stat.size,
      sizeHuman: formatSize(stat.size), sizeFormatted: formatSize(stat.size),
      modified: stat.mtime.toISOString(),
      category: type, type: type, icon: getFileIcon(type), ext: ext
    };
    if (stat.size < 100000) {
      try { entry.content = fs.readFileSync(fp, 'utf8'); } catch(e) {}
    }
    allFiles.push(entry);
  }
}

// Build folder tree
const folders = {};
for (const f of allFiles) {
  if (!folders[f.folder]) folders[f.folder] = { name: f.folder, count: 0, size: 0 };
  folders[f.folder].count++;
  folders[f.folder].size += f.size;
}

const index = {
  generated: new Date().toISOString(),
  totalFiles: allFiles.length,
  totalSize: formatSize(allFiles.reduce((s, f) => s + f.size, 0)),
  folders: Object.values(folders).sort((a, b) => a.name.localeCompare(b.name)),
  files: allFiles.sort((a, b) => a.path.localeCompare(b.path))
};

// Write to dashboard
const outPath = path.join(DASHBOARD_DIR, 'file-index.json');
fs.writeFileSync(outPath, JSON.stringify(index, null, 2));
console.log(`Generated file-index.json: ${index.totalFiles} files, ${index.totalSize}`);

// Also copy to pulse-graphix-dashboard if it exists
const pgDir = path.join(WORKSPACE, 'pulse-graphix-dashboard');
if (fs.existsSync(pgDir)) {
  fs.writeFileSync(path.join(pgDir, 'file-index.json'), JSON.stringify(index, null, 2));
  console.log('Also copied to pulse-graphix-dashboard');
}
