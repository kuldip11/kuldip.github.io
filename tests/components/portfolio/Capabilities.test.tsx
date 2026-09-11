import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Capabilities } from '@/components/portfolio/Capabilities';

describe('Capabilities', () => {
  it('summarizes the work Kuldip can own', () => {
    render(<Capabilities />);
    expect(screen.getByRole('heading', { name: 'What I can do' })).toBeInTheDocument();
    expect(screen.getByText('Build scalable products')).toBeInTheDocument();
    expect(screen.getByText('Work end-to-end')).toBeInTheDocument();
  });
});
