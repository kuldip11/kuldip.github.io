# Portfolio UI/UX Redesign — Progress Tracker

## Core Rule

> This is an intentional full UI/UX redesign. Preserve strong application behavior, architecture, accessibility, SEO, and security while changing visual presentation and information hierarchy according to the redesign plan.

Detailed requirements live in [`PORTFOLIO_UI_REDESIGN_PLAN.md`](./PORTFOLIO_UI_REDESIGN_PLAN.md).

## Status Legend

| Status        | Meaning                                                        |
| ------------- | -------------------------------------------------------------- |
| `PENDING`     | Approved work that has not started.                            |
| `IN_PROGRESS` | Actively being designed, implemented, or verified.             |
| `COMPLETED`   | Implementation and required verification are complete.         |
| `BLOCKED`     | Cannot proceed because of an external or prerequisite blocker. |
| `N/A`         | Explicitly reviewed and intentionally not applicable.          |

## Overall Progress

| Phase | Area                         | Completed | Total | Progress | Status        |
| ----- | ---------------------------- | --------: | ----: | -------: | ------------- |
| P0    | Baseline / documentation     |         6 |     6 |     100% | `COMPLETED`*  |
| P1    | Design-system foundation     |        14 |    14 |     100% | `COMPLETED`   |
| P2    | Hardcoded-color migration    |         5 |     5 |     100% | `COMPLETED`   |
| P3    | Content/data architecture    |        13 |    13 |     100% | `COMPLETED`   |
| P4    | Shared UI primitives         |        13 |    13 |     100% | `COMPLETED`   |
| P5    | Header / navigation / footer |        12 |    12 |     100% | `COMPLETED`   |
| P6    | Homepage redesign            |        20 |    20 |     100% | `COMPLETED`   |
| P7    | Projects index               |         6 |     7 |      86% | `IN_PROGRESS` |
| P8    | Project case studies         |        15 |    16 |      94% | `IN_PROGRESS` |
| P9    | About + Résumé               |        13 |    14 |      93% | `IN_PROGRESS` |
| P10   | Articles                     |        10 |    10 |     100% | `COMPLETED`   |
| P11   | Chat redesign                |         9 |     9 |     100% | `COMPLETED`   |
| P12   | Responsive refinement        |         4 |    12 |      33% | `IN_PROGRESS` |
| P13   | Optional dark theme          |         7 |     7 |     100% | `COMPLETED`   |
| P14   | Final verification           |        10 |    15 |      67% | `IN_PROGRESS` |

> Implementation is **in final verification**. The redesign, architecture migration, Articles, chat, and optional dark theme are implemented and runtime-verified where the environment permits. Remaining open work is limited to truthful project screenshot assets, a final availability-content decision, and browser-only visual/E2E QA.\n>\n> \* P0 is considered closed for implementation tracking: pre-redesign screenshots/check logs were not captured before the redesign began, so those historical baseline-only items cannot be recreated as an authentic pre-change baseline.

---

# P0 — Baseline, Audit, and Documentation

| ID           | Task                                                                                           | Status      | Completion / verification criteria                                                                                  |
| ------------ | ---------------------------------------------------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------- |
| REDESIGN-000 | Compare the Kuldip and Anchal repositories for visual/design-system and architecture strengths | `COMPLETED` | Findings captured in redesign plan                                                                                  |
| REDESIGN-001 | Define the redesign objective as a full UI/UX redesign, not a color-only change                | `COMPLETED` | Documented in redesign plan                                                                                         |
| REDESIGN-002 | Create exhaustive redesign plan without modifying existing architecture-refactor history       | `COMPLETED` | `PORTFOLIO_UI_REDESIGN_PLAN.md` exists                                                                              |
| REDESIGN-003 | Create granular redesign status tracker                                                        | `COMPLETED` | This file exists and maps implementation work                                                                       |
| REDESIGN-004 | Capture current desktop/tablet/mobile visual baseline where environment allows                 | `N/A`       | Historical pre-redesign screenshots were not captured before implementation began; browser QA is tracked in P12/P14 |
| REDESIGN-005 | Run/record pre-redesign typecheck, lint, format, unit, build and available E2E baseline        | `N/A`       | Authentic pre-redesign runtime baseline is no longer recoverable; current release verification is tracked in P14    |

---

# P1 — Design-System Foundation

| ID     | Task                                                                          | Status      | Completion / verification criteria                                      |
| ------ | ----------------------------------------------------------------------------- | ----------- | ----------------------------------------------------------------------- |
| DS-001 | Define final light-theme semantic foundation colors                           | `COMPLETED` | Page/surface/text/border tokens approved                                |
| DS-002 | Define restrained primary green token scale                                   | `COMPLETED` | Primary/hover/soft/muted/foreground tokens available                    |
| DS-003 | Define secondary slate/blue accent tokens                                     | `COMPLETED` | Secondary tokens available and used selectively                         |
| DS-004 | Define semantic success/warning/danger/info colors independent of brand green | `COMPLETED` | Status system exists                                                    |
| DS-005 | Implement semantic CSS-variable token architecture                            | `COMPLETED` | Components can consume semantic roles                                   |
| DS-006 | Map semantic tokens into Tailwind/application styling utilities               | `COMPLETED` | Raw token usage is consistent                                           |
| DS-007 | Define typography scale and line-height rules                                 | `COMPLETED` | Hero/page/section/card/body/metadata hierarchy implemented              |
| DS-008 | Define max-width/container and 12-column composition rules                    | `COMPLETED` | Shared container and responsive composition patterns exist              |
| DS-009 | Define desktop/mobile section-spacing system                                  | `COMPLETED` | Major section spacing is consistent                                     |
| DS-010 | Define border strategy                                                        | `COMPLETED` | Neutral border hierarchy replaces accent-heavy outlines                 |
| DS-011 | Define radius hierarchy                                                       | `COMPLETED` | Small/button/card/feature radii consistent                              |
| DS-012 | Define shadow hierarchy with no glow-first styling                            | `COMPLETED` | Standard/feature/floating shadows available                             |
| DS-013 | Define motion tiers and reduced-motion rules                                  | `COMPLETED` | Functional/feedback/storytelling motion documented in code              |
| DS-014 | Define background-treatment rules                                             | `COMPLETED` | Neutral, tinted-feature, and technical-visual backgrounds distinguished |

---

# P2 — Hardcoded Color Migration and Enforcement

