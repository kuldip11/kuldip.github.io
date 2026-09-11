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
  <section className={`${INNER_PAGE_PANEL_CLASS} mt-4 p-5 sm:p-6`} id="details">
    <h2 className="sr-only">{heading}</h2>
    <h3 className="text-[20px] font-bold">{PROJECT_DETAIL_CONTENT.applicationsTitle}</h3>
    <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {applications.map((application) => (
        <a
          className="rounded-[12px] border border-[#245b45] bg-[#081b16] p-4"
          href={application.href}
          target="_blank"
          rel="noreferrer"
          key={application.label}
        >
          <span className="text-[20px] text-[#59ecb0]">▣</span>
          <strong className="mt-3 block text-[12px]">{application.label}</strong>
          <span className="mt-1 block text-[10px] text-[#9fb2a9]">{application.description}</span>
          <span className="mt-3 block text-[12px] font-semibold text-[#59ecb0]">
            {PROJECT_DETAIL_CONTENT.applicationOpenLabel}
          </span>
        </a>
      ))}
    </div>
  </section>
);
