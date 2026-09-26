# Maxxed Tech Showcase

================================================================================
  MAXXED TECH — COMPLETE WEBSITE BUILD PROMPT FOR LOVABLE.DEV
  Version: 2.0 (Brand Guidelines Integrated — 2026)
  Prepared: September 2026
================================================================================

Build me a complete, production-ready, ultramodern company portfolio website for
MAXXED TECH — a Nigerian digital agency that builds custom websites, AI-powered
tools, brand identity systems, and provides ongoing tech support for startups and
SMEs across Africa and beyond.

This prompt incorporates the official Maxxed Tech Brand Guidelines 2026.
Every design, colour, font, and copy decision MUST strictly follow these
guidelines. Do not deviate from the official brand identity.

================================================================================
  SECTION 1 — OFFICIAL BRAND IDENTITY (FROM BRAND GUIDELINES 2026)
================================================================================

--- 1A. OFFICIAL COLOUR PALETTE ---

These are the ONLY approved colours. Do not invent or substitute any others.

  NAME            HEX         RGB              USAGE
  ─────────────── ─────────── ──────────────── ──────────────────────────────────
  Deep Slate      #000000     0, 0, 0          Primary background (pure black)
    (alt)         #1A1A1A     26, 26, 26       Slightly lifted surfaces
  Maxxed Teal     #35BDB5     53, 189, 181     PRIMARY BRAND COLOUR — CTAs,
                                               highlights, icons, gradient start,
                                               active nav states, heading accents
  Deep Teal       #007A73     0, 122, 115      Gradient end, hover states, depth
  Light Accent    #E6F7F6     230, 247, 246    Subtle tinted backgrounds on
                                               cards, section dividers
  Neutral Light   #F8F9FA     248, 249, 250    Light-mode text (NOT used in
                                               main dark UI — for legal pages only)
  Neutral Mid     #8A94A0     138, 148, 160    Body text, muted labels,
                                               secondary descriptions
  Pure White      #FFFFFF     255, 255, 255    Headings, nav links, primary text

Design Description (from brand guidelines):
"The MaxxedTech palette pairs dynamic digital teal with strong dark neutrals and
clean white space, projecting technical precision, speed, and modern innovation."

