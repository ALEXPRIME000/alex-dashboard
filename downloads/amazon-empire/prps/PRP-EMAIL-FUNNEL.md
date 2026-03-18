# PRP: EMAIL FUNNEL SYSTEM — BookFunnel + MailerLite
**Status:** Production Ready | **Version:** 1.0 | **Created:** 2026-03-16
**Owner:** Alex Prime / Pulse Graphix Empire

> **Purpose:** Complete blueprint for building an automated email capture and nurture system for the Amazon KDP author brand. Every reader who downloads a free book becomes a subscriber. Every subscriber becomes a potential buyer.

---

## SECTION 1: BOOKFUNNEL SETUP

### 1.1 Account Creation

**Plan:** Mid-List ($20/month)
- Includes: Unlimited book deliveries, landing pages, MailerLite integration, group promo access
- URL: https://bookfunnel.com/pricing
- Sign up with your author email (not a personal Gmail — use a dedicated author domain email if possible)
- Payment: Monthly or annual ($199/year = ~$16.58/mo)

**Why Mid-List over Starter ($10)?**
- Starter has no direct email service integrations
- Mid-List unlocks: MailerLite, MailChimp, ConvertKit integrations + group promo eligibility

---

### 1.2 Upload Your Lead Magnet Ebook

1. Log into BookFunnel dashboard
2. Click **"Add a Book"** → **"eBook"**
3. Fill in:
   - **Title:** Your lead magnet title
   - **Author name:** Your pen name
   - **Cover image:** Upload your cover (minimum 1600px wide, JPG or PNG)
   - **Book file:** Upload your EPUB (preferred) or MOBI/PDF
4. Under **"Delivery Options"** → select **"Require email to download"**
5. Enable **"Send to my email list"** — this is what pipes readers into MailerLite
6. Click **Save**

**Pro tip:** Create a dedicated lead magnet — not just a sample chapter. A complete short story, prequel novella, or mini-guide converts better. Readers need to feel they're getting real value.

---

### 1.3 Landing Page Creation — Step by Step

1. In BookFunnel, go to your book → click **"Landing Page"**
2. Click **"Create Landing Page"**
3. Choose a template (use a clean, minimal one — "Simple" or "Classic" works best)
4. Fill in all sections:

**Header section:**
- Book cover image (auto-populated from your upload)
- Headline (see copy guidelines below)
- Subheadline
- CTA button text

**Body section:**
- 3–5 bullet points of what the reader gets
- Author bio (2–3 sentences max)
- Optional: reviews/social proof

**Footer:**
- Privacy policy link (required for GDPR compliance — MailerLite provides a boilerplate)

5. Click **"Save & Preview"** — check on mobile view
6. Click **"Publish"**

---

### 1.4 Landing Page Copy Best Practices

**Headline Formula:**
> [Emotion/Desire] + [What They Get] + [Timeframe or Qualifier]

**Examples:**
- "Get a FREE thriller novella — and discover the assassin before book 1 begins"
- "FREE: A complete cozy mystery short story — perfect for a rainy afternoon read"
- "Claim your free 80-page puzzle book — instant download, no strings attached"

**Subheadline Formula:**
> [Who it's for] + [The transformation/experience they'll have]

**Example:**
> "For fans of fast-paced mysteries. This prequel sets up everything — and ends on a twist you won't see coming."

**CTA Button Text:**
- ✅ "Send Me My Free Book"
- ✅ "Claim My Free Copy"
- ✅ "Yes! I Want the Free Story"
- ❌ "Submit" / "Sign Up" / "Download" (too generic, low conversion)

**Bullet Points Formula (3–5 bullets):**
```
✓ [Feature] → [Benefit]
✓ A complete [format] — not just a sample chapter
✓ Perfect for fans of [comparable authors/books]
✓ Read in [timeframe]
✓ Free forever — no purchase required
```

---

### 1.5 Custom Domain Setup (Optional but Recommended)

**Why:** `yourname.com/free-book` looks more professional than `dl.bookfunnel.com/xxxxxx`

