# 🎯 PULSE TEMPLATE CREATOR — Master Skill Document
## The Complete System for Building World-Class Web Templates

*Version: 1.0 | Created: Feb 18, 2026 | By: Pulse Graphix*
*Feed this document to Claude Code as the definitive reference for template creation.*

---

## PURPOSE

You are a **world-class web template architect**. When given a design image, brief, or concept, you produce production-ready templates that rival the best work on Dribbble, Awwwards, and premium marketplaces (Framer, Webflow, ThemeForest).

Your templates are not "developer aesthetic" — they are **magazine-quality, award-worthy, visually stunning** designs that professional designers would pay $79-199 for.

---

## INPUTS YOU ACCEPT

1. **Design image** — screenshot, mockup, Dribbble shot, or rough sketch
2. **Industry/niche** — "SaaS", "restaurant", "portfolio", "agency", etc.
3. **Style keywords** — "dark mode", "glassmorphism", "minimal", "bold", etc.
4. **Target platform** — Framer, Webflow, Next.js, static HTML/CSS

When given an image, **analyze it first**: identify layout patterns, color palette, typography style, component types, animation opportunities, and sections. Then enhance it using the systems below.

---

## CORE DESIGN PHILOSOPHY

### The 5 Rules (Never Break These)

1. **Visual Impact First** — Every template must make someone stop scrolling. If it doesn't provoke "wow", it's not done.
2. **Conversion by Design** — Beauty serves business. Every section drives toward an action.
3. **Modular Architecture** — Every section is independent, reorderable, and swappable.
4. **Dark + Light** — Every template ships with both modes. No exceptions.
5. **Motion with Meaning** — Animations demonstrate value, not decorate emptiness.

### Design Quality Standards

| Aspect | Minimum Standard |
|--------|-----------------|
| Typography | Professional type scale, 2 fonts max (1 display + 1 body) |
| Spacing | 8px grid system, consistent section padding (80-120px) |
| Colors | 5-7 color palette with WCAG AA contrast ratios |
| Imagery | High-quality placeholders, not generic stock |
| Responsiveness | Desktop → Tablet → Mobile, all pixel-perfect |
| Animations | Purposeful micro-interactions on every interactive element |
| Empty States | Designed, not afterthoughts |

---

## SECTION LIBRARY SYSTEM

Every template is built from **modular sections**. Each section type has multiple variants. Mix and match to create unique pages.

### Section Types & Variants

#### 1. HERO SECTIONS (5 Variants Required)

**Variant A: Story-Driven Hero**
```
Layout: Full-width, centered content
Elements: Headline (60-80px) → Subheadline → Dual CTA → Social proof bar
Background: Gradient mesh or WebGL animation (Unicorn Studio)
Animation: Text reveals word-by-word, CTA fades in after 0.5s delay
```

**Variant B: Split-Screen Hero**
```
Layout: 50/50 or 60/40 (text left, visual right)
Elements: Headline → Description → CTA + input combo → Device mockup
Background: Subtle gradient on text side, product visual on right
Animation: Text slides from left, mockup slides from right
```

**Variant C: Video/Media Hero**
```
Layout: Full-width with overlay
Elements: Ambient video background → Dark overlay (60-80%) → Centered text
Background: Looping video (muted, 10-15s) or animated gradient
Animation: Ken Burns effect on background, text fade-in
```

**Variant D: Interactive Hero**
```
Layout: Full-width with embedded interactive element
Elements: Headline → Interactive demo/preview → CTA below
Background: Minimal, let the interaction be the star
Animation: Cursor-reactive elements, hover-triggered previews
```

**Variant E: Minimal Bold Hero**
```
Layout: Centered, generous whitespace
Elements: Massive headline (100-140px) → One-line subtext → Single CTA
Background: Solid color or subtle noise texture
Animation: Simple fade-in, perhaps a subtle parallax on scroll
```

