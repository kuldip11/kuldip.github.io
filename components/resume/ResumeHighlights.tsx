import { RESUME_HIGHLIGHTS } from '@/constants/pages/resume.constants';
import { INNER_PAGE_PANEL_CLASS } from '@/constants/styles/component-styles.constants';

export const ResumeHighlights = () => (
  <section className={`${INNER_PAGE_PANEL_CLASS} p-5`}>
    <h2 className="text-[20px] font-bold">☆ &nbsp;Key Highlights</h2>
    <ul className="mt-4 space-y-3 text-[13px] text-[#c2d0c9]">
      {RESUME_HIGHLIGHTS.map((highlight) => (
        <li key={highlight}>{highlight}</li>
      ))}
    </ul>
  </section>
);
