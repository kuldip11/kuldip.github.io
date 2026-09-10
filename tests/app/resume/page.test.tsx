import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import ResumePage, { metadata } from '@/app/resume/page';
import { servoraLinks } from '@/data/site';

describe('Resume page', () => {
  it('renders downloadable résumé', () => {
    render(<ResumePage />);
    expect(screen.getByRole('link', { name: 'Download PDF' })).toHaveAttribute('href', '/Kuldip_Kumar_Sah.pdf');
    expect(metadata.alternates).toEqual({ canonical: '/resume' });
    for (const link of servoraLinks) {
      const matches = screen.getAllByRole('link', { name: new RegExp(link.label.replace('/', '\\/'), 'i') });
      expect(matches.some((item) => item.getAttribute('href') === link.href)).toBe(true);
    }
  });
});
