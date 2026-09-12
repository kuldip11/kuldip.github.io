import { ROUTES } from '@/constants/routes';
import { siteConfig, socialImage } from '@/constants/site';
import type { ArticleDefinition } from '@/types/article.types';

import type { Metadata } from 'next';

export const createArticleMetadata = (article: ArticleDefinition): Metadata => ({
  title: article.title,
  description: article.description,
  alternates: { canonical: ROUTES.article(article.slug) },
  openGraph: {
    type: 'article',
    url: ROUTES.article(article.slug),
    title: article.title,
    description: article.description,
    publishedTime: article.publishedAt,
    modifiedTime: article.updatedAt,
    authors: [siteConfig.name],
    images: [socialImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: article.title,
    description: article.description,
    images: [socialImage],
  },
});
