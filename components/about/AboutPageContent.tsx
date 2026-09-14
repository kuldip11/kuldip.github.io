import Image from 'next/image';

import { ActionLink, PageContainer, Section, SectionHeading } from '@/components/ui';
import { ABOUT_PAGE_CONTENT } from '@/constants/pages/about.constants';
import { ROUTES } from '@/constants/routes';
import { siteConfig } from '@/constants/site';

export const AboutPageContent = () => (
  <main id="main-content" tabIndex={-1} className="min-h-screen bg-page text-foreground">
    <Section className="pt-16 sm:pt-24 lg:pt-28">
      <PageContainer>
        <div className="grid gap-12 lg:grid-cols-[.86fr_1.14fr] lg:items-start lg:gap-16">
          <div className="lg:sticky lg:top-28">
            <div className="relative aspect-[4/5] overflow-hidden rounded-feature bg-surface-muted shadow-card">
              <Image
                src="/kuldip.png"
                alt={`${siteConfig.name}, ${siteConfig.role}`}
                fill
                sizes="(max-width:1024px) 92vw, 470px"
                className="object-cover object-[center_25%]"
                priority
              />
            </div>
            <div className="mt-5 flex items-center justify-between gap-4 border-b border-border pb-5 text-[13px] text-foreground-muted">
              <span>
                {ABOUT_PAGE_CONTENT.locationPrefix} {siteConfig.location}
              </span>
              <span>{siteConfig.role}</span>
            </div>
          </div>

          <div>
            <p className="text-[12px] font-bold tracking-[.16em] text-primary uppercase">
              {ABOUT_PAGE_CONTENT.eyebrow}
            </p>
            <h1 className="mt-5 max-w-[820px] text-[clamp(2.5rem,6.2vw,6.4rem)] leading-[.96] font-semibold tracking-[-.065em] text-foreground">
              {ABOUT_PAGE_CONTENT.title}
            </h1>
            <p className="mt-8 max-w-[760px] text-[19px] leading-[1.7] text-foreground-secondary sm:text-[21px]">
              {ABOUT_PAGE_CONTENT.intro}
            </p>

            <div className="mt-9 max-w-[760px] space-y-5 text-[16px] leading-8 text-foreground-secondary">
              {ABOUT_PAGE_CONTENT.story.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <ActionLink className="mt-8" href={ROUTES.resume} variant="secondary">
              {ABOUT_PAGE_CONTENT.resumeLabel}
            </ActionLink>
          </div>
        </div>
      </PageContainer>
    </Section>

    <Section className="border-y border-border bg-surface-muted">
      <PageContainer>
        <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
          <SectionHeading
            eyebrow={ABOUT_PAGE_CONTENT.sections.principlesEyebrow}
            title={ABOUT_PAGE_CONTENT.sections.principlesTitle}
          />
          <div className="grid gap-8 sm:grid-cols-3">
            {ABOUT_PAGE_CONTENT.principles.map((principle, index) => (
              <article className="border-t border-border-strong pt-5" key={principle.title}>
                <span className="font-mono text-[11px] text-foreground-muted">0{index + 1}</span>
                <h3 className="mt-4 text-[20px] font-semibold tracking-[-.025em]">{principle.title}</h3>
                <p className="mt-3 text-[14px] leading-7 text-foreground-secondary">{principle.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </PageContainer>
    </Section>

    <Section>
      <PageContainer className="grid gap-14 lg:grid-cols-[1fr_.8fr]">
        <div>
          <p className="text-[12px] font-bold tracking-[.16em] text-primary uppercase">
            {ABOUT_PAGE_CONTENT.sections.journeyLabel}
          </p>
          <div className="mt-7 divide-y divide-border border-y border-border">
            {ABOUT_PAGE_CONTENT.journey.map((item) => (
              <article className="grid gap-3 py-7 sm:grid-cols-[150px_1fr]" key={item.title}>
                <span className="text-[12px] font-semibold text-foreground-muted">{item.label}</span>
                <div>
                  <h3 className="text-[20px] font-semibold tracking-[-.025em]">{item.title}</h3>
                  <p className="mt-2 max-w-[680px] text-[14px] leading-7 text-foreground-secondary">{item.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <aside className="rounded-card border border-border bg-surface p-6 shadow-card sm:p-8">
          <p className="text-[12px] font-bold tracking-[.14em] text-foreground-muted uppercase">
            {ABOUT_PAGE_CONTENT.sections.focusLabel}
          </p>
          <ul className="mt-5 grid list-none gap-4 p-0">
            {ABOUT_PAGE_CONTENT.focus.map((item) => (
              <li className="flex gap-3 text-[15px] leading-6 text-foreground-secondary" key={item}>
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                {item}
              </li>
            ))}
          </ul>
        </aside>
      </PageContainer>
    </Section>
  </main>
);
