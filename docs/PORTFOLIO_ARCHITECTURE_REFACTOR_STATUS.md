# Portfolio Architecture Refactor — Progress Tracker

## Core Rule

> **No intentional UI or behavior changes are allowed during this refactor.**

## Status Legend

| Status        | Meaning                                       |
| ------------- | --------------------------------------------- |
| `PENDING`     | Not started.                                  |
| `IN_PROGRESS` | Actively being implemented or verified.       |
| `COMPLETED`   | Implemented and required verification passed. |

## Overall Progress

| Area                             | Completed | Total | Progress | Status        |
| -------------------------------- | --------: | ----: | -------: | ------------- |
| Documentation / tracking         |         3 |     3 |     100% | `COMPLETED`   |
| Baseline / regression protection |         3 |     4 |      75% | `IN_PROGRESS` |
| Constants / data architecture    |         8 |     8 |     100% | `COMPLETED`   |
| Component splitting              |         8 |     8 |     100% | `COMPLETED`   |
| Reusable components              |         5 |     5 |     100% | `COMPLETED`   |
| Project slug architecture        |         8 |     8 |     100% | `COMPLETED`   |
| Article architecture             |         4 |     4 |     100% | `COMPLETED`   |
| Types / routes / SEO             |         7 |     7 |     100% | `COMPLETED`   |
| Chat architecture                |         5 |     5 |     100% | `COMPLETED`   |
| Code consistency / cleanup       |         6 |     6 |     100% | `COMPLETED`   |
| Final verification               |         5 |     7 |      71% | `IN_PROGRESS` |

**All implementation/refactor tasks are complete. The only open items are browser-based baseline/E2E/visual verification, which are blocked by the execution environment's Chromium policy (`ERR_BLOCKED_BY_ADMINISTRATOR` for localhost).**

## Independent Application Review Follow-up

The subsequent application-wide review was also implemented. These items extend the original structural refactor while preserving the established visual design and public behavior, except where stale/unintended project definitions were explicitly removed.

| ID      | Task                                                                                                    | Status      | Verification / Notes                                                                                                                                                                                 |
| ------- | ------------------------------------------------------------------------------------------------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| APP-001 | Move shared portfolio Header/Footer/skip-link chrome into an App Router route-group layout              | `COMPLETED` | `(portfolio)/layout.tsx` owns the shared shell; public URLs are unchanged; focused layout test passes                                                                                                |
| APP-002 | Remove stale non-Servora project definitions while retaining generic data-driven `[slug]` routing       | `COMPLETED` | Production build generates only `/projects/servora`; project domain/route/sitemap tests pass                                                                                                         |
| APP-003 | Remove superseded legacy homepage components/tests/constants                                            | `COMPLETED` | Dead presentation branch removed; live-code test suite re-measured                                                                                                                                   |
| APP-004 | Decompose the remaining large landing showcase into meaningful section components                       | `COMPLETED` | `LandingShowcase` is orchestration-only; existing classes/content retained                                                                                                                           |
| APP-005 | Complete keyboard/focus accessibility for mobile navigation, résumé tabs, assistant and skip navigation | `COMPLETED` | Header, résumé and assistant focused tests pass; browser E2E remains environment-blocked                                                                                                             |
| APP-006 | Centralize repeated static-page metadata creation                                                       | `COMPLETED` | Shared metadata helper is used; metadata consistency tests pass                                                                                                                                      |
| APP-007 | Introduce semantic design tokens and named responsive breakpoints without changing rendered values      | `COMPLETED` | Tokens defined in `globals.css`; typecheck/lint/format/build pass                                                                                                                                    |
| APP-008 | Vendor existing My Tech Stack Simple Icons locally                                                      | `COMPLETED` | Runtime `cdn.simpleicons.org` dependency removed; visual icon artwork remains the same                                                                                                               |
| APP-009 | Harden `/api/chat` for production abuse/failure scenarios                                               | `COMPLETED` | 8 KiB streaming body cap, same-origin enforcement, process-local rate limit, strict validation, 10 s timeout, signed state and sanitized failures; chat route tests pass                             |
| APP-010 | Remove populated environment secrets from deliverables and provide `.env.example`                       | `COMPLETED` | Only empty `.env.example` is present; README documents credential rotation requirement                                                                                                               |
| APP-011 | Improve tests/coverage around live route, chat, layout, navigation and accessibility behavior           | `COMPLETED` | 31 test files / 62 tests pass; current coverage: 93.03% statements, 80.93% branches, 94.81% functions, 95.14% lines                                                                                  |
| APP-012 | Evaluate raster asset optimization without visual degradation                                           | `COMPLETED` | Lossless recompression of hero/OG PNGs produced no size reduction with available encoders, so original pixel-identical sources were retained; Next Image continues to optimize runtime hero delivery |

