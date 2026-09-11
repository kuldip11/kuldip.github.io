import { readFileSync } from 'node:fs';

import { describe, expect, it } from 'vitest';

const projectRouteSource = readFileSync('app/projects/[slug]/page.tsx', 'utf8');
const projectShowcaseSource = readFileSync('components/portfolio/Projects.tsx', 'utf8');

describe('project route architecture', () => {
  it('keeps generic project rendering free of project-specific slug equality branches', () => {
    expect(projectRouteSource).not.toMatch(/slug\s*={2,3}\s*['"][^'"]+['"]/);
    expect(projectRouteSource).not.toMatch(/['"][^'"]+['"]\s*={2,3}\s*slug/);
    expect(projectShowcaseSource).not.toMatch(/slug\s*={2,3}\s*['"][^'"]+['"]/);
  });
});
