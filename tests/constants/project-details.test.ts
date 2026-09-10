import { describe, expect, it } from 'vitest';

import { projectDetails } from '@/constants/project-details';

describe('project detail constants', () => {
  it('contains detail content for every case study', () => {
    expect(Object.keys(projectDetails)).toEqual(['servora', 'mapbox-performance', 'enterprise-frontend-architecture']);
    expect(projectDetails.servora.sections.length).toBeGreaterThan(0);
  });
});
