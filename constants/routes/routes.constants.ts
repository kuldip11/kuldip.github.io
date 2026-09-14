import { FEATURE_FLAGS } from '@/constants/config/feature-flags.constants';

export const ROUTES = {
  home: '/',
  homeTop: '/#top',
  homeWork: '/#work',
  homeExperience: '/#experience',
  homeApproach: '/#approach',
  about: '/about',
  projects: '/projects',
  project: (slug: string) => `/projects/${slug}`,
  articles: '/articles',
  article: (slug: string) => `/articles/${slug}`,
  resume: '/resume',
} as const;

export const staticSitemapRoutes = [
  '',
  ROUTES.about,
  ROUTES.resume,
  ROUTES.projects,
  ...(FEATURE_FLAGS.articles ? [ROUTES.articles] : []),
] as const;
