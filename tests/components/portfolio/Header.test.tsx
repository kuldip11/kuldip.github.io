import { fireEvent, render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Header } from '@/components/portfolio/Header';

describe('Header', () => {
  it('provides navigation to the main landing sections', () => {
    render(<Header />);
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/#top');
    expect(screen.getByRole('link', { name: 'Projects' })).toHaveAttribute('href', '/#work');
    expect(screen.getByRole('link', { name: 'Experience' })).toHaveAttribute('href', '/#experience');
    expect(screen.getByRole('link', { name: 'Approach' })).toHaveAttribute('href', '/#approach');
    expect(screen.getByRole('link', { name: /Let's Connect/i })).toBeInTheDocument();
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
    fireEvent.click(within(mobileNavigation).getByRole('link', { name: 'Home' }));
    expect(mobileNavigation).not.toBeInTheDocument();
  });
});