| ID        | Task                                                                            | Status      | Completion / verification criteria                                                                                     |
| --------- | ------------------------------------------------------------------------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------- |
| COLOR-001 | Audit remaining raw color literals/arbitrary color classes in presentation code | `COMPLETED` | Inventory completed across `app/` and `components/`                                                                    |
| COLOR-002 | Replace component-level raw palette values with semantic tokens                 | `COMPLETED` | No raw presentation colors remain in application component TS/TSX                                                      |
| COLOR-003 | Document narrow exceptions such as brand/data visualization colors              | `COMPLETED` | No component exceptions are currently required; illustration palettes/data live outside component presentation styling |
| COLOR-004 | Add automated `check:colors`-style regression guard                             | `COMPLETED` | `scripts/check-colors.mjs` fails on raw TS/TSX presentation colors                                                     |
| COLOR-005 | Add color check to verification workflow/scripts                                | `COMPLETED` | `check:colors` script added and included in `verify`                                                                   |

---

# P3 — Content, Constants, and Data Architecture

| ID       | Task                                                                      | Status      | Completion / verification criteria                                                                                      |
| -------- | ------------------------------------------------------------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------- |
| DATA-001 | Audit JSX for portfolio copy/configuration that should be centralized     | `COMPLETED` | Remaining hardcoded content inventory exists                                                                            |
| DATA-002 | Centralize personal/profile information                                   | `COMPLETED` | Shared profile source used consistently                                                                                 |
| DATA-003 | Centralize navigation labels/targets and social links                     | `COMPLETED` | Header/footer/mobile nav consume shared data                                                                            |
| DATA-004 | Centralize homepage copy, metrics, capabilities, principles and CTAs      | `COMPLETED` | Homepage components render typed data                                                                                   |
| DATA-005 | Centralize experience and résumé content                                  | `COMPLETED` | Résumé/home experience share typed source where appropriate                                                             |
| DATA-006 | Centralize technology/skills categories                                   | `COMPLETED` | Tech UI is data-driven                                                                                                  |
| DATA-007 | Preserve and refine typed project definitions for redesigned presentation | `COMPLETED` | Projects remain generic/data-driven                                                                                     |
| DATA-008 | Model optional project case-study sections cleanly                        | `COMPLETED` | Generic route supports optional case-study content                                                                      |
| DATA-009 | Preserve/refine article data and presentation metadata                    | `COMPLETED` | Article index/detail consume typed data                                                                                 |
| DATA-010 | Centralize chat suggestion content and presentation labels                | `COMPLETED` | Chat chips/copy are configurable                                                                                        |
| DATA-011 | Centralize footer/contact CTA content                                     | `COMPLETED` | Footer/contact sections render shared data                                                                              |
| DATA-012 | Prefer named typed objects over positional tuples for evolving content    | `COMPLETED` | Evolving data models have explicit fields/types                                                                         |
| DATA-013 | Add a low-noise content-architecture regression guard                     | `COMPLETED` | `scripts/check-content.mjs` prevents user-facing JSX copy/labels from drifting back into TSX and is wired into `verify` |

---

# P4 — Shared UI and Component Architecture

| ID     | Task                                                                               | Status      | Completion / verification criteria                              |
| ------ | ---------------------------------------------------------------------------------- | ----------- | --------------------------------------------------------------- |
| UI-001 | Implement/reuse `PageContainer` abstraction                                        | `COMPLETED` | Consistent page width/gutters                                   |
| UI-002 | Implement/reuse semantic `Section` pattern                                         | `COMPLETED` | Major sections share layout primitives without over-abstraction |
| UI-003 | Implement/reuse `SectionHeading` pattern                                           | `COMPLETED` | Consistent eyebrow/title/description hierarchy                  |
| UI-004 | Implement semantic `Button` variants                                               | `COMPLETED` | Primary/secondary/text actions consistent and accessible        |
| UI-005 | Implement `TextLink` / arrow-link pattern                                          | `COMPLETED` | Editorial links consistent                                      |
| UI-006 | Implement restrained `Card` surface only where semantically needed                 | `COMPLETED` | No universal card-wrapper misuse                                |
| UI-007 | Implement `Badge` pattern for genuine labels/status                                | `COMPLETED` | Badges no longer dominate hierarchy                             |
| UI-008 | Implement `Metric` presentation pattern                                            | `COMPLETED` | Proof/metrics reusable without card overload                    |
| UI-009 | Implement `IconBox` pattern where useful                                           | `COMPLETED` | Capability/feature icons consistent                             |
| UI-010 | Implement/refine reusable `ProjectCard`                                            | `COMPLETED` | Secondary project presentation reusable                         |
| UI-011 | Implement/refine `SocialLink`                                                      | `COMPLETED` | Shared accessible social links                                  |
| UI-012 | Preserve/refine `SkipLink` and accessibility primitives                            | `COMPLETED` | Keyboard bypass behavior remains correct                        |
| UI-013 | Keep one primary React component per file and avoid unnecessary micro-abstractions | `COMPLETED` | Architecture audit passes                                       |

---

# P5 — Header, Mobile Navigation, and Footer

| ID         | Task                                                                            | Status      | Completion / verification criteria                                       |
| ---------- | ------------------------------------------------------------------------------- | ----------- | ------------------------------------------------------------------------ |
| NAV-001    | Redesign desktop header as light/translucent editorial navigation               | `COMPLETED` | New header matches design direction                                      |
| NAV-002    | Present name + role identity compactly in header                                | `COMPLETED` | Identity visible without crowding nav                                    |
| NAV-003    | Replace boxed/neon active nav treatment with restrained active state            | `COMPLETED` | Active route remains clear                                               |
| NAV-004    | Keep GitHub/LinkedIn visually secondary to main CTA                             | `COMPLETED` | Header uses understated text social links before the primary contact CTA |
| NAV-005    | Add/retain clear `Let's talk` primary CTA                                       | `COMPLETED` | CTA is accessible and consistent                                         |
| NAV-006    | Redesign mobile navigation as spacious full-height/large-panel experience       | `COMPLETED` | Mobile composition matches plan                                          |
| NAV-007    | Preserve focus trapping, focus return, keyboard escape and accessible semantics | `COMPLETED` | Accessibility tests/manual checks pass                                   |
| NAV-008    | Ensure mobile links have comfortable touch targets                              | `COMPLETED` | Minimum hit-area guidance satisfied                                      |
| FOOTER-001 | Add strong pre-footer contact CTA                                               | `COMPLETED` | Page has intentional closing action                                      |
| FOOTER-002 | Simplify footer visual treatment                                                | `COMPLETED` | Heavy green framing/glow removed                                         |
| FOOTER-003 | Keep navigation/social/contact information structured and data-driven           | `COMPLETED` | Footer renders shared config                                             |
| FOOTER-004 | Keep build/technology note understated                                          | `COMPLETED` | Footer ends cleanly without visual noise                                 |

