import { fireEvent, render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Header } from '@/components/portfolio/Header';

describe('Header', () => {
  it('provides navigation to every top-level page', () => {
    render(<Header />);
    expect(screen.getByRole('link', { name: 'Work' })).toHaveAttribute('href', '/projects');
    expect(screen.getByRole('link', { name: 'Articles' })).toHaveAttribute('href', '/articles');
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '/about');
    expect(screen.getByRole('link', { name: 'Résumé' })).toHaveAttribute('href', '/resume');
    expect(screen.getByRole('link', { name: /Let's talk/i })).toHaveClass('bg-[#71f6b5]');
  });

  it('opens and closes the mobile navigation drawer', () => {
    render(<Header />);

    const menuButton = screen.getByRole('button', { name: 'Open navigation menu' });
    fireEvent.click(menuButton);

    expect(screen.getByRole('complementary', { name: 'Mobile navigation' })).toBeInTheDocument();
    expect(menuButton).toHaveAttribute('aria-label', 'Close navigation menu');
    expect(menuButton).toHaveAttribute('aria-expanded', 'true');

    fireEvent.keyDown(document, { key: 'Escape' });

    expect(screen.queryByRole('complementary', { name: 'Mobile navigation' })).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Open navigation menu' })).toHaveAttribute('aria-expanded', 'false');
  });

  it('closes the mobile drawer after navigation is selected', () => {
    render(<Header />);
    fireEvent.click(screen.getByRole('button', { name: 'Open navigation menu' }));

    const mobileNavigation = screen.getByRole('navigation', { name: 'Mobile main navigation' });
    fireEvent.click(within(mobileNavigation).getByRole('link', { name: 'Work' }));

    expect(mobileNavigation).not.toBeInTheDocument();
  });
});
