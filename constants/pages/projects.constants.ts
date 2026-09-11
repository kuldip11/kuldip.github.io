export const PROJECTS_PAGE_CONTENT = {
  eyebrow: 'My Work',
  title: 'Projects',
  subtitle: 'Real products. Real impact.',
  description:
    "A collection of projects I've built — from full-stack products to performance tools and open source contributions. Each project reflects a problem, a solution, and real-world impact.",
  filters: ['All  1', 'Featured  1'],
  heroWords: ['Ideas', 'Build', 'Better', 'Products'],
  heroPoints: ['Real Problems', 'Practical Solutions', 'Measurable Impact'],
  featuredCard: {
    slug: 'servora',
    title: 'Servora',
    copy: 'Multi-tenant restaurant management ecosystem with POS, kitchen, waiter, customer ordering and powerful admin dashboard.',
    variant: 'servora',
    tags: ['React', 'Node.js', 'PostgreSQL', 'WebSocket'],
    badge: 'Featured',
    category: 'SaaS / POS',
  },
  comingSoon: {
    label: 'NEXT BUILD',
    title: 'Project coming soon.',
    copy: "I'm working on the next case study. It will appear here when there is something meaningful to show, not just another placeholder project.",
  },
  footerCta: {
    title: 'More projects coming soon...',
    copy: "I'm always building, learning and exploring new ideas. Check back for updates!",
    linkLabel: 'Follow my journey',
  },
} as const;

export const PROJECT_DETAIL_CONTENT = {
  backLabel: 'Back to projects',
  featuredLabel: 'Featured Project',
  liveDemoLabel: 'Live Demo',
  sourceLabel: 'View Source',
  overviewTitle: 'Project Overview',
  highlightsTitle: 'Key Highlights',
  applicationsTitle: 'Live Applications',
  applicationOpenLabel: 'Open',
} as const;
