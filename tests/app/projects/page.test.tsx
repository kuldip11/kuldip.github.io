import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import ProjectsPage, { metadata } from '@/app/(portfolio)/projects/page';

describe('Projects page', () => {
  it('renders both source-backed project cards', () => {
    const { container } = render(<ProjectsPage />);
    expect(container.querySelector('a[href="/projects/servora"]')).toBeInTheDocument();
    expect(container.querySelector('a[href="/projects/tallylite"]')).toBeInTheDocument();
    expect(metadata.alternates).toEqual({ canonical: '/projects' });
  });
});