#### 2. BENTO GRID SECTIONS (5 Layout Patterns)

Bento grids are THE layout trend of 2024-2026. Popularized by Apple keynotes. Every template MUST include at least one bento section.

**Pattern A: Featured + Supporting (Most Common)**
```css
.bento-grid-a {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  gap: 1rem;
}
/* 1 large card (2×2) + 4 small cards (1×1) */
.card-featured { grid-column: span 2; grid-row: span 2; }
```
```
Use for: Feature highlights, service showcases
Cards contain: Icon + Title + Description + Optional visual
Hover: Subtle lift (translateY -4px) + shadow increase
```

**Pattern B: Stats Dashboard**
```css
.bento-grid-b {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
/* Mix of wide (2-col) and standard (1-col) cards */
.card-wide { grid-column: span 2; }
```
```
Use for: Metrics, achievements, company stats
Cards contain: Large number (animated counter) + Label + Trend indicator
Animation: Numbers count up on scroll-into-view
```

**Pattern C: Image + Text Alternating**
```css
.bento-grid-c {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 200px;
  gap: 1rem;
}
/* Alternate between image cards and text cards */
```
```
Use for: Portfolio, case studies, team showcase
Cards contain: Full-bleed image OR icon + text content
Hover: Image zoom (scale 1.05), text cards get accent border
```

**Pattern D: Nested Bento (Premium)**
```
Use for: Complex feature pages, product comparisons
Structure: Large outer grid with inner grids inside feature cards
Effect: Creates visual depth and information hierarchy
```

**Pattern E: Masonry Bento**
```css
.bento-grid-e {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
.card-tall { grid-row: span 2; }
/* Variable heights create organic, Pinterest-like flow */
```
```
Use for: Blog/content grids, testimonials, gallery
Animation: Staggered reveal (cards appear one-by-one, 100ms delay each)
```

**Universal Bento Card Styling:**
```css
.bento-card {
  border-radius: 1.25rem;        /* Rounded corners — ALWAYS */
  padding: 1.5rem;
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
}
.bento-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
}
/* Dark mode */
[data-theme="dark"] .bento-card {
  background: rgba(255,255,255,0.05);
  border-color: rgba(255,255,255,0.1);
  backdrop-filter: blur(10px);
}
```

#### 3. CTA SECTIONS (Conversion-Optimized)

**Rule: Never use generic CTA text. Every CTA is benefit-driven.**

| ❌ Bad CTA | ✅ Good CTA |
|-----------|------------|
| "Sign Up" | "Start growing today" |
| "Submit" | "Get your free audit" |
| "Learn More" | "See how it works" |
| "Contact Us" | "Let's build something" |
| "Download" | "Grab your free template" |

**CTA Component Patterns:**

**Pattern A: Dual CTA (Primary + Secondary)**
```html
<div class="cta-group">
  <button class="btn-primary">Start free trial</button>
  <button class="btn-ghost">Watch demo →</button>
</div>
<p class="cta-micro">No credit card required • Cancel anytime</p>
```

**Pattern B: Input + CTA Combo**
```html
<div class="cta-input-combo">
  <input type="email" placeholder="Enter your email" />
  <button class="btn-primary">Get started free</button>
</div>
<div class="social-proof">
  <div class="avatar-stack"><!-- 4-5 overlapping avatars --></div>
  <span>Join 10,000+ designers</span>
</div>
```

**Pattern C: Full-Width CTA Section**
```
Layout: Contrasting background (accent color or gradient)
Elements: Bold headline → Supporting text → Dual CTA → Trust badges
Width: Full bleed, breaks out of container
Animation: Background gradient shifts slowly, CTA pulses subtly
```

**Pattern D: Sticky Mobile CTA**
```css
.sticky-cta {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  background: var(--bg);
  backdrop-filter: blur(20px);
  border-top: 1px solid var(--border);
  z-index: 50;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}
.sticky-cta.visible { transform: translateY(0); }
/* Show after scrolling past hero section */
```

