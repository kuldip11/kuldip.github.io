import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Footer } from '@/components/portfolio/Footer';

describe('Footer', () => {
  it('uses the dark portfolio footer surface', () => {
    const { container } = render(<Footer />);
    expect(container.querySelector('footer')).toHaveClass('bg-[#091411]');
  });

  it('links to all portfolio sections and real projects', () => {
    render(<Footer />);
    expect(screen.getAllByRole('link', { name: 'Projects' })[0]).toHaveAttribute('href', '/projects');
    expect(screen.getAllByRole('link', { name: 'Articles' })[0]).toHaveAttribute('href', '/articles');
    expect(screen.getAllByRole('link', { name: 'Approach' })[0]).toHaveAttribute('href', '/#approach');
    expect(screen.getAllByRole('link', { name: 'Resume' })[0]).toHaveAttribute('href', '/resume');
    expect(
      screen
        .getAllByRole('link', { name: 'Servora · Restaurant OS' })
        .every((link) => link.getAttribute('href') === '/projects/servora'),
    ).toBe(true);
    expect(
      screen
        .getAllByRole('link', { name: 'TallyLite · Business App' })
        .every((link) => link.getAttribute('href') === '/projects/tallylite'),
    ).toBe(true);
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

  it('provides mobile navigation accordions', () => {
    render(<Footer />);
    expect(document.querySelectorAll('details')).toHaveLength(3);
  });
});
