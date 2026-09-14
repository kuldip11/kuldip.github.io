import { RESUME_HIGHLIGHTS, RESUME_PAGE_CONTENT } from '@/constants/pages/resume.constants';

export const ResumeHighlights = () => (
  <section className="border-b border-border pb-10">
    <p className="text-[12px] font-bold tracking-[.14em] text-primary uppercase">
      {RESUME_PAGE_CONTENT.sections.highlightsEyebrow}
    </p>
    <h2 className="mt-3 text-[30px] font-semibold tracking-[-.04em]">{RESUME_PAGE_CONTENT.sections.highlightsTitle}</h2>
    <ul className="mt-6 grid list-none gap-4 p-0">
      {RESUME_HIGHLIGHTS.map((highlight, index) => (
        <li className="grid grid-cols-[32px_1fr] gap-3 text-[14px] leading-7 text-foreground-secondary" key={highlight}>
          <span className="font-mono text-[11px] text-foreground-muted">0{index + 1}</span>
          {highlight}
        </li>
      ))}
    </ul>
  </section>
);
