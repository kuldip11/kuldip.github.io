export const PROJECTS_PAGE_CONTENT = {
  eyebrow: 'My Work',
  title: 'Projects',
  subtitle: 'Real products. Real engineering decisions.',
  description:
    'Two projects that reflect how I like to work: understand the operating model, make ownership explicit, build the smallest useful boundaries, then test the seams where real products usually break.',
  filters: ['All  2', 'Featured  1'],
  heroWords: ['Think', 'Model', 'Build', 'Ship'],
  heroPoints: ['Real Problems', 'Architecture With Purpose', 'Production Thinking'],
  footerCta: {
    title: 'The write-ups go deeper than screenshots.',
    copy: 'Each case study explains the constraints, architecture, trade-offs and engineering lessons behind the product.',
    linkLabel: 'Read engineering articles',
  },
} as const;

export const PROJECT_DETAIL_CONTENT = {
  backLabel: 'Back to projects',
  featuredLabel: 'Project case study',
  liveDemoLabel: 'Open live product',
  sourceLabel: 'View source',
  overviewTitle: 'Product surface',
  highlightsTitle: 'Engineering highlights',
  architectureTitle: 'Architecture',
  decisionsTitle: 'Key engineering decisions',
  stackTitle: 'Stack & boundaries',
  qualityTitle: 'Quality & scale',
  applicationsTitle: 'Explore the project',
  applicationOpenLabel: 'Open',
} as const;
