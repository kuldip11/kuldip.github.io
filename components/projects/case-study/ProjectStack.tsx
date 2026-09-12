import { AppIcon } from '@/components/portfolio/AppIcon';
import { PROJECT_DETAIL_CONTENT } from '@/constants/pages/projects.constants';
import { INNER_PAGE_PANEL_CLASS } from '@/constants/styles/component-styles.constants';
import type { ProjectStackGroup } from '@/types/project.types';

export const ProjectStack = ({ groups }: { groups: readonly ProjectStackGroup[] }) => (
  <section className={`${INNER_PAGE_PANEL_CLASS} mt-4 p-5 sm:p-6`}>
    <h2 className="flex items-center gap-2 text-[20px] font-bold">
      <AppIcon name="code" className="size-5 text-accent" />
      {PROJECT_DETAIL_CONTENT.stackTitle}
    </h2>
    <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
      {groups.map((group) => (
        <div className="rounded-[14px] border border-[#245b45] bg-[#081b16] p-4" key={group.label}>
          <span className="font-mono text-[9px] tracking-[.12em] text-accent uppercase">{group.label}</span>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {group.items.map((item) => (
              <span
                className="rounded-full border border-[#285a47] bg-[#0a211a] px-2.5 py-1 text-[10px] text-[#cbd7d1]"
                key={item}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);
