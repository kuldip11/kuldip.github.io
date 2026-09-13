import { AppIcon } from '@/components/portfolio/AppIcon';
import { ProjectVisual } from '@/components/portfolio/InnerPageUi';
import { PROJECT_DETAIL_CONTENT } from '@/constants/pages/projects.constants';
import type { ProjectDefinition } from '@/types/project.types';

export const ProjectHero = ({ project }: { project: ProjectDefinition }) => {
  const { caseStudy } = project;

  return (
    <header className="mt-7 border-b border-border pb-12 sm:pb-16">
      <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-primary-soft px-3 py-1.5 text-[11px] font-bold tracking-[.08em] text-primary uppercase">
              {PROJECT_DETAIL_CONTENT.featuredLabel}
            </span>
            <span className="text-[12px] font-medium text-foreground-muted">{project.category}</span>
          </div>
          <p className="mt-6 text-[12px] font-bold tracking-[.14em] text-secondary uppercase">{caseStudy.eyebrow}</p>
          <h1
            aria-label={project.seoTitle}
            className="mt-3 max-w-[760px] text-[clamp(2.5rem,6.2vw,6rem)] leading-[.94] font-semibold tracking-[-.065em] text-foreground"
          >
            {project.name}
          </h1>
          <p className="mt-5 max-w-[690px] text-[17px] leading-[1.58] font-medium text-foreground-secondary sm:text-[19px]">
            {project.title}
          </p>
          <p className="mt-5 max-w-[690px] text-[14px] leading-[1.75] text-foreground-secondary sm:text-[16px]">
            {caseStudy.intro}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-primary px-4 text-[13px] font-semibold text-primary-foreground transition hover:bg-primary-hover"
              href={caseStudy.liveDemoHref}
              target={caseStudy.liveDemoExternal ? '_blank' : undefined}
              rel={caseStudy.liveDemoExternal ? 'noopener noreferrer' : undefined}
            >
              {PROJECT_DETAIL_CONTENT.liveDemoLabel} <AppIcon name="arrow-up-right" className="size-4" />
            </a>
            <a
              className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-border-strong bg-surface px-4 text-[13px] font-semibold text-foreground transition hover:bg-surface-muted"
              href={caseStudy.sourceHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              {PROJECT_DETAIL_CONTENT.sourceLabel} <AppIcon name="arrow-up-right" className="size-4" />
            </a>
          </div>
        </div>
        <div className="rounded-[28px] bg-primary-soft p-5 sm:p-8">
          <div className="overflow-hidden rounded-[22px] border border-primary-muted bg-foreground p-3 shadow-feature sm:p-5">
            <ProjectVisual variant={caseStudy.visualVariant} />
          </div>
        </div>
      </div>
    </header>
  );
};
