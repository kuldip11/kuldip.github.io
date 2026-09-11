import { INNER_PAGE_PANEL_CLASS } from '@/constants/styles/component-styles.constants';

import { GlyphIcon } from '../GlyphIcon';

export const MetricCard = ({ value, label, icon }: { value: string; label: string; icon?: string }) => {
  if (icon) {
    return (
      <div className={`${INNER_PAGE_PANEL_CLASS} p-4`}>
        <div className="text-[#59ecb0]">
          <GlyphIcon glyph={icon} className="size-6" />
        </div>
        <strong className="mt-3 block text-[18px]">{value}</strong>
        <span className="mt-1 block text-[11px] text-[#b0c0b8]">{label}</span>
      </div>
    );
  }

  return (
    <div className={`${INNER_PAGE_PANEL_CLASS} p-5`}>
      <strong className="text-[28px]">{value}</strong>
      <span className="mt-1 block text-[12px] text-[#aebdb6]">{label}</span>
    </div>
  );
};
