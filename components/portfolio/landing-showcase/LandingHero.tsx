import Image from 'next/image';

import { AppIcon } from '@/components/portfolio/AppIcon';
import { ExpertiseIcon } from '@/components/portfolio/ExpertiseIcon';
import { ActionLink, PageContainer, Section, TextLink } from '@/components/ui';
import { HOME_EXPERTISE, HOME_PAGE_CONTENT } from '@/constants/pages/home.constants';

const hero = HOME_PAGE_CONTENT.hero;

export const LandingHero = () => (
  <Section className="relative pt-12 pb-16 sm:pt-16 sm:pb-20 desktop:pt-20 desktop:pb-24" id="top">
    <PageContainer>
      <div className="grid gap-10 wide:grid-cols-[minmax(0,1.08fr)_minmax(320px,.92fr)] wide:grid-rows-[auto_auto] wide:gap-x-10 wide:gap-y-8 desktop:grid-cols-[minmax(0,1.12fr)_minmax(420px,.88fr)] desktop:gap-x-16">
        <div className="relative z-10 max-w-[760px] wide:col-start-1 wide:row-start-1">
          <p className="mb-5 inline-flex items-center gap-2 text-[12px] font-bold tracking-[.16em] text-primary uppercase">
            <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
            {hero.eyebrow}
          </p>
          <h1 className="max-w-[780px] text-[clamp(2.5rem,7vw,5.25rem)] leading-[.98] font-semibold tracking-[-.06em] text-foreground">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-[680px] text-[16px] leading-[1.7] text-foreground-secondary sm:text-[18px]">
            {hero.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <ActionLink className="min-h-12 px-5" href={hero.primaryAction.href}>
              {hero.primaryAction.label}
            </ActionLink>
            <a
              className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-border-strong bg-surface px-5 text-[14px] font-semibold text-foreground transition hover:border-primary-muted hover:bg-primary-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              href={hero.secondaryAction.href}
              download
            >
              {hero.secondaryAction.label}
              <AppIcon name="arrow-down" className="size-4" />
            </a>
            <TextLink className="min-h-12 px-2" href={hero.tertiaryAction.href} external>
              {hero.tertiaryAction.label}
            </TextLink>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[520px] wide:col-start-2 wide:row-span-2 wide:row-start-1 wide:self-center">
          <div className="absolute -inset-5 -z-10 rounded-[40px] bg-primary-soft/70" aria-hidden="true" />
          <figure className="relative m-0 aspect-[4/4.7] overflow-hidden rounded-feature bg-surface-muted shadow-feature">
            <Image
              src="/kuldip-hero-composite-v4.png"
              alt={hero.portraitAlt}
              fill
              priority
              sizes="(max-width: 899px) 92vw, (max-width: 1099px) 40vw, 42vw"
              className="object-cover object-[54%_top]"
            />
            <figcaption className="absolute right-5 bottom-5 rounded-xl border border-border bg-surface/90 px-4 py-3 text-[12px] font-semibold text-foreground shadow-card backdrop-blur-md">
              <span className="mr-2 inline-block size-2 rounded-full bg-primary" aria-hidden="true" />
              {hero.locationLabel}
            </figcaption>
          </figure>
        </div>

        <ul
          className="grid max-w-[680px] list-none gap-5 border-t border-border pt-6 sm:grid-cols-3 wide:col-start-1 wide:row-start-2"
          aria-label={HOME_PAGE_CONTENT.expertiseLabel}
        >
          {HOME_EXPERTISE.map(({ label, icon }) => (
            <li className="flex items-center gap-3" key={label}>
              <span
                className="grid size-9 shrink-0 place-items-center rounded-lg bg-primary-soft text-primary"
                aria-hidden="true"
              >
                <ExpertiseIcon icon={icon} />
              </span>
              <span className="text-[13px] leading-[1.35] font-semibold text-foreground-secondary">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </PageContainer>
  </Section>
);
