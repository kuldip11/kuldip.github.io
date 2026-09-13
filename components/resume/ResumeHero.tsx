import Image from 'next/image';

import { AppIcon } from '@/components/portfolio/AppIcon';
import { RESUME_PAGE_CONTENT } from '@/constants/pages/resume.constants';
import { siteConfig } from '@/constants/site';

export const ResumeHero = () => (
  <section className="grid min-w-0 gap-10 border-b border-border pb-12 lg:grid-cols-[1.2fr_.8fr] lg:items-end lg:pb-16">
    <div>
      <p className="text-[12px] font-bold tracking-[.16em] text-primary uppercase">{RESUME_PAGE_CONTENT.eyebrow}</p>
      <h1 className="mt-4 text-[clamp(2.2rem,4vw,3.8rem)] leading-[1] font-semibold tracking-[-.055em] text-foreground">
        {siteConfig.name}
      </h1>
      <h2 className="mt-4 max-w-[850px] text-[clamp(2.6rem,5.8vw,5.7rem)] leading-[.98] font-semibold tracking-[-.06em] text-foreground">
        {RESUME_PAGE_CONTENT.title}
      </h2>
      <p className="mt-6 max-w-[760px] text-[17px] leading-8 text-foreground-secondary sm:text-[19px]">
        {RESUME_PAGE_CONTENT.intro}
      </p>
      <div className="mt-7 flex flex-wrap gap-3">
        <a
          className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-primary px-5 text-[14px] font-semibold text-primary-foreground transition hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          href="/Kuldip_Kumar_Sah.pdf"
        >
          {RESUME_PAGE_CONTENT.actions.downloadLabel} <AppIcon name="arrow-right" className="size-4" />
        </a>
        <a
          className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-border-strong bg-surface px-5 text-[14px] font-semibold text-foreground transition hover:border-primary-muted hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          href={siteConfig.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          {RESUME_PAGE_CONTENT.actions.linkedinLabel} <AppIcon name="arrow-up-right" className="size-4" />
        </a>
      </div>
    </div>

    <aside className="rounded-feature border border-border bg-surface p-6 shadow-card sm:p-7">
      <div className="flex items-center gap-4">
        <div className="relative size-20 shrink-0 overflow-hidden rounded-2xl bg-surface-muted">
          <Image src="/kuldip.jpg" alt={siteConfig.name} fill sizes="80px" className="object-cover" priority />
        </div>
        <div>
          <h2 className="text-[21px] font-semibold tracking-[-.03em]">{siteConfig.name}</h2>
          <p className="mt-1 text-[14px] text-primary">{siteConfig.role}</p>
          <p className="mt-2 text-[13px] text-foreground-muted">{siteConfig.location}</p>
        </div>
      </div>
      <div className="mt-6 border-t border-border pt-5">
        <span className="inline-flex rounded-full bg-primary-soft px-3 py-1.5 text-[12px] font-semibold text-primary">
          {RESUME_PAGE_CONTENT.availabilityLabel}
        </span>
        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-[12px] text-foreground-secondary">
          {RESUME_PAGE_CONTENT.availability.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </aside>
  </section>
);
