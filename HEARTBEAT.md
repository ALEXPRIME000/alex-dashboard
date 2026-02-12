# HEARTBEAT.md

## ⚠️ CRITICAL: DO ACTUAL WORK, NOT JUST ACK!
Kabundji's directive: "You haven't been productive" — use heartbeat time for REAL work.

## On Each Heartbeat (every 10 min):

### 1. Update Dashboard Status (MANDATORY!)
Update `dashboard/status.json` with current info, then push to GitHub:
```bash
# Quick update (edit status.json with current task, then):
cd /home/ubuntu/.openclaw/workspace/dashboard
git add status.json && git commit -m "Status update $(date +%H:%M)" && git push origin main
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