---

# P6 — Homepage Redesign

| ID       | Task                                                                                | Status      | Completion / verification criteria                                            |
| -------- | ----------------------------------------------------------------------------------- | ----------- | ----------------------------------------------------------------------------- |
| HOME-001 | Recompose homepage information hierarchy                                            | `COMPLETED` | Sections follow intentional narrative                                         |
| HOME-002 | Redesign hero to editorial text/portrait split                                      | `COMPLETED` | Desktop approximately 58/42 or visually equivalent                            |
| HOME-003 | Use clear Senior Frontend Engineer eyebrow/positioning                              | `COMPLETED` | Role visible immediately                                                      |
| HOME-004 | Use concise 2–3 line headline with one restrained emphasis style                    | `COMPLETED` | Headline is dominant but not harsh                                            |
| HOME-005 | Refine hero supporting copy around React/Next.js architecture/product engineering   | `COMPLETED` | Copy is clear and data-driven                                                 |
| HOME-006 | Add primary `View projects` and secondary résumé action                             | `COMPLETED` | CTA hierarchy clear                                                           |
| HOME-007 | Keep optional GitHub as tertiary text action                                        | `COMPLETED` | GitHub renders as a tertiary text action after the primary and résumé actions |
| HOME-008 | Remove hero expertise-pill overload                                                 | `COMPLETED` | Hero remains uncluttered                                                      |
| HOME-009 | Simplify portrait treatment and remove competing scribbles/quote/glow overlays      | `COMPLETED` | Portrait is the visual focus                                                  |
| HOME-010 | Replace persistent hero grid with subtle neutral/architectural background treatment | `COMPLETED` | Background supports rather than dominates                                     |
| HOME-011 | Render proof/metrics as typography/separators rather than cards                     | `COMPLETED` | Metrics are lightweight and readable                                          |
| HOME-012 | Redesign capabilities into three focused areas                                      | `COMPLETED` | Architecture/Product/Performance-quality hierarchy clear                      |
| HOME-013 | Build flagship Servora feature section with large real/product-specific visual      | `COMPLETED` | Servora gets dominant visual weight                                           |
| HOME-014 | Add concise Servora thesis/facts/stack/case-study CTA                               | `COMPLETED` | Feature explains product value and depth                                      |
| HOME-015 | Redesign secondary projects with product visuals and restrained cards               | `COMPLETED` | TallyLite/others clearly secondary                                            |
| HOME-016 | Add restrained project hover behavior                                               | `COMPLETED` | Small translate/arrow/border/shadow only                                      |
| HOME-017 | Simplify experience preview and link to full résumé                                 | `COMPLETED` | Homepage avoids résumé duplication                                            |
| HOME-018 | Add/refine engineering principles / How I work section                              | `COMPLETED` | 3–4 credible principles shown                                                 |
| HOME-019 | Simplify tech stack into grouped categories rather than heavy icon tiles            | `COMPLETED` | Stack scans quickly                                                           |
| HOME-020 | Ensure contact CTA leads naturally into restrained footer                           | `COMPLETED` | Homepage ending is coherent                                                   |

---

# P7 — Projects Index

| ID           | Task                                                              | Status      | Completion / verification criteria                                                                                       |
| ------------ | ----------------------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------ |
| PROJECTS-001 | Redesign Projects page hero with editorial positioning            | `COMPLETED` | Title/thesis hierarchy matches plan                                                                                      |
| PROJECTS-002 | Present Servora as large/full-width flagship project              | `COMPLETED` | Flagship visibly dominant                                                                                                |
| PROJECTS-003 | Present TallyLite/other completed work as secondary project cards | `COMPLETED` | Secondary hierarchy consistent                                                                                           |
| PROJECTS-004 | Keep coming-soon project state subdued                            | `COMPLETED` | Dashed muted coming-soon surface stays subordinate to completed projects                                                 |
| PROJECTS-005 | Use real/product-specific imagery where available                 | `BLOCKED`   | Product-specific compositions exist; truthful real screenshots are not present in the repository yet                     |
| PROJECTS-006 | Remove/avoid filters until project count justifies them           | `COMPLETED` | No unnecessary discovery controls                                                                                        |
| PROJECTS-007 | Preserve generic data-driven project routes and ordering          | `COMPLETED` | Project rendering remains driven by typed project definitions and generic slug routes; runtime regression covered in P14 |

---

# P8 — Project Case Studies

| ID       | Task                                                                     | Status      | Completion / verification criteria                                                                           |
| -------- | ------------------------------------------------------------------------ | ----------- | ------------------------------------------------------------------------------------------------------------ |
| CASE-001 | Create generic editorial case-study page composition                     | `COMPLETED` | Page is not a stack of equal dark cards                                                                      |
| CASE-002 | Redesign case-study hero with thesis, stack, actions and large visual    | `COMPLETED` | Project identity/evidence clear                                                                              |
| CASE-003 | Add concise project overview metadata                                    | `COMPLETED` | Role/scope/architecture/apps/status readable                                                                 |
| CASE-004 | Add Context / Problem section                                            | `COMPLETED` | Typed context block is rendered generically for supported projects                                           |
| CASE-005 | Add product/system ecosystem section when applicable                     | `COMPLETED` | Typed ecosystem model renders relationships between product surfaces                                         |
| CASE-006 | Create professional Servora ecosystem diagram                            | `COMPLETED` | Data-driven hub/spoke system view communicates API, app surfaces and shared packages                         |
| CASE-007 | Add architecture section with real technical decisions                   | `COMPLETED` | Multi-tenant/shared packages/pricing/realtime/permissions represented where appropriate                      |
| CASE-008 | Use architecture/flow/component diagrams only when explanatory           | `COMPLETED` | No decorative fake technical visuals                                                                         |
| CASE-009 | Present large screenshots/product compositions                           | `BLOCKED`   | Large product compositions are implemented; replacement with real screenshots requires actual product assets |
| CASE-010 | Add 3–5 real engineering challenges for major projects where data exists | `COMPLETED` | Challenges are specific and credible                                                                         |
| CASE-011 | Add quality/testing/security/performance section where applicable        | `COMPLETED` | Engineering maturity is evidenced                                                                            |
| CASE-012 | Add Outcomes / What this project demonstrates                            | `COMPLETED` | Case study ends with clear value/evidence                                                                    |
| CASE-013 | Add Learnings section only where useful                                  | `COMPLETED` | Optional content model works                                                                                 |
| CASE-014 | Implement strong next-project transition/navigation                      | `COMPLETED` | Navigation is more than a small isolated button                                                              |
| CASE-015 | Model optional case-study sections without slug-specific JSX branches    | `COMPLETED` | Generic route remains generic                                                                                |
| CASE-016 | Preserve project metadata/static params/SEO/JSON-LD/sitemap behavior     | `COMPLETED` | Route/domain/metadata/sitemap tests and production build pass                                                |

