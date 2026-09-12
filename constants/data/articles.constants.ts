import type { ArticleDefinition } from '@/types/article.types';

export const articles = [
  {
    slug: 'react-monorepo-shared-contracts-not-shared-everything',
    title: 'A React Monorepo Should Share Contracts, Not Everything',
    description:
      'What building Servora taught me about separating product surfaces while sharing the TypeScript contracts that actually need to stay consistent.',
    category: 'Architecture',
    readingTime: '10 min read',
    publishedAt: '2026-09-12',
    updatedAt: '2026-09-12',
    tags: ['React', 'TypeScript', 'Monorepo', 'Architecture', 'Servora'],
    takeaways: [
      'Share stable contracts before shared feature code.',
      'Keep role-specific workflows inside their own applications.',
      'Put business authority behind an API boundary, not in shared UI helpers.',
    ],
    sections: [
      {
        id: 'why-monorepo',
        eyebrow: 'The real problem',
        title: 'Multiple applications can share a domain without becoming one application.',
        paragraphs: [
          'Servora has separate surfaces for administration and POS, kitchen operations, waiter workflows, customer ordering, a public website and the backend API. They all understand orders and menus, but they do not have the same navigation, interaction model or permissions.',
          'The mistake I wanted to avoid was treating a monorepo as permission to move every repeated-looking piece of code into a shared package. That usually reduces a few imports today and creates invisible coupling tomorrow.',
        ],
        bullets: [
          'Share vocabulary and contracts that must agree everywhere.',
          'Keep application-specific orchestration close to the application.',
          'Let duplication exist temporarily when the abstraction is not stable yet.',
        ],
        visual: 'monorepo',
      },
      {
        id: 'what-to-share',
        eyebrow: 'Boundary design',
        title: 'The strongest shared packages are boring on purpose.',
        paragraphs: [
          'The most valuable shared layers in Servora are types, validation, the API client, realtime primitives, foundational UI and configuration. These packages describe contracts or infrastructure. They do not decide how a waiter should move through an order or how a kitchen screen should prioritize tickets.',
          'That distinction makes change easier to reason about. A contract change should create deliberate pressure across applications. A feature change should normally stay local to the surface that owns the workflow.',
        ],
        callout: 'A shared package is successful when it reduces disagreement—not when it has the most imports.',
      },
      {
        id: 'authority',
        eyebrow: 'One source of truth',
        title: 'Shared frontend code is not a substitute for server authority.',
        paragraphs: [
          'Pricing, availability, permissions and operational transitions affect money or restaurant state. Even if every frontend imports the same helper today, the backend still needs to validate the decision because clients are not trusted execution environments.',
          'The frontend can calculate previews and explain rules, but the API is responsible for the final decision. This creates a clean ownership model: shared contracts keep clients aligned, and the server protects the business invariant.',
        ],
        visual: 'authority',
      },
      {
        id: 'practical-rule',
        eyebrow: 'Practical rule',
        title: 'Share the thing that would be dangerous to disagree about.',
        paragraphs: [
          'If two applications disagree on an order status union or validation shape, that is a contract problem and belongs in shared code. If they render two different order workflows, that may be exactly what the product requires.',
          'This rule has been more useful to me than deciding package boundaries by file size, import count or abstract ideas about DRY code.',
        ],
        bullets: [
          'Types and validation: usually shared.',
          'API and realtime contracts: usually shared.',
          'Design primitives: shared when semantics are stable.',
          'Pages, route orchestration and role workflows: usually application-owned.',
        ],
      },
    ],
  },
  {
    slug: 'server-authoritative-business-rules-react-pos',
    title: 'Why a POS Frontend Should Never Be the Final Authority',
    description:
      'Pricing, availability, permissions and order transitions look like UI concerns until they affect money or operations. Here is how I separate presentation from authority.',
    category: 'Frontend + Backend',
    readingTime: '9 min read',
    publishedAt: '2026-09-12',
    updatedAt: '2026-09-12',
    tags: ['React', 'POS', 'API Design', 'Authorization', 'Servora'],
    takeaways: [
      'The client may explain a business rule without owning it.',
      'Money, authorization and operational state need server-side validation.',
      'Good frontend architecture makes authority visible instead of duplicating it.',
    ],
    sections: [
      {
        id: 'illusion',
        eyebrow: 'The frontend illusion',
        title: 'A rule can look local while affecting the whole system.',
        paragraphs: [
          'Consider an “Add to order” button. The component knows the selected item, price shown on screen and current availability label. It is tempting to treat the click as a local state transition and send the result to the server.',
          'In a real restaurant system, that decision can depend on branch context, schedules, modifiers, promotions, role permissions, current order state and server-side data that changed after the page rendered.',
        ],
        visual: 'authority',
      },
      {
        id: 'split',
        eyebrow: 'Responsibility split',
        title: 'Preview on the client. Validate at the boundary. Commit on the server.',
        paragraphs: [
          'I still want the UI to be fast and explanatory. Clients can calculate an immediate preview, disable obviously unavailable actions and show why a price changed. But the request payload describes intent rather than declaring truth.',
          'The API recalculates or validates the business-critical result using current context. That protects the same invariant whether the request came from the admin POS, waiter app or customer app.',
        ],
        bullets: [
          'Client: selection, optimistic affordances and explanation.',
          'Shared contracts: request/response shapes and validation vocabulary.',
          'Server: authorization, final pricing, availability and state transition.',
          'Realtime: distribute the committed change to other surfaces.',
        ],
      },
      {
        id: 'permissions',
        eyebrow: 'Authorization',
        title: 'Hiding a control is UX. Rejecting the request is security.',
        paragraphs: [
          'Role-aware interfaces are useful because they reduce confusion. A kitchen user should not see owner-only administration controls. But that is only the presentation layer of authorization.',
          'Servora models multiple system roles and enforces capabilities at the backend boundary as well. This matters because users can call APIs without using the intended UI, and stale client state can outlive permission changes.',
        ],
        callout: 'The frontend should make permissions understandable. The backend must make them enforceable.',
      },
      {
        id: 'result',
        eyebrow: 'Architecture payoff',
        title: 'One authority lets many interfaces move faster.',
        paragraphs: [
          'Once the authoritative rules are behind a stable boundary, role-specific applications can focus on their users instead of carrying private copies of pricing and authorization logic.',
          'That is the counterintuitive benefit: stronger backend ownership can make frontend development simpler because each client has fewer critical rules to reimplement.',
        ],
      },
    ],
  },
  {
    slug: 'google-sheets-user-owned-database-architecture',
    title: 'Using Google Sheets as a Datastore Without Letting It Become Your Domain',
    description:
      'TallyLite keeps business data in a user-owned spreadsheet. The architecture works because Google Sheets is treated as a persistence adapter—not the place where business rules live.',
    category: 'Product Architecture',
    readingTime: '11 min read',
    publishedAt: '2026-09-12',
    updatedAt: '2026-09-12',
    tags: ['Next.js', 'Google Sheets', 'Repository Pattern', 'TallyLite', 'Data Ownership'],
    takeaways: [
      'User-owned persistence changes both architecture and UX.',
      'Repository boundaries keep business rules independent from Google APIs.',
      'Remote writes need explicit saving, waiting, retry and recovery states.',
    ],
    sections: [
      {
        id: 'constraint',
        eyebrow: 'The constraint',
        title: '“Your data stays in your spreadsheet” is an engineering requirement.',
        paragraphs: [
          'TallyLite is designed so the user selects and authorizes a Google Sheet that becomes the persistent business datastore. Customers, products, inventory movements, invoices, payments and ledger records are read from and written back to that spreadsheet.',
          'That gives the user direct ownership, but it removes many assumptions a normal database-backed application can make about latency, transactions, connectivity and server-side control.',
        ],
        visual: 'spreadsheet',
      },
      {
        id: 'layers',
        eyebrow: 'Layered design',
        title: 'The spreadsheet is at the bottom of the dependency direction.',
        paragraphs: [
          'The UI calls application use cases. Application services depend on domain rules and repository contracts. The Google Sheets implementation sits behind those contracts. Invoice totals do not import the Google API, and inventory rules do not know which row number holds a product.',
          'That separation makes tests faster and makes the persistence choice replaceable. More importantly, it prevents spreadsheet mechanics from leaking into every business feature.',
        ],
        bullets: [
          'UI: interaction and presentation.',
          'Application: use-case orchestration.',
          'Domain: money, GST, invoice, inventory, payment and ledger rules.',
          'Repository: persistence contract.',
          'Google adapter: tabular reads and writes.',
        ],
      },
      {
        id: 'truthful-saving',
        eyebrow: 'Persistence UX',
        title: 'A remote mutation deserves more than a spinner.',
        paragraphs: [
          'Google API calls can wait for capacity, fail, retry or require reconciliation. TallyLite tracks mutation operations and exposes saving, waiting, retrying and recovery states to the UI.',
          'I also made production mutation paths require the persistent repository mode instead of silently falling back to in-memory data. A business app should fail visibly before it pretends a write is durable when it is not.',
        ],
        callout:
          'Persistence truth is part of product trust. “Saved” should mean the durable system accepted the change.',
      },
      {
        id: 'ownership',
        eyebrow: 'Product implication',
        title: 'Data ownership creates useful pressure on architecture.',
        paragraphs: [
          'Because the user can inspect and export the underlying data, records need to stay understandable and workflows need to tolerate reconnection, import/export and backup scenarios.',
          'That pressure pushed TallyLite toward explicit domain rules and portability instead of a UI that only works while one hidden backend is available.',
        ],
      },
    ],
  },
  {
    slug: 'money-gst-inventory-domain-modeling-typescript',
    title: 'Money Is Not Just Another number in TypeScript',
    description:
      'What invoice totals, GST, payments, returns and inventory taught me about keeping financial rules out of React components and away from casual floating-point arithmetic.',
    category: 'TypeScript',
    readingTime: '8 min read',
    publishedAt: '2026-09-12',
    updatedAt: '2026-09-12',
    tags: ['TypeScript', 'Decimal.js', 'GST', 'Domain Modeling', 'TallyLite'],
    takeaways: [
      'Financial calculations deserve domain modules, not component helpers.',
      'Decimal-safe arithmetic and explicit rounding rules reduce invisible drift.',
      'Returns and payments should create auditable movements instead of rewriting history.',
    ],
    sections: [
      {
        id: 'number-problem',
        eyebrow: 'Small numbers, large consequences',
        title: 'The dangerous bugs are usually mathematically valid JavaScript.',
        paragraphs: [
          'React has nothing special to say about money, which is exactly why financial logic can accidentally end up inside forms, table cells and event handlers. A few additions and percentages look harmless until discounts, GST modes, partial payments and returns start composing.',
          'In TallyLite I keep monetary behavior in dedicated domain modules and use Decimal.js where precision matters. Components consume calculated results instead of inventing arithmetic as they render.',
        ],
        visual: 'money',
      },
      {
        id: 'invoice-pipeline',
        eyebrow: 'Model the pipeline',
        title: 'An invoice total is a sequence of named decisions.',
        paragraphs: [
          'The useful design move is not only choosing a decimal library. It is making the calculation stages explicit: line values, discounts, taxable amounts, GST treatment, totals and payment/outstanding state.',
          'Named domain operations make those stages testable. When a GST edge case changes, I want a focused rule and focused test—not a search through JSX for arithmetic expressions.',
        ],
        bullets: [
          'Represent inputs with validated domain shapes.',
          'Calculate using decimal-safe primitives.',
          'Round intentionally at defined boundaries.',
          'Persist enough information to explain the result later.',
        ],
      },
      {
        id: 'inventory',
        eyebrow: 'Inventory & returns',
        title: 'History is more valuable than a mutable stock number.',
        paragraphs: [
          'Inventory and returns become easier to audit when operations create movements rather than only overwriting the current quantity. The same idea applies to ledgers and payments: business history is a first-class product capability.',
          'This is especially important in a spreadsheet-backed system because users can inspect records directly. Append-oriented transaction history makes the business state easier to reconcile and explain.',
        ],
      },
      {
        id: 'frontend-benefit',
        eyebrow: 'Frontend payoff',
        title: 'Good domain modeling makes the UI simpler.',
        paragraphs: [
          'When totals, outstanding balances and stock effects arrive from tested domain functions, components can focus on interaction, validation feedback and accessibility.',
          'That is the frontend benefit I care about most: fewer critical rules hidden in presentation code means safer refactoring and clearer product states.',
        ],
      },
    ],
  },
  {
    slug: 'testing-the-seams-complex-react-products',
    title: 'Test the Seams, Not Just the Components',
    description:
      'The failures that matter in multi-surface products often live between layers: permissions, persistence, shared contracts, retries and route ownership. That changes how I think about testing.',
    category: 'Testing',
    readingTime: '9 min read',
    publishedAt: '2026-09-12',
    updatedAt: '2026-09-12',
    tags: ['Vitest', 'Playwright', 'React', 'Architecture', 'Quality'],
    takeaways: [
      'High-value tests protect boundaries where ownership changes.',
      'Unit tests and browser tests answer different questions.',
      'Coverage is useful evidence, but it is not the product goal.',
    ],
    sections: [
      {
        id: 'seams',
        eyebrow: 'Where bugs hide',
        title: 'A component can be correct while the product is wrong.',
        paragraphs: [
          'A permission button can render correctly while the API accepts an unauthorized request. A persistence hook can pass its unit test while a refresh reconnects to the wrong repository state. A shared type can compile while two applications interpret an operational transition differently.',
          'Those are seam failures: each local unit looks reasonable, but the hand-off between owners is wrong.',
        ],
        visual: 'ownership',
      },
      {
        id: 'layers-of-tests',
        eyebrow: 'Different questions',
        title: 'Choose the smallest test that can prove the behavior you care about.',
        paragraphs: [
          'Pure money, GST, inventory and validation rules are great unit-test targets. Application services deserve tests around orchestration and failure paths. Shared client/server contracts benefit from integration-style tests. Critical user journeys and accessibility need browser coverage.',
          'Trying to prove everything through end-to-end tests makes feedback slow. Trying to prove system behavior only through unit tests leaves the seams unprotected.',
        ],
        bullets: [
          'Unit: deterministic domain behavior.',
          'Component: interaction and accessible output.',
          'Integration: repository, API and shared-contract boundaries.',
          'E2E: critical journeys in a real browser.',
        ],
      },
      {
        id: 'coverage',
        eyebrow: 'Coverage',
        title: 'Coverage is a map of exercised code, not a certificate of correctness.',
        paragraphs: [
          'I use coverage to find suspiciously untested areas and to make refactoring safer, but a percentage cannot tell me whether I tested the right scenario. A branch around authorization or persistence recovery can matter more than dozens of presentation lines.',
          'The useful question is: what failure would be expensive or confusing for the user, and which test gives the fastest trustworthy signal for that failure?',
        ],
        callout:
          'The goal is confidence in behavior. Coverage is one instrument for finding where that confidence may be weak.',
      },
      {
        id: 'architecture-feedback',
        eyebrow: 'Design feedback',
        title: 'Hard-to-test code is often telling you something about ownership.',
        paragraphs: [
          'When a test needs half the application mounted to verify one calculation, the calculation may live in the wrong layer. When every test mocks the same network behavior, an adapter boundary may be missing.',
          'Testing is therefore part of architecture work for me. It is not only a gate at the end—it is feedback about whether responsibilities are actually separated.',
        ],
      },
    ],
  },
] as const satisfies readonly ArticleDefinition[];
