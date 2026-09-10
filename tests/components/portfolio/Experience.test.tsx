import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Experience } from '@/components/portfolio/Experience';

describe('Experience', () => {
  it('renders the experience section', () => {
    const { container } = render(<Experience />);
    expect(container.querySelector('#experience')).toBeInTheDocument();
  });
});
