import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Footer } from '@/components/portfolio/Footer';

describe('Footer', () => {
  it('uses the dark portfolio footer surface', () => {
    const { container } = render(<Footer />);
    expect(container.querySelector('footer')).toHaveClass('bg-[#091411]');
  });
  it('links to all portfolio sections', () => {
    render(<Footer />);

    expect(screen.getByRole('link', { name: 'Projects' })).toHaveAttribute('href', '/projects');

    expect(screen.getByRole('link', { name: 'Articles' })).toHaveAttribute('href', '/articles');

    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '/about');

    expect(screen.getByRole('link', { name: 'Résumé' })).toHaveAttribute('href', '/resume');
  });

  it('links to personal profiles', () => {
    render(<Footer />);

    expect(
      screen.getByRole('link', {
        name: 'GitHub',
      }),
    ).toHaveAttribute('href', 'https://github.com/kuldip11');

    expect(
      screen.getByRole('link', {
        name: 'LinkedIn',
      }),
    ).toHaveAttribute('href', 'https://linkedin.com/in/kuldip-kumar-sah');
  });
});