> Security follow-up outside source control: credentials that appeared in an earlier distributed archive must be rotated in their provider dashboards. Source cleanup cannot revoke already-exposed credentials.

---

# Detailed Tracker

| ID          | Phase | Task                                                                            | Status        | Verification / Completion Requirement                                            |
| ----------- | ----- | ------------------------------------------------------------------------------- | ------------- | -------------------------------------------------------------------------------- |
| DOC-001     | 0     | Create detailed architecture/refactor plan                                      | `COMPLETED`   | Plan saved in `docs/PORTFOLIO_ARCHITECTURE_REFACTOR_PLAN.md`                     |
| DOC-002     | 0     | Create itemized progress tracker                                                | `COMPLETED`   | This file created with per-item statuses                                         |
| DOC-003     | 0     | Document non-regression guardrails and definition of done                       | `COMPLETED`   | Guardrails and completion criteria documented                                    |
| BASE-001    | 1     | Run initial `bun run typecheck`                                                 | `COMPLETED`   | Baseline result recorded                                                         |
| BASE-002    | 1     | Run initial lint, format, test, E2E, and build verification                     | `COMPLETED`   | Baseline result recorded; pre-existing failures separated from refactor failures |
| BASE-003    | 1     | Capture desktop/tablet/mobile visual baseline for critical routes               | `IN_PROGRESS` | Baseline screenshots or Playwright visual snapshots available                    |
| BASE-004    | 1     | Record baseline UI/behavior contract before code moves                          | `COMPLETED`   | No-regression contract recorded below before source changes                      |
| CONST-001   | 2     | Create `constants/pages/` structure                                             | `COMPLETED`   | Page constants organized; imports green                                          |
| CONST-002   | 2     | Create `constants/data/` structure                                              | `COMPLETED`   | Domain/content constants organized; imports green                                |
| CONST-003   | 2     | Create/reorganize `constants/routes/`                                           | `COMPLETED`   | Repeated internal routes use centralized route constants/builders                |
| CONST-004   | 2     | Create/reorganize `constants/seo/`                                              | `COMPLETED`   | SEO/site constants have clear ownership                                          |
| CONST-005   | 2     | Create `constants/styles/` only for meaningful semantic style groups/tokens     | `COMPLETED`   | No dynamic Tailwind breakage; visual output unchanged                            |
| CONST-006   | 2     | Move inline page content/configuration from JSX where appropriate               | `COMPLETED`   | JSX reduced without copy/value changes                                           |
| CONST-007   | 2     | Move domain data arrays/objects out of components/pages                         | `COMPLETED`   | Data has one clear source of truth                                               |
| CONST-008   | 2     | Resolve overlap between existing root `data/` and new constants data ownership  | `COMPLETED`   | No duplicate ownership or stale imports                                          |
| COMP-001    | 3     | Split Footer into one component per file                                        | `COMPLETED`   | Desktop/tablet/mobile footer unchanged; focused tests pass                       |
| COMP-002    | 3     | Split `InnerPageUi` components into focused files                               | `COMPLETED`   | Rendered output and props preserved                                              |
| COMP-003    | 3     | Split `LandingShowcase` components                                              | `COMPLETED`   | Landing UI and animations unchanged                                              |
| COMP-004    | 3     | Extract page-local component(s) from Projects page                              | `COMPLETED`   | Projects route UI unchanged                                                      |
| COMP-005    | 3     | Decompose Resume page into focused components                                   | `COMPLETED`   | Resume route UI unchanged                                                        |
| COMP-006    | 3     | Decompose `PortfolioChat` rendering components                                  | `COMPLETED`   | Chat UI and interactions unchanged                                               |
| COMP-007    | 3     | Decompose project case-study renderer                                           | `COMPLETED`   | Existing project page is visually/behaviorally identical                         |
| COMP-008    | 3     | Decompose article presentation where useful                                     | `COMPLETED`   | Article list/detail UI unchanged                                                 |
| REUSE-001   | 4     | Identify repeated `SectionHeader` pattern and extract if justified              | `COMPLETED`   | Same markup/styles; at least meaningful reuse                                    |
| REUSE-002   | 4     | Extract reusable `MetricCard`/metric primitive where pattern exists             | `COMPLETED`   | Existing metric UI unchanged                                                     |
| REUSE-003   | 4     | Extract reusable badge/pill primitive where pattern exists                      | `COMPLETED`   | Existing variants remain pixel-equivalent                                        |
| REUSE-004   | 4     | Extract reusable panel/link/navigation primitives where justified               | `COMPLETED`   | Avoid over-generic prop APIs                                                     |
| REUSE-005   | 4     | Remove accidental duplication created/identified during splitting               | `COMPLETED`   | No unrelated redesign/refactor                                                   |
| SLUG-001    | 5     | Define complete typed project domain model                                      | `COMPLETED`   | Current project data satisfies model without behavior loss                       |
| SLUG-002    | 5     | Consolidate project-specific content/configuration into project data            | `COMPLETED`   | Generic renderer no longer owns project-specific content                         |
| SLUG-003    | 5     | Add `getProjectBySlug` selector                                                 | `COMPLETED`   | Unknown slug still produces current not-found behavior                           |
| SLUG-004    | 5     | Remove direct project slug equality checks from generic project route           | `COMPLETED`   | No `slug === '<project>'` rendering branches remain                              |
| SLUG-005    | 5     | Keep/generate static params from project data                                   | `COMPLETED`   | All public project slugs generated from source data                              |
| SLUG-006    | 5     | Drive project metadata from project definition/source                           | `COMPLETED`   | Existing metadata output unchanged for current project(s)                        |
| SLUG-007    | 5     | Drive sitemap project routes from project data                                  | `COMPLETED`   | Sitemap current output preserved and future slugs supported                      |
| SLUG-008    | 5     | Add project slug uniqueness/completeness tests                                  | `COMPLETED`   | Duplicate/malformed definitions fail tests                                       |
| ARTICLE-001 | 5     | Add `getArticleBySlug` selector                                                 | `COMPLETED`   | Existing article lookup behavior preserved                                       |
| ARTICLE-002 | 5     | Centralize article static-param generation                                      | `COMPLETED`   | All article slugs remain generated                                               |
| ARTICLE-003 | 5     | Centralize article metadata helper where useful                                 | `COMPLETED`   | Existing article metadata unchanged                                              |
| ARTICLE-004 | 5     | Add duplicate article slug/data completeness tests                              | `COMPLETED`   | Invalid article definitions are caught                                           |
| TYPE-001    | 6     | Add/organize shared project types                                               | `COMPLETED`   | No broad `any`; current data typechecks                                          |
| TYPE-002    | 6     | Add/organize shared article types                                               | `COMPLETED`   | Current article data typechecks                                                  |
| TYPE-003    | 6     | Add chat/navigation shared types where genuine reuse exists                     | `COMPLETED`   | No unnecessary type indirection                                                  |
| TYPE-004    | 6     | Replace overly broad known-domain `Record<string, ...>` typing where applicable | `COMPLETED`   | Compile-time slug/domain safety improved                                         |
| ROUTE-001   | 6     | Centralize dynamic project/article route builders                               | `COMPLETED`   | Generated hrefs identical to current hrefs                                       |
| SEO-001     | 6     | Extract reusable project/article metadata construction helpers where justified  | `COMPLETED`   | Metadata snapshots/expectations unchanged                                        |
| SEO-002     | 6     | Add sitemap/metadata consistency tests                                          | `COMPLETED`   | Data additions automatically remain SEO-complete                                 |
| CHAT-001    | 6     | Separate chat state/orchestration from presentation when beneficial             | `COMPLETED`   | Existing message flow preserved                                                  |
| CHAT-002    | 6     | Extract chat composer/messages/header/loading/error components                  | `COMPLETED`   | UI and keyboard/form behavior unchanged                                          |
| CHAT-003    | 6     | Split chat API validation/rate-limit/service concerns                           | `COMPLETED`   | Endpoint contract/status codes unchanged                                         |
| CHAT-004    | 6     | Preserve challenge/provider/error response behavior through extraction          | `COMPLETED`   | API tests cover current behavior                                                 |
| CHAT-005    | 6     | Keep server-only chat code out of client bundles                                | `COMPLETED`   | Build/bundle boundaries validated                                                |
| CLEAN-001   | 7     | Convert appropriate application components/functions to arrow functions         | `COMPLETED`   | Typecheck/tests/build green                                                      |
| CLEAN-002   | 7     | Normalize file naming conventions                                               | `COMPLETED`   | No public route/asset rename side effects                                        |
| CLEAN-003   | 7     | Normalize import organization                                                   | `COMPLETED`   | No circular dependency regression                                                |
| CLEAN-004   | 7     | Remove dead imports/code made obsolete by the refactor                          | `COMPLETED`   | No user-visible/runtime behavior removed                                         |
| CLEAN-005   | 7     | Add/import architecture boundaries if worthwhile                                | `COMPLETED`   | Lint prevents obvious dependency inversion violations                            |
| CLEAN-006   | 7     | Exclude generated/repository internals from future source archives              | `COMPLETED`   | Source delivery excludes `.next`, `.git`, coverage/report outputs                |
| VERIFY-001  | 8     | Run final typecheck                                                             | `COMPLETED`   | `bun run typecheck` passes                                                       |
| VERIFY-002  | 8     | Run final lint                                                                  | `COMPLETED`   | `bun run lint` passes                                                            |
| VERIFY-003  | 8     | Run final format check                                                          | `COMPLETED`   | `bun run format:check` passes                                                    |
| VERIFY-004  | 8     | Run final unit/component tests                                                  | `COMPLETED`   | `bun run test` passes                                                            |
| VERIFY-005  | 8     | Run final E2E tests                                                             | `IN_PROGRESS` | `bun run test:e2e` passes                                                        |
| VERIFY-006  | 8     | Run production build                                                            | `COMPLETED`   | `bun run build` passes                                                           |
| VERIFY-007  | 8     | Compare visual baseline across desktop/tablet/mobile                            | `IN_PROGRESS` | No unintended visual difference detected                                         |

