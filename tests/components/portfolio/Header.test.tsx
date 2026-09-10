import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Header } from '@/components/portfolio/Header';

describe('Header', () => {
  it('provides navigation to every top-level page', () => {
    render(<Header />);
    expect(screen.getByRole('link', { name: 'Work' })).toHaveAttribute('href', '/projects');
    expect(screen.getByRole('link', { name: 'Articles' })).toHaveAttribute('href', '/articles');
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '/about');
    expect(screen.getByRole('link', { name: 'Résumé' })).toHaveAttribute('href', '/resume');
  });
});
