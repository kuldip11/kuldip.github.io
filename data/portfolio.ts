export const metrics = [
  ['05+', 'Years building products'],
  ['100K+', 'Map points rendered'],
  ['40%', 'Fewer duplicate requests'],
  ['900+', 'Automated tests'],
] as const;

export const projects = [
  {
    index: '01',
    slug: 'servora',
    label: 'Full-stack product · Solo project',
    title: 'One restaurant system. Six focused applications.',
    description:
      'Servora is a multi-tenant restaurant operating system connecting POS, kitchen, waiter, customer ordering, marketing and backend workflows in one typed monorepo.',
    stats: ['12 workspaces', '9 system roles', '6 shared packages'],
    seoTitle: 'Servora Restaurant POS Architecture Case Study',
    summary:
      'A case study in designing a typed, multi-application restaurant operating system with role-aware workflows, shared packages and server-authoritative business logic.',
  },
  {
    index: '02',
    slug: 'mapbox-performance',
    label: 'Proptech · Geospatial performance',
    title: 'Making 100,000+ map points feel immediate.',
    description:
      'A custom Mapbox layer lifecycle with clustering, interactive tooltips and fine-grained visibility controls across more than fifteen dense domain layers.',
    stats: ['100K+ points', '15+ layers', 'Fluid interaction'],
    seoTitle: 'Rendering 100,000+ Mapbox Points in React',
    summary:
      'A frontend performance case study focused on dense geospatial interfaces, custom Mapbox layers, clustering and fine-grained visibility control.',
  },
  {
    index: '03',
    slug: 'enterprise-frontend-architecture',
    label: 'Enterprise · Frontend architecture',
    title: 'Complex workflows, built to stay understandable.',
    description:
      'Reusable architecture for business-critical onboarding, project, vendor, contract and milestone workflows across fintech, proptech and SaaS products.',
    stats: ['50+ UI components', '35% faster load', '90+ Lighthouse'],
    seoTitle: 'Enterprise Frontend Architecture Case Study',
    summary:
      'A case study in structuring reusable frontend architecture for dense enterprise workflows across onboarding, projects, vendors, contracts and milestones.',
  },
] as const;

export const stack = [
  ['Product frontend', 'React.js · Next.js · SvelteKit · TypeScript · Tailwind CSS'],
  ['State & data', 'TanStack Query · Redux Toolkit · TanStack Router · React Hook Form'],
  ['Systems', 'Monorepos · SSR · SSG · RBAC · Component architecture'],
  ['Backend', 'Bun · Node.js · Elysia.js · PostgreSQL · Redis · Drizzle'],
  ['Quality', 'Vitest · Playwright · WCAG · Core Web Vitals · CI/CD'],
  ['Visualization', 'Mapbox · Google Maps · Chart.js · Data-intensive UI'],
] as const;

export const principles = [
  [
    '01 / ARCHITECTURE',
    'Design for the next change.',
    'Clear boundaries, reusable components and typed contracts that let products evolve without rebuilding the foundation.',
  ],
  [
    '02 / PERFORMANCE',
    'Measure before optimizing.',
    'Real bottlenecks, meaningful budgets and improvements users can feel—not performance theatre.',
  ],
  [
    '03 / ACCESSIBILITY',
    'Build for every interaction.',
    'Keyboard, touch, assistive technology and reduced motion treated as core product behavior.',
  ],
  [
    '04 / DELIVERY',
    'Quality becomes a system.',
    'Testing, CI/CD and pragmatic review practices that make confident releases repeatable.',
  ],
] as const;

export const experience = [
  [
    '2026 — NOW',
    'Senior Frontend Engineer',
    'Software Workshop · Mumbai',
    'Leading enterprise workflow delivery, frontend architecture and performance across SaaS, fintech and proptech products.',
    true,
  ],
  [
    '2022 — 2026',
    'Associate Frontend Developer',
    'Software Workshop · Mumbai',
    'Built modular onboarding journeys, high-density map experiences and more than fifty reusable interface components.',
    false,
  ],
  [
    '2021 — 2022',
    'Frontend Developer',
    'Eleva Infotech · Bangalore',
    'Developed role-based restaurant operations spanning order, billing, menu, outlet and kitchen workflows.',
    false,
  ],
] as const;
