import type { ProjectDefinition } from '@/types/project.types';

import { servoraLinks } from './servora.constants';
import { tallyLiteLinks } from './tallylite.constants';

const projectNavigation = [
  { label: 'Overview', href: '#overview' },
  { label: 'Context', href: '#context' },
  { label: 'System', href: '#ecosystem' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Decisions', href: '#decisions' },
  { label: 'Engineering', href: '#engineering' },
  { label: 'Quality', href: '#quality' },
  { label: 'Live', href: '#live' },
] as const;

export const projects = [
  {
    index: '01',
    slug: 'servora',
    name: 'Servora',
    label: 'Full-stack product · Solo project',
    category: 'SaaS / Restaurant POS',
    featured: true,
    mockVariant: 'saas',
    title: 'Servora — a multi-app restaurant operating system.',
    description:
      'A production-minded restaurant platform spanning administration, POS, kitchen, waiter, customer ordering, marketing and a shared backend in one typed monorepo.',
    stats: ['12 workspaces', '9 system roles', '78 migrations'],
    tags: ['React 19', 'TypeScript', 'PostgreSQL', 'Realtime', 'Multi-tenant', 'Bun'],
    seoTitle: 'Servora — Multi-App Restaurant POS Architecture Case Study',
    summary:
      'Servora is a multi-tenant restaurant operating system designed around separate role-focused applications, shared TypeScript contracts, server-authoritative business rules and real-time order workflows.',
    publishedAt: '2026-09-10',
    updatedAt: '2026-09-12',
    showcaseLinksLabel: 'Live Servora applications',
    showcaseLinks: servoraLinks.filter((link) => link.label !== 'API'),
    caseStudy: {
      eyebrow: 'Flagship project · Restaurant technology',
      intro:
        'Servora started as a POS idea and grew into a complete restaurant operating model. The hard part was not building another screen—it was keeping orders, pricing, availability, permissions and tenant context consistent while six applications evolved around the same domain.',
      heroLines: ['Servora — one', 'restaurant system,', 'many focused surfaces.'],
      heroAccent: 'Servora',
      visualVariant: 'servora',
      liveDemoHref: 'https://servora-web-lyart.vercel.app',
      liveDemoExternal: true,
      sourceHref: 'https://github.com/kuldip11/servora',
      metrics: [
        { value: '12', label: 'Monorepo workspaces', icon: '⌘' },
        { value: '6', label: 'Applications', icon: '▦' },
        { value: '9', label: 'System roles', icon: '♙' },
        { value: '78', label: 'SQL migrations', icon: '◉' },
        { value: 'Realtime', label: 'Order workflows', icon: 'ϟ' },
      ],
      navigation: projectNavigation,
      overviewItems: [
        {
          title: 'Admin / POS',
          description: 'Menus, orders, business context, staff, analytics and restaurant operations.',
        },
        {
          title: 'Kitchen Display',
          description: 'Station-aware ticket flow for preparation and ready-state operations.',
        },
        { title: 'Waiter App', description: 'Fast table-side ordering and service workflows for floor staff.' },
        {
          title: 'Customer App',
          description: 'Customer ordering experience connected to the same menu and availability rules.',
        },
        {
          title: 'Marketing Website',
          description: 'Public-facing product surface separated from operational applications.',
        },
        {
          title: 'Backend API',
          description: 'Authorization, pricing, orders, tenancy, inventory, realtime and persistence authority.',
        },
      ],
      context: {
        eyebrow: 'Context / problem',
        title: 'Restaurant software breaks when each surface invents its own truth.',
        copy: 'A restaurant order moves through customer choice, staff permissions, pricing, availability, kitchen preparation and service. Building those as disconnected applications creates drift exactly where operational consistency matters most.',
        points: [
          'Different roles need very different interfaces without duplicating business rules.',
          'Pricing and availability must remain authoritative across POS, waiter and customer ordering.',
          'Tenant and branch context has to travel through authorization and persistence, not only UI filters.',
        ],
      },
      ecosystem: {
        eyebrow: 'Product ecosystem',
        title: 'One operational backbone, multiple focused experiences.',
        copy: 'Servora separates the interfaces by role while the API and shared contracts keep orders, tenancy, pricing, availability and realtime semantics aligned.',
        hubLabel: 'Servora API',
        hubDetail: 'Auth · tenancy · orders · pricing · inventory · realtime',
        nodes: [
          { label: 'Admin / POS', detail: 'Business configuration and operational control' },
          { label: 'Kitchen', detail: 'Preparation and ready-state workflow' },
          { label: 'Waiter', detail: 'Table-side ordering and service' },
          { label: 'Customer', detail: 'QR ordering on shared menu rules' },
          { label: 'Website', detail: 'Public marketing surface' },
          { label: 'Shared packages', detail: 'Types · validation · UI · API client · realtime' },
        ],
      },
      highlights: [
        {
          title: 'Role-focused applications',
          description: 'Each restaurant role gets a purpose-built surface without duplicating the domain model.',
          icon: 'apps',
        },
        {
          title: 'Server-authoritative decisions',
          description: 'Pricing, permissions and operational rules are validated at the backend boundary.',
          icon: 'architecture',
        },
        {
          title: 'Multi-tenant by design',
          description: 'Organization → tenant/franchise → branch context flows through data and authorization.',
          icon: 'layers',
        },
        {
          title: 'Realtime operations',
          description: 'Kitchen, waiter and order experiences react to shared operational events.',
          icon: 'realtime',
        },
        {
          title: 'Shared contracts',
          description: 'Types, validation, API client, UI and realtime primitives live in dedicated packages.',
          icon: 'code',
        },
      ],
      architectureTitle: 'Different applications. One domain contract.',
      architectureCopy:
        'The monorepo keeps product surfaces independent while shared packages define the contracts that should not drift. The API remains the authority for business-critical decisions, and realtime events distribute operational change to the clients that need it.',
      architecture: [
        { label: 'Customer / Waiter / Kitchen / Admin', detail: 'Role-specific React applications' },
        { label: 'Shared packages', detail: 'Types · validation · UI · API client · realtime · config' },
        { label: 'API boundary', detail: 'Auth · tenancy · orders · pricing · inventory · analytics' },
        { label: 'PostgreSQL + Redis', detail: 'Persistent relational state and realtime/supporting infrastructure' },
      ],
      decisions: [
        {
          title: 'Keep pricing authoritative on the server',
          problem:
            'The same menu can be rendered by admin, waiter and customer applications, but money cannot depend on whichever client happened to calculate it.',
          decision:
            'Clients present estimates and selections while the API owns final pricing, availability and validation.',
          outcome: 'One source of truth for financial and ordering rules across every application.',
        },
        {
          title: 'Model tenancy explicitly',
          problem:
            'Restaurant data needs to be isolated while still supporting organization, franchise/tenant and branch-level operations.',
          decision:
            'Tenant and branch context is part of the core model, permissions and API access path rather than a UI-only filter.',
          outcome: 'The same product can support multiple businesses and branches without mixing operational data.',
        },
        {
          title: 'Share contracts, not entire features',
          problem:
            'A kitchen display and an admin dashboard share order semantics but have radically different interaction models.',
          decision:
            'Share stable primitives—types, validation, API client, realtime and UI—while keeping application workflows local.',
          outcome: 'Less duplication without turning the monorepo into one tightly coupled frontend.',
        },
        {
          title: 'Treat authorization as product behavior',
          problem:
            'Nine system roles need different capabilities and interfaces, and hiding a button is not sufficient protection.',
          decision: 'Permission-aware UI is paired with backend authorization and tenant-aware checks.',
          outcome: 'Roles stay understandable in the interface while security remains enforced at the server boundary.',
        },
      ],
      stack: [
        {
          label: 'Product surfaces',
          items: ['React 19', 'Vite', 'Next.js website', 'TanStack Router', 'TanStack Query', 'Zustand'],
        },
        { label: 'Backend', items: ['Bun', 'Elysia', 'PostgreSQL', 'Redis', 'Drizzle', 'WebSocket'] },
        {
          label: 'Contracts',
          items: ['TypeScript', 'Zod', 'Shared API client', 'Shared realtime package', 'Shared UI'],
        },
        { label: 'Quality', items: ['Vitest', 'Playwright', 'Accessibility checks', 'ESLint', 'Prettier', 'Turbo'] },
      ],
      quality: [
        {
          value: '78',
          label: 'Migration files',
          detail: 'Schema evolution is explicit and ordered rather than hidden behind runtime magic.',
        },
        {
          value: '9',
          label: 'Reserved roles',
          detail: 'Owner, franchise admin, manager, chef, waiter, cashier, inventory, reception and accounting roles.',
        },
        {
          value: '6',
          label: 'Shared packages',
          detail: 'Config, realtime, validation, UI, API client and types form the reusable foundation.',
        },
        {
          value: 'CI',
          label: 'Verification mindset',
          detail: 'Type checking, linting, builds, unit tests and browser checks are first-class project scripts.',
        },
      ],
      sections: [
        {
          id: 'engineering',
          eyebrow: 'Product engineering',
          title: 'The complexity is in the seams.',
          copy: 'A restaurant order touches menus, availability, pricing, staff permissions, kitchen routing, payments and realtime state. I focused on making those seams explicit so a change in one application does not silently change the business rules in another.',
          items: [
            'Menu, modifier, combo and availability rules are represented as domain behavior rather than view-only state.',
            'Order transitions are permission-aware and shared across the operational surfaces.',
            'The kitchen and waiter applications remain focused clients instead of alternative implementations of backend logic.',
            'Business context and branch selection are modeled as application state backed by tenant-aware APIs.',
          ],
        },
        {
          id: 'engineering-learning',
          eyebrow: 'What I learned',
          title: 'Architecture earns its value when the product changes.',
          copy: 'Servora pushed me beyond component-level frontend work. The biggest lessons came from maintaining contracts across applications, diagnosing permission and session edge cases, keeping business logic authoritative, and resisting abstractions that did not reduce real product complexity.',
          items: [
            'Make ownership obvious: one layer should be responsible for each critical decision.',
            'Treat loading, errors and degraded infrastructure as product states, not afterthoughts.',
            'Test boundaries and role behavior, not only isolated components.',
            'Keep shared packages small enough that application-specific decisions remain visible.',
          ],
        },
      ],
      applicationHeading: 'Explore the Servora ecosystem',
      applications: servoraLinks,
    },
  },
  {
    index: '02',
    slug: 'tallylite',
    name: 'TallyLite',
    label: 'Product engineering · Spreadsheet-first business app',
    category: 'Business / FinTech tooling',
    featured: false,
    mockVariant: 'fintech',
    title: 'TallyLite — business operations on top of a user-owned Google Sheet.',
    description:
      'A browser-first business management application for customers, products, inventory, GST/non-GST invoices, payments, returns, ledgers, reports, imports, exports and backups.',
    stats: ['12 app areas', '58 test files', 'Google Sheets datastore'],
    tags: ['Next.js 16', 'React 19', 'TypeScript', 'Google Sheets', 'Decimal.js', 'Zod'],
    seoTitle: 'TallyLite — Google Sheets Business Management Architecture Case Study',
    summary:
      'TallyLite makes a user-owned Google Sheet behave like a structured business datastore while keeping GST, money, invoice, inventory, payment and reconciliation rules in testable application/domain layers.',
    publishedAt: '2026-09-12',
    updatedAt: '2026-09-12',
    showcaseLinksLabel: 'TallyLite links',
    showcaseLinks: tallyLiteLinks,
    caseStudy: {
      eyebrow: 'Spreadsheet-first business management',
      intro:
        'TallyLite explores a different constraint from a traditional SaaS backend: the customer owns the datastore. The application has to provide reliable business workflows while reading and writing structured records through the Google Sheets API.',
      heroLines: ['TallyLite — your', 'business data stays', 'in your spreadsheet.'],
      heroAccent: 'TallyLite',
      visualVariant: 'tallylite',
      liveDemoHref: 'https://tallylite.netlify.app/',
      liveDemoExternal: true,
      sourceHref: 'https://github.com/kuldip11/TallyLite',
      metrics: [
        { value: '12', label: 'Primary app areas', icon: '▦' },
        { value: '58', label: 'Test files', icon: '✓' },
        { value: 'Google', label: 'Sheets datastore', icon: '◫' },
        { value: 'GST', label: 'Invoice rules', icon: '%' },
        { value: 'Browser', label: 'Backup & export', icon: '⇩' },
      ],
      navigation: projectNavigation,
      overviewItems: [
        {
          title: 'Customers',
          description: 'Profiles, transaction context, outstanding balances and customer ledger workflows.',
        },
        {
          title: 'Products & Inventory',
          description: 'Stock movements, adjustments, receiving, returns and serialized inventory support.',
        },
        {
          title: 'Sales & Invoices',
          description: 'GST and non-GST invoicing with draft/finalized workflows and invoice numbering.',
        },
        { title: 'Payments', description: 'Cash, UPI, card, bank transfer, cheque and other payment tracking.' },
        {
          title: 'Reports & Ledger',
          description: 'Persisted transaction views, outstanding balances and business reporting.',
        },
        {
          title: 'Data portability',
          description: 'CSV/XLSX import/export plus browser-generated backup and restore workflows.',
        },
      ],
      context: {
        eyebrow: 'Context / problem',
        title: 'A familiar spreadsheet is useful only if the application respects its constraints.',
        copy: 'TallyLite keeps business data in a user-owned Google Sheet, which means persistence can be slower, rate-limited and externally edited. The product therefore needs explicit domain rules, observable writes and recovery behavior instead of pretending the spreadsheet is a local database.',
        points: [
          'Financial calculations must remain deterministic and testable outside the UI.',
          'Remote spreadsheet mutations need honest saving, retry and reconciliation states.',
          'Imports, exports and backups are core ownership features rather than secondary utilities.',
        ],
      },
      ecosystem: {
        eyebrow: 'System model',
        title: 'Business rules stay independent from the spreadsheet adapter.',
        copy: 'The UI calls application services and domain rules through repository contracts. Google Sheets is one persistence implementation at the outside edge, so invoice, GST and inventory behavior can be tested without network access.',
        hubLabel: 'Domain + application',
        hubDetail: 'Money · GST · invoices · inventory · ledger · reconciliation',
        nodes: [
          { label: 'React UI', detail: 'Business workflows and feedback states' },
          { label: 'Repository contracts', detail: 'Persistence-independent boundary' },
          { label: 'Google Sheets', detail: 'User-owned remote datastore' },
          { label: 'Import / export', detail: 'CSV · XLSX · PDF · backup archives' },
        ],
      },
      highlights: [
        {
          title: 'User-owned data',
          description: 'Google Sheets is the persistent V1 datastore instead of a hidden vendor database.',
          icon: 'spreadsheet',
        },
        {
          title: 'Layered domain design',
          description: 'Business rules remain independent from the Google Sheets adapter.',
          icon: 'architecture',
        },
        {
          title: 'Money-safe calculations',
          description: 'Decimal.js and dedicated invoice/GST rules avoid casual floating-point arithmetic.',
          icon: 'money',
        },
        {
          title: 'Persistence recovery',
          description:
            'Mutation lifecycle, reconciliation and recovery code make remote spreadsheet writes observable.',
          icon: 'refresh',
        },
        {
          title: 'Portable by default',
          description: 'Imports, exports, PDFs and backups are first-class product workflows.',
          icon: 'download',
        },
      ],
      architectureTitle: 'Treat the spreadsheet as an adapter, not the domain.',
      architectureCopy:
        'TallyLite separates React UI, application use cases, domain rules and repository contracts from the Google Sheets implementation. That keeps calculations testable and means persistence can evolve without rewriting invoice or inventory behavior.',
      architecture: [
        { label: 'Next.js / React UI', detail: 'Dashboard and business workflows' },
        { label: 'Application services', detail: 'Sales · payments · returns · reporting · reconciliation' },
        { label: 'Domain rules', detail: 'Money · GST · invoices · inventory · ledger · sequences' },
        { label: 'Repository contracts', detail: 'Persistence boundary independent from the UI' },
        { label: 'Google Sheets adapter', detail: 'User-authorized spreadsheet reads and mutations' },
      ],
      decisions: [
        {
          title: 'Reject silent in-memory persistence in production',
          problem: 'A business app cannot pretend a save succeeded when the user-owned spreadsheet is not connected.',
          decision:
            'Runtime repositories require Google persistence outside tests and throw a persistence-required error rather than silently mutating temporary memory.',
          outcome: 'The UI has an explicit connection state and business mutations do not disappear on refresh.',
        },
        {
          title: 'Queue and observe remote mutations',
          problem: 'Google API writes are remote, rate-limited and can outlive a quick UI interaction.',
          decision:
            'Persistence mutations are tracked through a queue/lifecycle layer with waiting, retrying and reconciliation states.',
          outcome: 'Users receive honest saving feedback and mutation behavior becomes testable instead of invisible.',
        },
        {
          title: 'Keep financial rules out of components',
          problem:
            'GST, invoice totals, payments and returns contain rules that become fragile when mixed into forms and tables.',
          decision: 'Dedicated domain modules own money, GST, invoice, payment, inventory and ledger behavior.',
          outcome: 'The calculations can be unit-tested without rendering the UI or calling Google APIs.',
        },
        {
          title: 'Make data portability a product capability',
          problem: 'A spreadsheet-first product should not trap the user in one UI or one browser session.',
          decision:
            'CSV/XLSX exchange, PDF generation and local backup/restore are part of the application architecture.',
          outcome: 'The product complements user-owned data rather than replacing ownership with another silo.',
        },
      ],
      stack: [
        { label: 'Frontend', items: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS', 'Radix UI', 'Lucide'] },
        { label: 'State & forms', items: ['TanStack Query', 'TanStack Table', 'React Hook Form', 'Zod'] },
        {
          label: 'Business data',
          items: ['Google Sheets API', 'Google Identity Services', 'Decimal.js', 'Repository pattern'],
        },
        { label: 'Documents & quality', items: ['React PDF', 'XLSX', 'PapaParse', 'JSZip', 'Vitest', 'Playwright'] },
      ],
      quality: [
        {
          value: '58',
          label: 'Test files',
          detail: 'Domain, persistence, Google integration, UI and end-to-end behavior are represented in the suite.',
        },
        {
          value: '0',
          label: 'Hidden production memory writes',
          detail: 'Production paths require the persistent Google-backed repository mode.',
        },
        {
          value: 'Layered',
          label: 'Business rules',
          detail: 'Application and domain modules sit above repository implementations.',
        },
        {
          value: 'Portable',
          label: 'Data model',
          detail: 'The product is designed around user-owned spreadsheets and exportable business records.',
        },
      ],
      sections: [
        {
          id: 'engineering',
          eyebrow: 'Persistence engineering',
          title: 'Remote spreadsheets change the UX contract.',
          copy: 'A normal local state update can feel instant. A Google Sheets mutation can be queued, rate-limited, retried or reconciled. TallyLite makes that lifecycle visible with persistence operation state instead of pretending the write is synchronous.',
          items: [
            'Concurrent reads are deduplicated at the store layer.',
            'Mutation operations are tracked so saving, waiting and retrying states can be surfaced.',
            'Production code requires persistent repositories rather than falling back to memory.',
            'Backup and restore include validation and defensive handling for malformed archives.',
          ],
        },
        {
          id: 'engineering-learning',
          eyebrow: 'What I learned',
          title: 'Data ownership is an architectural constraint, not a marketing line.',
          copy: 'Once the user owns the spreadsheet, the product has to respect connection state, API quotas, reconciliation, portability and failure recovery. That constraint made the separation between domain behavior and persistence much more important.',
          items: [
            'Design domain rules so they can run without a network adapter.',
            'Show persistence truthfully when remote writes are not immediate.',
            'Use decimal-safe arithmetic for business money flows.',
            'Protect import, backup and restore paths as carefully as normal CRUD flows.',
          ],
        },
      ],
      applicationHeading: 'Try TallyLite or inspect the source',
      applications: tallyLiteLinks,
    },
  },
] as const satisfies readonly ProjectDefinition[];
