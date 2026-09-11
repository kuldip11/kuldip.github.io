# Portfolio Architecture & Refactoring Plan

## Document Purpose

This document defines the approved structural refactor for the portfolio application. The refactor is intentionally constrained to architecture, maintainability, reuse, consistency, and future scalability.

> **Non-negotiable rule:** The refactor must not change application behavior or UI.

This means no intentional changes to rendered design, copy, responsive behavior, routes, interactions, animations, metadata output, API behavior, accessibility behavior, or business logic unless a separately documented bug is identified and explicitly approved.

## Status Model

Every implementation item is tracked using one of these statuses:

| Status        | Meaning                                                |
| ------------- | ------------------------------------------------------ |
| `PENDING`     | Approved work that has not started yet.                |
| `IN_PROGRESS` | Work is actively being implemented or verified.        |
| `COMPLETED`   | Implementation and required verification are complete. |

The live item-by-item status is maintained in [`PORTFOLIO_ARCHITECTURE_REFACTOR_STATUS.md`](./PORTFOLIO_ARCHITECTURE_REFACTOR_STATUS.md).

---

# 1. Refactor Guardrails

**Status: `PENDING`**

The following rules apply to every phase.

1. Preserve current desktop, tablet, and mobile UI exactly.
2. Preserve current DOM structure wherever practical during extraction.
3. Preserve existing Tailwind class strings and responsive breakpoints during structural moves.
4. Preserve existing colors, spacing, typography, shadows, transitions, gradients, masks, and animations.
5. Preserve all routes and route behavior.
6. Preserve public content and project/article ordering.
7. Preserve metadata, sitemap, robots, canonical URLs, OpenGraph/Twitter data, and JSON-LD behavior.
8. Preserve chat behavior, API response shapes, rate limiting, validation, and error behavior.
9. Do not introduce unrelated refactors while working on a tracked item.
10. Avoid abstraction for its own sake; extract components only when they represent a real responsibility or reusable UI pattern.
11. Do not dynamically construct Tailwind classes in ways that can break static class detection.
12. Keep TypeScript strict and do not weaken typing to simplify refactoring.
13. Every major phase must pass the required verification before being marked `COMPLETED`.

---

# 2. Current Architecture Findings

**Status: `COMPLETED` — audit/documentation only**

The current application already has a strong technical base:

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- ESLint
- Prettier
- Vitest
- Playwright
- Dynamic project and article routes
- Static parameter generation
- Metadata generation
- Sitemap and robots support
- Structured data / JSON-LD
- Existing `constants/` and `data/` directories

The primary opportunity is not a framework rewrite. It is structural discipline: splitting responsibilities, centralizing content/configuration, strengthening data-driven routing, and reducing large multi-purpose files.

### High-value files identified during review

The following files are major candidates for decomposition because they contain multiple responsibilities and/or multiple React components:

- `components/portfolio/LandingShowcase.tsx`
- `components/portfolio/Footer.tsx`
- `components/chat/PortfolioChat.tsx`
- `components/portfolio/InnerPageUi.tsx`
- `app/projects/[slug]/page.tsx`
- `app/resume/page.tsx`
- `app/projects/page.tsx`
- `app/articles/page.tsx`
- `app/api/chat/route.ts`

### Important slug finding

Project routing is partially data-driven already, but the generic project detail route still contains project-specific branching and content. A generic `[slug]` route must not depend on checks such as:

```ts
slug === 'servora';
slug === 'mapbox-performance';
```

The target architecture makes the route renderer generic so adding a correctly shaped project definition automatically supports the new slug without editing the page implementation.

---

# 3. Component Splitting — One Component Per File

**Status: `PENDING`**

## Goal

Each React component should have one primary component definition per file. Small private non-component helper functions may remain where appropriate, but nested or sibling React components should be extracted.

This improves discoverability, testing, ownership, and future reuse without changing rendered output.

## 3.1 Footer decomposition

**Status: `PENDING`**

Current `components/portfolio/Footer.tsx` contains multiple component responsibilities. Target structure:

```text
components/
  portfolio/
    footer/
      Footer.tsx
      FooterIcon.tsx
      FooterLinkList.tsx
      FooterLinkColumn.tsx
      FooterMobileLinkGroup.tsx
      FooterSocialLink.tsx
      FooterIntroCard.tsx
      FooterContactCard.tsx
      index.ts
```

Requirements:

