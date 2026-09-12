import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import ArticlesPage, { metadata } from '@/app/(portfolio)/articles/page';
import { articles } from '@/constants/data/articles.constants';

describe('Articles page', () => {
  it('renders every experience-based article card', () => {
    render(<ArticlesPage />);
    expect(screen.getAllByRole('link', { name: /Read Article/i })).toHaveLength(articles.length);
    expect(metadata.alternates).toEqual({ canonical: '/articles' });
  });
});
