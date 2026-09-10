import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { ExternalArrow } from '@/components/portfolio/ExternalArrow';

describe('ExternalArrow', () => {
  it('renders a decorative rotated arrow', () => {
    const { container } = render(<ExternalArrow />);
    expect(container.textContent).toContain('→');
    expect(container.firstElementChild).toHaveAttribute('aria-hidden', 'true');
  });
});
