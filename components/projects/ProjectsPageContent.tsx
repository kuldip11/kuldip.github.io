import { ProjectVisual } from '@/components/portfolio/InnerPageUi';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { ActionLink, Badge, PageContainer, Section, SectionHeading, SurfaceCard } from '@/components/ui';
import { FEATURE_FLAGS } from '@/constants/config/feature-flags.constants';
import { projects } from '@/constants/data/projects';
import { PROJECTS_PAGE_CONTENT } from '@/constants/pages/projects.constants';
import { ROUTES } from '@/constants/routes';

const [featuredProject, ...otherProjects] = projects;

export const ProjectsPageContent = () => (
  <main id="main-content" tabIndex={-1} className="min-h-screen bg-page text-foreground">
    <Section className="pt-16 pb-12 sm:pt-20 sm:pb-16 lg:pt-24">
      <PageContainer>
        <p className="text-[12px] font-bold tracking-[.16em] text-primary uppercase">{PROJECTS_PAGE_CONTENT.eyebrow}</p>
        <div className="mt-3 grid gap-7 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
          <div>
            <h1 className="max-w-[800px] text-[clamp(2.5rem,7vw,6.6rem)] leading-[.94] font-semibold tracking-[-.065em] text-foreground">
              {PROJECTS_PAGE_CONTENT.title}
            </h1>
            <h2 className="mt-5 text-[clamp(1.45rem,2.6vw,2.3rem)] font-medium tracking-[-.035em] text-foreground-secondary">
              {PROJECTS_PAGE_CONTENT.subtitle}
            </h2>
          </div>
          <p className="max-w-[620px] text-[15px] leading-[1.75] text-foreground-secondary sm:text-[16px] lg:justify-self-end">
            {PROJECTS_PAGE_CONTENT.description}
          </p>
        </div>
      </PageContainer>
    </Section>

    {featuredProject ? (
      <PageContainer className="pb-16 sm:pb-20">
        <article className="overflow-hidden rounded-[30px] border border-border bg-surface shadow-card">
          <div className="grid lg:grid-cols-[.82fr_1.18fr]">
            <div className="flex flex-col p-6 sm:p-9 lg:p-11">
              <div className="flex flex-wrap items-center gap-3">
                <Badge>{PROJECTS_PAGE_CONTENT.featuredLabel}</Badge>
                <span className="text-[12px] font-medium text-foreground-muted">{featuredProject.category}</span>
              </div>
              <h2 className="mt-6 text-[clamp(2.5rem,5vw,4.8rem)] leading-[.96] font-semibold tracking-[-.06em] text-foreground">
                {featuredProject.name}
              </h2>
              <p className="mt-5 max-w-[620px] text-[15px] leading-[1.72] text-foreground-secondary sm:text-[16px]">
                {featuredProject.description}
              </p>
              <ul className="mt-7 grid list-none gap-3 p-0 sm:grid-cols-3 lg:grid-cols-1">
                {featuredProject.stats.map((stat) => (
                  <li
                    className="flex items-center gap-2 text-[13px] font-semibold text-foreground-secondary"
                    key={stat}
                  >
                    <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
                    {stat}
                  </li>
                ))}
              </ul>
              <ActionLink className="mt-8 lg:mt-auto lg:self-start" href={ROUTES.project(featuredProject.slug)}>
                {PROJECTS_PAGE_CONTENT.readCaseStudyLabel}
              </ActionLink>
            </div>
            <div className="min-h-[340px] bg-primary-soft p-5 sm:min-h-[430px] sm:p-8 lg:min-h-[520px] lg:p-10">
              <div className="h-full min-h-[300px] overflow-hidden rounded-[24px] border border-primary-muted bg-foreground p-3 shadow-feature sm:min-h-[360px] sm:p-5 lg:min-h-[440px]">
                <ProjectVisual variant={featuredProject.caseStudy.visualVariant} />
              </div>
            </div>
          </div>
        </article>
      </PageContainer>
    ) : null}

    <Section className="border-y border-border bg-surface-muted">
      <PageContainer>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow={PROJECTS_PAGE_CONTENT.moreWork.eyebrow}
            title={PROJECTS_PAGE_CONTENT.moreWork.title}
            description={PROJECTS_PAGE_CONTENT.moreWork.description}
          />
        </div>

        <div className="mt-9 grid gap-6 md:grid-cols-2">
          {otherProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
          <SurfaceCard className="flex min-h-[320px] flex-col justify-end border-dashed bg-surface/60 p-6 sm:p-8">
            <span className="text-[11px] font-bold tracking-[.14em] text-foreground-muted uppercase">
              {PROJECTS_PAGE_CONTENT.comingSoon.eyebrow}
            </span>
            <h3 className="mt-3 max-w-[420px] text-[26px] font-semibold tracking-[-.04em] text-foreground">
              {PROJECTS_PAGE_CONTENT.comingSoon.title}
            </h3>
            <p className="mt-3 max-w-[480px] text-[14px] leading-[1.7] text-foreground-secondary">
              {PROJECTS_PAGE_CONTENT.comingSoon.description}
            </p>
          </SurfaceCard>
        </div>
      </PageContainer>
    </Section>

    {FEATURE_FLAGS.articles ? (
      <Section className="py-16 sm:py-16 lg:py-16">
        <PageContainer className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-[24px] font-semibold tracking-[-.035em] text-foreground">
              {PROJECTS_PAGE_CONTENT.footerCta.title}
            </h2>
            <p className="mt-2 max-w-[680px] text-[14px] leading-[1.7] text-foreground-secondary">
              {PROJECTS_PAGE_CONTENT.footerCta.copy}
            </p>
          </div>
          <ActionLink href={ROUTES.articles} variant="text">
            {PROJECTS_PAGE_CONTENT.footerCta.linkLabel}
          </ActionLink>
        </PageContainer>
      </Section>
    ) : null}
  </main>
);
