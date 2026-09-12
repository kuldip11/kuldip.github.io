import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import ProjectsPage, { metadata } from '@/app/(portfolio)/projects/page';
describe('Projects page', () => {
  it('renders redesigned project cards', () => {
    render(<ProjectsPage />);
    expect(screen.getAllByRole('link', { name: /^Read |View project/i })).toHaveLength(1);
    expect(metadata.alternates).toEqual({ canonical: '/projects' });
  });
});
