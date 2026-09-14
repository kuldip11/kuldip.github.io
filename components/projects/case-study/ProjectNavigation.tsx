import { ACCESSIBILITY_COPY } from '@/constants/ui/accessibility.constants';
import type { ProjectCaseStudyDefinition } from '@/types/project.types';

export const ProjectNavigation = ({ items }: { items: ProjectCaseStudyDefinition['navigation'] }) => (
  <nav
    className="sticky top-[72px] z-30 -mx-5 mt-0 flex gap-7 overflow-x-auto border-b border-border bg-page/95 px-5 py-4 text-[12px] font-semibold text-foreground-muted backdrop-blur-xl sm:-mx-8 sm:px-8 lg:-mx-10 lg:px-10"
    aria-label={ACCESSIBILITY_COPY.caseStudyNavigationLabel}
  >
    {items.map((item) => (
      <a
        className="inline-flex min-h-11 shrink-0 items-center px-1 transition hover:text-primary"
        href={item.href}
        key={item.label}
      >
        {item.label}
      </a>
    ))}
  </nav>
);
