# n8n CRM Workflow Setup Guide

*For Pulse Graphix Prospecting Automation*

---

## Overview

This n8n workflow automates prospect tracking for Pulse Graphix.

**Features:**
- Auto-add prospects to Google Sheets
- Telegram notifications on new prospects
- Call logging with outcome tracking
- Auto-create Google Calendar events for RDV

---

## Prerequisites

1. **n8n Instance**: https://n8n.nexusaiacademy.app
2. **Google Sheets**: Sheet named "Pulse-Prospects-CRM"
3. **Telegram Bot**: @PulseGraphixBot (create via @BotFather)
4. **Google Calendar**: For RDV scheduling

---

## Setup Steps

### 1. Import Workflow

1. Open n8n: https://n8n.nexusaiacademy.app
2. Click "Add Workflow" → "Import from File"
3. Upload: `n8n/prospect-crm-workflow.json`
4. Activate workflow

### 2. Configure Google Sheets

Create spreadsheet with these sheets:

**Sheet: "Prospects"**
| Date | Nom | Type | Telephone | SiteWeb | Réseaux | Adresse | Notes | Priorité | Statut |

**Sheet: "Calls"**
| Date | Prospect | Resultat | Notes | ProchaineAction | ProjetVente |

### 3. Configure Webhooks

| Webhook | URL | Purpose |
|---------|-----|---------|
| `prospect-new` | `https://n8n.nexusaiacademy.app/webhook/prospect-new` | Add new prospect |
| `prospect-call` | `https://n8n.nexusaiacademy.app/webhook/prospect-call` | Log call outcome |

### 4. Test

```bash
# Add test prospect
curl -X POST https://n8n.nexusaiacademy.app/webhook/prospect-new \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test Boulangerie",
    "type": "Boulangerie",
    "phone": "0123456789",
    "hasWebsite": false,
    "socialMedia": "Facebook (500 fans)",
    "address": "Torcy"
  }'
```

---

## Integration with Call Sheet

Import `prospects/call-sheet-next-5.md` into Google Sheets, then call webhook for each.

---

*Created: 2026-02-14*
