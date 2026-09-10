import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Approach } from '@/components/portfolio/Approach';

describe('Approach', () => {
  it('renders the approach section', () => {
    const { container } = render(<Approach />);
    expect(container.querySelector('#approach')).toBeInTheDocument();
  });
});
