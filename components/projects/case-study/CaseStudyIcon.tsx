import { GlyphIcon } from '@/components/portfolio/GlyphIcon';

export const CaseStudyIcon = ({ glyph }: { glyph: string }) => (
  <span className="grid size-10 shrink-0 place-items-center rounded-full border border-[#2c8060] text-accent">
    <GlyphIcon glyph={glyph} className="size-5" />
  </span>
);
