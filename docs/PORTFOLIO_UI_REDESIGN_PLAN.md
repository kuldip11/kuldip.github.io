# Portfolio UI/UX Redesign & Design-System Plan

## Document Purpose

This document defines the approved redesign direction for the Kuldip portfolio. It combines:

1. The visual and UX redesign plan for the complete portfolio experience.
2. The architectural and design-system improvements identified from the Anchal portfolio repository.
3. The strongest existing architectural patterns already present in the Kuldip repository.

This is a **full UI/UX redesign**, not a color-only migration. The work covers visual identity, information hierarchy, page composition, layout, typography, spacing, imagery, responsive behavior, motion, accessibility, reusable UI primitives, page components, data/constants architecture, theme architecture, content architecture, and quality enforcement.

The live implementation status is tracked in [`PORTFOLIO_UI_REDESIGN_STATUS.md`](./PORTFOLIO_UI_REDESIGN_STATUS.md).

---

# 1. Relationship to the Existing Architecture Refactor

The existing documents remain valid historical records:

- [`PORTFOLIO_ARCHITECTURE_REFACTOR_PLAN.md`](./PORTFOLIO_ARCHITECTURE_REFACTOR_PLAN.md)
- [`PORTFOLIO_ARCHITECTURE_REFACTOR_STATUS.md`](./PORTFOLIO_ARCHITECTURE_REFACTOR_STATUS.md)

Those documents intentionally required **no UI or behavior changes**. This redesign is a separate approved phase and intentionally changes the visual presentation and page composition.

## 1.1 Redesign guardrail

The following existing behavior and technical strengths must remain unless a redesign requirement explicitly changes presentation:

- Routes and route semantics.
- Project and article slug architecture.
- Static parameter generation.
- Metadata generation.
- Sitemap and robots behavior.
- JSON-LD / structured data.
- Chat API contract, validation, rate limiting, and security behavior.
- Existing accessibility behavior, including keyboard/focus management.
- Existing server/client boundaries.
- Strict TypeScript behavior.
- Existing project/article data-driven route behavior.
- Existing testability and quality tooling.

A UI redesign must not become an excuse to weaken architecture, typing, accessibility, SEO, or security.

---

# 2. Comparative Repository Findings

## 2.1 Strengths to adopt from the Anchal portfolio

The Anchal repository demonstrates stronger visual restraint and stronger design-system discipline in several areas:

- Semantic design tokens instead of component-level raw colors.
- Centralized profile/personal information.
- Centralized page copy.
- Centralized navigation.
- Centralized SEO configuration.
- Theme infrastructure.
- Theme initialization before paint.
- Theme-aware browser color handling.
- Reduced-motion awareness.
- Small, focused section components.
- Reusable page/container/section patterns.
- Automated checks preventing hardcoded color regressions.
- Consistent use of data/configuration to render repeated content.
- Professional visual restraint: accent colors guide attention rather than dominate the page.

## 2.2 Strengths to retain from the Kuldip portfolio

Kuldip's repository is architecturally richer and must not be simplified to match the smaller Anchal site. Preserve:

- Multi-page portfolio architecture.
- Generic project slug architecture.
- Typed project definitions.
- Article slug architecture.
- Project and article static generation.
- Route-aware metadata generation.
- JSON-LD.
- Sitemap consistency.
- Project case-study decomposition.
- Project domain types.
- Local technology icon assets.
- Chat assistant and its server architecture.
- Chat rate limiting and validation.
- Accessible navigation/focus behavior.
- Route-group shared layouts.
- Playwright coverage and existing verification layers.

## 2.3 Current Kuldip visual problem

The current site is technically strong but visually too aggressive. The dominant combination of near-black backgrounds, bright mint accents, green borders, green grids, green glows, high-contrast badges, and repeated boxed surfaces makes too many elements compete for attention.

The redesign must reduce visual noise and improve hierarchy rather than merely substitute one green for another.

---

# 3. Product and Brand Objective

## 3.1 Desired first impression

The portfolio should communicate, in order:

1. **Who:** Senior Frontend Engineer.
2. **Strength:** React, Next.js, TypeScript, frontend architecture, performance, quality, and scalable product systems.
3. **Evidence:** Serious product work, especially Servora and detailed engineering case studies.

The desired visitor reaction is:

> This person builds serious products.

After opening a detailed project case study:

> He understands architecture beyond just writing React components.

The implementation quality should reinforce:

> This feels like the work of a senior engineer.

## 3.2 Design personality

The final visual language must be:

- Professional.
- Technical without looking like a terminal or hacker theme.
- Minimal without becoming generic.
- Editorial and readable.
- Product-oriented.
- Confident and restrained.
- Human enough for recruiters and hiring managers.
- Detailed enough for engineers and technical interviewers.

