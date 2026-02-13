#!/bin/bash
# sync-dashboard-data.sh — Generates fresh status.json and data.json from workspace state
# Run this before every dashboard push to ensure real-time accuracy

set -e
WORKSPACE="/home/ubuntu/.openclaw/workspace"
DASHBOARD="$WORKSPACE/dashboard"
NOW=$(date -u +"%Y-%m-%dT%H:%M:%SZ")
TODAY=$(date -u +"%Y-%m-%d")

# --- Count tasks from TODO.md ---
TODO="$WORKSPACE/TODO.md"
COMPLETED=$(grep -c '^\- \[x\]\|^### ✅' "$TODO" 2>/dev/null || echo "0")
IN_PROGRESS=$(grep -c '^\- \[ \].*IN PROGRESS\|^### 🎨\|^### 🔍' "$TODO" 2>/dev/null || echo "0")
PENDING=$(grep -c '^\- \[ \]' "$TODO" 2>/dev/null || echo "0")

# Better counting: sections
COMPLETED_SECTION=$(awk '/^## 🟢 COMPLETED/,/^## [^C]/' "$TODO" | grep -c '^\- \|^### ✅' 2>/dev/null || echo "0")
PROGRESS_SECTION=$(awk '/^## 🔴 IN PROGRESS/,/^## [^I]/' "$TODO" | grep -c '^\- \|^### ' 2>/dev/null || echo "0") 
PENDING_SECTION=$(awk '/^## 🟡 PENDING/,/^## [^P]/' "$TODO" | grep -c '^\- \[ \]' 2>/dev/null || echo "0")

# --- Get recent git commits as recent actions ---
cd "$DASHBOARD"
RECENT_COMMITS=$(git log --oneline -5 --format="%s" 2>/dev/null | head -5)

# --- Get memory file list ---
MEMORY_FILES=$(ls "$WORKSPACE/memory/"*.md 2>/dev/null | while read f; do echo "\"$(basename $f)\""; done | paste -sd,)

# --- Get pending approvals from data.json (keep existing) ---
# We'll regenerate the full data.json

# --- Count workspace files ---
TOTAL_FILES=$(find "$WORKSPACE" -maxdepth 3 -type f -name "*.md" -o -name "*.html" -o -name "*.json" -o -name "*.sh" -o -name "*.css" -o -name "*.js" -o -name "*.tsx" -o -name "*.ts" 2>/dev/null | wc -l)
TOTAL_FOLDERS=$(find "$WORKSPACE" -maxdepth 3 -type d 2>/dev/null | wc -l)

echo "📊 Dashboard sync: $COMPLETED_SECTION completed, $PROGRESS_SECTION in progress, $PENDING_SECTION pending"
echo "📁 Files: $TOTAL_FILES, Folders: $TOTAL_FOLDERS"
echo "🕐 Generated at: $NOW"
