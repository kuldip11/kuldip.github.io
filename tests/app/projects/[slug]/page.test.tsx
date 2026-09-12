import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import ProjectCaseStudy, { generateMetadata, generateStaticParams } from '@/app/(portfolio)/projects/[slug]/page';
import { servoraLinks } from '@/constants/site';

describe('Project case study', () => {
  it('generates routes for every project', () => {
    expect(generateStaticParams()).toHaveLength(1);
  });

  it('renders Servora live application links', async () => {
    render(await ProjectCaseStudy({ params: Promise.resolve({ slug: 'servora' }) }));
    expect(screen.getByRole('heading', { name: 'Try each Servora application.' })).toBeInTheDocument();
    for (const link of servoraLinks) {
      const matches = screen.getAllByRole('link', { name: new RegExp(link.label.replace('/', '\\/'), 'i') });
      expect(matches.some((item) => item.getAttribute('href') === link.href)).toBe(true);
    }
  });

  it('generates project metadata', async () => {
    const metadata = await generateMetadata({ params: Promise.resolve({ slug: 'servora' }) });
    expect(metadata.alternates).toEqual({ canonical: '/projects/servora' });
    expect(metadata.keywords).toBeUndefined();
  });
  it('returns empty metadata for an unknown project slug', async () => {
    const metadata = await generateMetadata({ params: Promise.resolve({ slug: 'does-not-exist' }) });
    expect(metadata).toEqual({});
  });
});