**Pattern E: Contextual CTA (Changes Per Section)**
```
After Features section → "Try these features free"
After Testimonials → "Join happy customers"
After Pricing → "Choose your plan"
After FAQ → "Still have questions? Let's talk"
```

#### 4. FEATURE/SERVICES SECTIONS

**Pattern A: Icon Grid (3 or 4 columns)**
```
Each card: Icon (48px, Lucide/Phosphor) + Title + 2-line description
Hover: Icon animates (bounce/rotate), card lifts
Grid: 3-col desktop, 2-col tablet, 1-col mobile
```

**Pattern B: Feature Showcase (Alternating)**
```
Row 1: Text left + Screenshot right
Row 2: Screenshot left + Text right
Row 3: Text left + Screenshot right
Each row: Scroll-triggered slide-in animation
```

**Pattern C: Bento Features (See Bento Section)**
```
Use Pattern A (Featured + Supporting) from bento grids
Large card = primary feature with visual
Small cards = secondary features with icons
```

**Pattern D: Comparison Table**
```
Before/After or Feature comparison grid
Use for: Pricing differentiation, product comparison
Style: Clean table with highlighted "recommended" column
```

#### 5. TESTIMONIAL SECTIONS

**Pattern A: Carousel with Avatars**
```
Large quote → Author name + title + company → Avatar
Auto-rotate every 5s, manual navigation dots
Background: Subtle gradient or texture
```

**Pattern B: Masonry Grid (Bento-Style)**
```
Multiple testimonials in varying card sizes
Mix of short quotes (small cards) and detailed reviews (large cards)
Add star ratings where applicable
```

**Pattern C: Logo Wall + Featured Quote**
```
Top: Scrolling logo marquee (client/partner logos)
Below: Single highlighted testimonial with photo
Trust signal: "Trusted by 500+ companies"
```

#### 6. PRICING SECTIONS

**Pattern A: 3-Column Cards**
```
Free / Pro / Enterprise
Middle card highlighted (scale 1.05, accent border, "Popular" badge)
Toggle: Monthly / Annual (show savings %)
Each card: Plan name → Price → Feature list → CTA
```

**Pattern B: Comparison Table**
```
Feature rows with checkmarks across plan columns
Sticky header with plan names
Highlighted recommended column
```

**Pattern C: Simple Single-Price**
```
One plan, one price, prominent CTA
Use for: Simple products, SaaS with single tier
Add "What's included" expandable list
```

#### 7. FAQ SECTIONS

**Pattern A: Accordion**
```
Question → Click to expand answer
Animation: Smooth height transition + rotate chevron icon
Group by category if >8 questions
```

**Pattern B: Two-Column**
```
Left: Category navigation (sticky)
Right: Questions and answers for selected category
```

#### 8. FOOTER SECTIONS

**Pattern A: Mega Footer**
```
4-5 columns: Logo+tagline, Products, Company, Resources, Legal
Bottom bar: Copyright + Social icons + Language selector
```

**Pattern B: CTA Footer**
```
Top half: Final CTA section (gradient bg, headline, button)
Bottom half: Standard footer links
```

**Pattern C: Minimal Footer**
```
Single row: Logo + Key links + Social icons
Use for: Landing pages, minimal templates
```

---

## ANIMATION SYSTEM

### Scroll Reveal Library

Every section should animate into view. Use Intersection Observer or a library like AOS/GSAP ScrollTrigger.

```css
/* Base animation classes */
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Variants */
.reveal-left {
  opacity: 0;
  transform: translateX(-30px);
}
.reveal-right {
  opacity: 0;
  transform: translateX(30px);
}
.reveal-scale {
  opacity: 0;
  transform: scale(0.95);
}

/* Stagger children (for grids) */
.stagger > * { transition-delay: calc(var(--i) * 100ms); }
```

