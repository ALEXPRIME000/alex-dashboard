# 🤖 SUB-AGENT STRATEGY

*Alex Prime's Delegation Framework*

---

## ORGANIZATIONAL STRUCTURE

```
                    ┌─────────────────┐
                    │   ALEX PRIME    │
                    │ Executive Dir.  │
                    └────────┬────────┘
                             │
        ┌────────────────────┼────────────────────┐
        │                    │                    │
        ▼                    ▼                    ▼
┌───────────────┐  ┌───────────────┐  ┌───────────────┐
│ COMMUNICATION │  │    PROJECT    │  │   CONTENT     │
│    MANAGER    │  │    MANAGER    │  │   MANAGER     │
└───────┬───────┘  └───────┬───────┘  └───────┬───────┘
        │                  │                  │
   ┌────┴────┐        ┌────┴────┐        ┌────┴────┐
   │         │        │         │        │         │
   ▼         ▼        ▼         ▼        ▼         ▼
┌─────┐  ┌─────┐  ┌─────┐  ┌─────┐  ┌─────┐  ┌─────┐
│Email│  │Social│  │Dev  │  │Arch │  │Write│  │Video│
│Agent│  │Agent │  │Agent│  │Agent│  │Agent│  │Agent│
└─────┘  └─────┘  └─────┘  └─────┘  └─────┘  └─────┘

                    ┌───────────────┐
                    │   RESEARCH    │
                    │    MANAGER    │
                    └───────┬───────┘
                            │
                       ┌────┴────┐
                       │         │
                       ▼         ▼
                   ┌─────┐  ┌─────┐
                   │Market│  │Tech │
                   │Agent │  │Agent│
                   └─────┘  └─────┘
```

---

## MANAGER AGENTS (4)

### 1. COMMUNICATION MANAGER
**Responsibility:** All external communications

**Sub-agents:**
- **Email Agent** — Inbox management, drafting, follow-ups
- **Social Agent** — LinkedIn, Twitter, Facebook posting/engagement
- **Outreach Agent** — Client prospecting, cold outreach

**When to spawn:**
- Email inbox needs cleanup
- Batch social media posts needed
- Client outreach campaign

---

### 2. PROJECT MANAGER
**Responsibility:** Technical project execution

**Sub-agents:**
- **Dev Agent** — Code generation, debugging, deployments
- **Architecture Agent** — 3D work, renders, plans
- **Automation Agent** — n8n workflows, integrations

**When to spawn:**
- Multi-step development task
- Complex automation build
- Architecture project execution

---

### 3. CONTENT MANAGER
**Responsibility:** Content creation and publishing

**Sub-agents:**
- **Writing Agent** — Blog posts, articles, documentation
- **Video Agent** — Scripts, descriptions, thumbnails
- **Design Agent** — Graphics, visuals, branding

**When to spawn:**
- Blog post needed
- YouTube content batch
- Marketing materials

---

### 4. RESEARCH MANAGER
**Responsibility:** Information gathering and analysis

**Sub-agents:**
- **Market Agent** — Market research, competitor analysis
- **Tech Agent** — Technology research, tool evaluation
- **Finance Agent** — Investment research, market analysis

**When to spawn:**
- Need market intelligence
- Evaluating new tools/services
- Financial analysis needed

---

## SPAWNING RULES

### When to Spawn Sub-Agent
1. **Complex task** — More than 5 steps
2. **Long-running** — Would take >10 minutes
3. **Parallel work** — Multiple independent tasks
4. **Specialized** — Requires focused expertise
5. **Background** — Can run while I do other things

### When NOT to Spawn
1. **Quick questions** — I answer directly
2. **Simple lookups** — I handle it
3. **Conversations** — Stay in main session
4. **Sensitive decisions** — Kabundji's approval needed

---

## COMMUNICATION PROTOCOL

### Sub-Agent → Alex Prime
- Report completion with summary
- Flag issues immediately
- Provide actionable output

### Alex Prime → Kabundji
- Summarize sub-agent work
- Present key findings/deliverables
- Get approval for next steps

---

## EXAMPLE WORKFLOWS

### Example 1: LinkedIn Content Week
```
Kabundji: "Create 5 LinkedIn posts for the week"

Alex Prime:
  └── Spawns: Content Manager
        └── Spawns: Writing Agent
              └── Creates 5 posts
              └── Returns drafts
        └── Returns to Alex Prime

Alex Prime:
  └── Reviews drafts
  └── Presents to Kabundji for approval
```

### Example 2: Client Outreach Campaign
```
Kabundji: "Find 20 architecture firms in Paris and contact them"

Alex Prime:
  └── Spawns: Research Manager
        └── Spawns: Market Agent
              └── Finds 20 firms with contacts
              └── Returns list
  └── Spawns: Communication Manager
        └── Spawns: Outreach Agent
              └── Drafts personalized emails
              └── Returns drafts

Alex Prime:
  └── Reviews list + emails
  └── Presents to Kabundji for approval
  └── Upon approval: schedules sends
```

### Example 3: WordPress Automation Build
```
Kabundji: "Build the WordPress automation system"

Alex Prime:
  └── Spawns: Project Manager
        └── Spawns: Automation Agent
              └── Builds n8n workflow
              └── Tests components
              └── Returns working system
        └── Spawns: Dev Agent
              └── Creates templates
              └── Sets up infrastructure

Alex Prime:
  └── Tests full system
  └── Documents for Kabundji
  └── Presents completed automation
```

---

## CURRENT STATUS

| Manager | Status | Active Sub-Agents |
|---------|--------|-------------------|
| Communication | 🟡 Ready | None |
| Project | 🟡 Ready | None |
| Content | 🟡 Ready | None |
| Research | 🟡 Ready | None |

*Sub-agents spawn on demand via `sessions_spawn`*

---

## IMPLEMENTATION NOTES

Using OpenClaw's `sessions_spawn` tool:
- Each sub-agent runs in isolated session
- Returns results when complete
- I (Alex Prime) orchestrate and summarize
- Kabundji sees clean, organized output

---

*Strategy document — will evolve as we work together.*
