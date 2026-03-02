# DygoTalent Website — Requirements Document

## Overview

Build a new website for **DygoTalent** (dygotalent.com), a talent management and branding agency operating in the creator economy. The site serves two audiences equally: **creators/influencers** seeking management and **brands** looking to partner with managed talent.

The site must be highly SEO-optimized for talent management keywords, primarily targeting the Indian market with global reach. The design should be clean and minimalist, inspired by the aesthetic of brandmascots.in, with premium animations and micro-interactions throughout.

### Success Criteria

- Strong organic search visibility for talent management keywords in India
- Clear value proposition for both creators and brands within seconds of landing
- Smooth conversion flow to cal.com booking
- Fast load times (Core Web Vitals passing) on mobile and desktop
- Premium, modern feel that reflects the agency's brand credibility

---

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | **Next.js** (App Router) |
| Language | **TypeScript** |
| Styling | **Tailwind CSS** |
| Animations | **Framer Motion** |
| Deployment | **Vercel** |
| CMS | None — content managed via code/data files |
| Booking | **Cal.com** embed/integration |
| Analytics | Google Analytics 4 + Google Search Console |

---

## Branding & Design

### Visual Identity (Existing — Keep)

- **Primary Accent:** Red `#DD183B`
- **Primary Text:** Dark/near-black
- **Backgrounds:** White and light neutrals
- **Heading Font:** Syncopate (bold, uppercase)
- **Body Font:** Clean sans-serif (Inter, DM Sans, or similar)

### Design Direction

- **Clean and minimalist** — generous white space, clear visual hierarchy
- **Inspired by brandmascots.in** — card-based layouts, organized sections, professional feel
- **Premium animations** — parallax effects, staggered reveals, micro-interactions, smooth page transitions
- **Mobile-first** responsive design

### Animation Specifications

- **Hero:** Dynamic animated hero with motion graphics or kinetic typography
- **Scroll-triggered:** Staggered fade-in/slide-up reveals for sections and cards
- **Hover effects:** Subtle scale, shadow, or color transitions on interactive elements
- **Page transitions:** Smooth transitions between routes
- **Micro-interactions:** Button press feedback, link underline animations, cursor effects where appropriate
- **Performance:** All animations must respect `prefers-reduced-motion` and not impact Core Web Vitals

---

## Pages & Structure

### 1. Home Page

**URL:** `/`

**Sections (top to bottom):**

1. **Hero Section**
   - Animated/dynamic hero with motion graphics
   - Bold headline communicating core value proposition (talent management for the creator economy)
   - Subheadline with supporting text
   - Primary CTA: "Book a Call" → links to cal.com
   - Should speak to both creators and brands

2. **Services Overview**
   - Three service cards in a clean grid/row layout:
     - **Talent Management** — brief description
     - **Brand Collaborations** — brief description
     - **Growth Advisory** — brief description
   - Each card: icon/illustration + title + 1-2 sentence description
   - Cards should have hover animations

3. **CTA Section**
   - Strong closing call-to-action
   - "Book a Call" button → cal.com
   - Brief reinforcing copy

**Note:** Home page is intentionally minimal — services + CTA only. No stats, testimonials, or logo wall on home (those live on their dedicated pages).

---

### 2. About Page

**URL:** `/about`

**Content:**
- Company story and mission
- What makes DygoTalent different (approach, values, philosophy)
- Focus on empowerment, authenticity, and impact messaging
- Team section (optional — photo + name + role cards if team info is available)

---

### 3. Services Page

**URL:** `/services`

**Content:**
- Detailed breakdown of each service:

#### Talent Management
- What it includes (representation, contract negotiation, career strategy, etc.)
- Who it's for (creators, influencers, content creators)

#### Brand Collaborations
- What it includes (partnership matchmaking, campaign management, deal negotiation)
- Who it's for (brands looking to work with creators)

#### Growth Advisory
- What it includes (brand development strategy, audience growth, content strategy)
- Who it's for (creators and brands looking to scale)

- Each service section should have its own visual treatment
- CTA at the bottom of each service: "Book a Call"

---

### 4. Portfolio Page

**URL:** `/portfolio`

**Content:**
- **Logo wall** — grid of brand/client logos the agency has worked with
- Clean, evenly spaced grid layout
- Logos should be displayed in grayscale with color on hover (or similar treatment)
- Brief introductory text: "Brands we've worked with" or similar
- No case studies or detailed breakdowns (keep it as social proof)

---

### 5. Talent Roster Page

**URL:** `/talent`

**Content:**
- **Grid of creator cards** on a single page
- Each card displays:
  - Creator photo/headshot
  - Name
  - Niche/category (e.g., "Lifestyle", "Tech", "Fashion")
  - Social media links (Instagram, YouTube, etc.)
- Cards should have hover animations
- Optional: filter by niche/category
- No individual creator profile pages (single page only)

**Data Management:**
- Creator data stored in a JSON/TypeScript data file
- Easy for a developer to add/remove/edit creators

---

### 6. Contact Page

**URL:** `/contact`

**Content:**
- **Cal.com booking embed** — primary element, prominently placed
- **Email address** — displayed with mailto link
- **Social media links** — Instagram, LinkedIn, Twitter/X, YouTube (as applicable)
- Clean, focused layout — no contact form (cal.com handles scheduling)

---

## Navigation

### Header
- **Logo** (left)
- **Navigation links** (center or right): Home, About, Services, Portfolio, Talent, Contact
- **CTA button** (right): "Book a Call" → cal.com
- Sticky/fixed header on scroll
- Mobile: hamburger menu with smooth slide-in/fade animation