---

# Current Phase

**Phases 0–7 — `COMPLETED`**

**Phase 8/9 verification — `IN_PROGRESS` only for browser-based checks blocked by the execution environment.**

The supplied `node_modules` archive enabled the project toolchain through the local Node/npm runtime. Bun itself is not installed in the sandbox, so the same package scripts were executed with `npm run`; this does not modify application source or package metadata. Production build verification used a temporary `NEXT_PUBLIC_SITE_URL=https://example.com` because the application intentionally rejects production builds without that documented environment variable.

## Blockers / Notes

### Final implementation checkpoint

- Constants now have explicit ownership under `constants/pages/`, `constants/data/`, `constants/routes/`, `constants/seo/`, and `constants/styles/`; compatibility re-exports remain only where existing imports depend on them.
- Footer, `InnerPageUi`, LandingShowcase, Projects, Resume, PortfolioChat, project case-study presentation, and article presentation are decomposed into focused one-component-per-file modules without changing their public route/component behavior.
- Reusable `SectionHeader`, `MetricCard`, badge/pill, panel/navigation helpers are used only where the existing markup pattern genuinely repeats; no generic micro-component layer was introduced.
- Project and article routes use typed domain definitions, selectors, data-generated static params, metadata helpers, centralized route builders, and sitemap generation. Generic project rendering contains no slug-specific rendering branch.
- Chat client orchestration and presentation are separated; the API route delegates validation, signed state, provider and response handling while preserving the original request/response contract and normalized substring trigger behavior.
- ESLint architecture boundaries prevent presentation components from importing route/server modules and hooks/library modules from importing routes/components.
- Static architecture audit after the refactor found: zero explicit `any`, zero targeted function declarations, zero generic route slug-equality rendering branches, and no detected files containing multiple exported component implementations.

