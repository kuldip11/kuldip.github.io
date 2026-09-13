import { AppIcon } from '@/components/portfolio/AppIcon';
import { RESUME_PAGE_CONTENT } from '@/constants/pages/resume.constants';
import { siteConfig } from '@/constants/site';

export const ResumeBeyondWork = () => (
  <section className="rounded-feature bg-surface-muted p-7 sm:flex sm:items-end sm:justify-between sm:gap-8 sm:p-9">
    <div>
      <p className="text-[12px] font-bold tracking-[.14em] text-primary uppercase">
        {RESUME_PAGE_CONTENT.sections.beyondEyebrow}
      </p>
      <h2 className="mt-3 text-[27px] font-semibold tracking-[-.04em]">{RESUME_PAGE_CONTENT.sections.beyondTitle}</h2>
      <p className="mt-3 max-w-[720px] text-[14px] leading-7 text-foreground-secondary">
        {RESUME_PAGE_CONTENT.beyondWork}
      </p>
    </div>
    <a
      className="mt-6 inline-flex min-h-11 shrink-0 items-center gap-2 rounded-xl border border-border-strong bg-surface px-4 text-[13px] font-semibold text-foreground transition hover:text-primary sm:mt-0"
      href={siteConfig.contactHref}
    >
      {RESUME_PAGE_CONTENT.actions.contactLabel} <AppIcon name="arrow-right" className="size-4" />
    </a>
  </section>
);
