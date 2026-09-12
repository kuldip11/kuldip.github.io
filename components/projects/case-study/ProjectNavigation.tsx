import { INNER_PAGE_PANEL_CLASS } from '@/constants/styles/component-styles.constants';
import type { ProjectCaseStudyDefinition } from '@/types/project.types';

export const ProjectNavigation = ({ items }: { items: ProjectCaseStudyDefinition['navigation'] }) => (
  <nav
    className={`${INNER_PAGE_PANEL_CLASS} sticky top-[74px] z-30 mt-5 flex gap-7 overflow-x-auto px-5 py-4 text-[11px] text-[#c9d6d0] backdrop-blur-xl`}
    aria-label="Case study sections"
  >
    {items.map((item, index) => (
      <a
        className={index === 0 ? 'border-b border-accent pb-2 text-accent' : 'pb-2 hover:text-accent'}
        href={item.href}
        key={item.label}
      >
        {item.label}
      </a>
    ))}
  </nav>
);
