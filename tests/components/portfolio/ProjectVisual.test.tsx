import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { ProjectVisual } from '@/components/portfolio/ProjectVisual';

describe('ProjectVisual', () => {
  it('renders a visual for a supported project index', () => {
    const { container } = render(<ProjectVisual index="01" />);
    expect(container.firstElementChild).toBeInTheDocument();
  });
});
