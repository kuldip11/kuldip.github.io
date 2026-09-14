import type { ArticleDefinition } from '@/types/article.types';

export const articles = [
  {
    slug: 'react-monorepo-shared-contracts-not-shared-everything',
    title: 'What I Actually Share in a React Monorepo',
    description:
      'Servora has several frontends in one repo. The useful shared code turned out to be much smaller than I first expected.',
    category: 'Architecture',
    readingTime: '8 min read',
    publishedAt: '2026-09-07',
    updatedAt: '2026-09-07',
    tags: ['React', 'TypeScript', 'Monorepo', 'Architecture', 'Servora'],
    takeaways: [
      'Share contracts when applications must agree.',
      'Keep role-specific workflows close to the app that owns them.',
      'Do not create a shared package just because two files currently look similar.',
    ],
    sections: [
      {
        id: 'why-monorepo',
        eyebrow: 'What went wrong first',
        title: 'The temptation was to share too much.',
        paragraphs: [
          'Servora has an admin/POS app, kitchen display, waiter app, customer app, public website and API. Because they live in the same monorepo, it is very easy to look at two similar files and move them into a shared package immediately.',
          'I stopped doing that after a few cases where a “shared” abstraction made a small change harder. The kitchen and waiter apps may both work with orders, but the screen flow, permissions and urgency are different. Sharing the domain does not mean sharing the workflow.',
        ],
        bullets: [
          'Share things that genuinely need to stay identical.',
          'Leave product flow inside the product surface that owns it.',
          'Accept a little duplication until the common shape is obvious.',
        ],
        visual: 'monorepo',
      },
      {
        id: 'what-to-share',
        eyebrow: 'What survived',
        title: 'The boring packages became the most useful ones.',
        paragraphs: [
          'The packages that have held up best are types, validation, the API client, realtime primitives, configuration and low-level UI pieces. They are useful because disagreement in those areas creates real bugs.',
          'I am much more careful with shared feature logic now. If a waiter workflow changes independently from the POS workflow, I would rather keep that code local than force both apps through one abstraction with a pile of conditionals.',
        ],
        callout: 'I now ask “what breaks if these apps disagree?” before I ask “can this code be shared?”',
      },
      {
        id: 'authority',
        eyebrow: 'One important boundary',
        title: 'Shared frontend code still does not make the frontend authoritative.',
        paragraphs: [
          'Pricing and availability are good examples. Every client can use shared types and helpers so the UI stays consistent, but the API still validates the final price, availability and permission state.',
          'That separation matters because frontend code can be stale, bypassed or simply wrong. Shared contracts improve consistency; server authority protects the business rule.',
        ],
        visual: 'authority',
      },
      {
        id: 'practical-rule',
        eyebrow: 'The rule I use now',
        title: 'Share disagreement-sensitive code. Be conservative with everything else.',
        paragraphs: [
          'If two apps disagree on an order-status type, request schema or realtime event, that is dangerous and should be centralized. If they render different order flows for different users, that difference is usually intentional.',
          'This is a simpler rule than chasing DRY everywhere, and it has made the repo easier to change.',
        ],
        bullets: [
          'Types and validation: usually shared.',
          'API and realtime contracts: usually shared.',
          'Design primitives: shared after their semantics settle.',
          'Pages and role-specific workflows: usually local.',
        ],
      },
    ],
  },
  {
    slug: 'server-authoritative-business-rules-react-pos',
    title: 'The POS UI Can Suggest. The Server Has to Decide.',
    description:
      'A lesson from Servora: if a rule affects money, permissions or operational state, the browser should never be the final authority.',
    category: 'Frontend + Backend',
    readingTime: '7 min read',
    publishedAt: '2026-08-23',
    updatedAt: '2026-08-25',
    tags: ['React', 'POS', 'API Design', 'Authorization', 'Servora'],
    takeaways: [
      'Fast client-side feedback is useful, but it is still only a preview.',
      'Authorization and final pricing belong at the API boundary.',
      'A clear ownership split makes every frontend simpler.',
    ],
    sections: [
      {
        id: 'illusion',
        eyebrow: 'A small button is not a small rule',
        title: '“Add to order” touches more state than the component can see.',
        paragraphs: [
          'The button may know the selected item and the price currently shown on screen. It does not necessarily know that a schedule changed, a modifier became unavailable, a promotion expired or the user lost a permission after the page loaded.',
          'That is why I treat the client as the place where intent is collected, not where the final business result is declared.',
        ],
        visual: 'authority',
      },
      {
        id: 'split',
        eyebrow: 'The split that worked',
        title: 'Keep the UI quick, then validate again on the server.',
        paragraphs: [
          'The frontend still does useful work. It can calculate a preview, disable obviously invalid actions and explain why something is unavailable. That makes the product feel responsive.',
          'When the request reaches the API, the important parts are checked again using current branch, menu, role and order context. The server then commits the result that every other surface can trust.',
        ],
        bullets: [
          'Client: selection, feedback and explanation.',
          'Shared contracts: request and response shape.',
          'Server: permission, pricing, availability and state transition.',
          'Realtime: publish the committed state to the other apps.',
        ],
      },
      {
        id: 'permissions',
        eyebrow: 'Permissions',
        title: 'Not rendering a button is not authorization.',
        paragraphs: [
          'I still hide controls that a user cannot use because that is better UX. But I do not treat that as the security boundary.',
          'The API checks the capability as well. That covers direct API calls, stale tabs and cases where a role changes while the user still has an old screen open.',
        ],
        callout: 'The UI should explain permissions. The API should enforce them.',
      },
      {
        id: 'result',
        eyebrow: 'What changed for the frontend',
        title: 'Central authority removed a surprising amount of frontend complexity.',
        paragraphs: [
          'Once pricing, availability and permissions had a clear owner, the different Servora apps stopped needing private copies of critical rules.',
          'The clients still have plenty of product-specific behavior, but they no longer need to pretend they are the source of truth for the parts that can affect money or restaurant operations.',
        ],
      },
    ],
  },
  {
    slug: 'google-sheets-user-owned-database-architecture',
    title: 'What Changes When the User Owns the Database',
    description:
      'TallyLite stores business data in a Google Sheet selected by the user. That sounds simple until persistence becomes part of the product UX.',
    category: 'Product Architecture',
    readingTime: '9 min read',
    publishedAt: '2026-07-14',
    updatedAt: '2026-07-18',
    tags: ['Next.js', 'Google Sheets', 'Repository Pattern', 'TallyLite', 'Data Ownership'],
    takeaways: [
      'User-owned storage changes failure states, not just persistence code.',
      'A repository boundary keeps Google-specific details out of the domain.',
      'The UI should never claim a remote write is saved before it really is.',
    ],
    sections: [
      {
        id: 'constraint',
        eyebrow: 'The product constraint',
        title: 'The spreadsheet is not an export. It is the actual datastore.',
        paragraphs: [
          'In TallyLite the user picks a Google Sheet and authorizes the app to use it. Customers, products, inventory movements, invoices, payments and ledger entries are persisted there.',
          'I liked the ownership model, but it immediately changed the engineering assumptions. Network latency matters more. Writes can be throttled. Reconnection matters. Users can also inspect the data outside the app, so the stored shape needs to remain understandable.',
        ],
        visual: 'spreadsheet',
      },
      {
        id: 'layers',
        eyebrow: 'Keeping Google out of the domain',
        title: 'The Google API sits behind a repository, not inside feature code.',
        paragraphs: [
          'Invoice logic does not know which sheet tab stores an invoice. Inventory rules do not know row numbers. The application calls repository contracts and the Google Sheets adapter handles the tabular details.',
          'That made local tests much easier, but the bigger benefit is replaceability. The business rules are not permanently shaped around one persistence API.',
        ],
        bullets: [
          'UI: interaction and status.',
          'Application: use-case orchestration.',
          'Domain: invoice, GST, payment and inventory rules.',
          'Repository: persistence contract.',
          'Google adapter: sheet reads and writes.',
        ],
      },
      {
        id: 'truthful-saving',
        eyebrow: 'The part users notice',
        title: 'Saving needs honest states.',
        paragraphs: [
          'A write can be pending, rate-limited, retried or failed. A single spinner is not enough when the datastore is remote and user-owned.',
          'TallyLite exposes saving and recovery states instead of silently pretending a write succeeded. Production mutation paths also do not fall back to temporary in-memory state, because that would make the UI look correct while the durable data is wrong.',
        ],
        callout: 'If the UI says “saved”, I want that to mean the persistent store accepted the write.',
      },
      {
        id: 'ownership',
        eyebrow: 'A useful side effect',
        title: 'Visible data forces cleaner decisions.',
        paragraphs: [
          'Because users can open the sheet themselves, strange internal shortcuts are harder to justify. Records need to remain readable, imports and exports need to be predictable, and recovery has to work without hidden server magic.',
          'That constraint ended up improving the architecture. It pushed more business logic into explicit domain code and kept the persistence layer honest.',
        ],
      },
    ],
  },
  {
    slug: 'money-gst-inventory-domain-modeling-typescript',
    title: 'I Stopped Doing Money Math in React Components',
    description:
      'Invoice totals, GST, returns and stock adjustments are too easy to get almost right. I moved those rules into small TypeScript domain modules instead.',
    category: 'TypeScript',
    readingTime: '7 min read',
    publishedAt: '2026-06-10',
    updatedAt: '2026-06-10',
    tags: ['TypeScript', 'Decimal.js', 'GST', 'Domain Modeling', 'TallyLite'],
    takeaways: [
      'Financial rules are easier to trust when they live outside the component tree.',
      'Decimal-safe arithmetic is only useful when rounding rules are explicit too.',
      'Stock and payment history should be recorded, not silently overwritten.',
    ],
    sections: [
      {
        id: 'number-problem',
        eyebrow: 'How it starts',
        title: 'The first calculation usually looks harmless.',
        paragraphs: [
          'A quantity multiplied by a price does not need much architecture. Then discounts arrive. Then GST modes, partial payments, returns and rounding. Before long, a table cell is doing business logic every time it renders.',
          'I moved that work out of React in TallyLite. Monetary calculations live in dedicated TypeScript modules, with Decimal.js used where precision matters. Components receive a result and decide how to present it.',
        ],
        visual: 'money',
      },
      {
        id: 'invoice-pipeline',
        eyebrow: 'Make the steps visible',
        title: 'An invoice total is easier to debug when each step has a name.',
        paragraphs: [
          'The important change was not just adding a decimal library. I split the calculation into stages: line values, discounts, taxable amount, GST treatment, total and outstanding balance.',
          'Now an edge case has a specific home and a focused test. I do not need to search JSX for a percentage expression and wonder whether the same calculation exists somewhere else.',
        ],
        bullets: [
          'Validate the input shape first.',
          'Use decimal-safe primitives for money.',
          'Round at deliberate boundaries.',
          'Store enough information to explain the total later.',
        ],
      },
      {
        id: 'inventory',
        eyebrow: 'Inventory and returns',
        title: 'I prefer movements over rewriting the current number.',
        paragraphs: [
          'For stock, payments and returns, history is useful. A current quantity tells me where I ended up; movements tell me how I got there.',
          'That is especially useful in TallyLite because the underlying records are visible to the user. Append-style history makes reconciliation much less mysterious.',
        ],
      },
      {
        id: 'frontend-benefit',
        eyebrow: 'The frontend benefit',
        title: 'The components became smaller after the rules moved out.',
        paragraphs: [
          'Once totals, balances and stock effects come from tested domain functions, the UI mainly handles input, feedback and accessibility.',
          'That made refactoring safer and removed a class of “looks fine in the browser” bugs from presentation code.',
        ],
      },
    ],
  },
  {
    slug: 'testing-the-seams-complex-react-products',
    title: 'The Bugs I Care About Usually Live Between Layers',
    description:
      'Component tests are useful, but the failures that hurt most often happen where permissions, persistence, contracts and browser flows meet.',
    category: 'Testing',
    readingTime: '7 min read',
    publishedAt: '2026-05-02',
    updatedAt: '2026-05-06',
    tags: ['Vitest', 'Playwright', 'React', 'Architecture', 'Quality'],
    takeaways: [
      'Tests are most valuable around boundaries where responsibility changes.',
      'Use the smallest test that can actually prove the behavior.',
      'Coverage helps find gaps, but it does not tell you whether the important behavior is protected.',
    ],
    sections: [
      {
        id: 'seams',
        eyebrow: 'Where I have been burned',
        title: 'A green component test can still hide a broken product flow.',
        paragraphs: [
          'A button can hide correctly while the API still accepts the forbidden action. A persistence hook can pass while refresh restores the wrong state. Two apps can compile against the same type and still interpret a transition differently.',
          'Those failures sit between owners. That is why I spend more time thinking about seams than trying to maximize the number of isolated component tests.',
        ],
        visual: 'ownership',
      },
      {
        id: 'layers-of-tests',
        eyebrow: 'Pick the right level',
        title: 'I do not want an end-to-end test for every rule.',
        paragraphs: [
          'Pure GST, inventory and validation rules are faster to prove with unit tests. Component tests are good for interaction and accessible output. Repository or API boundaries deserve integration-style coverage. Browser tests are for the journeys that need a real browser.',
          'Using one test type for everything either makes feedback painfully slow or leaves important boundaries untested.',
        ],
        bullets: [
          'Unit: deterministic business rules.',
          'Component: behavior a user can interact with.',
          'Integration: API, repository and contract boundaries.',
          'E2E: critical user journeys and browser behavior.',
        ],
      },
      {
        id: 'coverage',
        eyebrow: 'About coverage',
        title: 'I use coverage as a warning light, not a score.',
        paragraphs: [
          'A percentage is useful when it points me to an area I forgot to exercise. It is not proof that the important scenario is covered.',
          'One untested authorization branch can matter more than a hundred harmless presentation lines. I care more about the cost of a failure than the raw number of executed lines.',
        ],
        callout: 'Coverage tells me where to look. The test scenario tells me whether I should feel confident.',
      },
      {
        id: 'architecture-feedback',
        eyebrow: 'A design signal',
        title: 'Painful tests often expose unclear ownership.',
        paragraphs: [
          'If I need to mount half the application to test one calculation, the calculation probably lives in the wrong place. If every test repeats the same network mocks, I probably need a better adapter boundary.',
          'That is why I treat testing as architecture feedback, not just something to run before a merge.',
        ],
      },
    ],
  },
] as const satisfies readonly ArticleDefinition[];
