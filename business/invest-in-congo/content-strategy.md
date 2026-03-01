# Invest in DRC — Content & Newsletter Strategy

**Purpose:** Transform Invest in DRC into THE global hub for DRC investment intelligence  
**Date:** March 2026  
**Prepared For:** Kabundji

---

## 1. CONTENT STRATEGY

### 1.1 Content Pillars

| Pillar | Description | Frequency | Example |
|--------|-------------|-----------|---------|
| **Market Intelligence** | Mining data, commodity prices, economic indicators | Daily/Weekly | "Cobalt prices surge 15% — what it means for DRC" |
| **Deal Flow** | New projects, partnerships, JVs, government tenders | As they happen | "Kamoa-Kakula Phase 3 expansion announced" |
| **Policy & Regulation** | Mining code changes, tax policy, bilateral deals | As they happen | "New DRC mining code amendments: investor impact analysis" |
| **Sector Deep Dives** | In-depth analysis of mining, energy, agriculture, etc. | Monthly | "DRC Lithium: The Manono opportunity explained" |
| **Investor Guides** | How-to content for entering DRC market | Evergreen | "Step-by-step: Setting up a mining company in DRC" |
| **Success Stories** | Case studies of successful DRC investments | Monthly | "How Ivanhoe built Africa's largest copper mine" |
| **Data & Reports** | Original research, infographics, statistics | Quarterly | "Q1 2026 DRC Investment Report" |

### 1.2 Target Audiences

| Audience | What They Want | Content Strategy |
|----------|---------------|------------------|
| **Institutional Investors** | Risk-adjusted returns, due diligence data, market sizing | Deep analytical reports, risk assessments, quarterly data |
| **Mining Companies** | Exploration data, licensing process, geological info | Sector deep dives, regulatory guides, deal alerts |
| **Private Equity / VC** | Deal flow, growth sectors, exit opportunities | Deal alerts, sector analysis, success stories |
| **DRC Diaspora** | Homeland investment, real estate, agriculture | Accessible guides, diaspora-specific opportunities |
| **Development Organizations** | Impact data, ESG metrics, governance progress | EITI reports, governance analysis, impact stories |
| **Government / Embassies** | Trade promotion, bilateral relations | Policy briefs, economic data, event coverage |

### 1.3 Voice & Tone

- **Authority:** Write like the Financial Times or The Economist on Africa — confident, data-backed, insightful
- **Bilingual:** Every piece in both EN and FR (FR especially important for Francophone Africa, Belgium, France)
- **Professional but accessible:** No jargon without explanation; an investor with no DRC knowledge should understand
- **Balanced:** Acknowledge risks honestly (governance, security) while highlighting opportunities — credibility > hype
- **Data-first:** Lead with numbers, charts, and evidence

### 1.4 Weekly Content Calendar

| Day | Content Type | Channel |
|-----|-------------|---------|
| **Monday** | Weekly Market Brief (prices, exchange rates, key data) | Platform + Newsletter |
| **Tuesday** | Sector Spotlight article | Platform blog |
| **Wednesday** | News roundup (curated from sources) | Platform feed |
| **Thursday** | Investor Guide or How-To | Platform blog |
| **Friday** | Weekly Newsletter Digest sent | Email (Resend) |
| **Ad hoc** | Flash Alerts for breaking news/deals | Email + Platform |

---

## 2. NEWSLETTER SYSTEM

### 2.1 Newsletter Types

#### A. Weekly Digest — "DRC Investment Pulse"
**Frequency:** Every Friday  
**Audience:** All subscribers  
**Structure:**

```
SUBJECT: DRC Investment Pulse — [Key headline] | Week of [date]

1. 🔥 TOP STORY (200 words)
   - The biggest DRC investment news this week
   - Link to full article on platform

2. 📊 MARKET SNAPSHOT
   - Cobalt price: $XX,XXX/ton (↑/↓ X%)
   - Copper price: $X,XXX/ton (↑/↓ X%)
   - USD/CDF exchange rate
   - Key economic indicator of the week

3. 📰 THIS WEEK IN DRC (5 curated headlines)
   - Headline 1 → [link]
   - Headline 2 → [link]
   - Headline 3 → [link]
   - Headline 4 → [link]
   - Headline 5 → [link]

4. 🎯 OPPORTUNITY SPOTLIGHT
   - Featured investment project from the platform
   - Quick facts: sector, size, stage, returns
   - CTA: "View full details →"

5. 📅 UPCOMING EVENTS
   - Conferences, government meetings, deadlines

6. 💡 INSIGHT OF THE WEEK
   - One analytical paragraph (thought leadership)

FOOTER: Subscribe tiers CTA | Share | Unsubscribe
```

