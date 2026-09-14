# Kuldip Kumar Sah — Senior Frontend Engineer

This repository powers my personal portfolio: a place where I document the products I build, the frontend decisions behind them, and the kind of engineering work I enjoy doing.

I’m **Kuldip Kumar Sah**, a Senior Frontend Engineer working primarily with **React, Next.js and TypeScript**. My focus is not only on building screens; I care about how frontend systems stay understandable as products grow—component boundaries, shared contracts, performance, accessibility, testing, security and the small product details that make software easier to use.

I currently work at **Software Workshop**, where I work on enterprise product delivery and frontend architecture. Before that I built frontend products across restaurant operations and other workflow-heavy applications. My portfolio reflects that progression: from implementing product flows to thinking more deeply about system boundaries, reusable architecture and end-to-end product quality.

## What you’ll find here

The portfolio is intentionally more than a résumé page.

- **Servora** — my flagship restaurant operations platform spanning Admin/POS, Kitchen, Waiter, Customer and Website experiences around a server-authoritative API.
- **TallyLite** — a business application that uses a user-owned Google Sheet as its datastore while keeping persistence concerns behind repository boundaries.
- **Résumé and experience** — the work I’ve done, the responsibilities I’ve taken on and the technologies I use most.
- **Engineering articles** — practical notes from building these products. This entire section is feature-flagged and can be disabled for a deployment without changing the code.
- **Portfolio assistant** — a server-backed assistant that answers questions using portfolio data only.

## The engineering approach behind the portfolio

A few rules used in the projects also shape this repository:

- Components render structure; portfolio copy and data live in typed constants/data files.
- Raw presentation colors do not live inside components; semantic design tokens control the visual system.
- Reusable abstractions are added when they represent a real shared concept, not simply because two class strings look alike.
- Accessibility, responsive behavior and SEO are covered as product requirements rather than cleanup tasks.
- Critical browser flows are protected with Playwright, while smaller behavior is kept in faster unit/component tests.

The UI uses a restrained editorial design with professional light and dark themes. It is designed intentionally for desktop, tablet and mobile instead of treating mobile as a compressed desktop layout.

## Main stack

- Next.js 16
- React 19
- TypeScript 5
- Tailwind CSS 4
- Bun
- Vitest
- Playwright
- Node.js

## Project structure

```text
app/                 Next.js routes, metadata, sitemap and API entry points
components/          Reusable UI and feature components
constants/
  config/            Feature flags and deploy-time configuration
  data/              Projects, articles, experience, skills and profile data
  pages/             Page-specific copy and presentation configuration
  ui/                Theme, accessibility and system UI constants
lib/                 Domain helpers, route helpers and SEO utilities
server/              Portfolio-assistant server and security logic
tests/               Unit/component tests, Playwright E2E and visual QA
docs/                Architecture history and redesign documentation
```

## Run locally

The repository is Bun-first.

```bash
bun install
cp .env.example .env.local
bun run dev
```

The default `.env.example` keeps all public portfolio sections enabled.

