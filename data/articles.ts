export const articles = [
  {
    slug: 'react-monorepo-architecture-shared-contracts',
    title: 'Structuring a React Monorepo Around Shared Contracts, Not Shared Everything',
    description:
      'A practical approach to sharing types, validation, API clients, realtime behavior and UI across multiple React applications without creating a tangled monorepo.',
    publishedAt: '2026-09-10',
    updatedAt: '2026-09-10',
    sections: [
      [
        'Share boundaries that are truly shared',
        'A monorepo becomes useful when applications can reuse stable contracts without becoming coupled to each other. Types, validation schemas, API clients, realtime primitives and foundational UI are stronger sharing candidates than feature-specific page logic.',
      ],
      [
        'Keep application responsibilities visible',
        'A POS, kitchen display, waiter interface and customer application may depend on the same domain, but they serve different users. Keeping those application shells separate allows each surface to optimize its navigation, permissions and workflows while consuming the same contracts.',
      ],
      [
        'Keep authoritative business logic out of the UI',
        'Pricing, availability and authorization decisions should not be duplicated across frontend applications. The frontend can explain and represent those rules, while the server remains authoritative for decisions that affect money, access or operational state.',
      ],
      [
        'Tests protect the seams',
        'The highest-value tests in a multi-application system often protect shared contracts and the boundaries between packages. They make refactoring safer because failures reveal when one application has drifted from the assumptions used by another.',
      ],
    ],
  },
  {
    slug: 'prevent-duplicate-api-requests-react',
    title: 'Preventing Duplicate API Requests in React by Fixing Ownership',
    description:
      'Why duplicate requests are often an ownership problem rather than a fetch problem, and how to reason about request lifecycles in React applications.',
    publishedAt: '2026-09-10',
    updatedAt: '2026-09-10',
    sections: [
      [
        'Duplicate requests usually have two owners',
        'When the same endpoint fires twice on initial load or refresh, the first question should be which parts of the application believe they own that request. Authentication bootstrap, page loaders, providers and retry logic can easily overlap.',
      ],
      [
        'Centralize bootstrap work',
        'Session restoration and other application-wide bootstrap requests should have a single lifecycle owner. Pages can consume the resolved state instead of independently repeating the same request during mounting.',
      ],
      [
        'Distinguish retries from duplication',
        'A retry caused by a network failure is different from two components issuing the same successful request. Instrumenting request origin and lifecycle makes that distinction visible and avoids disabling useful resilience while fixing duplicate work.',
      ],
      [
        'Measure the result in user terms',
        'Reducing duplicate traffic matters because it can improve cold-start behavior, reduce backend load and simplify loading states. The best fix removes redundant ownership rather than hiding duplicate calls with arbitrary flags.',
      ],
    ],
  },
] as const;
