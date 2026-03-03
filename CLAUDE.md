# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev              # Start dev server (http://localhost:3000)
npm run build            # Production build
npm run lint             # ESLint
npm test                 # Run all tests (Jest + React Testing Library)
npm run test:watch       # Watch mode
npm test -- path/to/file # Run a single test file
```

## Architecture

Next.js 16 App Router site with TypeScript, Tailwind CSS v4, and Framer Motion. All pages are statically generated.

### Server/Client Split Pattern

Every page follows a two-component pattern:
- **Server component** (`src/app/*/page.tsx`) — exports Next.js `Metadata`, imports and renders the client content component
- **Client component** (`src/components/pages/*Content.tsx`) — marked `'use client'`, contains all UI with Framer Motion animations

```
src/app/about/page.tsx (server, exports metadata)
  └── src/components/pages/AboutContent.tsx (client, animations)
```

Home page is different: it composes section components directly (`Hero`, `ServicesOverview`, `CTASection` from `src/components/sections/`).

### Data Layer

No CMS. Content lives in TypeScript data files at `src/data/`:
- `siteConfig.ts` — nav links, cal.com URL, email, social URLs (imported everywhere)
- `services.ts` — service definitions with `Service` interface
- `creators.ts` — talent roster with `Creator` interface
- `clients.ts` — portfolio brands with `Client` interface
- `team.ts` — team member profiles with `TeamMember` interface

### SEO

- Page metadata via Next.js `Metadata` exports (title, description, OG, Twitter, canonical)
- JSON-LD structured data (Organization, WebSite, BreadcrumbList) rendered in `src/app/layout.tsx`
- Schema generators in `src/lib/seo.ts`
- Auto-generated `sitemap.ts` and `robots.ts` in app root

### Styling

Tailwind CSS v4 with theme defined in `src/app/globals.css` using `@theme`:
- Brand color: `--color-red-brand: #DD183B`
- Heading font: `--font-heading: Syncopate` (bold, uppercase)
- Body font: `--font-body: Inter`
- Fonts loaded via `next/font/google` with CSS variables in `src/app/layout.tsx`

`src/lib/utils.ts` exports `cn()` for conditional class merging.

### Animation Pattern

Client components define Framer Motion variants at module level:
```tsx
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }
```
All CSS animations respect `prefers-reduced-motion` via a global media query in `globals.css`.

## Testing

Jest with `jest-environment-jsdom` and `@testing-library/react`. Tests live in `__tests__/` directories alongside their source.

Framer Motion must be mocked in component tests — see `src/components/layout/__tests__/Header.test.tsx` for the mock pattern. `next/link` and `next/image` are also mocked.

Path alias `@/*` maps to `src/*` in both TypeScript and Jest configs.

## Key Conventions

- Import alias: `@/` for `src/` (e.g., `import { siteConfig } from '@/data/siteConfig'`)
- All external links use `target="_blank"` with `rel="noopener noreferrer"` and `aria-label` indicating new tab
- Decorative SVGs get `aria-hidden="true"`
- Multiple `<nav>` elements have distinguishing `aria-label` values
- Max content width: `max-w-7xl` (1280px)
- Responsive breakpoints: mobile-first, `sm:` (640px), `md:` (768px), `lg:` (1024px)
