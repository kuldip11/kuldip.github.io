import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import ProjectCaseStudy, { generateMetadata, generateStaticParams } from '@/app/(portfolio)/projects/[slug]/page';
import { servoraLinks } from '@/constants/site';

describe('Project case study', () => {
  it('generates routes for every project', () => {
    expect(generateStaticParams()).toHaveLength(2);
    expect(generateStaticParams()).toEqual(expect.arrayContaining([{ slug: 'servora' }, { slug: 'tallylite' }]));
  });

  it('renders Servora live application links', async () => {
    render(await ProjectCaseStudy({ params: Promise.resolve({ slug: 'servora' }) }));
    expect(screen.getByRole('heading', { name: 'Explore the Servora ecosystem' })).toBeInTheDocument();
    for (const link of servoraLinks) {
      const matches = screen.getAllByRole('link', { name: new RegExp(link.label.replace('/', '\\/'), 'i') });
      expect(matches.some((item) => item.getAttribute('href') === link.href)).toBe(true);
    }
  });

  it('renders the TallyLite live app and source links', async () => {
    render(await ProjectCaseStudy({ params: Promise.resolve({ slug: 'tallylite' }) }));
    expect(screen.getByRole('heading', { name: 'Try TallyLite or inspect the source' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Live App/i })).toHaveAttribute('href', 'https://tallylite.netlify.app/');
    expect(screen.getByRole('link', { name: /GitHub/i })).toHaveAttribute(
      'href',
      'https://github.com/kuldip11/TallyLite',
    );
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
