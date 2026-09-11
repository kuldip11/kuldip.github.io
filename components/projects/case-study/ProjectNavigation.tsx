import { INNER_PAGE_PANEL_CLASS } from '@/constants/styles/component-styles.constants';

export const ProjectNavigation = ({ items }: { items: readonly string[] }) => (
  <nav
    className={`${INNER_PAGE_PANEL_CLASS} mt-5 flex gap-8 overflow-x-auto px-5 py-4 text-[11px] text-[#c9d6d0]`}
    aria-label="Case study sections"
  >
    {items.map((item, index) => (
      <a
        className={index === 0 ? 'border-b border-[#59ecb0] pb-2 text-[#59ecb0]' : ''}
        href={index === 0 ? '#overview' : '#details'}
        key={item}
      >
        {item}
      </a>
    ))}
  </nav>
);
