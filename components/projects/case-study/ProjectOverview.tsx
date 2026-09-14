import { AppIcon } from '@/components/portfolio/AppIcon';
import { PROJECT_DETAIL_CONTENT } from '@/constants/pages/projects.constants';
import type { ProjectDefinition } from '@/types/project.types';

export const ProjectOverview = ({ project }: { project: ProjectDefinition }) => (
  <section className="scroll-mt-32 py-16 sm:py-20" id="overview">
    <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
      <div>
        <p className="text-[12px] font-bold tracking-[.14em] text-primary uppercase">
          {PROJECT_DETAIL_CONTENT.overviewTitle}
        </p>
        <h2 className="mt-3 text-[clamp(2.2rem,4vw,3.8rem)] leading-[1.03] font-semibold tracking-[-.05em] text-foreground">
          {PROJECT_DETAIL_CONTENT.overviewHeading}
        </h2>
        <p className="mt-5 text-[15px] leading-[1.75] text-foreground-secondary">{project.summary}</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {project.caseStudy.overviewItems.map(({ title, description }) => (
          <article className="rounded-[18px] border border-border bg-surface p-5" key={title}>
            <div className="flex items-center gap-2 text-primary">
              <AppIcon name="apps" className="size-4" />
              <strong className="text-[14px] font-semibold text-foreground">{title}</strong>
            </div>
            <p className="mt-2 text-[13px] leading-[1.65] text-foreground-secondary">{description}</p>
          </article>
        ))}
      </div>
    </div>

    <div className="mt-10 grid gap-5 border-t border-border pt-8 sm:grid-cols-2 lg:grid-cols-5">
      {project.caseStudy.highlights.map(({ title, description }) => (
        <div key={title}>
          <h3 className="text-[14px] font-semibold text-foreground">{title}</h3>
          <p className="mt-2 text-[12px] leading-[1.6] text-foreground-muted">{description}</p>
        </div>
      ))}
    </div>
  </section>
);