## 3.3 Design direction

Working direction: **Soft Technical Editorial**.

It should feel closer to:

- A premium SaaS/product website.
- A senior product engineer's portfolio.
- A high-quality engineering case-study site.
- A clean editorial publication.

It should not feel like:

- A gaming UI.
- A cyberpunk UI.
- A terminal UI.
- An admin dashboard.
- A developer-tool landing page.
- A generic Bootstrap résumé template.

---

# 4. Global Visual System

## 4.1 Default theme direction

The default experience should become a light, recruiter-friendly theme with a warm/off-white foundation, dark charcoal text, restrained forest green, and occasional secondary blue/slate accents.

### Foundation tokens

| Token                  | Target value | Purpose                      |
| ---------------------- | ------------ | ---------------------------- |
| `page`                 | `#F7F9F8`    | Main page background         |
| `surface`              | `#FFFFFF`    | Primary cards/header         |
| `surface-muted`        | `#F1F5F3`    | Secondary section background |
| `surface-raised`       | `#FAFCFB`    | Elevated/featured panels     |
| `foreground`           | `#17211D`    | Primary text                 |
| `foreground-secondary` | `#475650`    | Body/secondary text          |
| `foreground-muted`     | `#728079`    | Metadata                     |
| `border`               | `#DFE7E3`    | Standard border              |
| `border-strong`        | `#CAD7D1`    | Stronger separation          |

### Primary brand tokens

| Token                | Target value |
| -------------------- | ------------ |
| `primary`            | `#167A5B`    |
| `primary-hover`      | `#11654B`    |
| `primary-soft`       | `#E7F4EF`    |
| `primary-muted`      | `#B8DED0`    |
| `primary-foreground` | `#FFFFFF`    |

### Secondary accent tokens

| Token            | Target value |
| ---------------- | ------------ |
| `secondary`      | `#315C72`    |
| `secondary-soft` | `#EAF1F5`    |

The exact production values may be tuned during visual validation, but components must consume semantic tokens rather than hardcoded literals.

## 4.2 Accent usage target

Approximate visual distribution:

- 70% neutral white/off-white.
- 20% typography and neutral surfaces.
- 8% soft supporting color.
- 2% strong brand/accent color.

Accent should guide the eye instead of filling the screen.

## 4.3 Status colors

Success, warning, destructive, and informational states must have independent semantic tokens. Brand green must not be reused as a generic status color.

## 4.4 Optional dark theme

Dark mode remains valuable, but it should become a secondary, user-selectable theme derived from the same semantic token system.

Direction:

- Softer charcoal/green-black page background, not near-black neon green.
- Light neutral text.
- Muted green accent rather than fluorescent mint.
- Same semantic roles as the light theme.

Do **not** build an unrelated second design system. First make the professional light theme excellent, then derive the dark theme from the same tokens.

---

# 5. Design Token Architecture

## 5.1 Required token groups

Global theme variables should cover:

```text
--page
--surface
--surface-muted
--surface-raised

--foreground
--foreground-secondary
--foreground-muted

--primary
--primary-hover
--primary-soft
--primary-muted
--primary-foreground

--secondary
--secondary-soft

--border
--border-strong
--ring

--success
--warning
--danger
--info

--shadow-sm
--shadow-card
--shadow-floating
```

Add typography, radius, spacing, and motion tokens where they provide meaningful reuse.

## 5.2 No raw color literals in presentation components

Patterns such as these should disappear from React presentation code:

```tsx
text-[#b5c4bd]
border-[#42dca2]
bg-[#071713]/85
text-[#55eeb0]
```

Use semantic classes/tokens instead:

```tsx
text - foreground;
text - foreground - muted;
border - border;
bg - surface;
text - primary;
bg - primary - soft;
```

## 5.3 Hardcoded-color enforcement

Add an automated quality check similar to Anchal's `check:colors` pattern. It should prevent future raw color regression while allowing explicitly documented exceptions such as certain data-visualization or third-party brand colors.

## 5.4 Styling constants rule

Do not move arbitrary Tailwind utilities into constants merely to reduce literals.

Avoid meaningless abstractions such as:

```ts
const PX_5 = 'px-5';
```

Reusable styling constants must represent real concepts, for example:

- `FOCUS_RING_CLASS`.
- `SECTION_CONTAINER_CLASS`.
- A shared card surface style.

Prefer reusable UI components when they better represent the concept.

---

# 6. Typography System

## 6.1 Hierarchy

Target ranges:

- Hero title: approximately 56–72px desktop.
- Major page title: approximately 48–64px desktop.
- Section title: approximately 28–36px.
- Card title: approximately 17–20px.
- Body: approximately 15–17px.
- Metadata: approximately 12–14px.

Mobile hero range: approximately 38–44px.

Tablet hero range: approximately 48–56px.

## 6.2 Readability

- Body line-height generally around `1.6–1.7`.
- Large display headings may use tighter line-height around `1.0–1.08`.
- Avoid excessive tight tracking on body-sized content.
- Avoid tiny metadata except when truly secondary.
- Prefer hierarchy through scale, weight, spacing, and restrained accent rather than effects.

---

# 7. Global Layout and Composition

## 7.1 Max-width and grid

Desktop container target: approximately `1200–1280px`.

Use a consistent 12-column mental/grid model for major compositions.

Typical patterns:

- Hero: 7 columns text / 5 columns visual.
- Project feature: 5 columns copy / 7 columns product visual.
- About: 4 columns intro / 8 columns content where appropriate.
- Article body: approximately 8 columns / 700–780px reading width.

## 7.2 Section spacing

Desktop major section spacing should typically use approximately:

- 96px.
- 120px.
- 144px.

Mobile major section spacing should typically use approximately:

- 64px.
- 72px.
- 80px.

Internal card padding should usually sit around 24–32px depending on hierarchy.

## 7.3 Composition rule

Do not default to wrapping every block in a rounded card.

Use cards only when a surface needs semantic grouping. Prefer whitespace, typography, alignment, and dividers for page-level structure.

---

# 8. Shared Navigation and Header

## 8.1 Desktop header

Target composition:

```text
Kuldip Kumar Sah        Projects  Articles  About  Résumé       GitHub  LinkedIn  Let's talk
Senior Frontend Engineer
```

Requirements:

- Light/translucent surface.
- Sticky behavior if current UX supports it well.
- Subtle blur.
- Thin neutral divider after scroll where useful.
- No neon underline.
- No boxed navigation buttons.
- No dominant green header border.
- Active state through subtle weight/color plus small underline/dot.
- Social actions visually secondary to the main CTA.

## 8.2 Mobile navigation

Preserve existing accessible focus/keyboard behavior while redesigning the visual layer.

Target:

```text
Kuldip Kumar Sah                       ×

Home
Projects
Articles
About
Résumé

────────────────

GitHub
LinkedIn

[ Let's talk ]
```

Requirements:

- Large readable links.
- Strong spacing.
- Subtle separators.
- Social links toward the bottom.
- Primary CTA at the end.
- Comfortable touch targets.

---

# 9. Homepage Redesign

## 9.1 Homepage information hierarchy

The homepage should become simpler and clearer:

1. Header.
2. Hero.
3. Compact proof/metrics.
4. Capabilities / what I do.
5. Featured Servora project.
6. Secondary projects.
7. Experience preview.
8. Engineering principles / how I work.
9. Technology overview.
10. Contact CTA.
11. Footer.

Avoid putting every possible fact in the hero.

## 9.2 Hero composition

Desktop target:

```text
SENIOR FRONTEND ENGINEER

Building frontend systems
that scale with the product.

I design and build scalable React and Next.js products,
from frontend architecture and design systems to
performance, testing and delivery.

[ View projects ]    [ Résumé ↗ ]    GitHub ↗

5+ years             React / Next.js          Product engineering

                                      portrait / visual
```

Requirements:

- Left approximately 58%, right approximately 42%.
- Two or three headline lines maximum.
- One restrained emphasis style at a time.
- One primary CTA and one secondary CTA.
- Optional tertiary text link.
- Avoid stacks of expertise pills in the hero.
- Avoid separate large quote cards.
- Avoid decorative text such as “Build / Ship / Improve / Repeat” floating around the portrait.

## 9.3 Portrait treatment

Keep the existing portrait/composite if it remains the best asset, but simplify its treatment:

- Soft neutral/brand background shape.
- Subtle fade or crop treatment.
- Light shadow where useful.
- At most one small metadata accent.
- Remove competing green masks/glows and excessive overlays.
- The person should be the visual interest; decoration should not compete.

## 9.4 Hero background

Replace the persistent strong green technical grid with:

- Warm off-white page background.
- Very soft radial wash behind the portrait.
- Optional faint architectural line pattern at very low opacity.
- Technical grid/patterns only inside relevant technical visuals, not across the whole page.

## 9.5 Proof / mini metrics

Render key proof points as typography and separators rather than cards/badges.

Possible examples:

- `5+ years` / Frontend engineering.
- `React / Next.js` / Primary stack.
- `Products` / Designed end-to-end.

Keep actual copy data-driven and truthful.