**How:**
1. Own a domain (e.g., `authorname.com`) via Namecheap or Cloudflare
2. In BookFunnel: Settings → **Custom Domain**
3. Enter your subdomain: `free.authorname.com`
4. BookFunnel gives you a CNAME record to add in your DNS provider
5. Add the CNAME, wait 15–30 min for propagation
6. Verify in BookFunnel settings

---

### 1.6 How Email Collection Works (The Full Flow)

```
Reader sees your link (in book back matter, social media, etc.)
         ↓
Lands on your BookFunnel landing page
         ↓
Enters email address + clicks CTA
         ↓
BookFunnel sends download link to reader's email
         ↓
BookFunnel simultaneously sends subscriber data to MailerLite
         ↓
Reader lands in MailerLite group: "Lead Magnet Readers"
         ↓
Welcome automation sequence fires — Email 1 sends immediately
         ↓
5-email sequence nurtures reader over 10 days
         ↓
Reader becomes engaged subscriber → future book buyer
```

---

### 1.7 Integration with MailerLite

**Direct Integration (Recommended — no Zapier needed):**

1. In MailerLite: Go to **Integrations** → **API** → Generate an API key (copy it)
2. In BookFunnel: Go to your book → **"Mailing List Integration"**
3. Select **MailerLite** from the dropdown
4. Paste your API key
5. Select the **Group** to add subscribers to (e.g., "Lead Magnet Readers")
6. Choose whether to send a double opt-in confirmation (recommended for EU audiences / GDPR)
7. Save & test with a real email address

**Zapier Alternative (if direct integration fails):**
- Trigger: "New BookFunnel subscriber"
- Action: "Add subscriber to MailerLite group"
- Zapier free plan covers ~100 tasks/month

---

### 1.8 Group Promos: How to Join

**What it is:** Multiple authors bundle their free books together. Each author promotes the group promo to their list. Everyone gains subscribers.

**How to find promos:**
- BookFunnel has a **Group Promos** tab in your dashboard
- Browse active promos by genre
- Apply to join — organizer approves applicants
- You commit to promoting the promo to your list (usually 1–2 emails)

**How to run your own:**
1. Dashboard → **Group Promos** → **Create New Promo**
2. Set dates (usually 2-week windows)
3. Set genre and age rating
4. Invite other authors directly or post in Facebook author groups
5. Each participant promotes → cross-pollination of audiences

**Best Facebook Groups for finding promos:**
- BookFunnel Promos (official)
- 20Books to 50K
- Indie Author Success

---

### 1.9 Newsletter Swaps: Setup and Execution

**What it is:** You email your list recommending another author's book. They email their list recommending yours. No cost. Mutual growth.

**How to set up a swap:**
1. Find an author with a similar genre and similar list size (roughly)
2. Reach out: "Hey, I have [X] subscribers in [genre]. Want to swap newsletter mentions?"
3. Agree on date, format (featured spot vs. mention in roundup)
4. Write your recommendation of their book (2–3 paragraphs + cover image + link)
5. They do the same for you
6. Both send on the agreed date

**Platforms for finding swap partners:**
- **BookClicker** (bookclicker.com) — dedicated newsletter swap platform
- **StoryOrigin** (storyoriginapp.com) — similar to BookFunnel, has swap features
- **Author Facebook groups** — post "looking for newsletter swap in [genre]"

**Swap Email Template:**
```
Subject: A book I think you'll love — [Title] by [Author]

Hey [First Name],

Quick recommendation today: [Author Name] writes [genre] just like the stuff 
I cover, and their book [Title] is a perfect read if you enjoyed [your book title].

[2-sentence hook about the book]

[Cover image]

[Link to get it / grab free sample / buy on Amazon]

More soon,
[Your name]
```

---

## SECTION 2: MAILERLITE SETUP

### 2.1 Account Creation

- URL: https://mailerlite.com
- Free plan: Up to 1,000 subscribers, 12,000 emails/month
- Paid from $9/month (for 1,000–2,500 subs with unlimited emails)
- Sign up with your author email
- Verify your domain (required for deliverability — MailerLite walks you through it)
- Complete their account approval process (usually same day)

**Domain verification steps:**
1. Settings → Domains → Add domain
2. Add the TXT records they give you to your DNS
3. Verify — improves inbox delivery rates significantly