### Footer
- Logo
- Navigation links (mirror header)
- Social media icons
- Email address
- Copyright notice
- Optional: brief tagline or one-line description

---

## SEO Requirements

### Technical SEO

- **Server-side rendering (SSR) or Static Generation (SSG)** for all pages via Next.js
- **Semantic HTML** — proper heading hierarchy (single H1 per page), landmark elements, structured sections
- **Meta tags** on every page:
  - Unique `<title>` tag (under 60 chars)
  - Unique `<meta description>` (under 160 chars)
  - Open Graph tags (og:title, og:description, og:image, og:url)
  - Twitter Card tags
- **Structured data (JSON-LD):**
  - Organization schema on all pages
  - LocalBusiness schema (if applicable)
  - BreadcrumbList schema
  - WebSite schema with search action
- **Sitemap.xml** — auto-generated
- **Robots.txt** — properly configured
- **Canonical URLs** on all pages
- **Image optimization:**
  - Next.js `<Image>` component for all images
  - WebP format with fallbacks
  - Descriptive alt text on all images
  - Lazy loading for below-fold images

### On-Page SEO

- **Target keyword clusters:**
  - Primary: "talent management agency", "talent management company", "creator talent management"
  - Secondary: "influencer management agency India", "creator management agency", "brand collaboration agency"
  - Long-tail: "talent management agency for influencers", "creator economy talent management", "influencer brand deals agency"
- **Content optimization:**
  - Keywords naturally integrated into headings, body copy, and meta tags
  - Internal linking between pages (services ↔ about, talent ↔ services, etc.)
  - Descriptive, keyword-rich URLs (already handled by the route structure)

### Performance (SEO Impact)

- **Core Web Vitals targets:**
  - LCP (Largest Contentful Paint): < 2.5s
  - FID (First Input Delay): < 100ms
  - CLS (Cumulative Layout Shift): < 0.1
- **Lighthouse score:** 90+ across Performance, Accessibility, Best Practices, SEO
- **Mobile-first** — Google uses mobile-first indexing
- Font loading optimized (preload critical fonts, font-display: swap)
- Minimal JavaScript bundle — code split per route

---

## Non-Functional Requirements

### Performance
- Page load time under 3 seconds on 3G mobile
- Optimized images, fonts, and JavaScript bundles
- Edge caching via Vercel CDN

### Accessibility
- WCAG 2.1 AA compliance
- Keyboard navigable
- Screen reader friendly (proper ARIA labels, semantic HTML)
- Sufficient color contrast ratios
- `prefers-reduced-motion` support for all animations

### Browser Support
- Chrome, Firefox, Safari, Edge (latest 2 versions)
- iOS Safari, Chrome for Android

### Responsive Breakpoints
- Mobile: 320px–767px
- Tablet: 768px–1023px
- Desktop: 1024px+
- Max content width: ~1280px

---

## Data Files Structure

Since there's no CMS, content will be managed through TypeScript data files:

```
/data/
  creators.ts      — Talent roster entries (name, photo, niche, socials)
  clients.ts       — Portfolio logo entries (name, logo image)
  services.ts      — Service definitions (title, description, details)
  siteConfig.ts    — Global config (company name, email, socials, cal.com URL)
```

---

## Deployment & Infrastructure

- **Hosting:** Vercel
- **Domain:** dygotalent.com (existing domain — DNS to be pointed to Vercel)
- **SSL:** Automatic via Vercel
- **Analytics:** Google Analytics 4 (GA4)
- **Search Console:** Google Search Console integration
- **Environment:** Production only (no staging needed initially)

---

## Out of Scope

- Blog / content publishing system (deferred)
- CMS integration
- User authentication / login
- E-commerce / payments
- Multi-language / i18n
- Individual creator profile pages
- Case studies or detailed portfolio breakdowns
- Contact form (cal.com handles all bookings)
- Email marketing integration
- A/B testing infrastructure

---

## Resolved Details

- **Cal.com URL:** https://cal.com/dygo-talent
- **Email:** contact@dygotalent.com
- **Social media:** Instagram — https://www.instagram.com/dygotalent/

## Open Questions

1. **Creator data** — How many creators are currently on the roster? Do you have photos and details ready?
2. **Client logos** — How many brand logos do you have? Are they available as image files?
3. **About page content** — Do you have existing copy for the company story/mission, or does this need to be written?
4. **Existing assets** — Do you have the DygoTalent logo in SVG format?
5. **Google Analytics** — Do you have an existing GA4 property, or do we need to create one?
6. **Additional social media** — Are there any other social accounts beyond Instagram (LinkedIn, Twitter/X, YouTube)?

---

## Implementation Phases

### Phase 1: Foundation (MVP)
- Project setup (Next.js, Tailwind, TypeScript, Framer Motion)
- Global layout (header, footer, navigation)
- Home page (hero + services + CTA)
- Contact page (cal.com embed + email + socials)
- SEO foundation (meta tags, structured data, sitemap, robots.txt)
- Vercel deployment

### Phase 2: Content Pages
- About page
- Services page (detailed)
- Portfolio page (logo wall)
- Talent Roster page (creator grid)
- Internal linking and on-page SEO optimization

### Phase 3: Polish
- Premium animations throughout (scroll triggers, page transitions, micro-interactions)
- Performance optimization (Lighthouse 90+)
- Accessibility audit and fixes
- Final SEO audit
- Mobile responsiveness QA
