import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import NotFound from '@/app/not-found';

describe('NotFound', () => {
  it('offers a path back home', () => {
    render(<NotFound />);
    expect(screen.getByRole('link')).toHaveAttribute('href', '/');
  });
});
