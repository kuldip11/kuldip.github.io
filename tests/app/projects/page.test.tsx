import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import ProjectsPage, { metadata } from '@/app/(portfolio)/projects/page';

describe('Projects page', () => {
  it('renders both source-backed project cards', () => {
    render(<ProjectsPage />);
    expect(screen.getByRole('link', { name: /Read Servora/i })).toHaveAttribute('href', '/projects/servora');
    expect(screen.getByRole('link', { name: /Read TallyLite/i })).toHaveAttribute('href', '/projects/tallylite');
    expect(metadata.alternates).toEqual({ canonical: '/projects' });
  });
});
