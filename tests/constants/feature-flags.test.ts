import { describe, expect, it } from 'vitest';

import { resolveBooleanFeatureFlag } from '@/constants/config/feature-flags.constants';

describe('feature flags', () => {
  it('uses the supplied default when a flag is not configured', () => {
    expect(resolveBooleanFeatureFlag(undefined, true)).toBe(true);
    expect(resolveBooleanFeatureFlag(undefined, false)).toBe(false);
  });

  it('disables a feature only when the deploy value is false', () => {
    expect(resolveBooleanFeatureFlag('false', true)).toBe(false);
    expect(resolveBooleanFeatureFlag(' FALSE ', true)).toBe(false);
    expect(resolveBooleanFeatureFlag('true', false)).toBe(true);
  });
});
