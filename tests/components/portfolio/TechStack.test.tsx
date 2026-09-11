import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { TechStack } from '@/components/portfolio/TechStack';

describe('TechStack', () => {
  it('renders the visual technology grid', () => {
    render(<TechStack />);
    expect(screen.getByText('My tech stack')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('PostgreSQL')).toBeInTheDocument();
    expect(screen.getByText('Docker')).toBeInTheDocument();
  });
});
