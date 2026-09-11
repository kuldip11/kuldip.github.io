import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { ResumeSkills } from '@/components/resume/ResumeSkills';

describe('ResumeSkills', () => {
  it('shows the skills for the selected category', () => {
    render(<ResumeSkills />);

    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.queryByText('Node.js')).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole('tab', { name: 'Backend' }));

    expect(screen.getByText('Node.js')).toBeInTheDocument();
    expect(screen.queryByText('React')).not.toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'Backend' })).toHaveAttribute('aria-selected', 'true');
  });
});