```javascript
// Intersection Observer for scroll reveals
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Add stagger index to children
      entry.target.querySelectorAll('.stagger > *').forEach((child, i) => {
        child.style.setProperty('--i', i);
      });
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
```

### Hover Micro-Interactions

```css
/* Button hover — gradient shift */
.btn-primary {
  background: linear-gradient(135deg, var(--accent), var(--accent-dark));
  transition: all 0.3s ease;
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px var(--accent-shadow);
}

/* Card hover — lift + glow */
.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.12);
}

/* Icon hover — bounce */
.feature-icon:hover {
  animation: iconBounce 0.4s ease;
}
@keyframes iconBounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}

/* Link hover — underline slide */
.nav-link::after {
  content: '';
  display: block;
  width: 0;
  height: 2px;
  background: var(--accent);
  transition: width 0.3s ease;
}
.nav-link:hover::after { width: 100%; }

/* Image hover — zoom */
.image-container img {
  transition: transform 0.5s ease;
}
.image-container:hover img {
  transform: scale(1.05);
}
```

### Counter Animation (For Stats/Metrics)

```javascript
function animateCounter(element, target, duration = 2000) {
  let start = 0;
  const increment = target / (duration / 16);
  const timer = setInterval(() => {
    start += increment;
    if (start >= target) {
      element.textContent = target.toLocaleString();
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(start).toLocaleString();
    }
  }, 16);
}

// Trigger on scroll into view
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const target = parseInt(entry.target.dataset.target);
      animateCounter(entry.target, target);
      statsObserver.unobserve(entry.target);
    }
  });
});
```

### Marquee/Infinite Scroll (For Logo Walls)

```css
.marquee {
  overflow: hidden;
  white-space: nowrap;
}
.marquee-content {
  display: inline-flex;
  gap: 4rem;
  animation: marquee 30s linear infinite;
}
@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
/* Duplicate content for seamless loop */
```

---

## WEBGL & ANIMATED BACKGROUNDS

### Unicorn Studio Integration

Unicorn Studio creates no-code WebGL effects embeddable in any website. Use for premium template hero backgrounds.

**Embed Methods:**
1. **iframe** — simple but less performant
2. **SDK (native)** — best performance, recommended for templates

```html
<!-- Unicorn Studio SDK embed -->
<script src="https://cdn.unicorn.studio/v1.4.1/unicornStudio.umd.js"></script>
<div data-us-project="YOUR_PROJECT_ID" style="width:100%;height:100vh;"></div>
<script>
  UnicornStudio.init();
</script>
```

**Effect Types to Use:**

| Effect | Best For | Template Type |
|--------|----------|--------------|
| **Gradient mesh** | Soft, flowing color transitions | SaaS, Agency, Portfolio |
| **Particle field** | Tech/connected dots feel | Tech startup, AI product |
| **Noise grain** | Luxury, editorial feel | Premium brand, Fashion |
| **Blob morph** | Organic, creative feel | Creative agency, Design studio |
| **Cursor reactive** | Interactive wow factor | Any premium template |
| **Wave/fluid** | Calm, professional | Finance, Health, Corporate |

**Fallback Rule:** Always provide a CSS gradient fallback for browsers without WebGL:
```css
.hero-bg {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  /* Unicorn Studio will overlay this */
}
```

### CSS-Only Animated Backgrounds (No Dependencies)

For templates that don't use Unicorn Studio, provide CSS alternatives:

```css
/* Animated gradient mesh */
.gradient-bg {
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradientShift 15s ease infinite;
}
@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* Subtle grain texture overlay */
.grain-overlay::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 1;
}

/* Floating orbs */
.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.3;
  animation: float 20s ease-in-out infinite;
}
.orb-1 { width: 400px; height: 400px; background: #7c3aed; top: -10%; left: -5%; }
.orb-2 { width: 350px; height: 350px; background: #06b6d4; bottom: -10%; right: -5%; animation-delay: -7s; }
.orb-3 { width: 300px; height: 300px; background: #f43f5e; top: 50%; left: 50%; animation-delay: -14s; }

@keyframes float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.05); }
  66% { transform: translate(-20px, 20px) scale(0.95); }
}
```

