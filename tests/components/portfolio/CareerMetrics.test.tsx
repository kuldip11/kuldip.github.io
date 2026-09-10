import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { CareerMetrics } from '@/components/portfolio/CareerMetrics';

describe('CareerMetrics', () => {
  it('renders portfolio metrics', () => {
    render(<CareerMetrics />);
    expect(screen.getByText('100K+')).toBeInTheDocument();
  });
});
