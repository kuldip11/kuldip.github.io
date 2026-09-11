import { siteConfig } from '@/constants/site';
import type { ProjectDefinition } from '@/types/project.types';

import { servoraLinks } from './servora.constants';

const sharedMetrics = [
  ['5+', 'Apps / Monorepo', '⌘'],
  ['40+', 'Database Tables', '◉'],
  ['Real-time', 'WebSocket', 'ϟ'],
  ['Multi-tenant', 'Franchise/Branch', '♙'],
  ['Production Ready', 'Deployed & Tested', '◎'],
] as const;

const sharedOverviewItems = [
  ['Point of Sale', 'Fast, intuitive ordering'],
  ['Kitchen Display', 'Real-time order routing'],
  ['Customer App', 'Online ordering & tracking'],
  ['Waiter App', 'Table management'],
  ['Admin Dashboard', 'Business insights & control'],
  ['Multi-tenant', 'Organization → Franchise → Branch'],
] as const;

const sharedHighlights = [
  ['Real-time order synchronization', 'WebSocket-based live updates across all apps', '♙'],
  ['Scalable multi-tenant architecture', 'Organization, franchise and branch hierarchy', '⌘'],
  ['Complete restaurant operations', 'POS, kitchen, waiter, customer and admin apps', '⌖'],
  ['Production ready', 'Deployed, tested and real restaurant workflows', '▣'],
  ['Modern tech stack', 'React, Next.js, TypeScript, Node.js and more', '◈'],
] as const;

const navigation = [
  'Overview',
  'Tech Stack',
  'Key Features',
  'Architecture',
  'Gallery',
  'Impact',
  'Learnings',
] as const;
const servoraHeroLines = ['Servora — Modern', 'Restaurant POS', 'Ecosystem'] as const;
const servoraGithub = servoraLinks.find((link) => link.label === 'GitHub')?.href ?? siteConfig.github;

export const projects: readonly ProjectDefinition[] = [
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
    publishedAt: '2026-09-10',
    updatedAt: '2026-09-10',
    showcaseLinksLabel: 'Live Servora demos',
    showcaseLinks: servoraLinks.filter((link) => link.label !== 'API'),
    caseStudy: {
      eyebrow: 'Multi-tenant restaurant product',
      intro:
        'Servora brings several restaurant roles and interfaces into one typed system while keeping pricing, permissions and operational state authoritative and consistent.',
      heroLines: servoraHeroLines,
      heroAccent: 'Servora',
      visualVariant: 'servora',
      liveDemoHref: servoraLinks[1].href,
      liveDemoExternal: true,
      sourceHref: servoraGithub,
      metrics: sharedMetrics,
      navigation,
      overviewItems: sharedOverviewItems,
      highlights: sharedHighlights,
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
      applicationHeading: 'Try each Servora application.',
      applications: servoraLinks,
    },
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
    publishedAt: '2026-09-10',
    updatedAt: '2026-09-10',
    caseStudy: {
      eyebrow: 'Proptech · Geospatial performance',
      intro:
        'A dense map can become unusable long before the rest of the interface feels complex. This work focused on keeping interaction fluid with more than 100,000 live points across many domain layers.',
      heroLines: servoraHeroLines,
      heroAccent: 'Servora',
      visualVariant: 'mapbox',
      liveDemoHref: '#overview',
      liveDemoExternal: false,
      sourceHref: siteConfig.github,
      metrics: sharedMetrics,
      navigation,
      overviewItems: sharedOverviewItems,
      highlights: sharedHighlights,
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
      applicationHeading: 'Try each Servora application.',
      applications: servoraLinks,
    },
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
    publishedAt: '2026-09-10',
    updatedAt: '2026-09-10',
    caseStudy: {
      eyebrow: 'Enterprise · Frontend architecture',
      intro:
        'Enterprise products accumulate conditional states, role differences and long-running workflows. The architecture has to make those workflows easier to change, not merely possible to build.',
      heroLines: servoraHeroLines,
      heroAccent: 'Servora',
      visualVariant: 'other',
      liveDemoHref: '#overview',
      liveDemoExternal: false,
      sourceHref: siteConfig.github,
      metrics: sharedMetrics,
      navigation,
      overviewItems: sharedOverviewItems,
      highlights: sharedHighlights,
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
      applicationHeading: 'Try each Servora application.',
      applications: servoraLinks,
    },
  },
] as const;