---

# P9 — About and Résumé

| ID         | Task                                                                          | Status        | Completion / verification criteria             |
| ---------- | ----------------------------------------------------------------------------- | ------------- | ---------------------------------------------- |
| ABOUT-001  | Redesign About hero with strong editorial statement                           | `COMPLETED`   | Page has clear human/professional positioning  |
| ABOUT-002  | Build image + story main composition                                          | `COMPLETED`   | About does not feel like card collection       |
| ABOUT-003  | Add/refine `How I got here` content                                           | `COMPLETED`   | Story is concise and credible                  |
| ABOUT-004  | Add/refine engineering philosophy content                                     | `COMPLETED`   | Technical identity is clear                    |
| ABOUT-005  | Add `What I care about` / values content where appropriate                    | `COMPLETED`   | Human dimension without filler                 |
| ABOUT-006  | Add `What I'm learning` content only if it remains useful/current             | `N/A`         | No stale generic section                       |
| ABOUT-007  | Include outside-work content only if intentionally desired                    | `N/A`         | Personal content remains relevant/professional |
| RESUME-001 | Redesign résumé hero/header as executive engineering profile                  | `COMPLETED`   | Name/role/stack/contact hierarchy is clear     |
| RESUME-002 | Keep Download résumé as primary action                                        | `COMPLETED`   | Action prominent and accessible                |
| RESUME-003 | Add truthful availability/status pill only if appropriate                     | `IN_PROGRESS` | No stale availability claim                    |
| RESUME-004 | Recompose summary/experience/impact/expertise/skills/education/certifications | `COMPLETED`   | Content hierarchy matches plan                 |
| RESUME-005 | Use clean two-column desktop layout where beneficial                          | `COMPLETED`   | Desktop uses space effectively                 |
| RESUME-006 | Use single-column mobile résumé                                               | `COMPLETED`   | Mobile readable and linear                     |
| RESUME-007 | Remove unnecessary card nesting/dashboard styling                             | `COMPLETED`   | Résumé looks professional/editorial            |

---

# P10 — Articles

| ID          | Task                                                                       | Status      | Completion / verification criteria                            |
| ----------- | -------------------------------------------------------------------------- | ----------- | ------------------------------------------------------------- |
| ARTICLE-001 | Redesign Articles index hero                                               | `COMPLETED` | Editorial title/thesis present                                |
| ARTICLE-002 | Replace card-heavy list with editorial article rows/list where appropriate | `COMPLETED` | Date/topic/title/summary/time/action hierarchy clear          |
| ARTICLE-003 | Use subtle dividers and whitespace                                         | `COMPLETED` | Index feels reading-oriented                                  |
| ARTICLE-004 | Redesign article detail header                                             | `COMPLETED` | Title/summary/category/time/date clear                        |
| ARTICLE-005 | Constrain primary reading width to approximately 700–780px                 | `COMPLETED` | Long-form readability improved                                |
| ARTICLE-006 | Improve paragraph/heading spacing                                          | `COMPLETED` | Article scan/read quality improved                            |
| ARTICLE-007 | Restyle code/examples on soft neutral surfaces                             | `COMPLETED` | Technical examples readable without harsh contrast            |
| ARTICLE-008 | Allow diagrams/technical visuals to exceed text column when useful         | `COMPLETED` | Complex visuals remain legible                                |
| ARTICLE-009 | Avoid distracting article animations                                       | `COMPLETED` | Reading remains primary                                       |
| ARTICLE-010 | Preserve article slug/static params/metadata/SEO behavior                  | `COMPLETED` | Route/domain/metadata/sitemap tests and production build pass |

---

# P11 — Chat Assistant

| ID          | Task                                                                  | Status      | Completion / verification criteria                                                                |
| ----------- | --------------------------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------- |
| CHAT-UI-001 | Redesign launcher as simple 48–52px circle/squircle                   | `COMPLETED` | Compact semantic-token launcher with soft shadow only                                             |
| CHAT-UI-002 | Redesign panel header and intro copy                                  | `COMPLETED` | Light editorial header communicates assistant scope                                               |
| CHAT-UI-003 | Render suggestion chips from centralized data                         | `COMPLETED` | Suggestions continue to render from centralized chatbot data                                      |
| CHAT-UI-004 | Redesign user/assistant message surfaces                              | `COMPLETED` | User/assistant roles use distinct semantic surfaces                                               |
| CHAT-UI-005 | Redesign composer/send action using semantic tokens                   | `COMPLETED` | Composer, focus, disabled and error states use semantic tokens                                    |
| CHAT-UI-006 | Preserve accessible keyboard/form behavior                            | `COMPLETED` | Component tests pass for launcher/panel/form/state-token interactions                             |
| CHAT-UI-007 | Preserve API request/response contract                                | `COMPLETED` | API route/component tests pass                                                                    |
| CHAT-UI-008 | Preserve rate limiting, validation, challenge/provider/error behavior | `COMPLETED` | 11 chat API tests pass, including private-mode non-storage and provider-error handling            |
| CHAT-UI-009 | Ensure chat fully supports semantic light/dark themes                 | `COMPLETED` | Chat uses semantic surfaces/text/borders only and inherits both themes without a parallel palette |

---

# P12 — Responsive Refinement