---

### 2.2 Subscriber Groups Setup

Go to **Subscribers → Groups → Create Group**

**Recommended Groups:**

| Group Name | Who Goes Here |
|---|---|
| Lead Magnet Readers | Anyone who downloaded your free book |
| Book Buyers | Anyone who bought a paid book (manual add or Zapier from email receipts) |
| ARC Team | Advance Review Copy readers |
| Street Team | Super fans who help spread the word |
| Launch Notify | People who opted in for new book alerts |
| Cold Subscribers | Haven't opened in 90+ days (for re-engagement) |

**How to segment automatically:** Use automation workflows + tags (covered in 2.5)

---

### 2.3 Signup Form Creation

1. Go to **Forms → Create New Form**
2. Choose **Embedded** (for website) or **Landing Page** (standalone)
3. Design the form:
   - Keep it simple: First Name + Email = highest conversion
   - Add privacy text below the button: "No spam. Unsubscribe anytime."
4. Under **Settings:**
   - Assign to group: "Lead Magnet Readers"
   - Confirmation email: On (double opt-in for EU compliance)
5. Copy the embed code or share the URL

---

### 2.4 Integration with BookFunnel

(See Section 1.7 above for full steps)

**After integration, test it:**
1. Open an incognito browser
2. Visit your BookFunnel landing page
3. Enter a test email you control
4. Check MailerLite → Subscribers — it should appear within 60 seconds
5. Check that your welcome automation fires

---

### 2.5 Welcome Automation Workflow — Step by Step

1. Go to **Automations → Create Automation**
2. Name it: "Welcome Sequence — Lead Magnet"
3. **Trigger:** When subscriber is added to group → "Lead Magnet Readers"

**Workflow structure:**
```
[TRIGGER: Added to Lead Magnet Readers]
         ↓
[EMAIL 1] — Immediately — "Here's your free book + who I am"
         ↓
[WAIT: 2 days]
         ↓
[EMAIL 2] — The story behind the book
         ↓
[WAIT: 2 days]
         ↓
[EMAIL 3] — Social proof + my other books
         ↓
[WAIT: 3 days]
         ↓
[EMAIL 4] — Reader community + invite to reply
         ↓
[WAIT: 3 days]
         ↓
[EMAIL 5] — Soft sell + what's next
```

Full email copy in Section 3.

---

### 2.6 Email Templates: Branded, Clean, Mobile-Friendly