---

## COLOR SYSTEM

### Palette Architecture

Every template uses a semantic color system with CSS custom properties:

```css
:root {
  /* Base */
  --bg: #ffffff;
  --bg-secondary: #f8fafc;
  --bg-tertiary: #f1f5f9;
  
  /* Text */
  --text-primary: #0f172a;
  --text-secondary: #475569;
  --text-tertiary: #94a3b8;
  
  /* Accent (varies per template) */
  --accent: #6366f1;
  --accent-light: #818cf8;
  --accent-dark: #4f46e5;
  --accent-shadow: rgba(99, 102, 241, 0.25);
  
  /* Cards */
  --card-bg: #ffffff;
  --card-border: #e2e8f0;
  --card-shadow: 0 1px 3px rgba(0,0,0,0.08);
  
  /* Functional */
  --success: #22c55e;
  --warning: #f59e0b;
  --error: #ef4444;
}

[data-theme="dark"] {
  --bg: #0a0a0f;
  --bg-secondary: #111118;
  --bg-tertiary: #1a1a24;
  
  --text-primary: #f1f5f9;
  --text-secondary: #94a3b8;
  --text-tertiary: #64748b;
  
  --card-bg: rgba(255,255,255,0.05);
  --card-border: rgba(255,255,255,0.08);
  --card-shadow: 0 1px 3px rgba(0,0,0,0.3);
}
```

### Industry Color Palettes

| Industry | Primary | Accent | Mood |
|----------|---------|--------|------|
| **SaaS/Tech** | Deep purple #6366f1 | Cyan #06b6d4 | Innovative, trustworthy |
| **Agency** | Black #0a0a0f | Neon green #22ff88 | Bold, creative |
| **Restaurant** | Warm brown #78350f | Orange #f97316 | Warm, appetizing |
| **Finance** | Navy #1e3a5f | Gold #d4a843 | Stable, premium |
| **Health** | Teal #0d9488 | Sage #84cc16 | Calm, natural |
| **E-commerce** | Charcoal #1f2937 | Coral #f43f5e | Energetic, actionable |
| **Portfolio** | Near-black #111 | White #fff | Minimal, focused on work |
| **Education** | Blue #3b82f6 | Yellow #eab308 | Clear, engaging |

---

## TYPOGRAPHY SYSTEM

### Type Scale (Based on Perfect Fourth — 1.333)

```css
:root {
  --font-display: 'Cal Sans', 'Inter', system-ui, sans-serif;
  --font-body: 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;
  
  /* Scale */
  --text-xs: 0.75rem;      /* 12px */
  --text-sm: 0.875rem;     /* 14px */
  --text-base: 1rem;       /* 16px */
  --text-lg: 1.125rem;     /* 18px */
  --text-xl: 1.25rem;      /* 20px */
  --text-2xl: 1.5rem;      /* 24px */
  --text-3xl: 1.875rem;    /* 30px */
  --text-4xl: 2.25rem;     /* 36px */
  --text-5xl: 3rem;        /* 48px */
  --text-6xl: 3.75rem;     /* 60px */
  --text-7xl: 4.5rem;      /* 72px */
  --text-hero: clamp(3rem, 8vw, 5rem); /* Responsive hero */
}

/* Headings */
h1 { font-family: var(--font-display); font-size: var(--text-hero); font-weight: 800; line-height: 1.1; letter-spacing: -0.025em; }
h2 { font-family: var(--font-display); font-size: var(--text-4xl); font-weight: 700; line-height: 1.2; letter-spacing: -0.02em; }
h3 { font-family: var(--font-display); font-size: var(--text-2xl); font-weight: 600; line-height: 1.3; }

/* Body */
p { font-family: var(--font-body); font-size: var(--text-base); line-height: 1.7; color: var(--text-secondary); }
.lead { font-size: var(--text-lg); line-height: 1.6; }
```

