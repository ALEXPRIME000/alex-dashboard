# TOOLS.md - Local Notes

Skills define *how* tools work. This file is for *your* specifics — the stuff that's unique to your setup.

---

## n8n Automation Platform
- **Instance:** https://n8n.nexusaiacademy.app
- **API Key:** Stored at `/home/ubuntu/.openclaw/credentials/n8n.json`
- **API Docs:** https://docs.n8n.io/api/

### API Usage
```bash
# List workflows
curl -X GET "https://n8n.nexusaiacademy.app/api/v1/workflows" \
  -H "X-N8N-API-KEY: $N8N_API_KEY"

# Execute workflow
curl -X POST "https://n8n.nexusaiacademy.app/api/v1/workflows/{id}/activate" \
  -H "X-N8N-API-KEY: $N8N_API_KEY"
```

---

## Google Workspace (gog CLI)
- **Agent Email:** john.melo.testing01@gmail.com
- **Credentials:** `/home/ubuntu/.openclaw/credentials/google_client_secret.json`
- **Keyring Password:** `GOG_KEYRING_PASSWORD="openclaw"`

---

## GitHub
- **User:** ALEXPRIME000
- **Token:** `/home/ubuntu/.openclaw/credentials/github_token.txt`
- **Dashboard Repo:** https://github.com/ALEXPRIME000/alex-dashboard

---

## Vercel
- **Token:** `/home/ubuntu/.openclaw/credentials/vercel_token.txt`
- **Dashboard:** https://dashboard-ten-mu-52.vercel.app

---

## Why Separate?

Skills are shared. Your setup is yours. Keeping them apart means you can update skills without losing your notes, and share skills without leaking your infrastructure.
