import { describe, expect, it } from 'vitest';

import { articles } from '@/constants/data/articles.constants';

describe('articles data', () => {
  it('uses unique slugs and contains article sections', () => {
    expect(new Set(articles.map((article) => article.slug)).size).toBe(articles.length);
    expect(articles.every((article) => article.sections.length > 0)).toBe(true);
  });
});