- Preserve exact markup hierarchy unless extraction requires a fragment boundary.
- Preserve desktop/tablet/mobile layout and all responsive classes.
- Preserve social/contact/navigation behavior.
- Extract static footer content into data constants where appropriate.

## 3.2 Inner-page UI decomposition

**Status: `PENDING`**

Current `components/portfolio/InnerPageUi.tsx` acts like a small component library. Target components may include:

```text
components/
  portfolio/
    inner-page/
      InnerPageBackdrop.tsx
      Eyebrow.tsx
      Pills.tsx
      Bars.tsx
      ProjectVisual.tsx
      ActionLink.tsx
      ProjectCard.tsx
      index.ts
```

Requirements:

- Preserve props and rendered output.
- Avoid generic component APIs that make usage less readable.
- Move component-specific types with the component or to a domain type file when shared.

## 3.3 Landing showcase decomposition

**Status: `PENDING`**

Target structure:

```text
components/
  portfolio/
    landing-showcase/
      LandingShowcase.tsx
      SectionLabel.tsx
      ProjectMock.tsx
      index.ts
```

Additional components should be extracted only when a meaningful responsibility exists.

## 3.4 Projects page decomposition

**Status: `PENDING`**

Move page-local reusable components such as the coming-soon project card out of `app/projects/page.tsx`.

Target principle:

```tsx
const ProjectsPage = () => <ProjectsPageContent />;

export default ProjectsPage;
```

The page route should orchestrate rather than own reusable presentation components.

## 3.5 Resume page decomposition

**Status: `PENDING`**

Potential structure:

```text
components/
  resume/
    ResumeHero.tsx
    ResumeMetrics.tsx
    ResumeNavigation.tsx
    ResumeSummary.tsx
    ResumeHighlights.tsx
    ResumeSkills.tsx
```

## 3.6 Portfolio chat decomposition

**Status: `PENDING`**

Target structure:

```text
components/
  chat/
    PortfolioChat.tsx
    ChatHeader.tsx
    ChatMessage.tsx
    ChatSuggestions.tsx
    ChatTypingIndicator.tsx
    ChatComposer.tsx
    ChatError.tsx
```

The exact number of extracted components must follow actual responsibilities rather than an arbitrary file-size target.

## 3.7 Project case-study decomposition

**Status: `PENDING`**

Target structure:

```text
components/
  projects/
    case-study/
      ProjectCaseStudy.tsx
      ProjectHero.tsx
      ProjectMetrics.tsx
      ProjectNavigation.tsx
      ProjectOverview.tsx
      ProjectHighlights.tsx
      ProjectApplications.tsx
      ProjectVisual.tsx
```

The generic route should become a thin lookup/composition layer.

## 3.8 Article page decomposition

**Status: `PENDING`**

Potential structure:

```text
components/
  articles/
    ArticleCard.tsx
    ArticleHero.tsx
    ArticleContent.tsx
    ArticleMeta.tsx
```

---

# 4. Constants and Data Architecture

**Status: `PENDING`**

## Goal

Remove page content/configuration and semantically meaningful repeated style definitions from JSX where doing so improves maintainability.

Do **not** create meaningless micro-constants such as `PX_5 = 'px-5'`. Constants should represent a concept rather than simply renaming a Tailwind token.

## Target structure

```text
constants/
  pages/
    home.constants.ts
    about.constants.ts
    projects.constants.ts
    project-details.constants.ts
    articles.constants.ts
    article-details.constants.ts
    resume.constants.ts
    chat.constants.ts

  data/
    navigation.constants.ts
    footer.constants.ts
    social.constants.ts
    experience.constants.ts
    skills.constants.ts
    articles.constants.ts
    projects/
      servora.constants.ts
      index.ts

  styles/
    theme.constants.ts
    typography.constants.ts
    layout.constants.ts
    component-styles.constants.ts

  routes/
    routes.constants.ts

  seo/
    seo.constants.ts
    site.constants.ts
```

The final exact file count should follow the real data domains found during implementation.

## 4.1 Page constants

**Status: `PENDING`**

Page-specific labels, headings, static UI text, section definitions, and semantic class groups should be moved to page-specific constants files where this improves clarity.

Example target:

```ts
export const PROJECT_PAGE_CONTENT = {
  backLabel: 'Back to projects',
  featuredLabel: 'Featured Project',
  liveDemoLabel: 'Live Demo',
  sourceLabel: 'View Source',
} as const;
```

## 4.2 Data constants

**Status: `PENDING`**

