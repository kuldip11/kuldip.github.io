import { articles } from '@/constants/data/articles.constants';
import { ARTICLES_PAGE_CONTENT } from '@/constants/pages/articles.constants';
import type { ArticleCardDefinition } from '@/types/article.types';

import { ArticleCard } from './ArticleCard';
import { ArticleHero } from './ArticleHero';

const articleCards = articles.map((article) => ({
  ...article,
  glyph: 'article',
})) satisfies readonly ArticleCardDefinition[];

export const ArticlesPageContent = () => (
  <main id="main-content" tabIndex={-1} className="min-h-screen bg-page text-foreground">
    <section className="mx-auto w-full max-w-[1120px] px-5 py-16 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
      <ArticleHero />
      <div className="flex items-center justify-between gap-4 border-b border-border py-5 text-[11px] font-semibold tracking-[.12em] text-foreground-muted uppercase">
        <span>{ARTICLES_PAGE_CONTENT.selectedWritingLabel}</span>
        <span>
          {articles.length} {ARTICLES_PAGE_CONTENT.fieldNotesLabel}
        </span>
      </div>
      <div>
        {articleCards.map((article, index) => (
          <ArticleCard article={article} index={index} key={article.slug} />
        ))}
      </div>
    </section>
  </main>
);
