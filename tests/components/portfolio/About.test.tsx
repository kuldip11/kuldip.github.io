import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { About } from '@/components/portfolio/About';

describe('About', () => {
  it('renders the about section', () => {
    const { container } = render(<About />);
    expect(container.querySelector('section')).toBeInTheDocument();
  });
});
