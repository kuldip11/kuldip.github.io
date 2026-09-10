import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Hero } from '@/components/portfolio/Hero';

describe('Hero', () => {
  it('renders the primary headline and resume link', () => {
    render(<Hero />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /View résumé/i })).toHaveAttribute('href', '/resume');
  });
});