## 9.6 Capabilities / What I do

Prefer three strong capability blocks:

1. Frontend Architecture.
2. Product Engineering.
3. Performance & Quality.

Each should include concise copy explaining the engineering responsibility.

Visual treatment:

- Clean typography.
- Optional small icon in a soft-toned container.
- White or open-layout surface.
- Light neutral borders only where needed.
- Avoid glowing cards.

## 9.7 Featured Servora section

Servora is the flagship case study and must receive significantly more visual weight than secondary projects.

Content should include:

- `FEATURED PROJECT` eyebrow.
- Servora name.
- Short product thesis.
- Key architecture/product facts.
- Technology summary.
- `View case study` action.
- Large product visual.

Visual direction:

- Large admin/dashboard screenshot.
- Overlapping kitchen/waiter/customer visuals where assets exist.
- Product-specific composition rather than generic mock graphics.
- Slightly tinted feature-section background is acceptable.

## 9.8 Secondary projects

Use one or two secondary project cards depending on current content.

Each should prioritize:

- Real/product-specific visual.
- Project name.
- Short description.
- Clear CTA.

A subdued `Coming soon` card/area can remain for future work without competing with completed projects.

## 9.9 Project card interaction

Hover behavior should be restrained:

- Image translates approximately 2–4px.
- Arrow moves subtly.
- Border darkens slightly.
- Shadow can increase slightly.

Avoid glow, large scaling, or rotations.

## 9.10 Experience preview

Homepage experience should be a concise preview, not a full résumé duplication.

Include:

- Role.
- Company and period.
- Short summary.
- Two or three outcome/responsibility statements where useful.
- `View complete résumé` action.

Avoid generic “journey of growth and impact” marketing language.

## 9.11 Engineering principles / How I work

Use meaningful principles tied to real engineering practice, for example:

- Make ownership explicit.
- Design for change.
- Treat quality as product work.
- Architecture should make change easier.
- Components should own behavior, not hardcoded content.
- Performance and accessibility are engineering responsibilities.
- Quality checks belong in the workflow, not only at the end.

Select the best 3–4 for the final page rather than showing every sentence.

## 9.12 Technology section

Group technologies by category rather than turning every technology into a heavy card.

Suggested categories:

- Frontend.
- Backend & Data.
- Platform / Delivery.
- Design.

Icons can support scanning but should not dominate.

---

# 10. Projects Index Redesign

## 10.1 Hero

Target:

```text
Projects

Products I've designed, built
and evolved.

Selected engineering work covering frontend
architecture, product systems and full-stack delivery.
```

## 10.2 Project hierarchy

- Servora: large/full-width flagship feature.
- TallyLite / secondary projects: standard cards.
- Coming-soon state: subdued.

## 10.3 Filters

Do not add or retain filters unless the number of projects makes them genuinely useful. Avoid controls that add UI complexity without helping discovery.

---

# 11. Project Case-Study System

## 11.1 Case-study objective

Project detail pages should resemble serious engineering/product case studies, not collections of dark cards.

## 11.2 Generic case-study structure

Recommended sequence:

1. Project hero.
2. Project overview.
3. Context / problem.
4. Product ecosystem or system overview.
5. Architecture.
6. Key engineering decisions.
7. Product screenshots / surfaces.
8. Major engineering challenges.
9. Quality/testing/security/performance.
10. Outcomes / what the project demonstrates.
11. Learnings where appropriate.
12. Next-project navigation.

Not every project must render every section; the data model should support optional sections cleanly.

## 11.3 Project hero

Include:

- Project label/name.
- One- or two-sentence thesis.
- Stack.
- Live/GitHub actions where applicable.
- Large product visual.

## 11.4 Project overview

Potential facts:

- Role.
- Scope.
- Architecture.
- Number/type of applications.
- Status.

Represent as concise metadata, not oversized cards.

## 11.5 Servora ecosystem visualization

Create a professional product/system diagram showing the relationship between the API and major surfaces such as Web/Admin/POS, Kitchen, Waiter, and Customer.

It must explain architecture, not serve as generic decoration.

## 11.6 Architecture section

Use real architecture decisions and diagrams. Potential Servora themes include:

- Multi-tenant structure.
- Shared packages.
- Server-authoritative pricing.
- Real-time event flow.
- Permission/role model.
- Application boundaries.

## 11.7 Screenshots

Prefer large screenshots or product compositions over small thumbnail cards.

## 11.8 Challenges

Document 3–5 real engineering challenges per major project where available.

## 11.9 Quality section

Include relevant testing, CI, accessibility, security, performance, and maintainability practices.

## 11.10 Case-study navigation

Use a strong next-project transition rather than a small isolated button.

