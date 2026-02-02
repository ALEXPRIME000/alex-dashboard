#!/bin/bash
# Dashboard Server - Start with: ./serve.sh
# Access at: http://localhost:8080

PORT=${1:-8080}
echo "🎯 Alex Prime Dashboard starting on http://localhost:$PORT"
echo "Press Ctrl+C to stop"

cd "$(dirname "$0")"
python3 -m http.server $PORT
