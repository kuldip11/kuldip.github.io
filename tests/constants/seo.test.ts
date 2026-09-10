import { describe, expect, it } from 'vitest';

import { landingPageKeywords, seoCopy } from '@/constants/seo';

describe('SEO constants', () => {
  it('contains the requested landing-page keyword themes', () => {
    expect(landingPageKeywords).toContain('React');
    expect(landingPageKeywords).toContain('React.js');
    expect(landingPageKeywords).toContain('Next.js');
    expect(landingPageKeywords).toContain('TypeScript');
    expect(landingPageKeywords).toContain('JavaScript');
    expect(landingPageKeywords).toContain('React Developer');
    expect(landingPageKeywords).toContain('Senior React Developer');
    expect(landingPageKeywords).toContain('Senior Frontend Engineer');
    expect(landingPageKeywords).toContain('Full Stack Developer');
    expect(landingPageKeywords).toContain('Performance Optimization');
  });

  it('contains SEO copy for every top-level content page', () => {
    expect(Object.keys(seoCopy)).toEqual(['about', 'projects', 'articles', 'resume']);
  });
});
