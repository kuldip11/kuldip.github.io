import { staticSitemapRoutes } from '@/constants/routes';
import { siteConfig } from '@/constants/site';
import { articles } from '@/data/articles';
import { projects } from '@/data/portfolio';

import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticSitemapRoutes.map((path) => ({
      url: `${siteConfig.url}${path}`,
    })),
    ...projects.map((project) => ({
      url: `${siteConfig.url}/projects/${project.slug}`,
      lastModified: project.updatedAt,
    })),
    ...articles.map((article) => ({
      url: `${siteConfig.url}/articles/${article.slug}`,
      lastModified: article.updatedAt,
    })),
  ];
}
