import { describe, expect, it } from 'vitest';

import { articles } from '@/constants/data/articles.constants';
import { projects } from '@/constants/data/projects';
import { ROUTES } from '@/constants/routes';
import { createArticleMetadata } from '@/lib/seo/createArticleMetadata';
import { createProjectMetadata } from '@/lib/seo/createProjectMetadata';

describe('data-driven metadata consistency', () => {
  it('keeps project canonical and social metadata aligned with project routes', () => {
    for (const project of projects) {
      const metadata = createProjectMetadata(project);
      const route = ROUTES.project(project.slug);

      expect(metadata.alternates).toEqual({ canonical: route });
      expect(metadata.openGraph?.url).toBe(route);
      expect(metadata.title).toBe(project.seoTitle);
      expect(metadata.description).toBe(project.summary);
    }
  });

  it('keeps article canonical and social metadata aligned with article routes', () => {
    for (const article of articles) {
      const metadata = createArticleMetadata(article);
      const route = ROUTES.article(article.slug);

      expect(metadata.alternates).toEqual({ canonical: route });
      expect(metadata.openGraph?.url).toBe(route);
      expect(metadata.title).toBe(article.title);
      expect(metadata.description).toBe(article.description);
    }
  });
});
