import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Home, { metadata } from '@/app/(portfolio)/page';

describe('Home page', () => {
  it('renders the portfolio and skip link', () => {
    const { container } = render(<Home />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    expect(container.querySelector('script[type="application/ld+json"]')?.textContent).toContain('ProfilePage');
    expect(metadata.keywords).toContain('React');
    expect(metadata.keywords).toContain('Senior React Developer');
    expect(metadata.keywords).toContain('Performance Optimization');
  });
});