Content collections such as projects, articles, experience, navigation, footer groups, social links, and skills should live in data-oriented constants modules rather than inline component arrays.

## 4.3 Style constants and design tokens

**Status: `PENDING`**

The code contains many repeated raw visual values. These can be normalized semantically without changing their actual values.

Preferred approaches:

- semantic CSS custom properties,
- semantic Tailwind/theme tokens,
- complete static Tailwind strings stored in constants when genuinely repeated.

Avoid runtime/dynamic Tailwind class construction that could break generated CSS.

## 4.4 Consolidate existing `data/` and `constants/`

**Status: `PENDING`**

The current project has both top-level `data/` and `constants/`. The target should avoid overlapping ownership. If content is moved to `constants/data/`, remove the redundant top-level data organization only after all imports are migrated and verification passes.

---

# 5. Reusable Component Architecture

**Status: `PENDING`**

## Goal

Extract reusable UI only when a real pattern exists.

Potential shared components found from current patterns include:

- `SectionHeader`
- `Badge`
- `MetricCard`
- `Panel`
- `ExternalLink`
- `SectionNavigation`
- project-card primitives

Example of the intended data/rendering split:

```ts
{
  label: 'Performance',
  value: '60 FPS',
}
```

rendered by a reusable metric component rather than hardcoding both content and presentation repeatedly inside page markup.

## Guardrail

Do not create an over-configurable component API with many unrelated variants purely to remove duplication. Prefer clear domain components over generic abstractions.

---

# 6. Fully Data-Driven Project Slugs

**Status: `PENDING`**

## Goal

Adding a new valid project definition should be enough to support its route and page content. The generic route must not require a new `if`, ternary, or slug equality check.

## 6.1 Remove route-level project-specific branching

**Status: `PENDING`**

Remove project-name/slug conditions from `app/projects/[slug]/page.tsx` and place differences into project configuration.

## 6.2 Create a complete project definition model

**Status: `PENDING`**

A project definition should contain all information required by the renderer, for example:

```ts
export type ProjectDefinition = {
  slug: string;
  title: string;
  description: string;
  metrics: readonly ProjectMetric[];
  overview: readonly ProjectFeature[];
  highlights: readonly ProjectHighlight[];
  links: readonly ProjectLink[];
  visualVariant: ProjectVisualVariant;
  sections: readonly ProjectSection[];
};
```

The final type should reflect actual existing project content and behavior.

## 6.3 Create project selectors

**Status: `PENDING`**

Target helpers:

```text
lib/
  projects/
    getProjectBySlug.ts
    getProjectStaticParams.ts
```

Generic route usage:

```ts
const project = getProjectBySlug(slug);

if (!project) {
  notFound();
}
```

## 6.4 Static params from project data

**Status: `PENDING`**

Keep static params derived from the project collection. Do not maintain a separate hardcoded slug list.

## 6.5 Metadata from project data

**Status: `PENDING`**

Project metadata must also derive from the same project definition/domain source.

## 6.6 Sitemap integration

**Status: `PENDING`**

Every public project defined in project data should be represented in the sitemap automatically where appropriate.

## 6.7 Duplicate and invalid slug validation

**Status: `PENDING`**

Add tests ensuring:

- project slugs are unique,
- required project configuration is present,
- every generated route resolves to a valid project definition,
- no project-only route behavior depends on direct slug branching.

---

# 7. Article Slug Architecture

**Status: `PENDING`**

The article route is already more generic than the project route. Improve consistency without altering behavior.

Planned work:

- add `getArticleBySlug`,
- centralize article static params,
- centralize article metadata creation where useful,
- validate duplicate article slugs,
- keep route rendering generic.

---

# 8. Arrow Function Standardization

**Status: `PENDING`**

## Goal

Use arrow functions consistently for application-defined components and helper functions where compatible with framework requirements and readability.

Preferred component pattern:

```tsx
export const Header = () => {
  // ...
};
```

Preferred default page pattern:

```tsx
const HomePage = () => {
  // ...
};

export default HomePage;
```

Preferred async page pattern:

```tsx
const ProjectPage = async ({ params }: Props) => {
  // ...
};

export default ProjectPage;
```

This is a consistency refactor only; runtime behavior must remain unchanged.

---

# 9. Types Architecture

**Status: `PENDING`**

## Goal

Create explicit shared domain types where they improve compile-time safety and reduce repeated anonymous shapes.

Potential structure:

```text
types/
  project.types.ts
  article.types.ts
  navigation.types.ts
  chat.types.ts
```