#### B. Monthly Deep Dive — "DRC Investment Report"
**Frequency:** 1st of each month  
**Audience:** Investor+ subscribers (gated for free tier)  
**Structure:**

```
SUBJECT: DRC Investment Report — [Month] 2026: [Theme]

1. EXECUTIVE SUMMARY (300 words)
2. SECTOR ANALYSIS (1 sector per month, rotating)
3. DEAL TRACKER (new projects, completed deals)
4. POLICY UPDATE (regulation changes)
5. ECONOMIC INDICATORS DASHBOARD
6. RISK ASSESSMENT UPDATE
7. FEATURED PROJECTS (3-5 from platform)
8. EXPERT COMMENTARY
```

#### C. Flash Alerts — "DRC FLASH"
**Frequency:** As needed (max 2/week)  
**Audience:** All subscribers  
**Triggers:** Major deal announcement, policy change, bilateral agreement, market disruption

```
SUBJECT: ⚡ DRC FLASH: [Breaking headline]

[3-5 paragraphs: What happened, why it matters, what to do]
[Link to full analysis on platform]
```

### 2.2 Subject Line Formulas

- `DRC Investment Pulse — [Compelling headline] | Week of [date]`
- `⚡ DRC FLASH: [Breaking news in 8 words or less]`
- `[Mineral] prices [up/down] X% — DRC impact analysis`
- `New [sector] opportunity: [project name] seeking investors`
- `DRC [Month] Report: [X] deals worth $[Y]M tracked`
- `Why [major company] just invested $[X]M in DRC`
- `The [number] DRC sectors investors are watching in 2026`

### 2.3 Signup Strategy & Lead Magnets

| Lead Magnet | Format | Gate |
|-------------|--------|------|
| "DRC Investment Starter Kit" | PDF guide | Email signup |
| "Top 10 DRC Mining Opportunities 2026" | PDF report | Email signup |
| "DRC Risk Assessment Framework" | PDF checklist | Email signup |
| Weekly newsletter | Email | Email signup |
| Monthly report | Email | Investor tier ($99/mo) |
| Full project database | Platform | Strategic tier ($249/mo) |

### 2.4 Email Automation Flows (Resend + Next.js)

#### Welcome Series (5 emails over 14 days)
```
Day 0:  Welcome + DRC Investment Starter Kit PDF
Day 2:  "Why DRC? The opportunity in numbers" (data-heavy)
Day 5:  "How our platform works" + featured projects
Day 9:  Success story / case study
Day 14: "Ready to go deeper?" → upgrade CTA to Investor tier
```

#### Nurture Sequence (monthly for free tier)
```
Month 1: Sector spotlight — Mining
Month 2: Sector spotlight — Energy
Month 3: Sector spotlight — Agriculture
Month 4: "Quarterly results" + upgrade CTA
(repeat with new sectors)
```

#### Tech Implementation
```
Resend API → Next.js API routes:
- POST /api/newsletter/subscribe → add to Resend audience
- POST /api/newsletter/send → trigger campaign
- CRON /api/newsletter/weekly → auto-assemble Friday digest
- Webhook /api/newsletter/events → track opens/clicks
```

---

## 3. NEWS FLASH / INTELLIGENCE FEED

### 3.1 Feed Categories

| Category | Icon | Sources |
|----------|------|---------|
| **Mining** | ⛏️ | Mining.com, Mining Weekly, S&P Global |
| **Policy** | 🏛️ | Radio Okapi, Actualité.cd, government sites |
| **Deals** | 💰 | Reuters, Bloomberg, Africa Intelligence |
| **Infrastructure** | 🏗️ | AfDB, World Bank, Jeune Afrique |
| **Market Data** | 📊 | LME, World Bank API, BCC |
| **ESG & Governance** | 🌿 | EITI, IPIS, Resource Matters |

### 3.2 Curation Workflow

```
AUTOMATED (n8n):
  RSS feeds → Filter (DRC keywords) → Deduplicate → Draft queue

EDITORIAL (Manual, 30 min/day):
  Review draft queue → Edit headlines → Add commentary → Tag category → Publish

QUALITY RULES:
  - Every item must have: source attribution, date, category tag
  - Add 1-2 sentence editorial context ("Why this matters for investors")
  - Verify claims from at least 2 sources for major stories
  - No republishing full articles — summarize + link to source
```

### 3.3 n8n Workflow: RSS → Platform

