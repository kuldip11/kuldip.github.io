import { RESUME_NAVIGATION } from '@/constants/pages/resume.constants';
import { ACCESSIBILITY_COPY } from '@/constants/ui/accessibility.constants';

export const ResumeNavigation = () => (
  <nav
    className="sticky top-16 z-20 -mx-5 min-w-0 border-b border-border bg-page/95 px-5 py-3 backdrop-blur sm:-mx-8 sm:px-8 lg:-mx-10 lg:px-10"
    aria-label={ACCESSIBILITY_COPY.resumeNavigationLabel}
  >
    <div className="mx-auto flex max-w-[1280px] gap-5 overflow-x-auto text-[12px] font-semibold text-foreground-muted">
      {RESUME_NAVIGATION.map((item) => (
        <a
          className="inline-flex min-h-11 shrink-0 items-center px-1 transition hover:text-primary"
          href={item.href}
          key={item.href}
        >
          {item.label}
        </a>
      ))}
    </div>
  </nav>
);