Example:

```text
Next project

TallyLite
A lightweight ...                                   →
```

---

# 12. About Page Redesign

## 12.1 Hero

Direction:

```text
About

I build products at the point where
design, engineering and architecture meet.
```

## 12.2 Main story section

- Portrait/image on one side.
- Professional/personal story on the other.
- Editorial layout rather than a pile of cards.

## 12.3 Supporting sections

Potential content groups:

- How I got here.
- How I think about engineering.
- What I care about.
- What I'm learning.
- Outside work, if desired and appropriate.
- Timeline/journey where useful.

Keep the page human and professional.

---

# 13. Articles Index Redesign

## 13.1 Objective

The articles index should feel editorial and reading-focused rather than card-heavy.

## 13.2 Layout

Potential list item content:

- Date.
- Topic/category.
- Title.
- Summary.
- Reading time.
- Arrow/action.

Use whitespace and dividers. A card is not required for every article.

---

# 14. Article Detail Redesign

## 14.1 Reading width

Target approximately 700–780px for primary reading content.

## 14.2 Header

Include:

- Title.
- Summary/deck.
- Category.
- Reading time.
- Published date.

## 14.3 Body

- Generous paragraph spacing.
- Strong heading hierarchy.
- Soft neutral code/example surfaces.
- Technical diagrams may expand beyond the reading column when useful.
- Avoid decorative animations that distract from reading.
- Optional sticky table of contents only if content length justifies it.

---

# 15. Résumé Page Redesign

## 15.1 Objective

The résumé should feel like an executive engineering profile, not an application dashboard.

## 15.2 Hero/header

Include:

- Name.
- Senior Frontend Engineer title.
- Core stack/positioning.
- Location where appropriate.
- Email/contact.
- LinkedIn.
- GitHub.
- `Download résumé` primary action.
- Optional truthful availability/status pill.

## 15.3 Content

Suggested sections:

- Professional summary.
- Experience.
- Selected impact/highlights.
- Technical expertise.
- Skills.
- Education.
- Certifications where applicable.

## 15.4 Layout

- Clean two-column desktop layout where useful.
- Single-column mobile.
- Reduce card nesting.
- Use semantic grouping and typography.

---

# 16. Chat Assistant Redesign

## 16.1 Preserve behavior

Do not alter the validated server/API/security behavior merely for visual changes.

## 16.2 Launcher

- Bottom-right.
- Approximately 48–52px.
- Simple circle/squircle.
- Soft shadow.
- No neon glow.

## 16.3 Open panel

Target structure:

```text
Ask about Kuldip

I can answer questions about projects,
experience and technical skills.

[ Servora architecture ]
[ React experience ]
[ Current role ]

───────────────────────────
conversation
───────────────────────────
Ask something...             ↑
```

## 16.4 Visual requirements

- Uses semantic theme tokens.
- Neutral border.
- Restrained green accent.
- Clear user/assistant message distinction.
- Accessible focus states.
- Suggestion chips sourced from constants/data.
- Preserve keyboard/form behavior.

---

# 17. Contact CTA and Footer

## 17.1 Final contact CTA

Before the footer, use a strong closing section such as:

```text
Have a product problem
worth solving?

I'm always interested in ambitious frontend
and product engineering work.

[ Let's talk ]
```

Actual copy must be centralized and can be refined later.

## 17.2 Footer

Keep the footer restrained.

Potential content:

- Name.
- Role.
- Portfolio navigation.
- GitHub.
- LinkedIn.
- Email/contact action.
- Small build/technology note.

Avoid heavy green framing or oversized decorative effects.

---

# 18. Background, Border, Shadow, Radius, and Icon Rules

## 18.1 Background treatment

Use three broad patterns:

1. Normal warm-neutral page background.
2. Very pale tinted feature-section background.
3. Technical grids/patterns only inside relevant technical visuals.

## 18.2 Borders

- Neutral and light by default.
- Use borders only to define real structure.
- Many page sections should need no border.
- Inputs require clear boundaries.
- Active states can use accent intentionally.

## 18.3 Shadows

- Most standard cards should need no shadow or only a very subtle one.
- Feature visuals may use a soft shadow.
- Avoid illuminated/glowing shadows.
- Target aesthetic similar to a low-opacity `0 8px 30px` shadow rather than neon glow.

## 18.4 Radius hierarchy

Suggested hierarchy:

- Small controls: 8–10px.
- Buttons: 10–12px or deliberate pill style.
- Standard cards: around 16px.
- Major project visuals: 20–24px.
- Portrait/feature frame: 24–32px where composition benefits.

## 18.5 Icon strategy

Use icons to improve scanning, not decorate blank space.