| ID       | Task                                                                                      | Status        | Completion / verification criteria                                                                                                                                  |
| -------- | ----------------------------------------------------------------------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RESP-001 | Validate desktop container/grid composition across all primary routes                     | `PENDING`     | Layout consistent at desktop widths                                                                                                                                 |
| RESP-002 | Design tablet as an intentional breakpoint, not stretched mobile                          | `IN_PROGRESS` | Dedicated nav breakpoint and wide/tablet hero compositions implemented; screenshot QA pending                                                                       |
| RESP-003 | Tune tablet hero proportions around 55/45 where appropriate                               | `IN_PROGRESS` | Hero switches to an intentional two-column wide breakpoint; screenshot QA pending                                                                                   |
| RESP-004 | Reduce multi-column layouts appropriately on tablet                                       | `IN_PROGRESS` | Core grids collapse/rebalance before desktop widths; cross-route screenshot QA pending                                                                              |
| RESP-005 | Protect reading widths on case-study/article pages                                        | `COMPLETED`   | Article reading column and case-study prose widths are explicitly constrained                                                                                       |
| RESP-006 | Stack mobile hero in headline/copy/actions/portrait/metrics order or validated equivalent | `IN_PROGRESS` | Source order now follows copy/actions → portrait → proof points on mobile while desktop preserves the two-column composition; browser test added, execution pending |
| RESP-007 | Ensure flagship Servora remains full-width at all breakpoints                             | `COMPLETED`   | Flagship feature remains its own full-width section across breakpoints                                                                                              |
| RESP-008 | Standardize project grids: desktop 2–3, tablet 2, mobile 1 where applicable               | `COMPLETED`   | Secondary project layout uses responsive one/two-column composition                                                                                                 |
| RESP-009 | Maintain normal mobile body text around 15–16px                                           | `IN_PROGRESS` | Primary redesigned pages use readable mobile body sizes; visual QA pending                                                                                          |
| RESP-010 | Keep mobile metadata around 12–13px and buttons around 14–16px                            | `IN_PROGRESS` | Main UI follows target scale; visual QA pending                                                                                                                     |
| RESP-011 | Ensure interactive touch targets are approximately 44px minimum where applicable          | `COMPLETED`   | Reusable controls, header/social actions, section navigation, article/project navigation and résumé tabs use 44px-class minimum targets                             |
| RESP-012 | Remove decorative overlaps that damage portrait/content readability                       | `IN_PROGRESS` | Hero decoration remains behind the portrait and mobile content no longer interleaves proof points before the image; screenshot QA pending                           |

---

# P13 — Optional Dark Theme

| ID        | Task                                                                 | Status      | Completion / verification criteria                                                                                                                                |
| --------- | -------------------------------------------------------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| THEME-001 | Stabilize default light redesign before dark implementation          | `COMPLETED` | Light token/layout implementation passes typecheck, lint, unit tests and production build; browser screenshot QA is tracked separately in P12/P14                 |
| THEME-002 | Define dark semantic tokens from the same role system                | `COMPLETED` | Dark mode overrides the same semantic roles in `globals.css`; components remain theme-agnostic                                                                    |
| THEME-003 | Use softer charcoal/green-black surfaces and muted accents           | `COMPLETED` | Dark palette uses charcoal surfaces, muted green accents and neutral borders without glow-first styling                                                           |
| THEME-004 | Add accessible theme control only if justified                       | `COMPLETED` | 44px theme control is available in desktop/mobile navigation with action-specific accessible labels                                                               |
| THEME-005 | Initialize theme before paint to prevent flash                       | `COMPLETED` | Head initialization applies saved/system theme before the application body renders                                                                                |
| THEME-006 | Update browser/theme color integration where supported               | `COMPLETED` | Runtime theme-color metadata follows the semantic page background                                                                                                 |
| THEME-007 | Respect system preference/reduced motion according to final theme UX | `COMPLETED` | System dark preference is the default without a saved choice; live system changes are followed until the user selects a theme; reduced-motion rules remain global |

---

# P14 — Final Verification and Definition of Done

| ID             | Task                                                                                                | Status        | Completion / verification criteria                                                                                                                                                                                                                                    |
| -------------- | --------------------------------------------------------------------------------------------------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| VERIFY-UI-001  | Run typecheck                                                                                       | `COMPLETED`   | TypeScript semantic check passes (`tsc --noEmit`)                                                                                                                                                                                                                     |
| VERIFY-UI-002  | Run lint                                                                                            | `COMPLETED`   | ESLint passes with zero errors                                                                                                                                                                                                                                        |
| VERIFY-UI-003  | Run format check                                                                                    | `COMPLETED`   | Prettier check passes after formatting redesign files                                                                                                                                                                                                                 |
| VERIFY-UI-004  | Run hardcoded-color check                                                                           | `COMPLETED`   | `node scripts/check-colors.mjs` passes with zero component exceptions                                                                                                                                                                                                 |
| VERIFY-UI-004A | Run content-architecture check                                                                      | `COMPLETED`   | `node scripts/check-content.mjs` passes with user-facing TSX copy/labels centralized                                                                                                                                                                                  |
| VERIFY-UI-005  | Run unit/component tests                                                                            | `COMPLETED`   | Vitest: 31 test files / 65 tests pass                                                                                                                                                                                                                                 |
| VERIFY-UI-006  | Run coverage and add tests for redesign-critical behavior where needed                              | `COMPLETED`   | Coverage passes: 90.89% statements / 78.06% branches / 93.38% functions / 93.28% lines                                                                                                                                                                                |
| VERIFY-UI-007  | Run production build                                                                                | `COMPLETED`   | Next.js 16 production build passes with `NEXT_PUBLIC_SITE_URL=https://kuldip.github.io`                                                                                                                                                                               |
| VERIFY-UI-008  | Run Playwright E2E in browser-capable environment                                                   | `IN_PROGRESS` | Latest user-local Playwright run reached 69/70. The sole remaining failure was a stale assertion checking focus inside the inner mobile `<nav>` instead of the full focus-trapped drawer; that assertion is now corrected. Final local rerun is pending confirmation. |
| VERIFY-UI-009  | Verify desktop visual consistency across all public routes                                          | `IN_PROGRESS` | Latest 69/70 user-local browser run reports no desktop-specific regression; final manual/complete browser QA remains pending.                                                                                                                                         |
| VERIFY-UI-010  | Verify tablet visual consistency across all public routes                                           | `IN_PROGRESS` | Latest 69/70 user-local browser run reports no tablet-specific regression; final manual/complete browser QA remains pending.                                                                                                                                          |
| VERIFY-UI-011  | Verify mobile visual consistency across all public routes                                           | `IN_PROGRESS` | The prior résumé overflow regression is fixed; all responsive tests passed in the latest 69/70 run. Final manual/complete browser QA remains pending.                                                                                                                 |
| VERIFY-UI-012  | Run accessibility review for semantics, focus, keyboard, contrast, touch targets and reduced motion | `IN_PROGRESS` | Skip-link and drawer behavior are fixed. The latest 69/70 failure was the test measuring the inner `<nav>` instead of the full focus-trapped drawer; the test is corrected and awaits one final local rerun.                                                          |
| VERIFY-UI-013  | Verify project/article static params, metadata, sitemap, canonical/OpenGraph/Twitter and JSON-LD    | `COMPLETED`   | Static params/domain/metadata/sitemap tests pass and build emits all expected SSG routes                                                                                                                                                                              |
| VERIFY-UI-014  | Verify chat contract/security/rate-limit behavior has no regression                                 | `COMPLETED`   | 11 API tests pass; private-mode provider interactions are explicitly sent with `store: false`                                                                                                                                                                         |

