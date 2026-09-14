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
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '/about');
    expect(screen.getByRole('link', { name: 'Résumé' })).toHaveAttribute('href', '/resume');
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
    expect(document.body.style.overflow).toBe('hidden');
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(screen.queryByRole('complementary', { name: 'Mobile navigation' })).not.toBeInTheDocument();
    expect(document.body.style.overflow).toBe('');
    expect(menuButton).toHaveFocus();
  });

  it('closes the mobile drawer after navigation is selected', () => {
    render(<Header />);
    fireEvent.click(screen.getByRole('button', { name: 'Open navigation menu' }));
    const mobileNavigation = screen.getByRole('navigation', { name: 'Mobile main navigation' });
    fireEvent.click(within(mobileNavigation).getByRole('link', { name: /Home01/ }));
    expect(mobileNavigation).not.toBeInTheDocument();
  });

  it('keeps keyboard focus inside the open mobile drawer', () => {
    render(<Header />);
    fireEvent.click(screen.getByRole('button', { name: 'Open navigation menu' }));

    const drawer = screen.getByRole('complementary', { name: 'Mobile navigation' });
    const closeButton = within(drawer).getByRole('button', { name: 'Close navigation menu' });
    const links = within(drawer).getAllByRole('link');
    const last = links[links.length - 1];

    expect(closeButton).toHaveFocus();
    last.focus();
    fireEvent.keyDown(document, { key: 'Tab' });
    expect(closeButton).toHaveFocus();

    closeButton.focus();
    fireEvent.keyDown(document, { key: 'Tab', shiftKey: true });
    expect(last).toHaveFocus();
  });
});
