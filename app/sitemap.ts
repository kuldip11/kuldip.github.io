import { articles } from '@/data/articles';
import { projects } from '@/data/portfolio';
import { siteConfig } from '@/data/site';

import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/about', '/resume', '/projects', '/articles'];
  return [
    ...staticRoutes.map((path) => ({
      url: `${siteConfig.url}${path}`,
      changeFrequency: 'monthly' as const,
      priority: path === '' ? 1 : 0.7,
    })),
    ...projects.map((project) => ({
      url: `${siteConfig.url}/projects/${project.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...articles.map((article) => ({
      url: `${siteConfig.url}/articles/${article.slug}`,
      lastModified: article.date,
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    })),
  ];
}
