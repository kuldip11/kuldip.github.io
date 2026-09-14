import { AppIcon } from '@/components/portfolio/AppIcon';
import { PROJECT_DETAIL_CONTENT } from '@/constants/pages/projects.constants';
import type { ProjectLink } from '@/types/project.types';

export const ProjectApplications = ({
  heading,
  applications,
}: {
  heading: string;
  applications: readonly ProjectLink[];
}) => (
  <section className="scroll-mt-32 py-16 sm:py-20" id="live">
    <p className="text-[12px] font-bold tracking-[.14em] text-secondary uppercase">
      {PROJECT_DETAIL_CONTENT.applicationsTitle}
    </p>
    <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <h2 className="max-w-[760px] text-[clamp(2rem,3.5vw,3.3rem)] font-semibold tracking-[-.05em] text-foreground">
        {heading}
      </h2>
      <p className="max-w-[420px] text-[13px] leading-[1.65] text-foreground-muted">
        {PROJECT_DETAIL_CONTENT.applicationsDescription}
      </p>
    </div>
    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {applications.map((application) => (
        <a
          className="group rounded-[18px] border border-border bg-surface p-5 transition hover:-translate-y-0.5 hover:border-border-strong hover:shadow-card"
          href={application.href}
          target="_blank"
          rel="noopener noreferrer"
          key={application.label}
        >
          <span className="grid size-10 place-items-center rounded-xl bg-primary-soft text-primary">
            <AppIcon name="apps" className="size-5" />
          </span>
          <strong className="mt-4 block text-[14px] font-semibold text-foreground">{application.label}</strong>
          <span className="mt-1.5 block text-[11px] leading-[1.6] text-foreground-muted">
            {application.description}
          </span>
          <span className="mt-4 inline-flex items-center gap-1.5 text-[12px] font-semibold text-primary">
            {PROJECT_DETAIL_CONTENT.applicationOpenLabel}{' '}
            <AppIcon
              name="arrow-up-right"
              className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </span>
        </a>
      ))}
    </div>
  </section>
);