---

## Current Implementation Note — Redesign Pass 03

Implemented through this pass:

- redesigned About around an editorial portrait/story composition, engineering principles, journey and current-focus sections;
- redesigned Résumé as a professional engineering profile with a stronger hero, restrained metrics, clear experience timeline, accessible skill tabs, education/certification content and reduced card nesting;
- redesigned the Articles index into editorial rows and rebuilt article detail pages around a 760px reading column, stronger typographic hierarchy, neutral technical visuals and calmer takeaways/callouts;
- removed the old article float/pulse/scan animation layer so long-form reading remains the primary experience;
- replaced the homepage/project generic dark-green mock visuals with lighter product-specific Servora and TallyLite compositions; real screenshots are still pending because the repository does not currently contain product screenshot assets;
- newly redesigned About, Résumé, Articles and project-visual files use semantic design tokens rather than raw presentation colors.

Verification note: `git diff --check` passes. A global TypeScript invocation was attempted, but repository dependencies are not installed, so Next/React/test type packages cannot resolve. An `npm install` fallback timed out. Typecheck, lint, tests and production build therefore remain pending rather than being marked complete.

---

## Current Implementation Note — Redesign Pass 04

Implemented through this pass:

- redesigned the portfolio assistant launcher, header, suggestion actions, messages, loading state, error state and composer around the light editorial system while preserving the existing chat hook/API architecture;
- centralized chat accessibility/action labels alongside the existing chat UI copy;
- removed raw presentation color literals from ordinary TS/TSX presentation components and migrated legacy error/not-found/supporting UI onto semantic tokens;
- added `scripts/check-colors.mjs` plus a `check:colors` package script and wired the guard into `verify`;
- initially documented narrow product-illustration exceptions; pass 05 subsequently moved presentation color responsibility out of component styling and reduced the guard to zero component exceptions;
- strengthened global reduced-motion behavior so animations and transitions collapse for users requesting reduced motion;
- `node scripts/check-colors.mjs` passes and `git diff --check` passes.

Runtime verification note: dependencies were supplied and the non-browser release gates now pass. Browser-only E2E remains blocked by managed-environment navigation policy (`ERR_BLOCKED_BY_ADMINISTRATOR`).

---

## Current Implementation Note — Redesign Pass 05

Implemented through this pass:

- introduced shared `PageContainer`, `Section`, `SectionHeading`, `ActionLink`, `TextLink`, `Button`, `SurfaceCard`, `Badge`, `Metric`, `IconBox`, `SocialLink`, `ProjectCard`, and `SkipLink` primitives and adopted them across redesigned surfaces;
- centralized header/footer/navigation/accessibility/page labels and expanded reuse of the shared site/profile source;
- converted experience, homepage tools, and project metrics/features/highlights from positional tuples to named typed objects; a tuple audit now finds no positional tuple models in `types/` or `constants/`;
- added generic typed Context and Ecosystem case-study sections, including a Servora system view that explains API, Admin/POS, Kitchen, Waiter, Customer, Website, and shared-package relationships;
- added a subdued data-driven coming-soon project state and a tertiary GitHub action in the homepage hero;
- tightened the navigation breakpoint and hero/project tablet compositions so medium widths do not inherit a cramped desktop layout;
- removed the obsolete footer component set and the unused legacy dark `ProjectVisual` component/test instead of carrying parallel architectures;
- reduced the color guard to **zero component exceptions**; `node scripts/check-colors.mjs` passes across the application component surface;
- ran a TypeScript `transpileModule` syntax pass across the full TS/TSX source surface with no syntax diagnostics. Full semantic typecheck still requires the repository dependencies.

Runtime verification note: typecheck, lint, formatting, guards, unit/component/API tests, coverage, and production build now pass. Browser screenshot/E2E QA remains blocked by managed-browser navigation policy.

---

# Cross-Cutting Rules to Check During Every Phase

These are not separate implementation phases; they apply continuously.

| Rule                                                                               | Status        |
| ---------------------------------------------------------------------------------- | ------------- |
| Components should own structure/behavior, not hardcoded portfolio content          | `COMPLETED`   |
| Raw presentation colors should use semantic tokens                                 | `COMPLETED`   |
| Accent color should guide attention, not dominate the viewport                     | `COMPLETED`   |
| Cards should be used only for semantic grouping                                    | `COMPLETED`   |
| Real product screenshots/diagrams should beat generic technical decoration         | `PENDING`     |
| Tablet must be intentionally designed                                              | `IN_PROGRESS` |
| Motion must be restrained and reduced-motion-aware                                 | `COMPLETED`   |
| Existing slug architecture, SEO, chat security, and accessibility must not regress | `IN_PROGRESS` |
| Reusable styling abstractions must represent real concepts                         | `COMPLETED`   |
| Avoid unnecessary refactors outside the active redesign slice                      | `COMPLETED`   |

---

# Current Phase

**P12/P14 — FINAL BROWSER QA / ASSET COMPLETION**

Current focus:

- execute the prepared desktop/tablet/mobile Playwright matrix in a browser/runtime that permits navigation to the target application origin;
- perform final visual QA for light/dark themes at mobile, tablet and desktop widths;
- replace product compositions with genuine Servora/TallyLite screenshots only when truthful assets are supplied;
- decide whether the résumé availability/status claim should remain current before closing `RESUME-003`.

All non-browser release gates now pass in a dependency-equipped environment.

