import Link from 'next/link';

import { AppIcon } from '@/components/portfolio/AppIcon';
import { GlyphIcon } from '@/components/portfolio/GlyphIcon';
import { ROUTES } from '@/constants/routes';
import { INNER_PAGE_PANEL_CLASS } from '@/constants/styles/component-styles.constants';
import type { ArticleCardDefinition } from '@/types/article.types';

export const ArticleCard = ({ article }: { article: ArticleCardDefinition }) => (
  <article
    className={`${INNER_PAGE_PANEL_CLASS} group overflow-hidden transition hover:-translate-y-1 hover:border-[#2d8b67]`}
  >
    <div className="relative grid min-h-[160px] place-items-center overflow-hidden border-b border-panel-border bg-[#081914]">
      <div
        aria-hidden="true"
        className="absolute inset-0 [background-image:linear-gradient(rgba(89,236,176,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(89,236,176,.08)_1px,transparent_1px)] [background-size:28px_28px] opacity-40"
      />
      <span className="relative grid size-16 place-items-center rounded-[18px] border border-[#2b7257] bg-[#0a211a] text-[#42dfab] shadow-[0_0_42px_rgba(89,236,176,.08)] transition group-hover:scale-105">
        <GlyphIcon glyph={article.glyph} className="size-8" />
      </span>
      <span className="absolute top-4 right-4 rounded-full border border-[#27775a] bg-[#071713]/80 px-3 py-1 text-[10px] text-accent">
        {article.category}
      </span>
    </div>
    <div className="p-5">
      <div className="flex flex-wrap items-center gap-3 font-mono text-[10px] text-[#8ca198]">
        <span className="inline-flex items-center gap-1">
          <AppIcon name="article" className="size-3" />
          {article.publishedAt}
        </span>
        <span>{article.readingTime}</span>
      </div>
      <h2 className="mt-3 text-[21px] leading-[1.12] font-bold tracking-[-.025em]">{article.title}</h2>
      <p className="mt-3 text-[13px] leading-[1.6] text-[#aebdb6]">{article.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {article.tags.slice(0, 3).map((tag) => (
          <span className="rounded-full border border-[#27775a] px-2.5 py-1 text-[10px]" key={tag}>
            {tag}
          </span>
        ))}
      </div>
      <Link
        className="mt-5 inline-flex items-center gap-1 text-[13px] font-semibold text-accent"
        href={ROUTES.article(article.slug)}
      >
        Read Article <AppIcon name="arrow-right" className="size-4" />
      </Link>
    </div>
  </article>
);
