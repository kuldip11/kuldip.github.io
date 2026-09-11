import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import ArticlesPage, { metadata } from '@/app/articles/page';
describe('Articles page', () => {
  it('renders article cards', () => {
    render(<ArticlesPage />);
    expect(screen.getAllByRole('link', { name: /Read Article/i })).toHaveLength(2);
    expect(metadata.alternates).toEqual({ canonical: '/articles' });
  });
});
