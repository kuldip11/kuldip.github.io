import Link from 'next/link';

import { AppIcon } from '@/components/portfolio/AppIcon';
import { projects } from '@/constants/data/projects';
import { PROJECT_DETAIL_CONTENT } from '@/constants/pages/projects.constants';
import { ROUTES } from '@/constants/routes';
import type { ProjectDefinition } from '@/types/project.types';

export const ProjectClosing = ({ project }: { project: ProjectDefinition }) => {
  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <section className="border-t border-border py-16 sm:py-20">
      <div className="grid gap-9 lg:grid-cols-[1fr_.8fr] lg:items-end">
        <div>
          <p className="text-[12px] font-bold tracking-[.14em] text-primary uppercase">
            {PROJECT_DETAIL_CONTENT.closingEyebrow}
          </p>
          <h2 className="mt-3 max-w-[800px] text-[clamp(2.2rem,4vw,4rem)] leading-[1.03] font-semibold tracking-[-.05em] text-foreground">
            {PROJECT_DETAIL_CONTENT.closingTitle}
          </h2>
          <p className="mt-5 max-w-[760px] text-[15px] leading-[1.75] text-foreground-secondary">{project.summary}</p>
        </div>

        {nextProject ? (
          <Link
            className="group rounded-[22px] border border-border bg-surface-muted p-6 transition hover:border-border-strong hover:bg-surface"
            href={ROUTES.project(nextProject.slug)}
          >
            <span className="text-[11px] font-bold tracking-[.12em] text-foreground-muted uppercase">
              {PROJECT_DETAIL_CONTENT.nextProjectLabel}
            </span>
            <span className="mt-3 flex items-end justify-between gap-5">
              <span>
                <strong className="block text-[25px] font-semibold tracking-[-.04em] text-foreground">
                  {nextProject.name}
                </strong>
                <span className="mt-1 block text-[12px] text-foreground-muted">{nextProject.category}</span>
              </span>
              <AppIcon
                name="arrow-right"
                className="size-5 text-primary transition-transform group-hover:translate-x-1"
              />
            </span>
          </Link>
        ) : null}
      </div>
    </section>
  );
};
