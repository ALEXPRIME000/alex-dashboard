# HEARTBEAT.md

## ⚠️ CRITICAL: DO ACTUAL WORK, NOT JUST ACK!
Kabundji's directive: "You haven't been productive" — use heartbeat time for REAL work.

## On Each Heartbeat (every 10 min):

### 1. Update Dashboard Status (MANDATORY!)
Run the data sync script to generate fresh status.json + data.json from workspace, then push:
```bash
cd /home/ubuntu/.openclaw/workspace
VERCEL_TOKEN=$(cat credentials/vercel_token.txt)
# Alex Prime dashboard
node scripts/generate-dashboard-data.js
cd dashboard && git add -A && git commit -m "Heartbeat $(date +%H:%M)" && git push origin main && vercel --prod --yes --token "$VERCEL_TOKEN"
# Pulse Graphix dashboard
cd /home/ubuntu/.openclaw/workspace
node scripts/generate-pulse-graphix-data.js
cd pulse-graphix-dashboard && git add -A && git commit -m "Heartbeat $(date +%H:%M)" && git push origin main && vercel --prod --yes --force --token "$VERCEL_TOKEN"
```

Dashboard URL: https://dashboard-ten-mu-52.vercel.app

Fields to update:
- `lastUpdate` — current timestamp
- `lastHeartbeat` — current timestamp  
- `status` — active/working/idle
- `currentTask` — what you're doing RIGHT NOW
- `recentActions` — last 5 things you did
- `pendingTasks` — what's next
- `completedTasks` — what's done

### 2. CHECK FOR PENDING WORK (ALWAYS)
Read `TODO.md` — if there's unfinished work, **DO IT NOW**. Don't wait for instructions.

### 3. Quick Checks (rotate through these)
- [ ] Unread urgent emails (gog CLI)
- [ ] Calendar events in next 2 hours
- [ ] Any new messages to respond to

### 4. PRODUCTIVE ACTIONS (pick at least one if nothing urgent)
- Continue unfinished tasks from TODO.md
- Build/improve templates or tools
- Create marketing drafts
- Research leads
- Organize files
- Commit and push changes

### 5. Log Activity
Append note to `memory/YYYY-MM-DD.md` if something notable happened.

---

## 🚨 RULES FOR HEARTBEAT RESPONSES:
- **If there's pending work** → DO THE WORK, don't say HEARTBEAT_OK
- **If you completed something** → Report what you did
- **Only reply HEARTBEAT_OK** if you genuinely checked everything AND there's nothing to do

*"I want to wake up every morning and be like, 'Wow, you got a lot done while I was sleeping.'"* — Kabundji
