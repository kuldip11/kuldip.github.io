# Kuldip Portfolio

Minimal Next.js 16 + React 19 + Tailwind CSS portfolio prepared for self-hosting.

## Run

```bash
npm install
npm run dev
```

Production:

```bash
npm run build
npm start
```

## Quality commands

```bash
npm run format
npm run format:check
npm run test
npm run test:coverage
```

Prettier is configured with `prettier-plugin-tailwindcss`, so inline Tailwind utility classes are formatted and sorted consistently.

The Vitest suite mirrors the TypeScript/TSX source tree under `app/`, `components/`, and `data/`. It covers route metadata, SEO files, structured data, page/component rendering, navigation, portfolio data, and deployed Servora links.

## Required production configuration

Copy `.env.example` to `.env.production` or configure these values in your hosting environment:

- `NEXT_PUBLIC_SITE_URL` — canonical HTTPS production origin, with no trailing slash.
- `GOOGLE_SITE_VERIFICATION` — optional Google Search Console verification token.
- `BING_SITE_VERIFICATION` — optional Bing Webmaster Tools verification token.

Use one canonical hostname and redirect HTTP and any alternate `www`/non-`www` hostname to it at your reverse proxy or hosting layer.

## Portfolio routes

- `/projects` — selected engineering case studies and live Servora samples.
- `/articles` — technical frontend engineering articles.
- `/about` — profile and engineering background.
- `/resume` — HTML résumé, PDF download, and live Servora links.
- `/robots.txt` — crawler policy.
- `/sitemap.xml` — public route discovery.

The homepage includes ProfilePage + Person JSON-LD. Project case studies use Article JSON-LD and technical articles use BlogPosting JSON-LD.

## Servora live samples

The portfolio exposes the same Servora applications linked from the PDF résumé: Website, Admin/POS, Kitchen, Waiter, Customer, and GitHub. The deployed API endpoint is also included on the Servora case-study and HTML résumé pages as a technical reference.