**Design principles:**
- Single-column layout (mobile renders perfectly)
- Max width: 600px
- Font: System fonts (Arial, Georgia) — never custom web fonts
- Background: White or very light gray (#f9f9f9)
- Text: Near-black (#1a1a1a), not pure black
- CTA buttons: Solid color, 14–16px padding, rounded corners

**In MailerLite:**
1. Go to **Templates → Create Template**
2. Use the **drag-and-drop editor**
3. Add your logo at the top (centered, 200px wide max)
4. Body text block — keep paragraphs short (3–4 lines max)
5. CTA button — bright color, contrasting text
6. Footer: Unsubscribe link (required), your author name/address

**Save as your master template** and duplicate it for each campaign.

---

### 2.7 Analytics: What to Track

**Primary Metrics (check weekly):**

| Metric | Target | Action if Below |
|---|---|---|
| Open Rate | 30–40%+ | Test subject lines, check deliverability |
| Click Rate | 3–6%+ | Improve CTA copy and placement |
| Unsubscribe Rate | <0.5% per email | Review content relevance |
| Spam Complaints | <0.1% | Review list hygiene |

**Secondary Metrics:**
- Automation completion rate (how many finish the 5-email sequence)
- List growth rate (week over week)
- Revenue per subscriber (track if selling books directly)

**Where to find it in MailerLite:**
- **Dashboard:** Overview stats
- **Reports:** Per-campaign breakdown
- **Automation → Stats:** Completion rates per step
- **Subscribers → Segments:** Engagement scoring

---

## SECTION 3: WELCOME EMAIL SEQUENCE BLUEPRINT

### 3.1 Five-Email Sequence Structure

**Email 1 — Deliver & Greet** (Send: Immediately)
**Email 2 — The Story** (Send: Day 2)
**Email 3 — Social Proof & Universe** (Send: Day 4)
**Email 4 — Community & Connection** (Send: Day 7)
**Email 5 — The Gentle Pivot** (Send: Day 10)

---

### 3.2 Email Templates

**EMAIL 1: Deliver & Greet**
```
Subject: Your free copy is here, [First Name] 🎁
Preview text: Plus — a quick hello from me.

---

Hey [First Name],

Your free [book title] is ready. Here's your download link:

[DOWNLOAD BUTTON]

While you're getting set up, a quick word from me:

I'm [Author Name]. I write [genre] — specifically the kind of stories where 
[brief description of your niche/style].

[Book title] is actually where [explain what the lead magnet is — prequel, short story, etc.].

I send emails to this list when [what you send — new releases, behind-the-scenes, 
deals, etc.]. You can unsubscribe anytime, no hard feelings.

Happy reading,
[Author Name]

P.S. If the download gives you trouble, just reply to this email. I'll sort it out personally.
```

---

**EMAIL 2: The Story**
```
Subject: The story behind [Book Title]
Preview text: Why I wrote it — and what almost didn't happen.

---

Hey [First Name],

Hope you got a chance to start [Book Title] — if not, no rush. It'll be there when you're ready.

Today I wanted to share something a bit more personal:

Why I actually wrote [book/series].

[2–3 paragraphs: origin story of the book. A struggle you had, an inspiration, 
something that happened. Make it human and specific.]

That's the real story behind the story.

[Closing line that connects back to why readers would enjoy it given what you shared]

Talk soon,
[Author Name]
```

---

**EMAIL 3: Social Proof & Universe**
```
Subject: What other readers are saying...
Preview text: Plus, what's coming next in the [series name] world.

---

Hey [First Name],

I've been getting some lovely messages since [Book Title] went out — here are a few:

⭐⭐⭐⭐⭐ "[Quote from review 1]" — [Reader Name or Amazon reviewer]
⭐⭐⭐⭐⭐ "[Quote from review 2]"
⭐⭐⭐⭐⭐ "[Quote from review 3]"

If you've finished it (or when you do), I'd love to know what you thought. 
Just reply to this email — I read everything.

---

Also: if you enjoyed [lead magnet book], you'll probably want to know about 
[Book 1 in the series]. That's where [hero] faces [stakes] and [brief hook].

[Cover image]
[Link to book on Amazon]

No pressure — just wanted you to know it exists.

[Author Name]
```

---

**EMAIL 4: Community & Connection**
```
Subject: Quick question for you, [First Name]
Preview text: I'm genuinely curious.

---

Hey [First Name],

This one's short.

I want to make these emails actually useful for you — not just another inbox 
presence you ignore.

So: what do you love most about [genre] fiction?

Is it the [element 1]? The [element 2]? Characters who [trait]? 
Stories set in [setting type]?

Hit reply and tell me. One sentence is fine.

I'm building out my next project and reader input genuinely shapes what I write.

Thanks in advance,
[Author Name]

P.S. Everyone who replies gets first look at my next cover reveal. 🎨
```

---

**EMAIL 5: The Gentle Pivot**
```
Subject: What's next — and a small thank you
Preview text: For sticking around. Seriously.

---

Hey [First Name],

You've been on my list for about 10 days now. Thanks for staying.

Quick recap of where things stand:

📚 [Lead magnet] — you grabbed this. Hope you enjoyed it.
📖 [Book 1] — the full story continues here → [Amazon link]
🔔 [Upcoming book] — coming [date/season]. I'll send early access to subscribers first.

That's it. No pressure. Just wanted you to know what's in the universe.

If you want to go deeper, [Book 1 link] is the next step. If you're happy just 
getting the occasional email from me, that's great too.

See you in the next one,
[Author Name]

---
You're getting this because you grabbed a free book at [landing page URL].
Unsubscribe anytime: [unsubscribe link]
```

---

### 3.3 Subject Line Best Practices

**Formulas that work:**
- **Curiosity gap:** "The story behind [Book Title]" / "What I almost didn't tell you"
- **Personalization:** "Your free copy is here, [First Name]"
- **Social proof:** "What readers are saying about [Title]"
- **Direct value:** "3 more books you'll love (all free)"
- **Question:** "Quick question for you, [First Name]"

**Rules:**
- Keep under 50 characters (shows fully on mobile)
- No ALL CAPS, no excessive !!! 
- Avoid spam trigger words: "FREE!!!", "Act now", "Limited time offer"
- Use preview text to extend the story (not repeat the subject line)

---

### 3.4 A/B Testing Strategy

**In MailerLite:** Campaign editor → Enable A/B test → Choose variable

**What to test (in this order of priority):**
1. **Subject lines** — Test 2 versions, send to 20% of list each, winner sends to remaining 60% after 4 hours
2. **Send time** — Morning vs. evening (track open rates over 4+ sends)
3. **CTA button text** — "Get the book" vs. "Read it now" vs. "Yes, send it"
4. **Email length** — Short (200 words) vs. long (500+ words)

**Don't test everything at once. One variable per test. 4 emails minimum before drawing conclusions.**

---

### 3.5 Segmentation Based on Engagement

**After the 5-email sequence, tag subscribers:**

| Behavior | Tag | Action |
|---|---|---|
| Opened 4–5 of 5 emails | Engaged | Priority for launch emails |
| Opened 2–3 emails | Warm | Continue regular content |
| Opened 0–1 emails | Cold | Send re-engagement sequence after 30 days |
| Clicked any link | Buyer-Ready | Add to "Launch Notify" group |
| Replied to Email 4 | Super Fan | Add to Street Team group |

**In MailerLite automation:** Add a "Tag subscriber" step after each email open/click event.

---

## SECTION 4: LAUNCH EMAIL STRATEGY

### 4.1 Pre-Launch Sequence (2 Weeks Before Release)

**14 Days Before — Announcement Email**
```
Subject: Big news — [Book Title] is almost here
Preview text: Here's what you need to know.

[Announce the book. Cover reveal. What it's about. Why they'll love it.]
[Pre-order link if available]
[Ask them to save the date]
```

**7 Days Before — Countdown + Excerpt**
```
Subject: One week until [Book Title] — here's a sneak peek
Preview text: First chapter, just for my list.

[Share first chapter or a compelling excerpt]
[Remind them of release date]
[Pre-order link]
```

**3 Days Before — Final Push**
```
Subject: 3 days, [First Name] — are you ready?
Preview text: Everything you need to know before launch day.

[Quick recap: what the book is, why you wrote it, release date]
[Pre-order or launch day buy link]
[Ask them to share with one person who'd enjoy it]
```

---

### 4.2 Launch Day Emails

**Launch Day AM (7–9 AM recipient timezone)**
```
Subject: 🚀 [Book Title] is LIVE — get it now
Preview text: Today's the day. Here's your link.

[It's live. Link. Brief emotional hook. Thank them for their support.]
[Clear CTA button: "Read It Now" → Amazon link]
```

**Launch Day PM (If list is engaged, 6–8 PM)**
```
Subject: A few hours in — [one piece of early feedback/story]
Preview text: Thanks for making today special.

[Personal note. First reader reactions. Gratitude. Keep it short.]
[Link again, casual tone]
```

---

### 4.3 Post-Launch Follow-Up

**3 Days Post-Launch**
```
Subject: How's [Book Title] treating you?
Preview text: Just checking in.

[Ask for their thoughts. Short email. Reply invitation.]
[Subtle ask: "If you enjoyed it, a quick review on Amazon means the world to me."]
```

**7 Days Post-Launch — Review Request**
```
Subject: One small favor (takes 2 minutes)
Preview text: It would mean a lot.

---
Hey [First Name],

If you've had a chance to read [Book Title], I have a small ask.

Reviews on Amazon help other readers find the book — and they're the single 
most powerful thing a reader can do to support an indie author.

If you enjoyed it, could you leave even just a star rating? (Takes 30 seconds.)

[Leave a review → link to Amazon review page]

No pressure if you haven't finished yet. The link will still work next week. 😊

Thank you,
[Author Name]
```

---

### 4.4 Re-Engagement Emails for Cold Subscribers

**Trigger:** No email opens in 90 days

**Cold Subscriber Sequence (3 emails, spread 5 days apart):**

```
Email 1 — Subject: "Still there, [First Name]?"
[Simple, honest check-in. Tell them what they've missed. Easy reply CTA.]

Email 2 — Subject: "Free gift — because I appreciate you"
[Give them something: another free book, an exclusive short story, a resource.]

Email 3 — Subject: "Last email unless you want to stay"
[Honest. "I'm cleaning up my list. Click here to stay subscribed. 
Otherwise, I'll remove you in 48 hours — no hard feelings."]
```

**After sequence:** Anyone who didn't click → remove from active list. This improves deliverability for your engaged subscribers.

---

## SECTION 5: LIST GROWTH STRATEGIES

### 5.1 BookFunnel Group Promos

**Best for:** Fast list growth (50–200+ new subscribers per promo)

**How to maximize:**
- Join promos in your exact genre (not adjacent genres)
- Make your landing page cover + headline the best in the promo
- Participate actively: promote the promo to your list AND on social
- Aim for 2–4 promos per month initially

**Types of promos:**
- **Freebies:** Everyone gets free books in exchange for email
- **99¢ Sales:** Paid books at discount
- **ARC promos:** Finding advance readers

---

### 5.2 Newsletter Swaps via BookClicker

- Register at bookclicker.com
- List your newsletter (genre, size, engagement rate)
- Browse partners and request swaps
- Execute 2–4 swaps per month

**Target:** Partners within 50% of your list size (up or down). Smaller lists are fine — engagement matters more than size.

---

### 5.3 Back Matter CTAs in Every Book

**What:** The last 5–10% of every book (after "The End") contains a dedicated page driving readers to your lead magnet.

**Template:**
```
---
WANT MORE [GENRE] READS?

If you enjoyed [Book Title], I have a FREE [short story/novella/mini-book] 
called [Lead Magnet Title] — and it's yours, no strings attached.

[Lead Magnet Cover Image]

Get it here: [Your BookFunnel landing page URL]

[SHORT DESCRIPTION — 2 sentences max]

See you there,
[Author Name]
---
```

**Also include:**
- Link to your other books
- Link to leave a review
- Your author website/social links

---

### 5.4 Social Media → Email List Conversion

**The only goal of social:** Drive people to your email list. Don't rely on followers.

**Platform-specific strategies:**

**Facebook:**
- Pin a post with your free book offer to the top of your author page
- Run a simple post: "Comment 'BOOK' and I'll DM you the link" (Facebook loves engagement bait)

**Instagram:**
- Bio link → Linktree or direct BookFunnel URL
- Story CTA: "Link in bio → grab my free thriller novella"
- Reel: Show your book cover, read a 30-second excerpt, direct to bio link

**TikTok (BookTok):**
- "POV: You just found a free [genre] book" → show your cover → direct to bio link
- Reading reaction videos to your own book excerpts

**Pinterest:**
- Create pins for each of your books → link to Amazon AND your BookFunnel page
- Evergreen traffic, especially for mystery/romance/thriller genres

---

### 5.5 Reader Magnets for Different Series/Niches

**Rule:** One lead magnet per series. Don't have one generic magnet for your whole catalog.

**Examples:**
| Series Type | Lead Magnet |
|---|---|
| Thriller series | Prequel short story featuring the protagonist |
| Cozy mystery series | First chapter + recipe/map/character guide |
| Activity books | Free 10-page sample + tip sheet |
| Romance series | Bonus scene or alternate POV chapter |
| Puzzle books | Free 5-puzzle sampler |

**When you have multiple series:** Create separate BookFunnel landing pages, separate MailerLite groups, separate welcome sequences. Keep lists organized by reader interest.

---

## SECTION 6: TEMPLATES & CHECKLISTS

### 6.1 BookFunnel Setup Checklist

```
□ Account created (Mid-List plan)
□ Lead magnet ebook uploaded (EPUB format)
□ Cover image uploaded (1600px+ wide)
□ "Require email to download" enabled
□ Landing page created
  □ Headline written
  □ Subheadline written
  □ 3–5 bullet points added
  □ Author bio added
  □ CTA button text customized
  □ Mobile preview checked
□ Landing page published
□ MailerLite integration connected (API key entered)
□ Subscriber group assigned ("Lead Magnet Readers")
□ Test subscriber added (verify it appears in MailerLite)
□ Custom domain set up (optional)
□ Back matter CTA updated in all published books
□ Link added to social media bio(s)
□ First group promo applied to (or scheduled)
```

---

### 6.2 MailerLite Setup Checklist

```
□ Account created
□ Domain verified (DNS records added)
□ Sender name and email configured
□ Subscriber groups created:
  □ Lead Magnet Readers
  □ Book Buyers
  □ ARC Team
  □ Street Team
  □ Launch Notify
  □ Cold Subscribers
□ Welcome automation created
  □ Trigger: Added to "Lead Magnet Readers"
  □ Email 1 written and scheduled (immediate)
  □ Email 2 written and scheduled (Day 2)
  □ Email 3 written and scheduled (Day 4)
  □ Email 4 written and scheduled (Day 7)
  □ Email 5 written and scheduled (Day 10)
  □ Automation set to ACTIVE
□ Email template designed (branded, mobile-tested)
□ GDPR/privacy footer included in all emails
□ Integration with BookFunnel tested
□ Analytics dashboard reviewed (baseline set)
```

---

### 6.3 Email Sequence Templates (Fill-in-the-Blank)

**Subject line bank:**
```
✉ Your free [BOOK TITLE] is ready, [FIRST NAME]
✉ The story behind [BOOK TITLE]
✉ What readers are saying about [BOOK TITLE]
✉ Quick question for you, [FIRST NAME]
✉ What happens next in [SERIES NAME]?
✉ [FIRST NAME], I have something for you
✉ 3 books you'll love if you liked [BOOK TITLE]
✉ Behind the scenes: writing [BOOK TITLE]
✉ The one thing I wish I'd known before writing [BOOK TITLE]
✉ Last chance to grab [OFFER] — [DATE]
```

---

### 6.4 Landing Page Copy Template

```
[HEADLINE]
Get [Lead Magnet Title] FREE — [One-line hook]

[SUBHEADLINE]
For fans of [Comparable Author 1] and [Comparable Author 2]. 
[What they'll experience — 1 sentence]

[CTA BUTTON]
Send Me My Free [Book/Story/Guide] →

---

✓ [Feature 1] — [Benefit 1]
✓ [Feature 2] — [Benefit 2]  
✓ Complete [story/guide/resource] — not just a sample
✓ Read in [X minutes/hours]
✓ Free instantly — no purchase required

---

[AUTHOR PHOTO (optional)]

About [Author Name]:
[2–3 sentences. Who you are, what you write, human detail. No awards list.]

---

[PRIVACY TEXT]
Your email is safe with me. I'll never share it. 
You can unsubscribe anytime. Privacy policy: [link]
```

---

### 6.5 Launch Email Templates

**Pre-Launch Announcement:**
```
Subject: [BOOK TITLE] is coming — [RELEASE DATE]
Preview: Here's your first look.

Hey [FIRST NAME],

I've been keeping a secret. [BOOK TITLE] — [one line hook] — releases on [DATE].

[COVER IMAGE]

Here's what it's about:
[2–3 sentence description — make it sound cinematic]

[Pre-order link OR "I'll send you the link when it's live"]

More soon,
[AUTHOR NAME]
```

**Launch Day:**
```
Subject: 🚀 It's live — [BOOK TITLE] is here
Preview: Today's the day, [FIRST NAME].

Hey [FIRST NAME],

[BOOK TITLE] is officially on Amazon. Right now. As you read this.

[COVER IMAGE]

[2 sentences: emotional hook + what they'll experience]

[BUY NOW BUTTON → Amazon link]

Thank you for being here for this.

[AUTHOR NAME]
```

---

*End of PRP-EMAIL-FUNNEL.md*
*Part of the Amazon Empire build — Pulse Graphix / Alex Prime*
