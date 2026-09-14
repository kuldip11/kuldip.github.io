import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Footer } from '@/components/portfolio/Footer';

describe('Footer', () => {
  it('uses the semantic portfolio footer surface', () => {
    const { container } = render(<Footer />);
    expect(container.querySelector('footer')).toHaveClass('bg-surface');
  });

  it('links to the primary portfolio routes and selected work', () => {
    render(<Footer />);

    expect(screen.getByRole('link', { name: 'Projects' })).toHaveAttribute('href', '/projects');
    expect(screen.getAllByRole('link', { name: 'Articles' })[0]).toHaveAttribute('href', '/articles');
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '/about');
    expect(screen.getByRole('link', { name: 'Résumé' })).toHaveAttribute('href', '/resume');
    expect(screen.getByRole('link', { name: 'Servora · Restaurant OS' })).toHaveAttribute('href', '/projects/servora');
    expect(screen.getByRole('link', { name: 'TallyLite · Business App' })).toHaveAttribute(
      'href',
      '/projects/tallylite',
    );
  });

  it('links to personal profiles', () => {
    render(<Footer />);
    expect(
      screen
        .getAllByRole('link', { name: 'GitHub' })
        .some((link) => link.getAttribute('href') === 'https://github.com/kuldip11'),
    ).toBe(true);
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute(
      'href',
      'https://linkedin.com/in/kuldip-kumar-sah',
    );
  });

  it('provides distinct navigation landmarks', () => {
    render(<Footer />);
    expect(screen.getByRole('navigation', { name: 'Footer navigation' })).toBeInTheDocument();
    expect(screen.getByRole('navigation', { name: 'Featured work' })).toBeInTheDocument();
  });
});
