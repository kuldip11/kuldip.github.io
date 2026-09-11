import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Hero } from '@/components/portfolio/Hero';

describe('Hero', () => {
  it('makes the role, capabilities and resume path clear', () => {
    render(<Hero />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/scalable React products/i);
    expect(screen.getByText(/Senior Frontend Engineer/i)).toBeInTheDocument();
    expect(screen.getByText('Frontend Architecture')).toBeInTheDocument();
    expect(screen.getByAltText(/Kuldip Kumar Sah/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /View résumé/i })).toHaveAttribute('href', '/resume');
  });
});
