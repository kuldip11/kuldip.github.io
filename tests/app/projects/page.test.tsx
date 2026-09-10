import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import ProjectsPage, { metadata } from '@/app/projects/page';

describe('Projects page', () => {
  it('renders all case studies', () => {
    render(<ProjectsPage />);
    expect(screen.getAllByRole('link', { name: /Read case study/i })).toHaveLength(3);
    expect(metadata.alternates).toEqual({ canonical: '/projects' });
  });
});