A production build requires the canonical deployment URL:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.example bun run build
```

Then run:

```bash
bun run start
```

## Article feature flag

The Articles area is controlled by one public build-time flag:

```env
NEXT_PUBLIC_ARTICLES_ENABLED=true
```

To remove Articles from a deployment, change it to:

```env
NEXT_PUBLIC_ARTICLES_ENABLED=false
```

and redeploy/rebuild the application.

When disabled:

- Articles disappears from the desktop and mobile navigation.
- Article links are removed from the footer.
- The Projects page no longer promotes Engineering Articles.
- Article URLs are removed from the sitemap.
- The portfolio assistant receives no article context and does not advertise article knowledge.
- `/articles` returns 404.
- `/articles/[slug]` returns 404.

The flag is intentionally `NEXT_PUBLIC_*` because the same build-time value is needed by both server-rendered routes and client navigation. It contains no secret information.

## Managed résumé with Vercel Blob

The public résumé URL is intentionally stable:

```text
/resume.pdf
```

The UI never links directly to a Blob URL. `app/resume.pdf/route.ts` reads the current PDF from `RESUME_BLOB_URL` and streams it back as a download. If Blob is not configured or temporarily unavailable, the route falls back to the bundled `public/Kuldip_Kumar_Sah.pdf`.

### One-time Vercel setup

1. Create a **public Vercel Blob** store and connect it to this Vercel project.
2. Upload the résumé using a stable pathname such as:

   ```text
   resume/Kuldip_Kumar_Sah.pdf
   ```

3. Do not add a random suffix to that pathname. Copy the resulting public Blob URL.
4. Add that URL to the Vercel project environment:

   ```env
   RESUME_BLOB_URL=https://<store>.public.blob.vercel-storage.com/resume/Kuldip_Kumar_Sah.pdf
   ```

5. Redeploy once so the initial environment variable is available.

### Updating the résumé later

Overwrite the same Blob pathname (`resume/Kuldip_Kumar_Sah.pdf`) with the new PDF. Keep `allowOverwrite: true` when using the Blob SDK. Because the pathname and Blob URL stay the same, the portfolio continues serving `/resume.pdf` without a source-code change or redeploy.

Vercel Blob/CDN caches can take roughly a minute to reflect an overwrite. The portfolio route itself uses `no-store`, but a recently overwritten public Blob can still take a short time to propagate at the Blob edge.

`RESUME_BLOB_URL` is server-only and must **not** use the `NEXT_PUBLIC_` prefix.

## Portfolio assistant environment

The assistant is optional. The relevant environment variables are documented in `.env.example`.

At minimum, provider-backed chat requires server-side credentials such as:

```env
GEMINI_API_KEY=
CHAT_SESSION_SECRET=
```

Do not place secrets in `NEXT_PUBLIC_*` variables.

Optional Redis settings support shared rate limiting across deployments:

```env
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=
```

## Quality commands

```bash
bun run typecheck
bun run lint
bun run format:check
bun run check:colors
bun run check:content
bun run test
bun run test:coverage
NEXT_PUBLIC_SITE_URL=https://your-domain.example bun run build
bun run test:e2e
bun run visual:qa
```

Run the main non-browser verification with:

```bash
bun run verify
```

Run the full release gate, including coverage and Playwright, with:

```bash
bun run verify:full
```

The browser suite uses a clean Next.js dev cache and serial Playwright execution so route compilation is deterministic under Next.js dev mode.

## Visual QA

```bash
bun run visual:qa
```

This captures the main public routes at:

- Mobile — `390 × 844`
- Tablet — `820 × 1180`
- Desktop — `1440 × 1000`

for both light and dark themes. Screenshots are written to `visual-qa/` for manual review.

## Design and content guards

Two small repository checks protect the design architecture:

```bash
bun run check:colors
bun run check:content
```

`check:colors` prevents raw presentation colors from drifting back into application components.

`check:content` protects the data-driven architecture by catching portfolio copy and presentation labels that are hardcoded directly in TSX instead of being supplied from the typed content layer.

## SEO and accessibility

The portfolio includes:

- route-specific metadata and canonical URLs
- OpenGraph and Twitter metadata
- JSON-LD structured data
- sitemap and robots output
- keyboard-accessible navigation
- skip-link support
- mobile focus trapping and focus restoration
- reduced-motion support
- responsive overflow regression checks

## Documentation

The UI redesign was planned and tracked in the repository rather than being implemented as an undocumented visual rewrite.

- [`docs/PORTFOLIO_UI_REDESIGN_PLAN.md`](./docs/PORTFOLIO_UI_REDESIGN_PLAN.md)
- [`docs/PORTFOLIO_UI_REDESIGN_STATUS.md`](./docs/PORTFOLIO_UI_REDESIGN_STATUS.md)
- [`docs/PORTFOLIO_UI_REDESIGN_FINAL_HANDOFF.md`](./docs/PORTFOLIO_UI_REDESIGN_FINAL_HANDOFF.md)

## Contact

If you want to discuss a frontend role, product engineering work, or one of the projects in this portfolio:

- **LinkedIn:** https://linkedin.com/in/kuldip-kumar-sah
- **GitHub:** https://github.com/kuldip11
- **Email:** kuldipkumarsah112@gmail.com

---

Built with Next.js, React and TypeScript — and maintained with the same standards I expect from production frontend work.
