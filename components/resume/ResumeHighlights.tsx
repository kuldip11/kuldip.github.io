import { AppIcon } from '@/components/portfolio/AppIcon';
import { RESUME_HIGHLIGHTS } from '@/constants/pages/resume.constants';
import { INNER_PAGE_PANEL_CLASS } from '@/constants/styles/component-styles.constants';

export const ResumeHighlights = () => (
  <section className={`${INNER_PAGE_PANEL_CLASS} p-5`}>
    <h2 className="flex items-center gap-2 text-[20px] font-bold">
      <AppIcon name="featured" className="size-5 text-accent" />
      Key Highlights
    </h2>
    <ul className="mt-4 space-y-3 text-[13px] text-[#c2d0c9]">
      {RESUME_HIGHLIGHTS.map((highlight) => (
        <li className="flex items-start gap-2" key={highlight}>
          <AppIcon name="apps" className="mt-0.5 size-3.5 shrink-0 text-accent" />
          {highlight}
        </li>
      ))}
    </ul>
  </section>
);