```
Trigger: Every 2 hours
1. HTTP Request → Fetch RSS from 6+ sources
2. Filter → Keywords: "DRC", "Congo", "cobalt", "Katanga", "mining", "Kinshasa"
3. Deduplicate → Check against existing DB entries (URL hash)
4. Format → Standardize: title, summary, source, date, category, image
5. POST → Platform API: /api/intelligence/draft
6. Notify → Slack/Telegram alert to editorial queue
```

---

## 4. INVESTOR ATTRACTION STRATEGY

### 4.1 SEO Strategy

**Primary Keywords (EN):**
- "invest in DRC" / "invest in Congo"
- "DRC mining opportunities"
- "Democratic Republic Congo investment"
- "cobalt investment DRC"
- "DRC business opportunities 2026"

**Primary Keywords (FR):**
- "investir en RDC"
- "opportunités minières RDC"
- "investissement République Démocratique du Congo"

**SEO Content Plan:**
- 1 long-form article (2000+ words) per week targeting a primary keyword
- Each article: meta title, description, OG image, structured data
- Internal linking between articles and platform projects
- Build topical authority: become THE content resource for "DRC investment"

### 4.2 LinkedIn Strategy

**Profile:** "Invest in DRC" company page  
**Posting:** 3-5x/week

| Post Type | Frequency | Example |
|-----------|-----------|---------|
| Data graphic / chart | 2x/week | Infographic: "DRC Cobalt Production 2020-2026" |
| News commentary | 2x/week | "The US-DRC minerals deal changes everything. Here's why →" |
| Long-form article | 1x/week | Republish platform blog post |
| Event coverage | As needed | DRC Mining Week highlights |

**Engagement:** Comment on posts from Mining Indaba, World Bank, AfDB, mining companies → build visibility

### 4.3 Partnership Strategy

| Partner Type | Action | Goal |
|-------------|--------|------|
| **Mining conferences** | Sponsor/exhibit at DRC Mining Week, Mining Indaba | Direct investor access |
| **DRC Embassies** | Offer platform as official investment resource | Credibility + referral traffic |
| **ANAPI** | Partnership as digital investment portal | Government backing |
| **Trade bodies** | FEC, AmCham co-branded content | Network access |
| **Think tanks** | Guest publish their DRC research | Content + credibility |
| **Law firms** | DRC investment legal guides on platform | Professional network |

### 4.4 Lead Generation Funnel

```
AWARENESS:
  LinkedIn posts → SEO articles → PR/media mentions
  ↓
INTEREST:
  Free newsletter signup → Lead magnet download
  ↓
CONSIDERATION:
  Weekly digest → Platform browsing → Free project previews
  ↓
CONVERSION:
  Investor tier signup ($99/mo) → Full project access
  ↓
EXPANSION:
  Strategic tier ($249/mo) → Partner tier ($499/mo)
  ↓
ADVOCACY:
  Referral program → Conference networking → Word of mouth
```

### 4.5 Referral Program

- Existing subscribers refer new Investor+ signups
- Reward: 1 month free for every 3 referrals who subscribe
- Track via unique referral links
- Display on dashboard: "Your referrals: X"

---

## 5. CONTENT AUTOMATION SYSTEM

### 5.1 n8n Workflows to Build

| # | Workflow | Trigger | Input | Output |
|---|----------|---------|-------|--------|
| 1 | **DRC News Aggregator** | Every 2h | RSS feeds (6+ sources) | Draft news items in DB |
| 2 | **Economic Data Sync** | Monthly (1st) | World Bank API | Updated indicators dashboard |
| 3 | **Metal Price Tracker** | Daily 9am | Free metals API | Price widget data |
| 4 | **Newsletter Assembler** | Friday 8am | Week's published content | Draft newsletter in Resend |
| 5 | **Social Post Generator** | On article publish | New platform article | LinkedIn post draft |
| 6 | **Report Monitor** | Weekly | Think tank RSS | Alert for new DRC publications |

### 5.2 Editorial Quality Control

```
AUTOMATED content → DRAFT status (never auto-publish)
  ↓
Human review (Kabundji or editor) → 30 min/day
  ↓
Approved → PUBLISHED
  ↓
Auto-included in Friday newsletter assembly
```

**Rule:** Automation handles collection and formatting. Humans handle editorial judgment and publishing.

---

## 6. LAUNCH CONTENT PLAN — FIRST 30 DAYS

### Pre-Launch (Days -7 to 0): Seed Content

Before going live, publish these foundation pieces:

