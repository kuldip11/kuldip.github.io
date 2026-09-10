import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import ArticlesPage, { metadata } from '@/app/articles/page';

describe('Articles page', () => {
  it('renders all article links', () => {
    render(<ArticlesPage />);
    expect(screen.getAllByRole('link', { name: /^Read .+/i })).toHaveLength(3);
    expect(metadata.alternates).toEqual({ canonical: '/articles' });
    expect(metadata.keywords).toBeUndefined();
  });
});
