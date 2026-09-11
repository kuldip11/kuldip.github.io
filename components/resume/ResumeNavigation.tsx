import { RESUME_NAVIGATION } from '@/constants/pages/resume.constants';
import { INNER_PAGE_PANEL_CLASS } from '@/constants/styles/component-styles.constants';

export const ResumeNavigation = () => (
  <nav
    className={`${INNER_PAGE_PANEL_CLASS} mt-5 grid grid-cols-2 overflow-hidden text-center text-[11px] sm:grid-cols-5`}
  >
    {RESUME_NAVIGATION.map((item, index) => (
      <a
        className={`px-4 py-3 ${index === 0 ? 'border border-[#59ecb0] text-[#59ecb0]' : ''}`}
        href={`#${item.toLowerCase()}`}
        key={item}
      >
        {item}
      </a>
    ))}
  </nav>
);
