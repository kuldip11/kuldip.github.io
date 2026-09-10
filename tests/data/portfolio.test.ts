import { describe, expect, it } from 'vitest';

import { experience, metrics, principles, projects, stack } from '@/data/portfolio';

describe('portfolio data', () => {
  it('provides content for all homepage sections', () => {
    expect(metrics.length).toBeGreaterThan(0);
    expect(projects).toHaveLength(3);
    expect(stack.length).toBeGreaterThan(0);
    expect(principles.length).toBeGreaterThan(0);
    expect(experience.length).toBeGreaterThan(0);
  });
});
