import { FEATURE_FLAGS } from '@/constants/config/feature-flags.constants';
import { articles } from '@/constants/data/articles.constants';

export const getArticleStaticParams = () => (FEATURE_FLAGS.articles ? articles.map(({ slug }) => ({ slug })) : []);