| # | Article | Type | Purpose |
|---|---------|------|---------|
| 1 | "Why DRC? The $24 Trillion Opportunity" | Pillar article | SEO + credibility |
| 2 | "US-DRC Critical Minerals Deal: Full Analysis" | Deep dive | Timely authority |
| 3 | "DRC Mining Sector: Complete Investor Guide" | Evergreen guide | SEO foundation |
| 4 | "10 Key Facts About Investing in DRC" | Listicle | Shareable + SEO |
| 5 | "DRC Investment Risk: An Honest Assessment" | Analysis | Trust-building |
| 6 | "How to Set Up a Business in DRC: Step by Step" | How-to | Practical value |
| 7 | "DRC's Top 5 Mining Projects to Watch in 2026" | Curated | Deal flow showcase |
| 8 | "Cobalt, Copper, Lithium: DRC's Mineral Wealth Explained" | Educational | Awareness |

### Week 1: Soft Launch
- Publish platform with seed content
- Send announcement to existing contacts
- Post on LinkedIn (3 posts)
- First newsletter: "Welcome to Invest in DRC"

### Week 2: Content Rhythm
- Begin daily news feed updates
- Publish 2 new articles
- LinkedIn: 4 posts
- Newsletter #2: First weekly digest

### Week 3: Outreach
- Contact DRC embassies about partnership
- Reach out to 5 mining industry LinkedIn influencers
- Submit platform to relevant directories
- Newsletter #3 + first Flash Alert

### Week 4: Assessment & Scale
- Analyze: signups, traffic sources, newsletter open rates
- Adjust content based on what's performing
- Begin planning first Monthly Deep Dive report
- Newsletter #4

### KPIs for First 30 Days
- Newsletter subscribers: 500+
- Platform visitors: 2,000+
- LinkedIn followers: 200+
- Newsletter open rate: >30%
- At least 1 Investor tier conversion

---

## 7. MONETIZATION THROUGH CONTENT

### 7.1 Free vs Gated Content

| Content | Free (Basic) | Investor ($99) | Strategic ($249) | Partner ($499) |
|---------|-------------|----------------|-------------------|----------------|
| News feed | ✅ (headlines) | ✅ (full) | ✅ | ✅ |
| Weekly newsletter | ✅ | ✅ | ✅ | ✅ |
| Blog articles | ✅ | ✅ | ✅ | ✅ |
| Monthly report | ❌ Summary only | ✅ Full | ✅ | ✅ |
| Project details | ❌ Teaser | ✅ Full | ✅ | ✅ |
| Data downloads | ❌ | ❌ | ✅ | ✅ |
| Quarterly research | ❌ | ❌ | ✅ | ✅ |
| Priority deal alerts | ❌ | ❌ | ❌ | ✅ |
| Direct introductions | ❌ | ❌ | ❌ | ✅ |

### 7.2 Premium Content Products

| Product | Price | Description |
|---------|-------|-------------|
| "DRC Mining Investment Report 2026" | Included in Strategic+ | 50-page annual analysis |
| Sector-specific white papers | Included in Strategic+ | Deep dive per sector |
| Custom research | €2,000+ | Bespoke research for institutions |
| Sponsored content | €500-2,000/post | Clearly labeled, editorial standards |
| Webinar series | €50/ticket or included in Strategic+ | Expert panels on DRC sectors |

### 7.3 Sponsored Content Guidelines
- Clearly marked as "Sponsored" or "Partner Content"
- Must be relevant to DRC investment
- Editorial team retains right to edit/refuse
- No misleading claims about investment returns
- Maximum 2 sponsored pieces per month (maintain trust)

---

## 8. IMPLEMENTATION PRIORITY

### Phase 1: Foundation (Weeks 1-2)
- [ ] Set up Resend audiences (Free, Investor, Strategic, Partner)
- [ ] Build newsletter templates in Resend
- [ ] Create 8 seed articles
- [ ] Set up n8n RSS aggregation workflow
- [ ] Create LinkedIn company page

### Phase 2: Launch (Weeks 3-4)
- [ ] Soft launch platform with seed content
- [ ] Send first newsletter
- [ ] Begin daily news feed
- [ ] Activate n8n workflows
- [ ] Start LinkedIn posting

### Phase 3: Growth (Month 2-3)
- [ ] First Monthly Deep Dive report
- [ ] Embassy/ANAPI outreach
- [ ] Referral program launch
- [ ] SEO optimization based on analytics
- [ ] First Flash Alert

### Phase 4: Scale (Month 4-6)
- [ ] First paid subscriber milestone (50 Investor tier)
- [ ] Sponsored content program
- [ ] Webinar series launch
- [ ] Conference presence (DRC Mining Week)
- [ ] Quarterly research publication

---

*This strategy positions Invest in DRC as the Bloomberg Terminal of DRC investment — the platform serious investors can't afford to ignore.*

*Document by Alex Prime for Kabundji — March 2026*
