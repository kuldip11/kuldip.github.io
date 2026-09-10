import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { TechStack } from '@/components/portfolio/TechStack';

describe('TechStack', () => {
  it('renders technical categories', () => {
    render(<TechStack />);
    expect(screen.getByText('Product frontend')).toBeInTheDocument();
  });
});