- Navigation: mostly no icons.
- Capabilities: useful.
- Technical metadata: selective.
- Buttons: arrows/external-link indicators.
- Skills: technology icons.
- Articles: minimal.

---

# 19. Illustration and Product Visual Strategy

## 19.1 Prefer explanatory visuals

Good visual content:

- Real screenshots.
- Browser/device compositions.
- Architecture diagrams.
- Application ecosystem diagrams.
- Component/system diagrams.
- Relevant code excerpts.
- Flow diagrams.

## 19.2 Avoid generic technical decoration

Avoid:

- Random grids everywhere.
- Decorative terminal lines.
- Floating brackets.
- Fake code used only as decoration.
- Green polygons.
- Hacker/cyber visuals.
- Stock imagery unrelated to the work.

---

# 20. Motion and Interaction System

## 20.1 Three motion tiers

### Tier 1 — Functional

- Menu open/close.
- Modal/dialog.
- Chat.
- Dropdowns.

### Tier 2 — Feedback

- Button press/hover.
- Link arrows.
- Card hover.
- Focus states.

### Tier 3 — Storytelling

- Occasional project visual reveal.
- Optional hero/featured-project entrance.

## 20.2 Motion constraints

- No constant floating UI.
- No glowing pulses.
- No scanning animations.
- Do not animate every section on scroll.
- Keep reduced-motion support.
- Motion must never interfere with reading or navigation.

---

# 21. Responsive Design Plan

## 21.1 Desktop

- Large editorial whitespace.
- Two-column hero.
- Product visuals beside text.
- Strong typography.
- Major case-study visuals can extend wider than text.

## 21.2 Tablet

Tablet must be intentionally designed, not treated as an enlarged phone.

- Hero may remain two-column where width allows.
- Shift toward roughly 55/45 proportions.
- Reduce multi-column card counts.
- Navigation becomes compact before switching to drawer if appropriate.
- Protect reading widths on case-study/article pages.

## 21.3 Mobile

- Hero becomes primarily stacked.
- Recommended order: headline, description, actions, portrait, proof/metrics.
- Project cards become text-first or image-first consistently based on design testing.
- Single-column résumé and about layouts.
- Comfortable touch targets, minimum approximately 44px.
- Normal body text approximately 15–16px.
- Metadata approximately 12–13px.
- Buttons approximately 14–16px.
- No decorative overlap that harms portrait/content readability.

## 21.4 Responsive project cards

- Desktop: 2–3 columns depending on section.
- Tablet: usually 2 columns.
- Mobile: 1 column.
- Flagship Servora feature remains full width at all breakpoints.

---

# 22. Data and Constants Architecture

## 22.1 Core rule

Components render **structure and behavior**. Portfolio content/configuration lives in typed data/constants.

Avoid:

```tsx
<h2>A journey of growth and impact.</h2>
<p>From building features to owning products...</p>
```

Prefer:

```tsx
<h2>{HOME_EXPERIENCE.title}</h2>
<p>{HOME_EXPERIENCE.description}</p>
```

Repeated structures should be data-driven:

```tsx
{
  HOME_CAPABILITIES.map((capability) => <CapabilityCard key={capability.id} capability={capability} />);
}
```

## 22.2 Content that should be centralized

Where applicable, centralize:

- Page headings.
- Section titles.
- Descriptions.
- CTA labels.
- Navigation labels.
- Social links.
- Profile/personal data.
- Experience.
- Metrics.
- Skills and technology categories.
- Projects.
- Project metadata.
- Case-study sections.
- Articles and article presentation metadata.
- Chat suggestions.
- Footer content.
- SEO defaults and page metadata configuration.

Small structural accessibility strings may remain near components when centralizing them would reduce clarity; exceptions should be intentional.

## 22.3 Preferred typed object shape

Prefer named objects over positional tuples for evolving content.

Prefer:

```ts
{
  id: 'product-engineering',
  icon: 'code',
  title: 'Build scalable products',
  description: '...',
}
```

rather than:

```ts
['code', 'Build scalable products', '...'];
```

Named objects make future fields such as `href`, `featured`, `theme`, `ariaLabel`, `metric`, or `category` safer and clearer.

## 22.4 Target organization

Adapt to the existing root structure rather than forcing a meaningless `/src` migration.

Conceptual organization:

```text
constants/
  data/
    personal.ts
    experience.ts
    skills.ts
    social.ts
    projects/
    articles.ts
  pages/
    home.ts
    about.ts
    projects.ts
    project-details.ts
    articles.ts
    resume.ts
    chat.ts
  theme/
    tokens.ts
    themes.ts
  seo/
    seo.ts
  routes/
    routes.ts
```

