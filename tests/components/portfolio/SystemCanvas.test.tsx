import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { SystemCanvas } from '@/components/portfolio/SystemCanvas';

describe('SystemCanvas', () => {
  it('renders the hero system illustration', () => {
    const { container } = render(<SystemCanvas />);
    expect(container.firstElementChild).toBeInTheDocument();
  });
});