---

## Current Implementation Note — Redesign Pass 06

Implemented through this pass:

- implemented an optional professional dark theme by overriding the same semantic token roles used by the light redesign; no component-level parallel theme styles were introduced;
- added a pre-paint theme initializer using saved preference first and system color preference otherwise, plus live system-preference following until the user makes an explicit choice;
- added an accessible 44px theme toggle to desktop and mobile navigation and synchronized browser `theme-color` metadata with the active semantic page surface;
- removed the final obsolete legacy dark/neon palette aliases from the global theme and migrated the remaining `SectionHeader` accent reference to the semantic primary token;
- completed a static touch-target audit and raised reusable icon buttons, social links, navigation links, résumé tabs, article/project back links and footer links to approximately 44px minimum interaction targets;
- reduced mobile minima for major editorial page titles and switched the chat panel to dynamic viewport height sizing for more reliable small-screen behavior;
- added a ThemeToggle component test, updated Header test expectations for the About route, and gave the nested mobile navigation a distinct accessible label;
- `node scripts/check-colors.mjs` passes with zero component exceptions and a TypeScript transpile syntax pass reports no syntax diagnostics across the source/test surface.

Runtime verification note: semantic typecheck, lint, Vitest/coverage, and production build now pass with the supplied dependencies. Playwright/browser screenshot QA remains blocked by managed-browser navigation policy.

---

## Current Implementation Note — Redesign Pass 07

Implemented through this pass:

- fixed a real homepage anchor regression by removing the duplicate `id="approach"`; the engineering-principles section is now the single canonical approach anchor;
- corrected the mobile hero information hierarchy so copy/actions are followed by the portrait and then the proof points, while tablet/desktop retain a deliberate two-column composition;
- switched the mobile navigation drawer from `100vh` to `100dvh` so browser chrome does not create a clipped drawer on modern mobile browsers;
- centralized the chat dialog accessibility label rather than leaving it inline in the component;
- removed unused pre-redesign navigation/filter/hero constants that no longer participate in the current UI architecture;
- updated stale E2E navigation expectations from the old homepage-anchor navigation to the redesigned primary page routes and aligned chat tests with the current `dialog` semantics;
- added a responsive Playwright matrix for mobile (390×844), tablet (820×1180), and desktop (1440×1000) across the primary public routes, including horizontal-overflow checks and responsive navigation assertions;
- added explicit mobile hero-order and single-anchor regression tests;
- added theme E2E coverage for explicit dark-mode persistence and system-preference initialization;
- `node scripts/check-colors.mjs` passes with zero component exceptions; a TypeScript `transpileModule` pass reports zero syntax-error files across 188 TS/TSX files, and local `@/` import resolution passes across the same surface.

Runtime verification note: the Vitest suite now executes successfully (31 files / 65 tests) and production build passes. The authored Playwright suite remains blocked only because managed Chromium cannot navigate to the local app. Real Servora/TallyLite screenshots remain asset-blocked rather than being fabricated.

---

## Current Implementation Note — Redesign Pass 08

Implemented through this pass:

- centralized the final user-facing TSX literals found by audit, including the 404 action label, chat typing status label, and capabilities-section accessibility label;
- added `scripts/check-content.mjs`, a deliberately low-noise regression guard that checks TSX user-facing text nodes and accessibility/presentation string attributes, and wired `check:content` into the main `verify` command;
- expanded accessibility E2E coverage across all primary public routes for single-H1/main-landmark structure, duplicate IDs, image alt attributes, skip-link focus behavior, external-link protection, and mobile drawer focus trapping/Escape/focus restoration;
- expanded SEO E2E coverage for canonical/OpenGraph/Twitter metadata across primary routes, homepage-only ProfilePage JSON-LD, project Article JSON-LD, article BlogPosting JSON-LD, landing-page-only keywords, robots and sitemap coverage;
- removed the unused legacy `SectionHeader` component and generated `tsconfig.tsbuildinfo` artifact from the deliverable;
- fixed the Header contact CTA rendering two arrow icons by removing the redundant per-call icon and relying on the shared `ActionLink` primitive;
- added global editorial text balancing, sticky-header-aware scroll padding, and a semantic global `:focus-visible` fallback for native interactive elements;
- repaired the root README (which was truncated mid-code-block), updated it for the redesigned architecture, and documented both design-system guards and the verification workflow;
- added `verify:full` as a single release gate covering typecheck, lint, format, color/content guards, coverage, build, and Playwright;
- `node scripts/check-content.mjs` and `node scripts/check-colors.mjs` both pass; a TypeScript transpile syntax pass reports zero syntax-error files across 187 TS/TSX files, and local `@/` import resolution reports zero missing imports.

Environment verification note: package installation is conclusively network-blocked in this environment (`npm` cannot resolve `registry.npmjs.org`, returning `EAI_AGAIN`), and no dependency cache is available. Semantic typecheck/lint/Vitest/build/Playwright therefore remain pending for a dependency-equipped environment rather than being repeatedly retried or overstated as complete.

---

## Current Implementation Note — Redesign Pass 09

The uploaded `node_modules` archive enabled full runtime verification of the non-browser release matrix.

Verified in this pass:

- TypeScript semantic typecheck: **PASS**;
- ESLint: **PASS** after fixing import-order drift and declaring Node globals for repository scripts;
- Prettier: **PASS** after formatting the redesign surface;
- color architecture guard: **PASS**;
- content architecture guard: **PASS**;
- Vitest: **31 test files / 65 tests PASS**;
- coverage: **90.89% statements / 78.06% branches / 93.38% functions / 93.28% lines**;
- Next.js 16 production build: **PASS**, including all expected static, SSG and API routes.

Real defects/regressions found and fixed by runtime verification:

- updated stale pre-redesign Header, Footer, Projects and Articles unit expectations;
- restored the chat privacy contract so private-mode provider calls send `store: false`;
- updated footer navigation to expose the planned primary public routes (`Projects`, `Articles`, `About`, `Résumé`);
- added an ESLint Node-script environment override for `console`/`process`;
- made the Playwright web-server command overridable while preserving `bun run dev` as the default.

Browser result:

