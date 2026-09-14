import Link from 'next/link';

import { AppIcon } from '@/components/portfolio/AppIcon';
import { PageContainer, Section } from '@/components/ui';
import { projects } from '@/constants/data/projects';
import { HOME_PAGE_CONTENT } from '@/constants/pages/home.constants';
import { ROUTES } from '@/constants/routes';

import { ProjectMock } from './ProjectMock';

const [servora, secondaryProject] = projects;
const featured = HOME_PAGE_CONTENT.featured;

export const FeaturedWork = () => (
  <Section className="relative py-20 sm:py-24" id="work">
    <PageContainer>
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[12px] font-bold tracking-[.16em] text-primary uppercase">{featured.eyebrow}</p>
          <h2 className="mt-3 max-w-[760px] text-[clamp(2.25rem,4.6vw,4.2rem)] leading-[1.03] font-semibold tracking-[-.055em] text-foreground">
            {featured.title}
          </h2>
        </div>
        <Link
          className="inline-flex min-h-11 w-max items-center gap-2 text-[13px] font-semibold text-primary hover:text-primary-hover"
          href={ROUTES.projects}
        >
          {featured.viewAllLabel} <AppIcon name="arrow-right" className="size-4" />
        </Link>
      </div>

      <article className="mt-10 overflow-hidden rounded-[30px] border border-border bg-surface shadow-feature">
        <div className="grid wide:grid-cols-[.86fr_1.14fr] desktop:grid-cols-[.82fr_1.18fr]">
          <div className="flex flex-col p-6 sm:p-9 desktop:p-11">
            <span className="w-max rounded-full bg-primary-soft px-3 py-1.5 text-[11px] font-bold tracking-[.08em] text-primary uppercase">
              {servora.category}
            </span>
            <h3 className="mt-5 text-[clamp(2rem,4vw,3.5rem)] leading-none font-semibold tracking-[-.05em] text-foreground">
              {servora.name}
            </h3>
            <p className="mt-5 text-[15px] leading-[1.7] text-foreground-secondary sm:text-[16px]">
              {servora.description}
            </p>
            <ul className="mt-7 grid list-none gap-3 p-0 sm:grid-cols-3 desktop:grid-cols-1">
              {servora.stats.map((stat) => (
                <li className="flex items-center gap-2 text-[13px] font-semibold text-foreground-secondary" key={stat}>
                  <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
                  {stat}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3 desktop:mt-auto desktop:pt-9">
              <Link
                className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-foreground px-4 text-[13px] font-semibold text-primary-foreground transition hover:bg-primary"
                href={ROUTES.project(servora.slug)}
              >
                {featured.projectActionLabel} <AppIcon name="arrow-right" className="size-4" />
              </Link>
              <a
                className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-border-strong px-4 text-[13px] font-semibold text-foreground transition hover:bg-surface-muted"
                href={servora.caseStudy.liveDemoHref}
                target="_blank"
                rel="noreferrer"
              >
                {featured.liveActionLabel} <AppIcon name="arrow-up-right" className="size-4" />
              </a>
            </div>
          </div>
          <div className="min-h-[320px] bg-primary-soft/55 p-5 sm:min-h-[420px] sm:p-8 desktop:min-h-[500px] desktop:p-10">
            <div className="h-full min-h-[280px] overflow-hidden rounded-[22px] border border-primary-muted bg-foreground p-3 shadow-feature sm:min-h-[360px] sm:p-5 desktop:min-h-[420px]">
              <ProjectMock variant={servora.mockVariant} />
            </div>
          </div>
        </div>
      </article>

      {secondaryProject ? (
        <div className="mt-6 grid gap-6 wide:grid-cols-[1.05fr_.95fr]">
          <Link
            href={ROUTES.project(secondaryProject.slug)}
            className="group grid overflow-hidden rounded-[24px] border border-border bg-surface transition hover:-translate-y-0.5 hover:border-border-strong hover:shadow-card sm:grid-cols-[.9fr_1.1fr]"
          >
            <div className="min-h-[220px] bg-secondary-soft p-5">
              <div className="h-full min-h-[180px] overflow-hidden rounded-[16px] bg-foreground p-3">
                <ProjectMock variant={secondaryProject.mockVariant} />
              </div>
            </div>
            <div className="flex flex-col p-6">
              <span className="text-[11px] font-bold tracking-[.1em] text-secondary uppercase">
                {secondaryProject.category}
              </span>
              <h3 className="mt-3 text-[26px] font-semibold tracking-[-.04em] text-foreground">
                {secondaryProject.name}
              </h3>
              <p className="mt-3 text-[13px] leading-[1.65] text-foreground-secondary">
                {secondaryProject.description}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-[13px] font-semibold text-primary sm:mt-auto sm:pt-6">
                {featured.projectActionLabel}{' '}
                <AppIcon name="arrow-right" className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>

          <div className="grid gap-6 sm:grid-cols-2 wide:grid-cols-1">
            <article className="rounded-[24px] border border-border bg-surface p-6" id="experience">
              <p className="text-[11px] font-bold tracking-[.12em] text-primary uppercase">
                {HOME_PAGE_CONTENT.experience.eyebrow}
              </p>
              <h3 className="mt-3 text-[23px] leading-[1.12] font-semibold tracking-[-.04em] text-foreground">
                {HOME_PAGE_CONTENT.experience.title}
              </h3>
              <p className="mt-4 text-[13px] leading-[1.65] text-foreground-secondary">
                {HOME_PAGE_CONTENT.experience.description}
              </p>
              <Link
                className="mt-5 inline-flex min-h-11 items-center gap-2 text-[13px] font-semibold text-primary"
                href={HOME_PAGE_CONTENT.experience.actionHref}
              >
                {HOME_PAGE_CONTENT.experience.actionLabel} <AppIcon name="arrow-right" className="size-4" />
              </Link>
            </article>
            <article className="rounded-[24px] border border-border bg-surface-muted p-6">
              <p className="text-[11px] font-bold tracking-[.12em] text-secondary uppercase">
                {HOME_PAGE_CONTENT.approach.eyebrow}
              </p>
              <h3 className="mt-3 text-[23px] leading-[1.12] font-semibold tracking-[-.04em] text-foreground">
                {HOME_PAGE_CONTENT.approach.title}
              </h3>
              <p className="mt-4 text-[13px] leading-[1.65] text-foreground-secondary">
                {HOME_PAGE_CONTENT.approach.description}
              </p>
              <Link
                className="mt-5 inline-flex min-h-11 items-center gap-2 text-[13px] font-semibold text-primary"
                href={HOME_PAGE_CONTENT.approach.actionHref}
              >
                {HOME_PAGE_CONTENT.approach.actionLabel} <AppIcon name="arrow-right" className="size-4" />
              </Link>
            </article>
          </div>
        </div>
      ) : null}
    </PageContainer>
  </Section>
);
