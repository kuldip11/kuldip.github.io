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

    expect(screen.getAllByRole('link', { name: 'Projects' })[0]).toHaveAttribute('href', '/projects');
    expect(screen.getAllByRole('link', { name: 'Blog (Soon)' })[0]).toHaveAttribute('href', '/articles');
    expect(screen.getAllByRole('link', { name: 'Approach' })[0]).toHaveAttribute('href', '/#approach');
    expect(screen.getAllByRole('link', { name: 'Resume' })[0]).toHaveAttribute('href', '/resume');
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

  it('provides mobile navigation accordions', () => {
    render(<Footer />);
    expect(document.querySelectorAll('details')).toHaveLength(3);
  });
});
