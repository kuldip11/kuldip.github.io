import { GlyphIcon } from '@/components/portfolio/GlyphIcon';

export const CaseStudyIcon = ({ glyph }: { glyph: string }) => (
  <span className="grid size-10 shrink-0 place-items-center rounded-full border border-primary-muted bg-primary-soft text-primary">
    <GlyphIcon glyph={glyph} className="size-5" />
  </span>
);
