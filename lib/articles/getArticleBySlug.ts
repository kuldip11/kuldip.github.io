import { articles } from '@/constants/data/articles.constants';

export const getArticleBySlug = (slug: string) => articles.find((article) => article.slug === slug);