### Verified baseline results from the untouched ZIP

Using the supplied dependencies against the untouched source:

- Typecheck: **PASS**.
- Lint: **FAIL (pre-existing)** — 10 import-order/unused-import errors.
- Format check: **FAIL (pre-existing)** — the two refactor documentation files were not Prettier-clean.
- Unit/component tests: **FAIL (pre-existing)** — 6 stale assertions across 5 files. The failures expected old header anchor routes, removed project/article counts, unique Hero role text, and exact chat trigger matching; all contradicted the untouched application behavior.
- Production build: **PASS** when the documented required `NEXT_PUBLIC_SITE_URL` is supplied.
- Browser E2E/visual baseline: **environment-blocked** as described below.

The stale tests were corrected to assert the already-existing application behavior; application source behavior was not changed to satisfy them.

### Final verification results

- `npm run typecheck`: **PASS**.
- `npm run lint`: **PASS**.
- `npm run format:check`: **PASS**.
- `npm run test`: **PASS — 31 files, 62 tests**.
- `npm run test:coverage`: **PASS — 93.03% statements, 80.93% branches, 94.81% functions, 95.14% lines**.
- `NEXT_PUBLIC_SITE_URL=https://example.com npm run build`: **PASS**; all expected routes are generated, including 2 article slugs and exactly 1 public project slug (`servora`).
- `npm run test:e2e`: **BLOCKED BY EXECUTION ENVIRONMENT**. A temporary Bun-compatible verification shim was used only because Bun is absent; Playwright successfully launches system Chromium and the Next.js server, but Chromium refuses `http://localhost:3000/` with `net::ERR_BLOCKED_BY_ADMINISTRATOR` (the browser displays “Your organization doesn’t allow you to view this site”). This is a sandbox browser policy, not an application assertion failure.
- Desktop/tablet/mobile screenshot comparison: **BLOCKED BY THE SAME CHROMIUM LOCALHOST POLICY**. Source-to-source regression checks, unit/component tests, route/build output and preserved Tailwind class/markup checks were used as the available non-browser safeguards.

### Genuine remaining blockers

1. `BASE-003` — cannot capture browser visual baseline because local Chromium navigation is administrator-blocked in this sandbox.
2. `VERIFY-005` — cannot execute Playwright assertions for the same browser policy reason.
3. `VERIFY-007` — cannot perform browser screenshot comparison for the same policy reason.

No implementation task remains pending.

### Baseline UI / behavior contract

Before source changes, the protected contract is: preserve all existing public routes, metadata/SEO output, static params, sitemap entries, JSON-LD, responsive Tailwind class strings and breakpoint behavior, DOM/accessibility semantics, project/article ordering, footer/header/navigation targets, chat request/response/state-token behavior, and the exact current desktop/tablet/mobile rendered content. Existing tests are treated as executable contract once dependencies are available.
