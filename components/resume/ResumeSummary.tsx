import { RESUME_PAGE_CONTENT, RESUME_TRAITS } from '@/constants/pages/resume.constants';

export const ResumeSummary = () => (
  <section className="scroll-mt-32 border-b border-border pb-10" id="overview">
    <p className="text-[12px] font-bold tracking-[.14em] text-primary uppercase">
      {RESUME_PAGE_CONTENT.sections.summaryEyebrow}
    </p>
    <h2 className="mt-3 text-[30px] font-semibold tracking-[-.04em]">{RESUME_PAGE_CONTENT.sections.summaryTitle}</h2>
    <p className="mt-5 max-w-[760px] text-[16px] leading-8 text-foreground-secondary">{RESUME_PAGE_CONTENT.summary}</p>
    <div className="mt-6 flex flex-wrap gap-2">
      {RESUME_TRAITS.map((trait) => (
        <span
          className="rounded-full border border-border bg-surface px-3 py-1.5 text-[12px] text-foreground-secondary"
          key={trait}
        >
          {trait}
        </span>
      ))}
    </div>
  </section>
);
