import { articles } from '@/constants/data/articles.constants';

export const getArticleStaticParams = () => articles.map(({ slug }) => ({ slug }));