Important improvements:

- derive project slug unions from project data where practical,
- avoid overly broad `Record<string, ...>` for known domain keys,
- use `satisfies` to validate constant definitions while retaining literal types,
- avoid weakening types with `any`.

---

# 10. Route Constants

**Status: `PENDING`**

Centralize repeated internal route strings and dynamic route builders.

Target example:

```ts
export const ROUTES = {
  home: '/',
  projects: '/projects',
  project: (slug: string) => `/projects/${slug}`,
  articles: '/articles',
  article: (slug: string) => `/articles/${slug}`,
  resume: '/resume',
} as const;
```

Keep route builders simple and deterministic.

---

# 11. SEO and Metadata Architecture

**Status: `PENDING`**

The application already has strong SEO infrastructure. Preserve it while reducing duplication.

Potential helpers:

```text
lib/
  seo/
    createProjectMetadata.ts
    createArticleMetadata.ts
    createJsonLd.ts
```

Required behavior to preserve:

- page titles,
- descriptions,
- canonical URLs,
- OpenGraph data,
- Twitter metadata,
- JSON-LD,
- sitemap entries,
- robots behavior.

---

# 12. Portfolio Chat Architecture

**Status: `PENDING`**

## Client-side split

Move stateful orchestration into a hook only if it materially improves readability.

Potential structure:

```text
hooks/
  usePortfolioChat.ts
```

Components should focus on rendering:

- header,
- messages,
- suggestion controls,
- typing/loading indicator,
- composer,
- errors.

## API route split

**Status: `PENDING`**

Move cohesive server concerns out of `app/api/chat/route.ts` while preserving the route contract.

Potential structure:

```text
server/
  chat/
    chat.service.ts
    chat-validation.ts
    chat-rate-limit.ts
    chat-challenge.ts
    chat-response.ts
```

Do not alter validation, rate limiting, challenge behavior, provider behavior, status codes, or response shape as part of architectural extraction.

---

# 13. Import and Dependency Boundaries

**Status: `PENDING`**

After the folder structure is stable, introduce or strengthen lint rules so architecture does not regress.

Desired dependency direction:

```text
app -> components -> hooks/lib -> constants/types
```

Server-only code must remain isolated from client bundles.

Avoid giant global barrel files. Small feature-level `index.ts` files are acceptable when they improve imports without hiding ownership.

---

# 14. File and Naming Conventions

**Status: `PENDING`**

Recommended conventions:

```text
PascalCase.tsx
camelCase.ts
*.constants.ts
*.types.ts
*.utils.ts
*.test.tsx
```

Examples:

```text
ProjectMetricCard.tsx
project.constants.ts
project.types.ts
getProjectBySlug.ts
ProjectMetricCard.test.tsx
```

Do not rename public route segments or assets merely to satisfy internal naming preferences.

---

# 15. Generated / Non-Source Content Hygiene

**Status: `PENDING`**

The reviewed archive contains generated/repository internals such as `.next` and `.git`. These are not needed in normal source-delivery archives.

Recommended source archive exclusions:

```text
.next/
.git/
node_modules/
coverage/
playwright-report/
test-results/
*.tsbuildinfo
```

This is packaging/repository hygiene only and must not alter application runtime behavior.

---

# 16. Testing and Zero-Regression Strategy

**Status: `PENDING`**

## Baseline verification

Before implementation begins, run and record:

```bash
bun run typecheck
bun run lint
bun run format:check
bun run test
bun run test:e2e
bun run build
```

If an existing baseline failure is discovered, document it before changing code rather than hiding it inside the refactor.

## Focused verification

After each component/domain group is moved:

- run relevant unit/component tests,
- run typecheck for changed types/interfaces,
- run lint/format checks for changed files.

## Phase-end verification

At the end of every major phase:

```bash
bun run typecheck
bun run lint
bun run format:check
bun run test
bun run build
```

Run E2E at phase boundaries where route/UI behavior could be affected.

## Final verification

Required before the overall refactor can be marked `COMPLETED`:

```bash
bun run verify
bun run build
```

---

# 17. Visual Regression Protection

**Status: `PENDING`**

Because preserving UI is the top requirement, visual regression coverage is strongly recommended for critical pages at desktop, tablet, and mobile widths.

Priority routes:

```text
/
/about
/projects
/projects/servora
/articles
/resume
```

Visual tests should detect accidental changes to:

- spacing,
- typography,
- breakpoints,
- alignment,
- sizing,
- colors,
- borders,
- shadows,
- responsive visibility,
- component placement.

