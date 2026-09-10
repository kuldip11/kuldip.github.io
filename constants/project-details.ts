export type ProjectDetail = {
  eyebrow: string;
  intro: string;
  sections: { title: string; copy: string; items?: string[] }[];
};

export const projectDetails: Record<string, ProjectDetail> = {
  servora: {
    eyebrow: 'Multi-tenant restaurant product',
    intro:
      'Servora brings several restaurant roles and interfaces into one typed system while keeping pricing, permissions and operational state authoritative and consistent.',
    sections: [
      {
        title: 'The problem',
        copy: 'Restaurant operations span owners, managers, waiters, kitchen staff and customers. Each role needs a focused interface, but all of those interfaces still depend on the same ordering, menu, availability, pricing and authorization rules.',
      },
      {
        title: 'Architecture',
        copy: 'The system is organized as a monorepo with separate applications and shared packages so each surface can evolve independently without duplicating core contracts.',
        items: [
          'Separate web, customer, kitchen and waiter experiences',
          'Shared types, validation, API client, realtime and UI packages',
          'Server-authoritative pricing and availability rules',
          'Role-aware access across tenant and branch context',
        ],
      },
      {
        title: 'Engineering priorities',
        copy: 'The focus is maintainable boundaries: business logic lives in the appropriate shared or server layer, application shells stay focused on their role, and test coverage protects cross-application behavior.',
      },
      {
        title: 'What this demonstrates',
        copy: 'End-to-end product architecture, multi-tenant modeling, permission-aware UX, shared TypeScript contracts, realtime workflows, testing strategy and CI/CD thinking.',
      },
    ],
  },
  'mapbox-performance': {
    eyebrow: 'Proptech · Geospatial performance',
    intro:
      'A dense map can become unusable long before the rest of the interface feels complex. This work focused on keeping interaction fluid with more than 100,000 live points across many domain layers.',
    sections: [
      {
        title: 'The challenge',
        copy: 'Large geospatial datasets create pressure in rendering, event handling, visibility state and tooltip behavior. Treating every point as a regular React element does not scale well.',
      },
      {
        title: 'Rendering strategy',
        copy: 'The solution used Mapbox-native layer lifecycles and clustering rather than pushing every visual feature through the React component tree.',
        items: [
          'Custom source and layer lifecycle',
          'Clustering for dense regions',
          'Fine-grained visibility controls',
          'Interactive tooltips without rendering thousands of React markers',
        ],
      },
      {
        title: 'Performance mindset',
        copy: 'The goal was not a benchmark in isolation; it was keeping pan, zoom and exploration responsive enough that the dataset still felt immediate to the user.',
      },
      {
        title: 'What this demonstrates',
        copy: 'React performance judgment, Mapbox architecture, rendering-system boundaries, state synchronization and data-intensive UI design.',
      },
    ],
  },
  'enterprise-frontend-architecture': {
    eyebrow: 'Enterprise · Frontend architecture',
    intro:
      'Enterprise products accumulate conditional states, role differences and long-running workflows. The architecture has to make those workflows easier to change, not merely possible to build.',
    sections: [
      {
        title: 'The challenge',
        copy: 'Onboarding, projects, vendors, contracts and milestones share patterns but differ in rules, state transitions and permission boundaries. Copy-pasting screens creates short-term speed and long-term maintenance cost.',
      },
      {
        title: 'System design',
        copy: 'Reusable primitives and typed contracts were used to keep repeated workflow concerns consistent while still allowing domain-specific behavior.',
        items: [
          'Reusable interface components',
          'Clear feature boundaries',
          'Typed data contracts',
          'Role-aware workflow states',
          'Performance-conscious loading and rendering',
        ],
      },
      {
        title: 'Delivery quality',
        copy: 'Testing, accessibility and performance were treated as part of the implementation system rather than separate cleanup activities at the end.',
      },
      {
        title: 'What this demonstrates',
        copy: 'Frontend architecture, reusable component design, enterprise workflow modeling, performance optimization and cross-functional delivery.',
      },
    ],
  },
};
