#!/usr/bin/env node
/**
 * Add download functionality to dashboard
 * Injects download functions at the end of the HTML
 */

const fs = require('fs');
const path = require('path');

const DASHBOARD = '/home/ubuntu/.openclaw/workspace/dashboard/index.html';
const HTML = fs.readFileSync(DASHBOARD, 'utf-8');

// Find the pattern to replace
const END_MARKER = '} // Initial load loadData(); // Auto-refresh every 30s setInterval(loadData, 30000); </script> </body> </html>';

if (!HTML.includes(END_MARKER)) {
  console.log('Could not find exact end marker, trying alternative');
  process.exit(1);
}

const INJECTION = `
// FILE DOWNLOAD FEATURE
function githubRawLink(path) {
  return \`https://raw.githubusercontent.com/ALEXPRIME000/alex-dashboard/master/\${path}\`;
}

async function downloadFile(path, filename) {
  try {
    const res = await fetch(githubRawLink(path), { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to fetch');
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename || path.split('/').pop();
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    console.log('Downloaded:', filename);
  } catch (err) {
    alert('Download failed: ' + err.message);
    console.error('Download error:', err);
  }
}

async function downloadAllFiles() {
  const count = allDocuments?.length || 0;
  if (!count) { alert('No files to download'); return; }
  if (!confirm(\`Download all \${count} files? This may take a moment.\`)) return;
  let success = 0, failed = 0;
  for (const doc of allDocuments) {
    try {
      await downloadFile(doc.path, doc.name);
      success++;
      await new Promise(r => setTimeout(r, 300));
    } catch { failed++; }
  }
  alert(\`Download complete: \${success} succeeded, \${failed} failed\`);
}

// Inject download buttons after render
setTimeout(() => {
  // Add to each document item
  document.querySelectorAll('.doc-item').forEach(item => {
    const link = item.querySelector('a[href*="/blob/master/"]');
    if (!link) return;
    const href = link.getAttribute('href');
    if (!href) return;
    const path = href.replace('https://github.com/ALEXPRIME000/alex-dashboard/blob/master/', '');
    const filename = path.split('/').pop();
    const btn = document.createElement('button');
    btn.className = 'ml-2 px-2 py-1 text-[9px] bg-brand/20 text-brand border border-brand/50 rounded hover:bg-brand hover:text-black transition';
    btn.innerHTML = '⬇️';
    btn.title = 'Download ' + filename;
    btn.onclick = () => downloadFile(path, filename);
    const actions = item.querySelector('.flex.items-center.gap-3') || item;
    if (actions.firstChild) actions.insertBefore(btn, actions.firstChild);
    else actions.appendChild(btn);
  });
  
  // Add "Download All" button to Documents tab
  const docTab = document.getElementById('tab-documents');
  if (docTab) {
    const header = docTab.querySelector('h2')?.parentElement;
    if (header && !header.querySelector('[data-dl-all]')) {
      const dlBtn = document.createElement('button');
      dlBtn.setAttribute('data-dl-all', '1');
      dlBtn.className = 'px-3 py-1.5 text-xs bg-brand/20 text-brand border border-brand/50 rounded-lg hover:bg-brand hover:text-black transition font-medium';
      dlBtn.innerHTML = '⬇️ Download All';
      dlBtn.onclick = downloadAllFiles;
      header.appendChild(dlBtn);
    }
  }
}, 500);

// Also hook into render to add buttons
const _oldRender = render; // eslint-disable-line no-undef
render = function() { // eslint-disable-line no-func-assign, no-undef
  _oldRender();
  setTimeout(() => {
    document.querySelectorAll('.doc-item').forEach(item => {
      const link = item.querySelector('a[href*="/blob/master/"]');
      if (!link) return;
      if (item.querySelector('.download-btn')) return; // Already has button
      const href = link.getAttribute('href');
      if (!href) return;
      const path = href.replace('https://github.com/ALEXPRIME000/alex-dashboard/blob/master/', '');
      const filename = path.split('/').pop();
      const btn = document.createElement('button');
      btn.className = 'download-btn ml-2 px-2 py-1 text-[9px] bg-brand/20 text-brand border border-brand/50 rounded hover:bg-brand hover:text-black transition';
      btn.innerHTML = '⬇️';
      btn.title = 'Download ' + filename;
      btn.onclick = () => downloadFile(path, filename);
      const actions = item.querySelector('.flex.items-center.gap-3, div:last-child');
      if (actions) actions.prepend(btn);
    });
  }, 100);
};
`;

const NEW_END = INJECTION + '
// Initial load\nloadData();\n// Auto-refresh every 30s\nsetInterval(loadData, 30000);\n</script>\n</body>\n</html>';

const newHTML = HTML.replace(END_MARKER, NEW_END);

if (newHTML === HTML) {
  console.log('No changes made');
  process.exit(1);
}

fs.writeFileSync(DASHBOARD, newHTML);
console.log('✅ Download feature added to dashboard');
