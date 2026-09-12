import Link from 'next/link';

import { AppIcon } from '@/components/portfolio/AppIcon';
import { GlyphIcon } from '@/components/portfolio/GlyphIcon';
import { ROUTES } from '@/constants/routes';
import { INNER_PAGE_PANEL_CLASS } from '@/constants/styles/component-styles.constants';
import type { ArticleCardDefinition } from '@/types/article.types';

export const ArticleCard = ({ article, index }: { article: ArticleCardDefinition; index: number }) => (
  <article className={`${INNER_PAGE_PANEL_CLASS} overflow-hidden`}>
    <div className="relative grid min-h-[150px] place-items-center border-b border-panel-border bg-[#081914]">
      <span className="grid size-14 place-items-center text-[#42dfab]">
        <GlyphIcon glyph={article.glyph} className="size-12" />
      </span>
      <span className="absolute top-4 right-4 rounded-full border border-[#27775a] px-3 py-1 text-[10px] text-accent">
        {article.kind}
      </span>
    </div>
    <div className="p-5">
      <div className="flex items-center gap-3 font-mono text-[10px] text-[#8ca198]">
        <span className="inline-flex items-center gap-1">
          <AppIcon name="article" className="size-3" />
          {article.publishedAt}
        </span>
        <span>{index % 2 ? 10 : 8} min read</span>
      </div>
      <h2 className="mt-3 text-[20px] leading-[1.15] font-bold">{article.title}</h2>
      <p className="mt-3 text-[13px] leading-[1.55] text-[#aebdb6]">{article.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="rounded-full border border-[#27775a] px-2.5 py-1 text-[10px]">{article.kind}</span>
        <span className="rounded-full border border-[#27775a] px-2.5 py-1 text-[10px]">Frontend</span>
      </div>
      <Link className="mt-5 inline-flex text-[13px] font-semibold text-accent" href={ROUTES.article(article.slug)}>
        Read Article <AppIcon name="arrow-right" className="size-4" />
      </Link>
    </div>
  </article>
);
