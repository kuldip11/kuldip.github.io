import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import ArticlePage, { generateMetadata, generateStaticParams } from '@/app/articles/[slug]/page';
import { articles } from '@/data/articles';

describe('Article page', () => {
  it('generates routes for every article', () => {
    expect(generateStaticParams()).toHaveLength(articles.length);
  });

  it('renders an article and its structured data', async () => {
    const article = articles[0];
    const { container } = render(await ArticlePage({ params: Promise.resolve({ slug: article.slug }) }));
    expect(screen.getByRole('heading', { level: 1, name: article.title })).toBeInTheDocument();
    expect(container.querySelector('script[type="application/ld+json"]')?.textContent).toContain('BlogPosting');
  });

  it('generates article metadata', async () => {
    const article = articles[0];
    const metadata = await generateMetadata({ params: Promise.resolve({ slug: article.slug }) });
    expect(metadata.alternates).toEqual({ canonical: `/articles/${article.slug}` });
  });
});
