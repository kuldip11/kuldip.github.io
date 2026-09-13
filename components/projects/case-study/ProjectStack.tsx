import { PROJECT_DETAIL_CONTENT } from '@/constants/pages/projects.constants';
import type { ProjectStackGroup } from '@/types/project.types';

export const ProjectStack = ({ groups }: { groups: readonly ProjectStackGroup[] }) => (
  <section className="py-16 sm:py-20">
    <p className="text-[12px] font-bold tracking-[.14em] text-secondary uppercase">
      {PROJECT_DETAIL_CONTENT.stackTitle}
    </p>
    <h2 className="mt-3 text-[clamp(2rem,3.5vw,3.3rem)] font-semibold tracking-[-.05em] text-foreground">
      {PROJECT_DETAIL_CONTENT.stackHeading}
    </h2>
    <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {groups.map((group) => (
        <article className="rounded-[18px] border border-border bg-surface p-5" key={group.label}>
          <h3 className="text-[11px] font-bold tracking-[.12em] text-primary uppercase">{group.label}</h3>
          <ul className="mt-4 flex list-none flex-wrap gap-2 p-0">
            {group.items.map((item) => (
              <li
                className="rounded-full bg-surface-muted px-3 py-1.5 text-[11px] font-medium text-foreground-secondary"
                key={item}
              >
                {item}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  </section>
);
