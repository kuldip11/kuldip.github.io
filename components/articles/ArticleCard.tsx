import Link from 'next/link';

import { ROUTES } from '@/constants/routes';
import { INNER_PAGE_PANEL_CLASS } from '@/constants/styles/component-styles.constants';
import type { ArticleCardDefinition } from '@/types/article.types';

export const ArticleCard = ({ article, index }: { article: ArticleCardDefinition; index: number }) => (
  <article className={`${INNER_PAGE_PANEL_CLASS} overflow-hidden`}>
    <div className="relative grid min-h-[150px] place-items-center border-b border-[#176746] bg-[#081914]">
      <span className="text-[54px] font-bold text-[#42dfab]">{article.glyph}</span>
      <span className="absolute top-4 right-4 rounded-full border border-[#27775a] px-3 py-1 text-[10px] text-[#59ecb0]">
        {article.kind}
      </span>
    </div>
    <div className="p-5">
      <div className="font-mono text-[10px] text-[#8ca198]">
        ▣ {article.publishedAt} &nbsp; ◷ {index % 2 ? 10 : 8} min read
      </div>
      <h2 className="mt-3 text-[20px] leading-[1.15] font-bold">{article.title}</h2>
      <p className="mt-3 text-[13px] leading-[1.55] text-[#aebdb6]">{article.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="rounded-full border border-[#27775a] px-2.5 py-1 text-[10px]">{article.kind}</span>
        <span className="rounded-full border border-[#27775a] px-2.5 py-1 text-[10px]">Frontend</span>
      </div>
      <Link className="mt-5 inline-flex text-[13px] font-semibold text-[#59ecb0]" href={ROUTES.article(article.slug)}>
        Read Article →
      </Link>
    </div>
  </article>
);