The exact folders should respect current repository conventions and avoid unnecessary churn.

---

# 23. Component Architecture

## 23.1 UI primitives

Keep the primitive layer intentionally small. Expected useful primitives/patterns include:

1. `PageContainer`.
2. `Section`.
3. `SectionHeading`.
4. `Button`.
5. `TextLink`.
6. `Card`.
7. `Badge`.
8. `Metric`.
9. `IconBox`.
10. `ProjectCard` where it remains a reusable product pattern.
11. `SocialLink`.
12. `SkipLink`.

Do not create primitives merely to satisfy a list; each abstraction must have real repeated responsibility.

## 23.2 Feature components

Page/domain components can include:

- `Hero`.
- `FeaturedProject`.
- `ExperienceTimeline` / experience preview.
- `ProjectGallery`.
- `ArchitectureDiagram`.
- `ArticleList`.
- Résumé sections.
- About sections.
- Chat presentation components.

## 23.3 One component per file

Continue the established architecture rule: no large multi-component files unless a tiny private helper is genuinely clearer in place.

## 23.4 No unnecessary abstraction

Do not build a generic micro-component framework for one-off markup. Reuse should follow repeated semantic responsibility.

---

# 24. Theme Infrastructure

Adopt the strongest theme ideas from Anchal while preserving Kuldip's architecture:

- Semantic CSS variables.
- Light/dark theme definitions.
- Theme initialization before first paint to avoid flash.
- Theme-aware browser UI color where supported.
- System preference behavior if included in the final UX.
- Reduced-motion support.
- Theme control kept simple and accessible.

Theme support should be implemented after the default light redesign is visually stable.

---

# 25. SEO, Routes, and Application Architecture Preservation

The redesign must retain or improve:

- Generic project `[slug]` behavior.
- Generic article `[slug]` behavior.
- Static params sourced from data.
- Metadata sourced from data/configuration.
- Sitemap completeness.
- Canonical URLs.
- OpenGraph/Twitter metadata.
- JSON-LD.
- Existing route builders.
- Existing accessibility semantics.
- Existing chat server security boundaries.

Do not simplify the application into a single-page site merely because Anchal's portfolio uses a simpler page structure.

---

# 26. Accessibility Requirements

Every redesign phase must preserve or improve:

- Semantic landmarks.
- Keyboard navigation.
- Focus visibility.
- Mobile navigation focus trapping/return behavior.
- Accessible dialog/chat behavior.
- Color contrast.
- Touch target sizing.
- Reduced motion.
- Form labeling.
- Link/button semantic correctness.
- Screen-reader-friendly metadata and controls.

Visual minimalism must never mean weaker affordances.

---

# 27. Screens to Design Before Broad Implementation

Establish the visual language on these screens/states before propagating across the entire application:

1. Homepage desktop.
2. Homepage mobile.
3. Projects index desktop.
4. Servora case-study desktop.
5. Article detail.
6. Résumé page.
7. About page.
8. Chat open state.
9. Mobile navigation.

These can be implemented progressively in code; the requirement is that each has an intentional composition rather than being produced by blindly reusing old sections.

---

# 28. First Visual Implementation Target

The first production redesign slice should be:

1. Global header.
2. Homepage hero.
3. First/featured Servora section.

These establish whether the visual language is correct before changing the rest of the application.

Do not redesign thirty components before validating these foundational areas.

---

# 29. Implementation Phases

## Phase P0 — Baseline and redesign documentation

- Preserve screenshots/visual references of the current site where possible.
- Confirm current route/test/build baseline.
- Maintain separate redesign plan/status docs.

## Phase P1 — Design-system foundation

- Semantic colors.
- Typography.
- Spacing.
- Radius.
- Shadow.
- Motion rules.
- Container/grid rules.

## Phase P2 — Hardcoded color migration

- Replace raw component colors with semantic tokens.
- Add automated hardcoded-color quality check.

## Phase P3 — Content/data extraction completion

- Move remaining page copy and repeated configuration into typed constants/data.
- Keep components focused on layout/behavior.

## Phase P4 — Reusable UI primitives

- Build only the primitives genuinely needed by the new design.
- Keep APIs semantic and small.

## Phase P5 — Header, mobile navigation, and footer

- Establish global visual language and accessibility.

## Phase P6 — Homepage redesign

- Hero.
- Proof/metrics.
- Capabilities.
- Featured Servora.
- Secondary projects.
- Experience preview.
- Engineering principles.
- Tech overview.
- Contact CTA.

## Phase P7 — Projects index

- Editorial hero.
- Project hierarchy.
- Real/product visuals.
- Remove unnecessary filtering complexity.

## Phase P8 — Project case-study system

