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
] as const;
