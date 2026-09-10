import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Projects } from '@/components/portfolio/Projects';
import { servoraLinks } from '@/data/site';

describe('Projects', () => {
  it('renders case-study links and live Servora demos', () => {
    render(<Projects />);
    expect(screen.getAllByRole('link', { name: /Read case study/i })).toHaveLength(3);
    for (const link of servoraLinks.filter((item) => item.label !== 'API')) {
      expect(screen.getByRole('link', { name: new RegExp(link.label.replace('/', '\\/'), 'i') })).toHaveAttribute(
        'href',
        link.href,
      );
    }
  });
});
