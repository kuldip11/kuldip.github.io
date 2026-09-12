import { describe, expect, it } from 'vitest';

import sitemap from '@/app/sitemap';
import { articles } from '@/constants/data/articles.constants';
import { projects } from '@/constants/data/projects';
import { ROUTES } from '@/constants/routes';
import { siteConfig } from '@/constants/site';

describe('sitemap data consistency', () => {
  it('includes every project and article route generated from domain data', () => {
    const urls = new Set(sitemap().map(({ url }) => url));

    for (const project of projects) {
      expect(urls.has(`${siteConfig.url}${ROUTES.project(project.slug)}`)).toBe(true);
    }

    for (const article of articles) {
      expect(urls.has(`${siteConfig.url}${ROUTES.article(article.slug)}`)).toBe(true);
    }
  });
});
