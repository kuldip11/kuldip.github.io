import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import ArticlesPage, { metadata } from '@/app/(portfolio)/articles/page';
import { articles } from '@/constants/data/articles.constants';

describe('Articles page', () => {
  it('renders every experience-based article card', () => {
    render(<ArticlesPage />);
    for (const article of articles) {
      expect(screen.getByRole('link', { name: `Read ${article.title}` })).toHaveAttribute(
        'href',
        `/articles/${article.slug}`,
      );
    }
    expect(metadata.alternates).toEqual({ canonical: '/articles' });
  });
});
