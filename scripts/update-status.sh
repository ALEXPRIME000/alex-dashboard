#!/bin/bash
# Updates dashboard/status.json with current state
# Called during heartbeats or manually

STATUS_FILE="/home/ubuntu/.openclaw/workspace/dashboard/status.json"
TIMESTAMP=$(date -u +"%Y-%m-%dT%H:%M:%SZ")
DATE=$(date +"%Y-%m-%d")

# Get today's memory file line count as activity proxy
MEMORY_FILE="/home/ubuntu/.openclaw/workspace/memory/${DATE}.md"
TASKS_COUNT=0
if [ -f "$MEMORY_FILE" ]; then
    TASKS_COUNT=$(grep -c "^\- \[x\]\|^- \*\*\|^###" "$MEMORY_FILE" 2>/dev/null || echo "0")
fi

cat > "$STATUS_FILE" << EOF
{
  "agent": "Alex Prime",
  "status": "active",
  "lastUpdate": "$TIMESTAMP",
  "session": "main",
  "model": "claude-opus-4-5",
  "stats": {
    "tasksToday": $TASKS_COUNT,
    "messagesProcessed": 0,
    "tokensEstimated": 0,
    "costEstimated": 0
  },
  "currentTask": "Monitoring",
  "heartbeat": {
    "lastCheck": "$TIMESTAMP",
    "interval": "30m"
  }
}
EOF

echo "Status updated at $TIMESTAMP"
