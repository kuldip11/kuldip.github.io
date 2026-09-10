import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import AboutPage, { metadata } from '@/app/about/page';

describe('About page', () => {
  it('renders and exposes canonical metadata', () => {
    render(<AboutPage />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    expect(metadata.alternates).toEqual({ canonical: '/about' });
  });
});
