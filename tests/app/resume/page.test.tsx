import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ResumePage, { metadata } from '@/app/resume/page';
describe('Resume page', () => {
  it('renders downloadable résumé and redesigned sections', () => {
    render(<ResumePage />);
    expect(screen.getByRole('link', { name: /Download PDF/i })).toHaveAttribute('href', '/Kuldip_Kumar_Sah.pdf');
    expect(screen.getByRole('heading', { name: /Professional Summary/i })).toBeInTheDocument();
    expect(metadata.alternates).toEqual({ canonical: '/resume' });
  });
});