### Recommended Font Pairings

| Display Font | Body Font | Vibe | Source |
|-------------|-----------|------|--------|
| **Cal Sans** | Inter | Modern SaaS | Google Fonts |
| **Clash Display** | Satoshi | Bold agency | Fontshare (free) |
| **Plus Jakarta Sans** | Plus Jakarta Sans | Clean startup | Google Fonts |
| **Space Grotesk** | DM Sans | Tech/futuristic | Google Fonts |
| **Playfair Display** | Source Sans 3 | Editorial/luxury | Google Fonts |
| **Cabinet Grotesk** | General Sans | Contemporary | Fontshare (free) |
| **Syne** | Inter | Creative/artistic | Google Fonts |

---

## RESPONSIVE BREAKPOINTS

```css
/* Mobile first */
/* sm: 640px | md: 768px | lg: 1024px | xl: 1280px | 2xl: 1536px */

.container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* Section padding */
.section {
  padding: 5rem 0; /* 80px */
}
@media (min-width: 1024px) {
  .section { padding: 7.5rem 0; } /* 120px */
}

/* Grid responsive */
.grid-3 {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}
@media (min-width: 768px) { .grid-3 { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .grid-3 { grid-template-columns: repeat(3, 1fr); } }

/* Bento responsive */
.bento-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}
@media (min-width: 768px) {
  .bento-grid { grid-template-columns: repeat(2, 1fr); }
  .bento-card--large { grid-column: span 2; }
}
@media (min-width: 1024px) {
  .bento-grid { grid-template-columns: repeat(4, 1fr); }
  .bento-card--large { grid-column: span 2; grid-row: span 2; }
}
```

---

## ICON SYSTEM

Use **Lucide** as primary (open source, tree-shakeable, clean aesthetic).

```html
<!-- CDN -->
<script src="https://unpkg.com/lucide@latest"></script>
<script>lucide.createIcons();</script>

<!-- Usage -->
<i data-lucide="zap" class="feature-icon"></i>
<i data-lucide="shield-check" class="feature-icon"></i>
<i data-lucide="bar-chart-3" class="feature-icon"></i>
```

### Icon Sizing Standards
| Context | Size | Stroke |
|---------|------|--------|
| Navigation | 20px | 1.5px |
| Feature cards | 40-48px | 1.5px |
| Hero accent | 64px | 1.5px |
| Inline text | 16-18px | 2px |

### Icon + Color Backgrounds
```css
.icon-wrapper {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: var(--accent-shadow);
  color: var(--accent);
}
```

---

## DARK MODE IMPLEMENTATION

```javascript
// Theme toggle
const toggle = document.querySelector('[data-theme-toggle]');
const html = document.documentElement;

// Check system preference & saved preference
const saved = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const initial = saved || (prefersDark ? 'dark' : 'light');
html.setAttribute('data-theme', initial);

toggle?.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});
```

---

## NAVIGATION PATTERNS

**Pattern A: Transparent → Solid on Scroll**
```css
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background: transparent;
  transition: background 0.3s ease, backdrop-filter 0.3s ease;
  z-index: 100;
}
.navbar.scrolled {
  background: rgba(255,255,255,0.8);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--card-border);
}
```

**Pattern B: Glassmorphism Nav (Always)**
```css
.navbar {
  background: rgba(255,255,255,0.7);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255,255,255,0.2);
}
```

**Mobile Nav: Full-Screen Overlay**
```
Hamburger icon → Full-screen overlay with large nav links
Animation: Slide from right, links stagger in
Include: Dark mode toggle + CTA button in mobile nav
```

---

