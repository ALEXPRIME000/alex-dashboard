#!/bin/bash
# sync-files-to-dashboards.sh
# Scans workspace, copies relevant files to dashboard downloads folders,
# and generates file-index.json for the File Explorer UI.

set -e

WORKSPACE="/home/ubuntu/.openclaw/workspace"
ALEX_DASH="$WORKSPACE/dashboard"
PULSE_DASH="$WORKSPACE/pulse-graphix-dashboard"

# ─── Helper: get file type category ───
get_category() {
  local ext="${1##*.}"
  ext=$(echo "$ext" | tr '[:upper:]' '[:lower:]')
  case "$ext" in
    md) echo "markdown" ;;
    html|htm) echo "html" ;;
    json) echo "json" ;;
    sh|bash) echo "script" ;;
    css) echo "style" ;;
    js) echo "javascript" ;;
    png|jpg|jpeg|gif|webp|svg) echo "image" ;;
    pdf) echo "pdf" ;;
    txt) echo "text" ;;
    *) echo "other" ;;
  esac
}

# ─── Helper: get file icon ───
get_icon() {
  local cat="$1"
  case "$cat" in
    markdown) echo "📝" ;;
    html) echo "🌐" ;;
    json) echo "📊" ;;
    script) echo "⚙️" ;;
    style) echo "🎨" ;;
    javascript) echo "📜" ;;
    image) echo "🖼️" ;;
    pdf) echo "📕" ;;
    text) echo "📄" ;;
    *) echo "📎" ;;
  esac
}

# ─── Helper: human-readable size ───
human_size() {
  local bytes=$1
  if [ "$bytes" -lt 1024 ]; then
    echo "${bytes} B"
  elif [ "$bytes" -lt 1048576 ]; then
    echo "$(( bytes / 1024 )) KB"
  else
    echo "$(( bytes / 1048576 )) MB"
  fi
}

# ─── Sync files for a dashboard ───
sync_dashboard() {
  local dash_dir="$1"
  local dash_name="$2"
  local downloads_dir="$dash_dir/downloads/files"
  
  echo "═══════════════════════════════════════════"
  echo "  Syncing: $dash_name"
  echo "═══════════════════════════════════════════"
  
  # Clean and recreate
  rm -rf "$downloads_dir"
  mkdir -p "$downloads_dir"
  
  # Directories to sync (relative to workspace)
  local dirs=("prospects" "marketing" "templates" "business" "research" "docs")
  
  # Copy directories
  for dir in "${dirs[@]}"; do
    if [ -d "$WORKSPACE/$dir" ]; then
      echo "  📁 Copying $dir/ ..."
      cp -r "$WORKSPACE/$dir" "$downloads_dir/$dir"
    fi
  done
  
  # Copy root files
  mkdir -p "$downloads_dir/root"
  for f in TODO.md MEMORY.md WEEKLY-PLAN*.md; do
    if [ -f "$WORKSPACE/$f" ]; then
      echo "  📄 Copying $f ..."
      cp "$WORKSPACE/$f" "$downloads_dir/root/"
    fi
  done
  
  # Generate file-index.json
  echo "  📋 Generating file-index.json ..."
  generate_index "$downloads_dir" "$dash_dir/file-index.json"
  
  echo "  ✅ Done! Files synced to $downloads_dir"
  echo ""
}

# ─── Generate file-index.json ───
generate_index() {
  local base_dir="$1"
  local output="$2"
  local first_file=true
  
  echo '{"generated":"'"$(date -u +%Y-%m-%dT%H:%M:%SZ)"'","files":[' > "$output"
  
  find "$base_dir" -type f | sort | while read -r filepath; do
    local relpath="${filepath#$base_dir/}"
    local filename=$(basename "$filepath")
    local ext="${filename##*.}"
    local size=$(stat -c%s "$filepath" 2>/dev/null || echo "0")
    local modified=$(stat -c%Y "$filepath" 2>/dev/null || echo "0")
    local modified_iso=$(date -u -d "@$modified" +%Y-%m-%dT%H:%M:%SZ 2>/dev/null || echo "unknown")
    local category=$(get_category "$filename")
    local icon=$(get_icon "$category")
    local human=$(human_size "$size")
    
    # Get folder path
    local folder=$(dirname "$relpath")
    [ "$folder" = "." ] && folder=""
    
    # Read content for markdown and small text files
    local content=""
    if [ "$category" = "markdown" ] || [ "$category" = "text" ] || [ "$category" = "json" ] || [ "$category" = "script" ] || [ "$category" = "style" ] || [ "$category" = "javascript" ]; then
      if [ "$size" -lt 100000 ]; then
        # Escape JSON content
        content=$(python3 -c "
import json, sys
try:
    with open(sys.argv[1], 'r', errors='replace') as f:
        print(json.dumps(f.read()))
except:
    print('\"\"')
" "$filepath")
      fi
    fi
    
    # Comma handling
    if [ "$first_file" = true ]; then
      first_file=false
    else
      echo ","
    fi
    
    # Output JSON entry
    if [ -n "$content" ] && [ "$content" != '""' ]; then
      printf '{"path":"%s","name":"%s","folder":"%s","ext":"%s","category":"%s","icon":"%s","size":%d,"sizeHuman":"%s","modified":"%s","content":%s}' \
        "$relpath" "$filename" "$folder" "$ext" "$category" "$icon" "$size" "$human" "$modified_iso" "$content"
    else
      printf '{"path":"%s","name":"%s","folder":"%s","ext":"%s","category":"%s","icon":"%s","size":%d,"sizeHuman":"%s","modified":"%s"}' \
        "$relpath" "$filename" "$folder" "$ext" "$category" "$icon" "$size" "$human" "$modified_iso"
    fi
  done >> "$output"
  
  echo ']}' >> "$output"
  
  # Validate JSON
  python3 -c "import json; json.load(open('$output'))" 2>/dev/null && echo "  ✅ JSON valid" || echo "  ⚠️  JSON validation failed"
}

# ─── Main ───
echo ""
echo "🔄 Syncing workspace files to dashboards..."
echo ""

sync_dashboard "$ALEX_DASH" "Alex Prime Dashboard"
sync_dashboard "$PULSE_DASH" "Pulse Graphix Dashboard"

echo "🎉 All done! Files synced to both dashboards."
echo ""
