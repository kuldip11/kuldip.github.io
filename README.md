# Kuldip Kumar Sah — Portfolio

Next.js 16 + React 19 + TypeScript portfolio for **Kuldip Kumar Sah**, Senior Frontend Engineer focused on frontend architecture, scalable product systems, performance, accessibility, testing, and product-quality user experiences.

The portfolio uses a restrained editorial design system and includes project case studies, engineering articles, résumé content, professional light/dark themes, and a server-backed portfolio assistant.

## Highlights

- Responsive desktop, tablet, and mobile layouts
- Semantic design tokens with professional light and dark themes
- Data-driven homepage, résumé, project, article, navigation, footer, and chat content
- Generic project/article slug routes with static params and metadata
- Detailed Servora and TallyLite engineering case studies
- Accessible keyboard navigation, skip link, mobile focus management, and reduced-motion support
- SEO metadata, sitemap, canonical URLs, OpenGraph/Twitter metadata, and structured data
- Server-side chat validation, origin protection, state signing, and rate limiting
- Hardcoded-color and hardcoded-content regression guards
- Vitest component/unit coverage and Playwright E2E coverage

## Featured Work

### Servora

Servora is the flagship project: a multi-application restaurant platform spanning Admin/POS, Kitchen, Waiter, Customer, Website, shared packages, and a server-authoritative API. The case study covers multi-tenancy, pricing/availability authority, realtime behavior, permissions, shared contracts, testing, and operational architecture.

### TallyLite

TallyLite is a lightweight business application built around Google Sheets as a user-owned datastore. Its case study covers inventory, invoicing, payments, GST handling, imports/exports, backup/recovery, and repository-driven persistence architecture.

## Main Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Bun
- Vitest
- Playwright
- Node.js

## Run Locally

The repository is Bun-first.

```bash
bun install
cp .env.example .env.local
bun run dev
```

A production build requires a canonical site URL:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.example bun run build
bun run start
```

## Quality Commands

```bash
bun run typecheck
bun run lint
bun run format:check
bun run check:colors
bun run check:content
bun run test
bun run test:coverage
bun run build
bun run test:e2e
```

The standard verification command runs the main non-browser release checks:

```bash
bun run verify
```

For the complete release gate, including coverage and Playwright:

```bash
bun run verify:full
```

`check:colors` prevents raw presentation colors from drifting back into application TS/TSX. `check:content` prevents user-facing portfolio copy and accessibility/presentation labels from being hardcoded directly in TSX instead of the typed constants/data layer.

## Environment

Copy `.env.example` to `.env.local` and provide only the values needed for the features you are running. `NEXT_PUBLIC_SITE_URL` is required for production builds so canonical URLs and social metadata are correct.

The portfolio assistant also uses server-side environment variables for provider access, signed challenge state, optional private-mode behavior, and optional shared Redis rate limiting. Do not expose server secrets through `NEXT_PUBLIC_*` variables.

## Architecture

The application keeps content and presentation intentionally separate:

- `app/` — Next.js routes and metadata entry points
- `components/` — structural, feature, and reusable UI components
- `constants/data/` — projects, articles, experience, skills, social/profile data
- `constants/pages/` — page-specific presentation copy/configuration
- `constants/ui/` — accessibility, system-page, and theme constants
- `lib/` — route/data/SEO helpers
- `server/` — portfolio assistant server/security logic
- `tests/` — unit/component and Playwright E2E coverage
- `docs/` — architecture/refactor history and the UI redesign plan/status tracker

See [`docs/PORTFOLIO_UI_REDESIGN_PLAN.md`](./docs/PORTFOLIO_UI_REDESIGN_PLAN.md) for the redesign specification and [`docs/PORTFOLIO_UI_REDESIGN_STATUS.md`](./docs/PORTFOLIO_UI_REDESIGN_STATUS.md) for the implementation tracker.
