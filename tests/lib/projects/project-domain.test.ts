import { describe, expect, it } from 'vitest';

import { projects } from '@/constants/data/projects';
import { ROUTES } from '@/constants/routes';
import { getProjectBySlug } from '@/lib/projects/getProjectBySlug';
import { getProjectStaticParams } from '@/lib/projects/getProjectStaticParams';

const REQUIRED_PROJECT_TEXT_FIELDS = [
  'slug',
  'title',
  'description',
  'seoTitle',
  'summary',
  'publishedAt',
  'updatedAt',
] as const;

describe('project domain data', () => {
  it('keeps project slugs unique and route-safe', () => {
    const slugs = projects.map(({ slug }) => slug);
    expect(new Set(slugs).size).toBe(slugs.length);

    for (const slug of slugs) {
      expect(slug).toMatch(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
      expect(ROUTES.project(slug)).toBe(`/projects/${slug}`);
    }
  });

  it('keeps every project definition complete enough for generic rendering', () => {
    for (const project of projects) {
      for (const field of REQUIRED_PROJECT_TEXT_FIELDS) {
        expect(project[field].trim()).not.toBe('');
      }

      expect(project.stats.length).toBeGreaterThan(0);
      expect(project.caseStudy.heroLines.length).toBeGreaterThan(0);
      expect(project.caseStudy.metrics.length).toBeGreaterThan(0);
      expect(project.caseStudy.navigation.length).toBeGreaterThan(0);
      expect(project.caseStudy.overviewItems.length).toBeGreaterThan(0);
      expect(project.caseStudy.highlights.length).toBeGreaterThan(0);
      expect(project.caseStudy.sections.length).toBeGreaterThan(0);
      expect(project.caseStudy.applications.length).toBeGreaterThan(0);
    }
  });

  it('generates static params and selectors directly from project data', () => {
    expect(getProjectStaticParams()).toEqual(projects.map(({ slug }) => ({ slug })));

    for (const project of projects) {
      expect(getProjectBySlug(project.slug)).toBe(project);
    }

    expect(getProjectBySlug('not-a-project')).toBeUndefined();
  });
});
