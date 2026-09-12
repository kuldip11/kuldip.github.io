import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import PortfolioLayout from '@/app/(portfolio)/layout';

describe('PortfolioLayout', () => {
  it('owns the shared portfolio shell and skip link', () => {
    render(
      <PortfolioLayout>
        <main id="main-content">Content</main>
      </PortfolioLayout>,
    );

    expect(screen.getByRole('link', { name: 'Skip to content' })).toHaveAttribute('href', '#main-content');
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });
});
