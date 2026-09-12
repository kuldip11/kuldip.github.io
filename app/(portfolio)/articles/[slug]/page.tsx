import { notFound } from 'next/navigation';

import { ArticleContent } from '@/components/articles/ArticleContent';
import { getArticleBySlug } from '@/lib/articles/getArticleBySlug';
import { getArticleStaticParams } from '@/lib/articles/getArticleStaticParams';
import { createArticleMetadata } from '@/lib/seo/createArticleMetadata';

import type { Metadata } from 'next';

type Params = Promise<{ slug: string }>;

export const generateStaticParams = () => getArticleStaticParams();

export const generateMetadata = async ({ params }: { params: Params }): Promise<Metadata> => {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  return article ? createArticleMetadata(article) : {};
};

const ArticlePage = async ({ params }: { params: Params }) => {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) notFound();

  return <ArticleContent article={article} />;
};

export default ArticlePage;
