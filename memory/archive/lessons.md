# Lessons Learned
*Things to remember so we don't repeat mistakes.*

---

## Technical
- **Context overflow kills accuracy** — Write to files (>500 tokens), don't inline. Reference paths instead of pasting.
- **WhatsApp can't send to same number** it's linked to
- **Brave free plan = 1 req/sec** — Rate limited. Consider SearXNG or Google Programmable Search.
- **Pages Jaunes has bot protection** — Can't scrape, need alternative data sources
- **GitHub Pages caches 10 min** — Use Vercel for live dashboards (instant deploy)
- **Google OAuth expires** — Needs browser re-auth via `scripts/fix-oauth.sh`
- **GOG_KEYRING_PASSWORD="openclaw"** for gog CLI

## Process
- **Kabundji is a designer** — He cares deeply about UI quality, spacing, alignment, pixel-perfection
- **Kabundji wants proactive work** — Don't wait for instructions, DO things while he sleeps
- **Draft first, deploy second** — Never push live without approval for external-facing content
- **Sub-agents work well** — Spawn for heavy tasks (social media strategy = 3 sub-agents)
- **Batch content creation** — Creating 8 strategy files via sub-agents was efficient

## Business
- **French SMB market is underserved** — Blue ocean for web design + templates
- **Case studies with metrics sell** — Always tie design work to business results
- **3-tier pricing works** — Starter/Professional/Enterprise gives clients options
- **Prospect calls need green light** — Never cold-call without Kabundji's approval
