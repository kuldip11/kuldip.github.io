import { FEATURE_FLAGS } from '@/constants/config/feature-flags.constants';
import { articles } from '@/constants/data/articles.constants';
import { projects } from '@/constants/data/projects';
import { ROUTES, staticSitemapRoutes } from '@/constants/routes';
import { siteConfig } from '@/constants/site';

import type { MetadataRoute } from 'next';

const sitemap = (): MetadataRoute.Sitemap => [
  ...staticSitemapRoutes.map((path) => ({ url: `${siteConfig.url}${path}` })),
  ...projects.map((project) => ({
    url: `${siteConfig.url}${ROUTES.project(project.slug)}`,
    lastModified: project.updatedAt,
  })),
  ...(FEATURE_FLAGS.articles
    ? articles.map((article) => ({
        url: `${siteConfig.url}${ROUTES.article(article.slug)}`,
        lastModified: article.updatedAt,
      }))
    : []),
];

export default sitemap;
