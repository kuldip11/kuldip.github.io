import { FEATURE_FLAGS } from '@/constants/config/feature-flags.constants';
import { articles } from '@/constants/data/articles.constants';

export const getArticleBySlug = (slug: string) =>
  FEATURE_FLAGS.articles ? articles.find((article) => article.slug === slug) : undefined;
