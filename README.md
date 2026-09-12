# Kuldip Portfolio

Next.js 16 + React 19 + Tailwind CSS portfolio for Kuldip Kumar Sah.

## Run locally

The project is Bun-first and also works with the equivalent npm scripts when dependencies are installed with npm.

```bash
bun install
cp .env.example .env.local
bun run dev
```

Production verification requires a canonical site URL:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.example bun run build
bun run start
```

## Quality commands

```bash
bun run typecheck
bun run lint
bun run format:check
bun run test
bun run test:coverage
bun run test:e2e
bun run build
```

Prettier uses `prettier-plugin-tailwindcss`, so Tailwind utility classes are formatted and sorted consistently.

## Environment configuration

Copy `.env.example` to a local ignored environment file or configure the variables in the hosting platform. Never commit or package a populated `.env` file.

Required for production metadata and canonical URLs:

- `NEXT_PUBLIC_SITE_URL` — canonical HTTPS production origin, with no trailing slash.

Required to enable the portfolio assistant:

- `GEMINI_API_KEY` — server-only Gemini API key.
- `CHAT_SESSION_SECRET` — server-only HMAC signing secret for short-lived assistant state tokens.

Optional private assistant mode:

- `SECRET_TEXT` — comma-separated normalized trigger phrases.
- `SECRET_CODE` — challenge answer used only after a configured trigger.
- `PRIVATE_CHATBOT_INSTRUCTIONS` — server-only instructions used after successful private-mode unlock.

Optional search-engine verification:

- `GOOGLE_SITE_VERIFICATION`
- `BING_SITE_VERIFICATION`

Use one canonical hostname and redirect HTTP and alternate `www`/non-`www` hostnames to it at the hosting layer.

> Security note: if a populated environment file has ever been distributed in an archive, rotate the affected API/signing credentials in their respective provider dashboards. Removing the file from a later archive does not revoke previously exposed credentials.

## Application architecture

The App Router uses a route-group shell so the shared portfolio chrome is owned once without changing public URLs:

```text
app/
├── layout.tsx                 # document/global providers + assistant launcher
├── api/chat/route.ts
├── robots.ts
├── sitemap.ts
└── (portfolio)/
    ├── layout.tsx             # skip link + Header + Footer
    ├── page.tsx
    ├── about/page.tsx
    ├── resume/page.tsx
    ├── projects/
    │   ├── page.tsx
    │   └── [slug]/page.tsx
    └── articles/
        ├── page.tsx
        └── [slug]/page.tsx
```

Project and article detail routes remain data-driven. Adding a future project/article definition automatically participates in static params, metadata and sitemap generation without adding slug-specific rendering branches.

The homepage is composed from focused landing-section components rather than one large presentation file. Shared content, navigation, routes, SEO data and page-specific data are owned under `constants/` rather than embedded in generic routes.

## Portfolio routes

- `/` — landing page.
- `/projects` — Servora case study plus the existing coming-soon presentation card.
- `/projects/servora` — Servora engineering case study.
- `/articles` — technical frontend engineering articles.
- `/articles/[slug]` — data-driven article pages.
- `/about` — profile and engineering background.
- `/resume` — HTML résumé with accessible interactive skill tabs and PDF download.
- `/robots.txt` — crawler policy.
- `/sitemap.xml` — public route discovery.

The homepage includes ProfilePage + Person JSON-LD. Project case studies use Article JSON-LD and technical articles use BlogPosting JSON-LD. Static page metadata is built through a shared helper, while project/article metadata stays domain-data-driven.

## Accessibility

The shared layout provides a skip-to-content link. Header navigation derives its active state from the current pathname. The mobile navigation drawer traps keyboard focus while open, closes with Escape, locks background scrolling, and restores focus to the menu button. Résumé skill tabs support click plus ArrowLeft/ArrowRight/Home/End keyboard navigation with roving tab focus. The portfolio assistant supports Escape dismissal and returns focus to its launcher.

## Portfolio assistant security

`POST /api/chat` keeps provider credentials and private-mode configuration on the server. The endpoint currently applies:

- same-origin browser request enforcement,
- an 8 KiB request-body cap checked both by `Content-Length` and while streaming,
- fixed-window per-client rate limiting,
- strict request validation,
- short-lived signed state tokens,
- a 10-second upstream timeout,
- provider interaction storage disabled (`store: false`), and
- sanitized 4xx/5xx responses without forwarding server secrets.

The included rate limiter is deliberately dependency-free and process-local. It protects a single running instance; for strict distributed quotas across many serverless instances, add a hosting/WAF rule or shared KV-backed limiter without changing the route contract.

## Assets

The main raster hero is delivered through `next/image`. Lossless recompression of the hero and Open Graph PNG sources was evaluated, but the available encoders produced no size reduction, so their pixel-identical originals are retained. The My Tech Stack cards preserve the existing Simple Icons artwork and brand colors, but the SVGs are vendored under `public/tech-icons/` so rendering no longer depends on `cdn.simpleicons.org` at runtime.

## Servora live samples

The portfolio exposes the same Servora applications linked from the résumé: Website, Admin/POS, Kitchen, Waiter, Customer, GitHub, and the deployed API technical reference.
