import { describe, expect, it } from 'vitest';

import { articles } from '@/constants/data/articles.constants';
import { ROUTES } from '@/constants/routes';
import { getArticleBySlug } from '@/lib/articles/getArticleBySlug';
import { getArticleStaticParams } from '@/lib/articles/getArticleStaticParams';

describe('article domain data', () => {
  it('keeps article slugs unique and route-safe', () => {
    const slugs = articles.map(({ slug }) => slug);
    expect(new Set(slugs).size).toBe(slugs.length);

    for (const slug of slugs) {
      expect(slug).toMatch(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
      expect(ROUTES.article(slug)).toBe(`/articles/${slug}`);
    }
  });

  it('keeps every article complete enough for rich generic rendering and SEO', () => {
    for (const article of articles) {
      expect(article.title.trim()).not.toBe('');
      expect(article.description.trim()).not.toBe('');
      expect(article.category.trim()).not.toBe('');
      expect(article.readingTime).toMatch(/min read$/);
      expect(article.publishedAt).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(article.updatedAt).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(article.tags.length).toBeGreaterThan(2);
      expect(article.takeaways.length).toBeGreaterThan(1);
      expect(article.sections.length).toBeGreaterThan(2);

      for (const section of article.sections) {
        expect(section.id.trim()).not.toBe('');
        expect(section.eyebrow.trim()).not.toBe('');
        expect(section.title.trim()).not.toBe('');
        expect(section.paragraphs.length).toBeGreaterThan(0);
        section.paragraphs.forEach((paragraph) => expect(paragraph.trim()).not.toBe(''));
      }
    }
  });

  it('generates static params and selectors directly from article data', () => {
    expect(getArticleStaticParams()).toEqual(articles.map(({ slug }) => ({ slug })));

    for (const article of articles) {
      expect(getArticleBySlug(article.slug)).toBe(article);
    }

    expect(getArticleBySlug('not-an-article')).toBeUndefined();
  });
});
