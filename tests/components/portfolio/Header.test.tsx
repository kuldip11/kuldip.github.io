import { fireEvent, render, screen, within } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

const navigation = vi.hoisted(() => ({ pathname: '/' }));

vi.mock('next/navigation', () => ({
  usePathname: () => navigation.pathname,
}));

import { Header } from '@/components/portfolio/Header';

afterEach(() => {
  navigation.pathname = '/';
});

describe('Header', () => {
  it('provides navigation to the main landing sections', () => {
    render(<Header />);
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/');
    expect(screen.getByRole('link', { name: 'Projects' })).toHaveAttribute('href', '/projects');
    expect(screen.getByRole('link', { name: 'Articles' })).toHaveAttribute('href', '/articles');
    expect(screen.getByRole('link', { name: 'Resume' })).toHaveAttribute('href', '/resume');
    expect(screen.getByRole('link', { name: /Let's Connect/i })).toBeInTheDocument();
  });

  it('highlights the navigation item for the current route', () => {
    navigation.pathname = '/projects/servora';
    render(<Header />);

    expect(screen.getByRole('link', { name: 'Projects' })).toHaveAttribute('aria-current', 'page');
    expect(screen.getByRole('link', { name: 'Home' })).not.toHaveAttribute('aria-current');
  });

  it('opens and closes the mobile navigation drawer', () => {
    render(<Header />);
    const menuButton = screen.getByRole('button', { name: 'Open navigation menu' });
    fireEvent.click(menuButton);
    expect(screen.getByRole('complementary', { name: 'Mobile navigation' })).toBeInTheDocument();
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(screen.queryByRole('complementary', { name: 'Mobile navigation' })).not.toBeInTheDocument();
  });

  it('closes the mobile drawer after navigation is selected', () => {
    render(<Header />);
    fireEvent.click(screen.getByRole('button', { name: 'Open navigation menu' }));
    const mobileNavigation = screen.getByRole('navigation', { name: 'Mobile main navigation' });
    fireEvent.click(within(mobileNavigation).getByRole('link', { name: /Home01/ }));
    expect(mobileNavigation).not.toBeInTheDocument();
  });
});