- Playwright can discover and invoke `/usr/bin/chromium`, but this container's Chromium crashes before page/context creation with `GPU process isn't usable` / `error_code=1002`.
- The responsive/theme test group therefore reports browser-launch failures before any portfolio assertion is executed.
- Browser-only E2E and screenshot QA remain `BLOCKED` by the container runtime, not by a known application assertion failure.

---

## Current Implementation Note — Redesign Pass 10

This pass hardened and re-verified the final source tree after the pass-09 runtime fixes.

Verified again on the final tree:

- TypeScript semantic typecheck: **PASS**;
- ESLint: **PASS**;
- Prettier: **PASS** (including regenerated `next-env.d.ts`);
- color architecture guard: **PASS**;
- content architecture guard: **PASS**;
- Vitest coverage: **31 test files / 65 tests PASS**;
- coverage: **90.89% statements / 78.06% branches / 93.38% functions / 93.28% lines**;
- Next.js 16 production build: **PASS**, including all static, SSG and API routes.

Browser hardening:

- Playwright now accepts optional `PLAYWRIGHT_CHROMIUM_ARGS` in addition to the executable-path override, allowing hardened system-Chromium flags without changing the default developer configuration;
- with `--no-sandbox --disable-gpu --disable-dev-shm-usage --disable-software-rasterizer --disable-features=UseSkiaRenderer`, system Chromium launches successfully in this container;
- the remaining browser blocker is now narrower and environment-specific: Chromium navigation to `http://localhost:3000` is rejected with `ERR_BLOCKED_BY_ADMINISTRATOR`, while the same Next.js dev server responds successfully to `curl`;
- responsive/theme/accessibility/browser assertions therefore remain `BLOCKED` by the managed browser/network policy, not by a known application assertion failure.

The only non-runtime visual dependency still open is the replacement of designed project compositions with genuine Servora/TallyLite screenshots once real assets are supplied.

---

## Current Implementation Note — Redesign Pass 11

Final completion-pass verification and hardening:

- restored the uploaded dependency tree and reran the real release matrix on the pass-10 source tree;
- TypeScript semantic typecheck: **PASS**;
- ESLint: **PASS**;
- Prettier: **PASS** after formatting regenerated `next-env.d.ts`;
- color architecture guard: **PASS**;
- content architecture guard: **PASS**;
- Vitest coverage: **31 test files / 65 tests PASS**;
- coverage: **90.89% statements / 78.06% branches / 93.38% functions / 93.28% lines**;
- Next.js production build: **PASS** with `NEXT_PUBLIC_SITE_URL=https://kuldip.github.io`, including all expected static, SSG and API routes;
- made `PLAYWRIGHT_BASE_URL` configurable so E2E can target `localhost`, `127.0.0.1`, CI, or a preview deployment without editing source;
- retried the browser suite against `127.0.0.1` using hardened system-Chromium flags. The managed environment still prevents a reliable local-browser run, so browser-only responsive/theme/accessibility visual QA remains externally blocked rather than being overstated as complete.

At this point all code-side redesign work and all non-browser release gates are complete. Remaining open items are external: genuine Servora/TallyLite screenshots, final confirmation of the résumé availability claim, and execution of the authored browser QA suite in an environment that allows browser navigation to the app.

## Final completion pass — verified state

- semantic TypeScript check passes;
- ESLint passes;
- Prettier check passes;
- color/content architecture guards pass;
- Vitest coverage passes: **31/31 test files, 65/65 tests**;
- coverage: **90.89% statements / 78.06% branches / 93.38% functions / 93.28% lines**;
- Next.js production build passes when `NEXT_PUBLIC_SITE_URL` is supplied, as intentionally required by production configuration;
- all expected static/SSG routes are emitted, including project/article slug routes, sitemap, robots, About, Résumé, and Projects;
- Playwright remains externally blocked because the managed Chromium policy returns `ERR_BLOCKED_BY_ADMINISTRATOR` for local app navigation even though the dev server itself is reachable outside the browser;
- genuine Servora/TallyLite screenshots remain blocked on truthful source assets;
- `RESUME-003` remains open only until the current availability claim is explicitly confirmed as still accurate.

---

## E2E Follow-up — Local Browser Run

A user-local `bun run test:e2e` run reached the application successfully and reported **63/70 passing**. The seven failures were triaged into real regressions and stale redesign assertions.

Fixed in this follow-up:

- made every `#main-content` target programmatically focusable and made the Skip Link explicitly move focus to it;
- added a unique in-drawer mobile close button as the first focus target, removed the duplicate close accessible name from the backdrop/trigger path, and kept Escape/focus restoration behavior;
- hardened the résumé layout with `min-w-0`/horizontal clipping around nested grid and scrolling regions to address the 99px mobile overflow;
- updated stale résumé Servora heading expectations to the redesigned `Servora · SaaS / Restaurant POS` presentation;
- updated stale Servora GitHub accessible-name expectations to match the current application-card semantics;
- strengthened the homepage social/meta description to include `Senior Frontend Engineer`, preserving the intended SEO assertion;
- reran semantic typecheck, color/content guards, and the full Vitest suite: **31/31 files and 65/65 tests pass**;
- reran coverage: **90.68% statements / 78.06% branches / 92.66% functions / 93.03% lines**;
- reran the Next.js production build successfully with `NEXT_PUBLIC_SITE_URL=https://kuldip.github.io`.

A final user-local `bun run test:e2e` rerun is still required to confirm the browser-only fixes.

---

## Current Implementation Note — Redesign Pass 12

The user's latest local Playwright execution reached **69/70 passing**. The only reported failure was the mobile-navigation focus-trap assertion after `Shift+Tab`. Investigation confirmed the implementation was behaving correctly: focus wrapped from the first close control to the last focusable control inside `#mobile-navigation-drawer`, but the E2E assertion incorrectly checked whether focus remained inside the nested `nav[aria-label="Mobile main navigation"]`. The last focusable contact action is intentionally outside that nested `<nav>` while still inside the focus-trapped drawer.

This pass therefore:

- corrected the accessibility E2E assertion to validate containment within `#mobile-navigation-drawer`, which matches the actual accessibility requirement;
- preserved the drawer implementation and focus-trap behavior rather than changing correct UI semantics to satisfy a stale test;
- reran the non-browser release matrix: semantic TypeScript, ESLint, Prettier, color guard, content guard, 31/31 Vitest files / 65/65 tests, coverage, and the Next.js production build all pass;
- kept the final Playwright status `IN_PROGRESS` until the user confirms one clean local rerun.

Remaining non-code dependencies are unchanged: genuine Servora/TallyLite screenshots and explicit confirmation of the résumé availability statement.
