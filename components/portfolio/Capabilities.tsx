import { HOME_CAPABILITY_CARDS } from '@/constants/pages/home.constants';

import { GlyphIcon } from './GlyphIcon';

export const Capabilities = () => {
  return (
    <section
      className="mx-auto max-w-[1344px] px-0 pb-8 max-[1380px]:mx-12 max-[650px]:mx-5"
      aria-labelledby="capabilities-title"
    >
      <div className="rounded-[24px] border border-[#285444] bg-[#0a1714] p-5 shadow-[0_28px_80px_rgba(0,0,0,.18)] max-[650px]:p-4">
        <div className="mb-5 flex items-end justify-between gap-4 max-[650px]:items-start">
          <h2 id="capabilities-title" className="m-0 text-[clamp(1.8rem,2.6vw,2.7rem)] font-semibold tracking-[-.04em]">
            What I can do
          </h2>
          <span className="font-mono text-[12px] tracking-[.16em] text-[#82a79a] uppercase max-[650px]:hidden">
            Turn ideas into impact
          </span>
        </div>
        <div className="grid grid-cols-4 gap-3 max-[950px]:grid-cols-2 max-[650px]:grid-cols-1">
          {HOME_CAPABILITY_CARDS.map(([icon, title, copy]) => (
            <article className="min-h-[190px] rounded-[18px] border border-[#25483c] bg-[#0d1d18] p-5" key={title}>
              <span className="flex size-7 items-center justify-center text-[#71f6b5]" aria-hidden="true">
                <GlyphIcon glyph={icon} className="size-6" />
              </span>
              <h3 className="mt-5 mb-2 text-[18px] leading-[1.25] font-semibold tracking-[-.025em]">{title}</h3>
              <p className="m-0 text-[15px] leading-6 text-[#a9bbb2]">{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