Primary gradient (use this for ALL gradient text, buttons, and icon backgrounds):
  linear-gradient(135deg, #35BDB5 0%, #007A73 100%)

Glow / ambient effects: rgba(53, 189, 181, 0.15) — cyan teal glow
Card surfaces:  #0F1520 with border #1A2235
Glassmorphism:  backdrop-blur-xl, bg-white/5, border border-white/10

--- 1B. OFFICIAL TYPOGRAPHY ---

Primary Typeface:   NEVERA — Bold weight — FOR ALL HEADINGS (H1, H2, H3)
Secondary Typeface: INTER — SemiBold and Regular — FOR H4, body text, labels,
                    captions, form fields, nav links, footer text

"Our typography pairs the bold, tech-forward structure of Nevera with the high
legibility of clean sans-serifs, ensuring consistency across all digital and
print touchpoints." — Maxxed Tech Brand Guidelines 2026

IMPORTANT: Nevera is a premium font. Load it as a self-hosted web font
(include @font-face in the CSS). If Nevera cannot be loaded, use
"Clash Display" or "Plus Jakarta Sans" as the closest fallback — NOT Geist,
NOT Cal Sans. Inter for body text remains unchanged.

Font scale:
  H1 (Hero):      72px–96px, Nevera Bold, letter-spacing: -0.03em
  H2 (Section):   40px–56px, Nevera Bold, letter-spacing: -0.02em
  H3 (Card):      24px–32px, Nevera Bold
  Body Large:     18px–20px, Inter Regular/SemiBold
  Body:           16px, Inter Regular
  Small/Labels:   12px–14px, Inter SemiBold, letter-spacing: 0.08em, UPPERCASE
  Monospace:      JetBrains Mono — only for decorative code blocks / tech labels

--- 1C. BRAND DO'S (ENFORCE THESE IN THE CODE) ---

  [DO]  Use official colours (#35BDB5, #007A73, #000000, #8A94A0, #FFFFFF) only
  [DO]  Keep logo spacing and size proportionally correct at all viewport sizes
  [DO]  Apply the right tone of voice in ALL copy (see Section 1D below)
  [DO]  Use high-quality, on-brand images (dark, tech-focused, professional)
  [DO]  Use the teal-to-deep-teal gradient consistently for brand elements
  [DO]  Maintain generous whitespace — the brand breathes, never clutters

--- 1D. BRAND DON'TS (THESE ARE STRICT RULES — DO NOT VIOLATE) ---

  [DON'T]  Alter or recolor the logo in any way
  [DON'T]  Use unapproved fonts or substitute random Google Fonts
  [DON'T]  Add drop shadows, strokes, outlines, or glow effects to the logo
  [DON'T]  Use poor-quality or off-brand visuals (no generic stock photos of
           handshakes, lightbulbs, or "diverse team meeting" clichés)
  [DON'T]  Use bright, saturated colours outside the approved palette
  [DON'T]  Use cyan blue (#0EA5E9) — the brand teal is #35BDB5, NOT sky blue
  [DON'T]  Stretch, rotate, or distort any brand element

--- 1E. BRAND VOICE & TONE ---

VOICE:
  Clear, confident, and growth-oriented. Deliver complex technical solutions
  in simple, accessible language. Never jargon-heavy. Never passive. Always
  action-forward.

  Examples of correct voice:
    ✓  "We build websites that work while you sleep."
    ✓  "From idea to launch in 2–4 weeks."
    ✓  "No fluff. Just results."
    ✗  "We leverage synergistic digital transformation paradigms..."
    ✗  "Our holistic approach encompasses..." (too corporate, too vague)

TONE:
  Pragmatic, approachable, and startup-friendly. Professional for business
  strategy content (website copy, proposals). Engaging and conversational for
  social channels and CTAs.

  On-brand copy examples for hero/CTA:
    - "Build Smarter. Launch Faster. Grow Bigger."
    - "Your Business Deserves a Digital Presence That Converts."
    - "Nigeria's Premier Digital Agency for Modern Businesses."
    - "Get a Free Strategy Call — No Commitment Required."

  The copy should NEVER sound desperate, salesy, or cheap. It should sound
  like a confident expert talking to an equal.


================================================================================
  SECTION 2 — TECH STACK
================================================================================

  - React 18 + TypeScript + Vite (SWC plugin for fast builds)
  - Tailwind CSS v3 with custom design tokens matching the brand palette above
  - Framer Motion — ONLY for:
      a) Hero entrance animations (staggered text/elements on load)
      b) Viewport-triggered section entrances (once: true, no repeat)
      c) Page transitions (AnimatePresence — simple fade, 0.3s)
      d) Mobile menu open/close animation
      NOT on every card, every button, or every paragraph.
  - React Router v6 with lazy-loaded routes (React.lazy + Suspense)
  - react-helmet-async for per-page SEO meta tags
  - react-hook-form + zod for all form validation
  - Resend (primary) OR EmailJS (fallback) for real contact form submission
  - Lucide React for icons (no other icon library)
  - Vercel deployment (vercel.json with SPA rewrites)

  INSTALL ONLY WHAT IS USED. Do not install the entire shadcn/ui or all Radix
  UI packages. Pick individual components as needed.

  Package manager: npm only. One lock file: package-lock.json.
  package.json name: "maxxed-tech"
  package.json version: "1.0.0"


================================================================================
  SECTION 3 — GLOBAL LAYOUT & NAVIGATION
================================================================================

--- NAVBAR ---

  - Fixed/sticky at top
  - At page top: fully transparent
  - On scroll (>80px): background becomes #000000/90 with backdrop-blur-xl
    and a bottom border of 1px solid rgba(53, 189, 181, 0.15)
  - Logo: The text "Maxxed" in Pure White (Nevera Bold) + "Tech" in #35BDB5
    (Nevera Bold) with a small asterisk/star SVG icon (matching the brand's
    asterisk motif seen in the guidelines) before the wordmark.
    DO NOT use a generic Zap/bolt icon. The brand uses a custom asterisk (*).
  - Nav links (Inter SemiBold, 14px, Pure White):
      Home | About | Services | Portfolio | Blog | Contact
  - Active link: #35BDB5 colour + small teal dot below the text
  - Hover: smooth colour transition to #35BDB5 + slight upward translate
  - Right side CTA button: "Get Started →"
      Background: linear-gradient(135deg, #35BDB5, #007A73)
      Text: #000000 (black text on teal = high contrast, on-brand)
      Border: none | border-radius: 8px | padding: 10px 24px
      Hover: slight brightness increase + scale(1.03)
      Glow: box-shadow: 0 0 20px rgba(53, 189, 181, 0.35) on hover
  - Mobile: hamburger icon → full-screen overlay (#000000)
      Links animate in with stagger (0.08s delay each)
      Large font size (32px) for easy tap targets

--- FOOTER ---

  4-column grid layout (collapses to 1 column on mobile):

  Column 1 — Brand:
    Logo (same as navbar), brand tagline:
    "Building smart digital solutions for businesses that mean business."
    Social icons: Facebook, Instagram, TikTok (brand accounts — placeholder URLs)
    Icon style: 40x40px, bg: #1A1A1A, border: 1px solid #35BDB5/30
    Hover: bg becomes #35BDB5, icon becomes #000000

  Column 2 — Company:
    About Us | Services | Portfolio | Blog | Contact

  Column 3 — Services:
    Web Development | AI Solutions | Brand Identity | Maintenance | Consulting

  Column 4 — Contact:
    Phone:    +234 806 625 7117 (tel:+2348066257117)
    WhatsApp: +234 912 712 5877
    Email:    contact@maxxedtech.com
    Location: Lagos, Nigeria

  Bottom bar:
    Left:  © 2026 Maxxed Tech Ltd. All rights reserved.
    Right: Privacy Policy | Terms of Service
    Separator: 1px top border with linear gradient:
               linear-gradient(90deg, transparent, #35BDB5, transparent)

  NO personal Gmail. NO personal social handles. Domain email ONLY.


================================================================================
  SECTION 4 — PAGES (9 TOTAL)
================================================================================

────────────────────────────────────────────────────────────────────────────────
PAGE 1: / — HOME
────────────────────────────────────────────────────────────────────────────────

SECTION A — HERO
  Full viewport height (100vh), dark background (#000000)

  Background layers (CSS only, no JS):
    Layer 1 (z-index: -3): Pure black #000000
    Layer 2 (z-index: -2): Dot grid overlay — radial-gradient dots in
      rgba(53, 189, 181, 0.12), background-size: 32px 32px — fades out
      toward edges with a mask
    Layer 3 (z-index: -1): Three slow-drifting radial glow orbs:
      Orb 1: top-left, 600px diameter, rgba(53, 189, 181, 0.12), 24s drift loop
      Orb 2: bottom-right, 400px diameter, rgba(0, 122, 115, 0.10), 30s loop
      Orb 3: center-top, 300px diameter, rgba(53, 189, 181, 0.06), 20s loop
    Layer 4: A subtle noise/grain texture overlay (opacity: 0.03) using SVG
      filter or CSS for premium feel

  Center content (Framer Motion entrance, staggered):
    1. Badge pill (animate in first):
         Background: rgba(53, 189, 181, 0.1)
         Border: 1px solid rgba(53, 189, 181, 0.3)
         Border-radius: 999px
         Text: "⚡ Nigeria's Premier Digital Agency — Est. 2024"
         Font: Inter SemiBold, 13px, #35BDB5
    2. Main Heading (Nevera Bold, 80px desktop / 48px mobile):
         Line 1: "We Build Digital" — Pure White
         Line 2: "Products That Scale." — gradient text
                  (linear-gradient(135deg, #35BDB5 0%, #007A73 100%))
         Letter-spacing: -0.03em | Line-height: 1.05
    3. Subheading (Inter Regular, 20px, #8A94A0, max-width: 560px):
         "Custom websites, AI-powered tools, brand systems, and ongoing
          tech support — built for businesses that mean business."
    4. CTA buttons row:
         Primary: "Start Your Project →"
           bg: linear-gradient(135deg, #35BDB5, #007A73)
           text: #000000 (black), Nevera Bold, 16px
           padding: 16px 36px, border-radius: 10px
           box-shadow: 0 0 30px rgba(53,189,181,0.4)
           hover: box-shadow intensifies, scale(1.03)
         Secondary: "See Our Work"
           bg: transparent
           border: 1.5px solid rgba(53, 189, 181, 0.5)
           text: #FFFFFF
           hover: border becomes #35BDB5, text becomes #35BDB5
    5. Trust bar (below buttons, centered):
         "Built with →" then small pill-tags: React | Next.js | TypeScript
         | OpenAI | Node.js
         Separated by small teal dots. Font: Inter, 13px, #8A94A0.

  Right side (desktop only, absolute positioned):
    Three floating stat cards with CSS float animation (staggered delays):
      Card 1: "2–4 wks" / "Average Delivery Time"
      Card 2: "90+" / "Lighthouse Score Target"
      Card 3: "30 days" / "Post-Launch Support"
    Card style: bg #0F1520, border: 1px solid rgba(53,189,181,0.2),
    border-radius: 16px, padding: 20px 24px, backdrop-blur: 10px
    Hover: border becomes rgba(53,189,181,0.6), soft teal glow

  Scroll indicator at bottom: animated bouncing chevron (down arrow), #35BDB5

SECTION B — MARQUEE TICKER STRIP
  Infinite horizontal scroll, CSS animation only (no JS library needed)
  Dark band: background #0A0A0A, border-top and border-bottom: 1px solid #1A2235
  Content (repeating x2 for seamless loop):
    "Web Development  ◆  AI Automation  ◆  Brand Identity  ◆  UI/UX Design
     ◆  SEO Optimization  ◆  Tech Support  ◆  E-Commerce  ◆  Mobile Apps  ◆"
  Font: Inter SemiBold, 14px, letter-spacing: 0.08em, UPPERCASE, #8A94A0
  Diamonds (◆) in #35BDB5
  Speed: 40s per cycle (slow, elegant — NOT frantic)
  Pause on hover

SECTION C — SERVICES (BENTO GRID LAYOUT)
  Section label: "WHAT WE DO" — Inter SemiBold, 13px, #35BDB5, uppercase, tracked
  Heading: "Every Service Your Business Needs" — Nevera Bold, 48px, #FFFFFF

  Bento grid (CSS Grid, not flexbox):
    Row 1: [Card 1 — col span 2] [Card 2 — col span 1]
    Row 2: [Card 3 — col span 1] [Card 4 — col span 1] [Card 5 — col span 1]

  Card 1 — WEBSITE DESIGN & DEVELOPMENT (large, featured):
    Icon: Code2 (Lucide), inside 56x56px circle with teal gradient bg
    Badge tag: "Most Popular"
    Title: Nevera Bold, 28px
    Description: full paragraph
    Feature list: 6 items with teal checkmarks
    CTA: "Learn More →" in #35BDB5

  Card 2 — AI SOLUTIONS & AUTOMATION
  Card 3 — LOGO & BRAND IDENTITY DESIGN
  Card 4 — WEBSITE MAINTENANCE & SUPPORT
  Card 5 — DIGITAL OPTIMIZATION & SCALING

  All cards:
    bg: #0F1520
    border: 1px solid rgba(255,255,255,0.06)
    border-radius: 20px
    padding: 32px
    Hover: transform translateY(-4px), border becomes rgba(53,189,181,0.4),
           box-shadow: 0 20px 60px rgba(53,189,181,0.1)
    Transition: all 0.3s ease

SECTION D — WHY CHOOSE US
  Split layout — 2 columns, vertically centered

  LEFT COLUMN:
    Label: "WHY CHOOSE US"
    Heading: "Partner With a Team That Delivers" (Nevera Bold, gradient "Delivers")
    Paragraph: brand voice — confident, growth-focused
    Feature grid (2x3):
      ✓ Modern, responsive designs
      ✓ SEO optimization included
      ✓ Fast page load speeds
      ✓ Security best practices
      ✓ Dedicated project manager
      ✓ 30-day post-launch support
    Each feature: teal check circle icon + Inter Regular text, #8A94A0

  RIGHT COLUMN:
    4 reason cards in a 2x2 grid:
      1. Custom-Built Solutions — Zap icon
      2. Scalable Technology — Shield icon
      3. Startup-Friendly Pricing — Users icon
      4. Ongoing Support — HeartHandshake icon
    Card style: bg #0F1520, border rgba(53,189,181,0.1), rounded-2xl
    Hover: lift + teal border glow

SECTION E — IMPACT STATS (COUNT-UP ANIMATION)
  Full-width dark band: bg #070B10
  4 stat blocks in a row (2x2 on mobile):

    Block 1: "2–4 wks"  / "Typical Launch Window"
             "Lean delivery for websites, funnels & MVP builds."
    Block 2: "90+"      / "Performance Score Target"
             "Speed, accessibility & SEO from day one."
    Block 3: "24/7"     / "Digital Presence"
             "Automations that keep working after office hours."
    Block 4: "30 Days"  / "Post-Launch Support"
             "Fixes and guidance while your site finds its feet."

  Each stat: Nevera Bold, 56px, gradient text (#35BDB5 → #007A73)
  Label: Inter SemiBold, 16px, #FFFFFF
  Detail: Inter Regular, 14px, #8A94A0
  Numeric stats count up (0 → final value) using Intersection Observer
  when section enters viewport. Non-numeric stats ("24/7") just fade in.

SECTION F — PORTFOLIO PREVIEW
  Section label: "OUR WORK"
  Heading: "Projects That Drive Real Results"
  Subheading: "A selection of work we're proud of." (Inter, #8A94A0)

  3 project cards:
    Card style: bg #0F1520, border rgba(255,255,255,0.06), rounded-2xl
    Top image area: 240px tall, colored gradient placeholder per card:
      Card 1 (Web Dev):   linear-gradient(135deg, #0F2027, #35BDB5)
      Card 2 (Branding):  linear-gradient(135deg, #1A0A2E, #007A73)
      Card 3 (AI):        linear-gradient(135deg, #0D0D0D, #1A3A3A)
    Category badge: small pill in top-right of image area
    Title: Nevera Bold, 22px, #FFFFFF
    Description: Inter, 14px, #8A94A0
    Tags row: tech stack pills (bg: rgba(53,189,181,0.1), text: #35BDB5)
    Footer: "View Case Study →" — teal text, arrow animates right on hover

    Hover on card: 3D parallax tilt effect using CSS perspective + JS
    mouse tracking (mousemove event, max ±8 degrees). This makes the
    portfolio section feel alive and premium.

  Below cards: "View All Projects →" button (ghost/outline style)
  linking to /portfolio page

SECTION G — TESTIMONIALS
  Heading: "What Our Clients Say"
  Auto-scrolling carousel (5s interval, pauses on hover)

  3 testimonial cards. Each:
    bg: #0F1520, border: rgba(53,189,181,0.15), border-radius: 20px
    Padding: 40px
    Stars: 5 gold stars (★★★★★) in #FFB800
    Quote text: Inter Regular, 18px, #FFFFFF, italic, max-width 560px
    Author section:
      Avatar: 48x48px circle, bg: teal gradient, initials in #000000 (Nevera Bold)
      Name: Inter SemiBold, 16px, #FFFFFF
      Role: Inter Regular, 14px, #8A94A0

  Testimonial data (placeholder — write realistic sounding quotes):
    1. "Maxxed Tech transformed our online presence completely.
        Our website traffic doubled within 60 days of launch."
       — Chidi Okafor, CEO, TradeBridge Nigeria

    2. "The AI chatbot they built handles 80% of our customer inquiries
        automatically. Best investment we made this year."
       — Amaka Nwachukwu, Founder, ShopEase

    3. "Professional, fast, and they actually listened. The brand
        identity they created for us is exactly what we envisioned."
       — Tunde Adeyemi, CMO, GreenPath Solutions

  Navigation: dot indicators below (active dot = teal, filled; others = outline)
  Manual navigation: left/right arrows on desktop
  Mobile: swipeable (touch events)

SECTION H — HOW IT WORKS (PROCESS TIMELINE)
  Section label: "OUR PROCESS"
  Heading: "From Idea to Launch in 4 Simple Steps"

  Steps connected by a glowing horizontal line (desktop) / vertical (mobile):
  The connecting line uses a linear gradient: #35BDB5 → #007A73 → #35BDB5
  The line animates drawing itself when scrolled into view (CSS stroke-dashoffset
  animation on an SVG line, or a div that grows from width 0 → 100%).

    Step 1: Discovery Call
      Icon: Phone, inside teal gradient circle
      "We learn your goals, timeline, and budget in a free 30-minute call."

    Step 2: Strategy & Design
      Icon: Lightbulb
      "We create wireframes, design mockups, and a clear project roadmap."

    Step 3: Build & Review
      Icon: Code2
      "We build your solution with regular check-ins and revision rounds."

    Step 4: Launch & Support
      Icon: Rocket
      "We go live, monitor performance, and support you for 30 days post-launch."

  Each step number (01, 02, 03, 04) displayed large in Nevera Bold,
  color: rgba(53, 189, 181, 0.15) as a subtle watermark behind the icon.

SECTION I — FINAL CTA BAND
  Full-width section, bg: radial glow over pure black
  Center glow: 800px circle, rgba(53,189,181,0.08) at center

  Small teal asterisk icon (brand motif) above heading
  Heading: "Ready to Build Something Powerful?" — Nevera Bold, 56px
  "Powerful?" gets gradient text treatment
  Subtext: "Let's bring your idea to life. Get in touch and we'll have
            a strategy ready before most agencies even reply."
  CTA button: "Get a Free Consultation →" (extra large: padding 20px 48px)
              teal gradient bg, black text, large glow shadow

  Three trust signals below button (in a row):
    "✓ No commitment required"
    "✓ Response within 24 hours"
    "✓ Free initial strategy call"
    Font: Inter Regular, 14px, #8A94A0. Checkmarks in #35BDB5.

────────────────────────────────────────────────────────────────────────────────
PAGE 2: /about — ABOUT US
────────────────────────────────────────────────────────────────────────────────

  - Hero: "We Are Maxxed Tech" — gradient on "Maxxed Tech"
    Subtitle: "A passionate team of developers, designers, and strategists
    dedicated to helping African businesses thrive in the digital age."

  - Our Story (2 columns):
    Left: Narrative paragraphs about founding story — brand voice applies:
      Maxxed Tech was founded with a simple but powerful mission: to make
      world-class digital technology accessible to businesses of all sizes in
      Nigeria and across Africa. We saw too many talented entrepreneurs held
      back by expensive agencies and poor-quality websites. So we built the
      alternative.
    Right: Decorative stats grid (4 glowing stat cards):
      50+ Projects | 30+ Clients | 99% Satisfaction | 24/7 Support
      Card style: teal gradient border on hover, same as hero float cards

  - Mission & Vision (2 equal cards):
    Mission card: Target icon, teal gradient bg square
    Vision card: Eye icon, teal gradient bg square
    Card text uses brand voice — no corporate jargon

  - Team Section:
    Heading: "Meet the Team"
    Founder card:
      Photo: placeholder circle avatar (Nevera initials on teal gradient)
      Name: David Adamson
      Role: Founder & Lead Developer
      Bio: 2–3 sentences. Brand voice — confident, approachable.
      Social links: LinkedIn icon + Twitter/X icon (placeholder hrefs)
    Note in component comment:
      {/* Add team member cards here as the team grows */}

  - Values Grid (4 cards, 2x2):
    Innovation | Reliability | Quality | Partnership
    Same card style as service cards

  - Bottom CTA strip: "Work With Us →" button linking to /contact

────────────────────────────────────────────────────────────────────────────────
PAGE 3: /services — SERVICES
────────────────────────────────────────────────────────────────────────────────

  - Hero: same style as all inner pages
    Heading: "Digital Solutions That Deliver Results"
    Gradient beam background (no orbs — simpler than homepage)

  - For each of the 5 services, alternating layout (left/right):
    Odd services (1, 3, 5): text LEFT, feature card RIGHT
    Even services (2, 4): text RIGHT, feature card LEFT

    Each service section:
      Large service icon (56x56px, teal gradient circle)
      Title: Nevera Bold, 40px
      Description paragraph
      Benefits paragraph
      "What's Included" glassmorphism card:
        List of 6 features with teal check circles
      "Get Started →" CTA button

  - Bottom CTA section:
    "Not Sure Which Service You Need?"
    "Book a free consultation and we'll identify the perfect solution."
    "Schedule a Free Call →" button

────────────────────────────────────────────────────────────────────────────────
PAGE 4: /portfolio — PORTFOLIO / CASE STUDIES
────────────────────────────────────────────────────────────────────────────────

  - Hero: "Work That Speaks for Itself"
    Subtext: "Real projects. Real results. No sample projects."

  - Filter bar (sticky below hero):
    Tabs: All | Web Development | Branding | AI Solutions
    Active tab: teal gradient pill background, black text
    Inactive: transparent, #8A94A0 text
    Clicking a tab filters the grid with smooth opacity + layout animation
    (Framer Motion AnimatePresence with layout prop)

  - Project grid (3-column on desktop, 2 on tablet, 1 on mobile):
    6 portfolio cards:
      3 Web Development
      2 Branding
      1 AI/Automation

    Each project card:
      Top: 200px gradient image area (unique gradient per project):
        P1 Web:   linear-gradient(135deg, #0a2030, #35BDB5 120%)
        P2 Web:   linear-gradient(135deg, #1a0a2e, #007A73 120%)
        P3 Web:   linear-gradient(135deg, #0d1a2a, #35BDB5 120%)
        P4 Brand: linear-gradient(135deg, #2a1a00, #FFB800 120%)
        P5 Brand: linear-gradient(135deg, #1a0020, #9B59B6 120%)
        P6 AI:    linear-gradient(135deg, #001a1a, #007A73 120%)
      Category badge (top-left of image, pill)
      Year badge (top-right, subtle)
      Card body: project name (Nevera Bold), one-line description, tag pills
      Hover: image brightens, overlay appears with "View Details →" in teal

    Clicking a card opens a MODAL (not a new page):
      Modal: full-screen overlay, bg #000000/95, backdrop-blur
      Inside: project name, category, tags, full description paragraphs:
        - The Challenge
        - Our Solution
        - The Results (with specific metrics if available)
      Tech stack used
      Gradient decorative image at top of modal
      "Close" button (X) top-right
      "Start a Similar Project →" CTA at bottom linking to /contact
      Modal opens/closes with Framer Motion scale + opacity animation

────────────────────────────────────────────────────────────────────────────────
PAGE 5: /contact — CONTACT
────────────────────────────────────────────────────────────────────────────────

  - Hero: "Let's Build Something Amazing Together"
    Subtext: "Fill in the form or reach us directly — we'll respond within 24hrs."

  - 2-column layout (form left, info right):

  LEFT — REAL CONTACT FORM:
    Card style: bg #0F1520, border rgba(53,189,181,0.15), rounded-2xl, padding 40px

    Fields:
      Full Name (text input, required)
      Email Address (email input, required)
      Phone Number (tel input, optional) — include +234 country prefix hint
      Service Interest (select dropdown):
        Options: Website Development | AI Solutions | Brand Identity |
                 Maintenance & Support | Digital Optimization | Other
      Budget Range (select dropdown):
        Options: Under ₦500,000 | ₦500,000 – ₦2,000,000 |
                 ₦2,000,000 – ₦5,000,000 | Above ₦5,000,000 | Let's Discuss
      Message (textarea, 5 rows, min 10 chars, required)

    Validation: react-hook-form + zod. Inline error messages in red.
    On field focus: teal border glow (box-shadow: 0 0 0 2px rgba(53,189,181,0.4))

    Submit button: "Send Message →" — full width, teal gradient
    Disabled + spinner while submitting
    On SUCCESS: show animated green checkmark ✓ + message:
      "Message sent! We'll respond within 24 hours."
      Reset the form after 3 seconds.
    On ERROR: show red error bar: "Something went wrong. Please try again
      or contact us directly on WhatsApp."

    IMPORTANT: The form MUST send a real email via Resend or EmailJS.
    Do NOT use window.open() or WhatsApp redirect as the primary send mechanism.
    Use environment variable: VITE_RESEND_API_KEY or VITE_EMAILJS_SERVICE_ID.
    Emails go to: contact@maxxedtech.com

  RIGHT — CONTACT INFO:
    Heading: "Get in Touch"
    Paragraph: brand voice copy

    4 contact cards (2x2 grid):
      Phone:    +234 806 625 7117    — tel:+2348066257117
      WhatsApp: +234 912 712 5877   — https://wa.me/2349127125877
      Email:    contact@maxxedtech.com — mailto link
      Location: Lagos, Nigeria        — no clickable link

    Social icons section (Follow Us):
      Facebook, Instagram, TikTok — brand account placeholder links
      Same icon button style as footer

    WhatsApp quick-contact card:
      bg: rgba(37, 211, 102, 0.08)
      border: 1px solid rgba(37, 211, 102, 0.25)
      border-radius: 16px
      Icon: WhatsApp SVG (green)
      Heading: "Prefer WhatsApp?"
      Text: "Chat with us directly for faster responses."
      Button: "Chat on WhatsApp →"
        bg: #25D366, text: #FFFFFF, hover: #20BD5A

────────────────────────────────────────────────────────────────────────────────
PAGE 6: /blog — BLOG
────────────────────────────────────────────────────────────────────────────────

  - Hero: "Insights, Tips & Digital Strategy"
    Subtext: "Practical knowledge to help your business grow online."

  - Tag filter bar: All | Web Dev | AI | Branding | Business Tips | SEO

  - 6 blog post cards in a 3-column grid:
    Top: 200px gradient image (unique per card) + category badge
    Date (format: "Sep 15, 2026") + read time ("5 min read")
    Title: Nevera Bold, 22px, #FFFFFF
    Excerpt: Inter Regular, 14px, #8A94A0, 2–3 lines
    Author row: initials avatar + name + role
    "Read More →" in teal

    Blog post titles (placeholder, relevant to the brand):
      1. "Why Nigerian Businesses Need a Custom Website in 2026"
      2. "How AI Automation Is Changing Customer Support for SMEs"
      3. "5 Signs Your Website Is Costing You Customers"
      4. "How to Build a Startup Brand Identity on a Budget"
      5. "The Complete Guide to Website SEO for Nigerian Businesses"
      6. "What to Look for When Hiring a Digital Agency in Africa"

  - Individual post pages at /blog/:slug:
    Full article layout (blog.slug.tsx):
    - Hero image (gradient)
    - Title, author, date, read time, tags
    - Article body (well-structured placeholder text with H2/H3, paragraphs)
    - Share buttons: Twitter/X, LinkedIn, WhatsApp (share URL)
    - Related posts section (2 cards)
    - CTA at bottom: "Ready to grow your business? → Get a Free Consultation"

  - Comment in /blog/index.tsx:
    {/* TODO: Connect to Contentful or Sanity CMS for real blog management */}

────────────────────────────────────────────────────────────────────────────────
PAGE 7: /privacy — PRIVACY POLICY
────────────────────────────────────────────────────────────────────────────────

  - Clean, readable text page
  - Last updated: September 2026
  - NDPR and GDPR compliant content covering:
    - What data is collected (name, email, phone — only from contact form)
    - How data is used (solely to respond to inquiries)
    - Data retention policy
    - Third-party services (email service provider only)
    - User rights (access, deletion, correction)
    - Contact for data requests: contact@maxxedtech.com
    - No data is sold to third parties — ever
  - Background: #000000, text: #8A94A0, headings: #FFFFFF

────────────────────────────────────────────────────────────────────────────────
PAGE 8: /terms — TERMS OF SERVICE
────────────────────────────────────────────────────────────────────────────────

  - Same style as Privacy Policy page
  - Last updated: September 2026
  - Sections: Acceptance of Terms, Services, Payment Terms, Intellectual
    Property, Limitation of Liability, Governing Law (Nigerian law),
    Contact information
  - Professional but readable language (brand voice applies even to legal pages)

────────────────────────────────────────────────────────────────────────────────
PAGE 9: /404 — NOT FOUND
────────────────────────────────────────────────────────────────────────────────

  - Fullscreen centered layout
  - Giant "404" in Nevera Bold, gradient text, 160px
  - Heading: "Looks like you're lost."
  - Subtext: "The page you're looking for doesn't exist or has been moved."
  - CTA: "Back to Home →" button (teal gradient)
  - Subtle animated background orb


================================================================================
  SECTION 5 — ANIMATIONS & INTERACTIONS (DETAILED SPEC)
================================================================================

--- A. FRAMER MOTION (Controlled, purposeful) ---

  Hero entrance (on page load, staggered 0.15s between elements):
    Badge pill:     { opacity: 0, y: 20 } → { opacity: 1, y: 0 }, 0.5s
    H1 line 1:      { opacity: 0, y: 30 } → { opacity: 1, y: 0 }, 0.6s, delay 0.15s
    H1 line 2:      { opacity: 0, y: 30 } → { opacity: 1, y: 0 }, 0.6s, delay 0.3s
    Subheading:     { opacity: 0, y: 20 } → { opacity: 1, y: 0 }, 0.5s, delay 0.45s
    CTA buttons:    { opacity: 0, y: 20 } → { opacity: 1, y: 0 }, 0.5s, delay 0.6s
    Trust bar:      { opacity: 0 }        → { opacity: 1 },        0.5s, delay 0.75s

  Section entrances (viewport-triggered, once: true):
    Section headings: { opacity: 0, y: 30 } → { opacity: 1, y: 0 }, 0.6s
    Card grids: stagger children with 0.1s delay between each card
    Stats: { opacity: 0, scale: 0.95 } → { opacity: 1, scale: 1 }, 0.5s

  Page transitions (AnimatePresence):
    Exit:   { opacity: 1 } → { opacity: 0 }, 0.2s ease-in
    Enter:  { opacity: 0 } → { opacity: 1 }, 0.3s ease-out
    The page transition wraps <Routes> in AnimatePresence with mode="wait"

  Mobile menu:
    Container: { opacity: 0, y: -20 } → { opacity: 1, y: 0 }
    Each link: stagger 0.08s

--- B. CSS ANIMATIONS (No JS runtime cost) ---

  Hero orbs: @keyframes orbit/drift (24s, 30s, 20s loops) — translate3d only
  Marquee ticker: @keyframes marquee { 0% { transform: translateX(0) }
                                       100% { transform: translateX(-50%) } }
  Float cards (hero right side): @keyframes float {
    0%, 100% { transform: translateY(0px) }
    50%      { transform: translateY(-12px) }
  } — different animation-delay per card (0s, 1.5s, 3s)
  CTA pulse glow: @keyframes pulse-glow on the main hero CTA button glow
  Noise texture: static CSS, no animation

  prefers-reduced-motion: wrap ALL CSS animations in:
  @media (prefers-reduced-motion: reduce) { animation: none !important; }

--- C. JAVASCRIPT INTERACTIONS ---

  1. Stat counter (Intersection Observer):
     When .stat-number enters viewport, run a counter from 0 to the target
     value over 1.5s using requestAnimationFrame and easeOutQuart easing.
     For "90+" → counts to 90 then appends "+".
     For "24/7" → just fade in, no counter.
     For "2-4 wks" → just fade in, no counter.

  2. Portfolio card 3D tilt (mouse tracking):
     On card mousemove: calculate cursor position relative to card center,
     apply CSS transform: perspective(800px) rotateX(Xdeg) rotateY(Ydeg)
     Max rotation: ±8 degrees. Smooth with CSS transition: transform 0.1s ease.
     On mouseleave: reset to perspective(800px) rotateX(0) rotateY(0) over 0.5s

  3. Testimonial carousel:
     Auto-advance every 5000ms (clearInterval on hover, restart on mouseleave)
     Dot indicators: clicking a dot goes to that slide
     Swipe support: touchstart/touchend with 50px threshold

  4. Navbar scroll behavior:
     window.addEventListener('scroll', ...) — if scrollY > 80:
     add class that sets bg-black/90 + backdrop-blur + border-bottom-teal

  5. Portfolio filter:
     Filter state in React useState. Clicking tab updates state.
     Filtered cards render with Framer Motion layout prop for smooth reflow.

  6. Form submission loading:
     Disable all fields and show spinner during async submit.
     Green success state or red error state after response.

--- D. MICRO-INTERACTIONS ---

  Buttons:
    Hover: scale(1.03), transition 0.2s
    Active/click: scale(0.97), transition 0.1s
    Focus: visible outline using teal ring (for accessibility)

  Links:
    Nav links: after:content-[''] underline that slides from left on hover
    Footer links: color transition to #35BDB5 on hover
    Card CTAs: arrow icon translates +4px on hover

  Form inputs:
    Focus: border-color: #35BDB5, box-shadow: 0 0 0 3px rgba(53,189,181,0.2)
    Error: border-color: #EF4444, shake animation (subtle)
    Valid: border-color: #22C55E after blur

  Social icons:
    Hover: scale(1.15) + background becomes #35BDB5 + icon becomes #000000

  WhatsApp button (if floating):
    Subtle bounce animation in idle state
    Tooltip appears on first load after 3 seconds: "Chat with us!"


================================================================================
  SECTION 6 — SEO & PERFORMANCE REQUIREMENTS
================================================================================

--- PER-PAGE SEO (react-helmet-async required) ---

  Every page MUST have (unique values per page):
    <title>{Page Name} | Maxxed Tech</title>
    <meta name="description" content="{unique 150-160 char description}" />
    <meta property="og:title" content="{same as title}" />
    <meta property="og:description" content="{same as description}" />
    <meta property="og:image" content="https://maxxedtech.com/og-image.jpg" />
    <meta property="og:url" content="https://maxxedtech.com/{path}" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="{same as og:title}" />
    <meta name="twitter:description" content="{same as og:description}" />
    <meta name="twitter:image" content="https://maxxedtech.com/og-image.jpg" />
    <link rel="canonical" href="https://maxxedtech.com/{path}" />

  og-image.jpg: 1200x630px. Dark background, teal brand gradient,
  "Maxxed Tech" Nevera Bold wordmark centered. Place in /public/og-image.jpg.

  Homepage JSON-LD (Organization schema):
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Maxxed Tech",
    "url": "https://maxxedtech.com",
    "logo": "https://maxxedtech.com/logo.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+234-806-625-7117",
      "contactType": "customer service"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lagos",
      "addressCountry": "NG"
    },
    "sameAs": [
      "https://www.facebook.com/maxxedtech",
      "https://www.instagram.com/maxxedtech",
      "https://www.tiktok.com/@maxxedtech"
    ]
  }
  </script>

--- TECHNICAL SEO FILES ---

  /public/robots.txt:
    User-agent: *
    Allow: /
    Disallow: /api/
    Sitemap: https://maxxedtech.com/sitemap.xml

  /public/sitemap.xml:
    All 9 pages listed with <loc>, <lastmod>2026-09-01</lastmod>,
    <changefreq>, and <priority> values

--- PERFORMANCE RULES ---

  Google Fonts: DO NOT use @import in CSS. Load in index.html:
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    For Nevera: host as @font-face in /public/fonts/ (self-hosted)

  Route lazy loading (ALL routes):
    const About = React.lazy(() => import('./pages/About'))
    const Services = React.lazy(() => import('./pages/Services'))
    // etc. for every page
    Wrap <Routes> in <Suspense fallback={<PageLoader />}>
    PageLoader: simple centered teal spinner animation

  Images:
    All below-fold images: loading="lazy"
    All images must have explicit width + height attributes
    Use WebP format where possible
    Gradient placeholders as CSS (no image files) wherever feasible

  Blur effects:
    Maximum 2 elements with filter:blur() at any time on screen
    Use blur-[64px] maximum — never blur-[128px] on more than 1 element

  will-change: transform — only on actively animating elements, removed after

  Vite build config (vite.config.ts):
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor-react': ['react', 'react-dom', 'react-router-dom'],
            'vendor-motion': ['framer-motion'],
            'vendor-form': ['react-hook-form', 'zod'],
          }
        }
      },
      chunkSizeWarningLimit: 600
    }


================================================================================
  SECTION 7 — FILE STRUCTURE & CODE ORGANIZATION
================================================================================

src/
  assets/
    fonts/              # Self-hosted Nevera font files (.woff2, .woff)
    logo.svg            # Brand logo SVG (asterisk + wordmark)
    og-image.jpg        # Social sharing image (1200x630)

  components/
    layout/
      Navbar.tsx
      Footer.tsx
      Layout.tsx          # Wraps children with Navbar + Footer + WhatsApp
      PageLoader.tsx      # Lazy load suspense fallback spinner

    ui/                   # ONLY components actually used — no full shadcn dump
      Button.tsx
      Card.tsx
      Badge.tsx
      Input.tsx
      Select.tsx
      Textarea.tsx
      Modal.tsx           # For portfolio case study modal
      Toast.tsx

    home/
      HeroSection.tsx
      MarqueeStrip.tsx
      ServicesSection.tsx
      WhyChooseUsSection.tsx
      ImpactStatsSection.tsx
      PortfolioPreview.tsx
      TestimonialsSection.tsx
      HowItWorksSection.tsx
      CTASection.tsx

    shared/
      SectionHeading.tsx     # Reusable section label + heading + subtext
      AnimatedCounter.tsx    # Intersection Observer count-up component
      ProjectCard.tsx        # Used in both home preview and /portfolio
      TestimonialCard.tsx
      BlogCard.tsx

  pages/
    Index.tsx
    About.tsx
    Services.tsx
    Portfolio.tsx
    Contact.tsx
    Blog.tsx
    BlogPost.tsx
    Privacy.tsx
    Terms.tsx
    NotFound.tsx

  hooks/
    useScrollAnimation.ts   # Intersection Observer for animations
    useCounter.ts           # Count-up hook
    useMouseTilt.ts         # 3D card tilt on mouse move
    useNavbarScroll.ts      # Navbar background on scroll

  lib/
    utils.ts               # cn() helper (clsx + tailwind-merge)
    emailService.ts        # Resend/EmailJS integration
    seo.ts                 # SEO helper constants

  data/
    config.ts              # ALL hardcoded values live here — NO exceptions:
      COMPANY_NAME, PHONE, WHATSAPP_NUMBER, EMAIL, LOCATION,
      FACEBOOK_URL, INSTAGRAM_URL, TIKTOK_URL, WHATSAPP_API_URL,
      VERCEL_URL
    projects.ts            # Portfolio project data array
    testimonials.ts        # Testimonial data array
    blogPosts.ts           # Blog post data array
    services.ts            # Services data array

  types/
    index.ts               # Project, Testimonial, BlogPost, Service interfaces


================================================================================
  SECTION 8 — CONTACT & BUSINESS DETAILS (SINGLE SOURCE OF TRUTH)
================================================================================

  These values go into src/data/config.ts and are referenced everywhere.
  DO NOT hardcode these directly in any component.

  COMPANY_NAME:       "Maxxed Tech"
  TAGLINE:            "Building smart digital solutions for businesses that
                       mean business."
  PHONE_DISPLAY:      "+234 806 625 7117"
  PHONE_HREF:         "tel:+2348066257117"
  WHATSAPP_DISPLAY:   "+234 912 712 5877"
  WHATSAPP_HREF:      "https://wa.me/2349127125877"
  WHATSAPP_MSG_HREF:  "https://wa.me/2349127125877?text=Hello%2C%20I'm%20interested%20in%20your%20services"
  EMAIL:              "contact@maxxedtech.com"
  EMAIL_HREF:         "mailto:contact@maxxedtech.com"
  LOCATION:           "Lagos, Nigeria"
  FACEBOOK_URL:       "https://www.facebook.com/maxxedtech"    (placeholder)
  INSTAGRAM_URL:      "https://www.instagram.com/maxxedtech"   (placeholder)
  TIKTOK_URL:         "https://www.tiktok.com/@maxxedtech"     (placeholder)
  SITE_URL:           "https://maxxedtech.com"
  FOUNDED_YEAR:       "2024"
  COPYRIGHT_YEAR:     "2026"


================================================================================
  SECTION 9 — STRICT BRAND COMPLIANCE RULES
================================================================================

  The following rules come directly from the Maxxed Tech Brand Guidelines 2026.
  Violations must be avoided in all generated code and design decisions.

  [RULE 1]  Use ONLY the official brand colours listed in Section 1A.
            Specifically: the primary teal is #35BDB5 — NOT #0EA5E9 (sky blue).

  [RULE 2]  Headings MUST use Nevera Bold. Inter is ONLY for body/subtext.
            If Nevera cannot load, fallback font must be "Clash Display" or
            "Plus Jakarta Sans", NOT Inter, Geist, Cal Sans, or any other font.

  [RULE 3]  The logo/wordmark must NOT have effects added to it (no drop shadow,
            no glow, no outline stroke, no rotation). Keep it clean.

  [RULE 4]  Never use poor-quality or off-brand imagery. Every visual must be:
            - Dark-themed (consistent with the brand dark palette)
            - Tech-focused or professional
            - High contrast and clean
            Avoid: generic stock handshakes, generic "team meeting" photos,
            clipart-style illustrations, bright colorful backgrounds.

  [RULE 5]  All copy must follow brand voice: Clear, confident, growth-oriented.
            No jargon. No passive voice. No corporate buzzword salad.
            Every CTA must be action-forward and direct.

  [RULE 6]  Logo spacing: always maintain minimum clear space around the logo
            equal to the height of the asterisk icon on all sides.

  [RULE 7]  No personal email addresses. No personal social handles.
            contact@maxxedtech.com is the ONLY email on the site.


================================================================================
  SECTION 10 — DEFINITION OF DONE (ACCEPTANCE CRITERIA)
================================================================================

  The website build is COMPLETE only when ALL of the following are true:

  PAGES & CONTENT
  [ ] All 9 pages exist and render without errors on both mobile and desktop
  [ ] No "Sample Project" labels — portfolio shows realistic placeholder work
  [ ] No personal Gmail addresses anywhere on the site
  [ ] Privacy Policy and Terms of Service are real, linked pages (not href="#")
  [ ] Phone numbers include the +234 country code in tel: hrefs
  [ ] All nav links and footer links work correctly

  BRAND COMPLIANCE
  [ ] Colours used are strictly from the approved palette (Section 1A)
  [ ] Nevera Bold is used for all H1, H2, H3 headings
  [ ] Inter is used for body text and secondary elements
  [ ] Brand asterisk motif is used in logo, not a generic Lucide icon
  [ ] No personal social media handles appear anywhere
  [ ] All copy follows brand voice (clear, confident, no jargon)

  FUNCTIONALITY
  [ ] Contact form sends a real email (not just opens WhatsApp)
  [ ] Contact form shows animated success/error state
  [ ] Portfolio filter works with smooth animation
  [ ] Portfolio case study modal opens/closes correctly
  [ ] Testimonial carousel auto-advances and is swipeable
  [ ] Stat counters animate when scrolled into view
  [ ] Navbar changes appearance on scroll (transparent → frosted glass)
  [ ] Page transitions work (AnimatePresence fade)
  [ ] Mobile menu opens/closes correctly with staggered links

  SEO & PERFORMANCE
  [ ] Every page has unique title, description, og:image, canonical
  [ ] sitemap.xml and robots.txt are present in /public
  [ ] JSON-LD Organization schema on homepage
  [ ] Google Fonts loaded via <link> in index.html (NOT @import in CSS)
  [ ] All routes lazy-loaded with React.lazy + Suspense
  [ ] No more than 2 blur() elements simultaneously on screen
  [ ] Lighthouse: Performance ≥90, SEO 100, Accessibility ≥90, Best Practices 100
  [ ] No console errors or TypeScript errors

  TECHNICAL QUALITY
  [ ] package.json name is "maxxed-tech", version is "1.0.0"
  [ ] Only one lock file: package-lock.json
  [ ] No unused packages installed
  [ ] All hardcoded values are in src/data/config.ts
  [ ] src/data/config.ts contains NO personal email or personal social links
  [ ] Vite config includes manual chunk splitting (see Section 6)
  [ ] vercel.json present with SPA rewrite rules

================================================================================
  END OF PROMPT — MAXXED TECH WEBSITE BUILD BRIEF v2.0
================================================================================

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/05e1ad2c-9816-4536-8bcc-b70cf2e5c36c).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