- Generic case-study layout.
- Servora ecosystem/architecture visuals.
- Real screenshots.
- Challenges/quality/outcomes.
- Next-project navigation.

## Phase P9 — About and Résumé

- Human/editorial About page.
- Executive engineering résumé presentation.

## Phase P10 — Articles

- Editorial article index.
- Reading-focused article detail.

## Phase P11 — Chat redesign

- Launcher.
- Panel.
- Suggestions.
- Message surfaces.
- Preserve behavior/security.

## Phase P12 — Responsive refinement

- Desktop.
- Tablet.
- Mobile.
- Touch/focus/reading widths.

## Phase P13 — Optional dark theme

- Derive dark semantic tokens.
- Add accessible theme control if justified.
- Ensure no flash and correct browser color integration.

## Phase P14 — Final regression and quality

- Accessibility.
- Visual consistency.
- Performance.
- SEO.
- Unit/component tests.
- E2E.
- Production build.
- Hardcoded-color checks.
- Formatting/lint/typecheck.

---

# 30. Quality Gates

Target verification suite:

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

# or run the complete release gate
bun run verify:full
```

`check:content` is implemented as a lightweight TSX guard for user-facing JSX text and accessibility/presentation attributes. It intentionally targets low-noise patterns only and is part of the verification workflow alongside `check:colors`.

At phase boundaries, run the relevant focused checks plus a full verification at major transitions.

---

# 31. Explicit Anti-Goals

Do not:

- Simply swap the current dark green palette for white.
- Clone Anchal's exact page layout.
- Collapse Kuldip into a single-page portfolio.
- Remove project slug routing.
- Remove detailed case studies.
- Remove articles.
- Remove or weaken the assistant.
- Simplify SEO.
- Weaken accessibility.
- Hide technical depth behind generic minimalist design.
- Make every section a rounded card.
- Use generic stock illustrations.
- Use terminal/hacker visuals as a substitute for real product evidence.
- Add filters with too little content.
- Move every Tailwind utility into a constants file.
- Create abstractions with no repeated semantic responsibility.
- Hardcode portfolio content back into components.
- Hardcode raw colors in presentation components.
- Add constant floating/pulsing/scanning animations.
- Treat tablet as merely a stretched phone.
- Introduce unrelated behavior refactors while redesigning a visual slice.

---

# 32. Definition of Done

The redesign is complete only when all applicable conditions are met.

## Visual and UX

- The default portfolio is calm, professional, readable, and product-oriented.
- The site no longer visually resembles a neon/cyber dashboard.
- Visual hierarchy makes identity, strengths, and evidence obvious.
- Servora is clearly the flagship project.
- Project pages read as engineering case studies.
- Articles have a strong reading experience.
- Résumé feels like an executive engineering profile.
- About feels human and editorial.
- Chat is visually integrated with the design system.
- Footer/contact ending is deliberate and restrained.

## Design system

- Semantic token architecture is in place.
- Raw colors in React presentation components are zero or explicitly justified.
- Spacing/radius/shadow/motion patterns are consistent.
- Accent usage is restrained.
- Technical decoration is used only where it explains or supports content.

## Content/data architecture

- Portfolio content is data-driven where appropriate.
- Page copy/configuration is centralized by domain/page.
- Navigation/social/profile/experience/skills/projects/articles/chat suggestions are centralized.
- Typed object models are preferred over positional tuples for evolving content.
- Components primarily own structure/behavior rather than portfolio copy.

## Architecture preservation

- Project/article slug routes remain generic and data-driven.
- Metadata/static params/sitemap/JSON-LD remain correct.
- Chat security/API behavior is preserved.
- Strict typing remains intact.
- Existing strong component boundaries remain or improve.

## Responsive/accessibility

- Desktop is intentionally designed.
- Tablet is intentionally designed.
- Mobile is intentionally designed.
- Touch targets are comfortable.
- Focus/keyboard/dialog behavior works.
- Reduced motion works.
- Contrast is acceptable.
- Reading widths are appropriate.

## Verification

- Typecheck passes.
- Lint passes.
- Format check passes.
- Color-hardcoding check passes.
- Unit/component tests pass.
- Coverage remains acceptable and redesign-critical behavior is covered.
- Production build passes.
- E2E passes in a browser-capable environment.
- Visual review across desktop/tablet/mobile passes.

---

# 33. Final Design Principle

The target is not “Anchal's UI with Kuldip's content.”

The target is:

> **Anchal's restraint and design/data discipline + Kuldip's stronger architecture and project depth + a new premium editorial engineering design.**

The redesign should preserve the feeling that an engineer built the site while removing the need to prove that through every pixel.
