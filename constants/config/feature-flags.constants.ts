export const resolveBooleanFeatureFlag = (value: string | undefined, defaultValue: boolean) => {
  if (value === undefined) return defaultValue;
  return value.trim().toLowerCase() !== 'false';
};

export const FEATURE_FLAGS = {
  articles: resolveBooleanFeatureFlag(process.env.NEXT_PUBLIC_ARTICLES_ENABLED, true),
} as const;
