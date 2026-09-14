import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { ThemeToggle } from '@/components/theme/ThemeToggle';
import { THEME_COPY } from '@/constants/ui/theme.constants';

beforeEach(() => {
  document.documentElement.dataset.theme = 'light';
  window.localStorage.clear();
  Object.defineProperty(window, 'matchMedia', {
    configurable: true,
    value: vi.fn().mockImplementation(() => ({
      matches: false,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    })),
  });
});

describe('ThemeToggle', () => {
  it('switches themes using semantic document state and persists the preference', () => {
    render(<ThemeToggle />);

    const toggle = screen.getByRole('button', { name: THEME_COPY.switchToDarkLabel });
    fireEvent.click(toggle);

    expect(document.documentElement.dataset.theme).toBe('dark');
    expect(window.localStorage.getItem(THEME_COPY.storageKey)).toBe('dark');
    expect(screen.getByRole('button', { name: THEME_COPY.switchToLightLabel })).toBeInTheDocument();
  });
});