Do not intentionally update visual baselines during a structural refactor unless the previous baseline is demonstrably invalid.

---

# 18. Suggested Implementation Phases

## Phase 0 — Documentation and tracking

**Status: `COMPLETED`**

- Create detailed refactor plan.
- Create itemized progress tracker.
- Define status model and non-regression guardrails.

## Phase 1 — Establish verified baseline

**Status: `PENDING`**

- Run full current verification.
- Record pass/fail counts.
- Capture visual baseline for critical routes/viewports.
- Record any pre-existing failures.

## Phase 2 — Constants and data organization

**Status: `PENDING`**

- Create page-wise constants structure.
- Create data constants structure.
- Consolidate routes/SEO/site constants.
- Move inline data safely.
- Preserve exact values.

## Phase 3 — Component splitting

**Status: `PENDING`**

Recommended order:

1. Footer
2. InnerPageUi
3. LandingShowcase
4. Projects page
5. Resume page
6. PortfolioChat
7. Project case-study page
8. Article pages where useful

## Phase 4 — Reusable components

**Status: `PENDING`**

- Extract proven repeated visual primitives.
- Avoid premature/generalized abstractions.

## Phase 5 — Generic slug/domain architecture

**Status: `PENDING`**

- Make project pages fully data-driven.
- Remove project-specific slug branching.
- Add selectors and type-safe definitions.
- Align article slug architecture.

## Phase 6 — Hooks/services/server extraction

**Status: `PENDING`**

- Separate chat rendering from client orchestration.
- Separate chat route from server/domain helpers.
- Add route/SEO helper modules where appropriate.

## Phase 7 — Arrow functions and consistency cleanup

**Status: `PENDING`**

- Standardize application functions/components.
- Normalize naming and import organization.
- Remove dead code/imports created obsolete by prior phases.

## Phase 8 — Architecture enforcement and additional tests

**Status: `PENDING`**

- Add slug validation tests.
- Add metadata/sitemap consistency tests.
- Add visual regression coverage.
- Add import-boundary protection if valuable.

## Phase 9 — Final verification and cleanup

**Status: `PENDING`**

- Run full verification.
- Confirm no intentional UI/behavior differences.
- Update tracker with final results.
- Document any intentionally deferred recommendations.

---

# 19. Definition of Done

**Status: `PENDING`**

The architecture refactor is complete only when all of the following are true:

- [ ] Application behavior is unchanged.
- [ ] Desktop UI is unchanged.
- [ ] Tablet UI is unchanged.
- [ ] Mobile UI is unchanged.
- [ ] Reusable components are split into focused files.
- [ ] No file contains multiple independent React component definitions without a documented reason.
- [ ] Page/data constants are organized under the agreed constants structure.
- [ ] Repeated meaningful content/configuration is no longer hardcoded directly in JSX where extraction improves maintainability.
- [ ] Generic project routing contains no project-specific slug equality checks.
- [ ] Adding a valid project data definition is sufficient for generic project route rendering.
- [ ] Dynamic route metadata/static params remain data-driven.
- [ ] Shared domain types protect project/article structures.
- [ ] Arrow-function conventions are applied consistently where intended.
- [ ] Chat client/server responsibilities are clearer without contract changes.
- [ ] Typecheck passes.
- [ ] Lint passes.
- [ ] Format check passes.
- [ ] Unit/component tests pass.
- [ ] E2E tests pass.
- [ ] Production build passes.
- [ ] Visual regression checks show no unintended UI differences.
- [ ] Progress tracker is fully updated.

---

# 20. Explicitly Out of Scope

The following are not part of this structural refactor unless separately approved:

- redesigning the portfolio,
- changing colors,
- changing typography,
- changing copy,
- changing responsive breakpoints,
- changing layout spacing,
- changing animations,
- changing public routes,
- replacing Tailwind,
- changing frameworks,
- adding a state-management library simply for architecture preference,
- changing chat product behavior,
- changing API contracts,
- changing project content merely to fit a new architecture.

---

# 21. Expected End State

The application should be easier to extend without route-specific edits. For example, a future project should be definable through its project data/configuration, after which the generic architecture should support its:

- slug route,
- static params,
- metadata,
- sitemap entry,
- project card,
- hero content,
- metrics,
- visual configuration,
- sections,
- links,
- project navigation.

The refactor is successful only if this maintainability improvement is achieved **without changing what current users see or how the current application behaves**.
