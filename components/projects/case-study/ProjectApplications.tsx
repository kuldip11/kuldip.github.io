import { AppIcon } from '@/components/portfolio/AppIcon';
import { PROJECT_DETAIL_CONTENT } from '@/constants/pages/projects.constants';
import { INNER_PAGE_PANEL_CLASS } from '@/constants/styles/component-styles.constants';
import type { ProjectLink } from '@/types/project.types';

export const ProjectApplications = ({
  heading,
  applications,
}: {
  heading: string;
  applications: readonly ProjectLink[];
}) => (
  <section className={`${INNER_PAGE_PANEL_CLASS} mt-4 p-5 sm:p-6`} id="live">
    <p className="font-mono text-[9px] tracking-[.15em] text-accent uppercase">
      {PROJECT_DETAIL_CONTENT.applicationsTitle}
    </p>
    <h2 className="mt-2 text-[22px] font-bold tracking-[-.03em]">{heading}</h2>
    <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {applications.map((application) => (
        <a
          className="group rounded-[12px] border border-[#245b45] bg-[#081b16] p-4 transition hover:-translate-y-0.5 hover:border-[#4a9a76]"
          href={application.href}
          target="_blank"
          rel="noopener noreferrer"
          key={application.label}
        >
          <span className="text-accent">
            <AppIcon name="apps" className="size-5" />
          </span>
          <strong className="mt-3 block text-[12px]">{application.label}</strong>
          <span className="mt-1 block text-[10px] leading-[1.5] text-[#9fb2a9]">{application.description}</span>
          <span className="mt-3 inline-flex items-center gap-1 text-[12px] font-semibold text-accent">
            {PROJECT_DETAIL_CONTENT.applicationOpenLabel} <AppIcon name="arrow-up-right" className="size-3.5" />
          </span>
        </a>
      ))}
    </div>
  </section>
);
