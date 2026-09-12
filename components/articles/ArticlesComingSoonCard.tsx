import { INNER_PAGE_PANEL_CLASS } from '@/constants/styles/component-styles.constants';

export const ArticlesComingSoonCard = () => (
  <div className={`${INNER_PAGE_PANEL_CLASS} grid min-h-[360px] place-items-center border-dashed p-8 text-center`}>
    <div>
      <div className="text-[52px] text-accent">▤</div>
      <h2 className="mt-3 text-[20px]">
        More articles
        <br />
        coming soon.
      </h2>
      <p className="mt-3 text-[13px] text-[#9fb2a9]">Exploring more ideas, tech and experiences to share with you.</p>
    </div>
  </div>
);
