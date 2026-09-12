import { InnerPageBackdrop, Pills } from '@/components/portfolio/InnerPageUi';
import { articles } from '@/constants/data/articles.constants';
import { ARTICLES_PAGE_CONTENT } from '@/constants/pages/articles.constants';
import type { ArticleCardDefinition } from '@/types/article.types';

import { ArticleCard } from './ArticleCard';
import { ArticleHero } from './ArticleHero';

const articleCards = articles.map((article, index) => ({
  ...article,
  glyph: ARTICLES_PAGE_CONTENT.glyphs[index] ?? 'article',
})) satisfies readonly ArticleCardDefinition[];

export const ArticlesPageContent = () => (
  <InnerPageBackdrop>
    <section className="relative mx-auto max-w-[1500px] px-5 py-10 sm:px-8 sm:py-14 lg:px-12">
      <ArticleHero />
      <div className="mt-7 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <Pills items={ARTICLES_PAGE_CONTENT.filter} />
        <span className="font-mono text-[10px] tracking-[.12em] text-[#78988a] uppercase">
          {articles.length} field notes
        </span>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {articleCards.map((article) => (
          <ArticleCard article={article} key={article.slug} />
        ))}
      </div>
    </section>
  </InnerPageBackdrop>
);