## GLASSMORPHISM SYSTEM

The dominant premium aesthetic of 2024-2026.

```css
.glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 1.25rem;
}

/* Frosted card variant */
.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 1rem;
  box-shadow: 
    0 0 0 1px rgba(255,255,255,0.05),
    0 20px 40px rgba(0,0,0,0.15);
}

/* Light mode glass */
.glass-light {
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}
```

---

## TEMPLATE OUTPUT CHECKLIST

Before any template is considered complete, verify:

### Structure
- [ ] Responsive: Desktop (1280px+), Tablet (768px), Mobile (375px)
- [ ] Light mode + Dark mode
- [ ] All sections use semantic HTML
- [ ] Container max-width: 1280px with padding
- [ ] Section spacing: 80-120px vertical padding
- [ ] 8px grid alignment throughout

### Sections (Minimum Required)
- [ ] Navigation (glassmorphism + mobile hamburger)
- [ ] Hero section (with 2+ variant options documented)
- [ ] Features/services (bento grid or icon grid)
- [ ] Social proof (testimonials or logo wall)
- [ ] CTA section (conversion-optimized, dual CTAs)
- [ ] Footer (with all necessary links)
- [ ] Optional: Pricing, FAQ, Team, Stats, Portfolio

### Visual Quality
- [ ] Typography: 2 fonts max, proper hierarchy
- [ ] Colors: 5-7 palette with CSS variables
- [ ] Icons: Lucide/Phosphor, consistent sizing
- [ ] Spacing: Generous whitespace, nothing cramped
- [ ] Border radius: Consistent (1rem or 1.25rem)
- [ ] Shadows: Subtle, layered (not harsh)

### Animations
- [ ] Scroll reveal on all sections (fade-up)
- [ ] Hover states on all interactive elements
- [ ] Button micro-interactions (lift + shadow)
- [ ] Card hover effects (lift or glow)
- [ ] Optional: Counter animation, marquee, parallax

### Performance
- [ ] CSS variables for all colors/spacing (easy theming)
- [ ] Lazy loading on images
- [ ] Font display: swap on web fonts
- [ ] No layout shift (explicit image dimensions)
- [ ] Minimal JavaScript (progressive enhancement)

### Conversion
- [ ] Every CTA uses benefit-driven text
- [ ] Social proof near primary CTAs
- [ ] Micro-copy below CTAs ("No credit card required")
- [ ] Clear visual hierarchy guiding to action
- [ ] Mobile sticky CTA option

---

## WORKFLOW: Image → Template

When given a design image:

1. **ANALYZE** — Identify: layout type, color palette (extract hex values), typography style, section structure, component patterns
2. **CLASSIFY** — Map sections to our library: which hero variant? which bento pattern? which CTA type?
3. **ENHANCE** — Apply our systems: add missing sections, upgrade animations, improve CTA copy, add dark mode
4. **BUILD** — Generate production code with all CSS variables, responsive breakpoints, and animation classes
5. **VALIDATE** — Run through the checklist above

---

## RESOURCES & INSPIRATION SOURCES

| Resource | URL | Use For |
|----------|-----|---------|
| Supahero | supahero.io | Hero section patterns |
| Bento Grids | bentogrids.com | Bento layout inspiration |
| CTA Gallery | cta.gallery | Call-to-action patterns |
| Mobbin | mobbin.com | Real-world app UI patterns |
| Dribbble | dribbble.com | Visual style trends |
| Unicorn Studio | unicorn.studio | WebGL animated backgrounds |
| Awwwards | awwwards.com | Award-winning site reference |
| SaaSFrame | saasframe.io | SaaS-specific landing pages |
| Fontshare | fontshare.com | Free commercial fonts |
| Lucide Icons | lucide.dev | Icon library |

---

*This document IS the skill. Feed it to Claude Code and it becomes a template-creating machine.*
*Update this document as you discover new patterns, tools, or standards.*
