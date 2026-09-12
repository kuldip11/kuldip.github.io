import { AppIcon } from '@/components/portfolio/AppIcon';
import { PROJECTS_PAGE_CONTENT } from '@/constants/pages/projects.constants';
import { INNER_PAGE_PANEL_CLASS } from '@/constants/styles/component-styles.constants';

export const ComingSoonProject = () => (
  <article className={`${INNER_PAGE_PANEL_CLASS} relative min-h-[260px] overflow-hidden p-5 sm:p-6`}>
    <div
      aria-hidden="true"
      className="absolute inset-0 [background-image:radial-gradient(#2ca376_1px,transparent_1px)] [mask-image:linear-gradient(to_bottom_right,black,transparent_70%)] [background-size:18px_18px] opacity-50"
    />
    <div className="relative flex h-full min-h-[220px] flex-col justify-between">
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="inline-flex rounded-full border border-[#27775a] bg-[#071713] px-3 py-1.5 font-mono text-[9px] tracking-[.12em] text-accent-bright">
            {PROJECTS_PAGE_CONTENT.comingSoon.label}
          </span>
          <h2 className="mt-4 text-[24px] font-bold tracking-[-.03em] sm:text-[28px]">
            {PROJECTS_PAGE_CONTENT.comingSoon.title}
          </h2>
          <p className="mt-2 max-w-[460px] text-[12px] leading-[1.6] text-[#aebdb6] sm:text-[13px]">
            {PROJECTS_PAGE_CONTENT.comingSoon.copy}
          </p>
        </div>
        <div className="grid size-14 shrink-0 place-items-center rounded-[16px] border border-[#27775a] bg-[#092018] text-accent shadow-[0_0_28px_rgba(89,236,176,.1)]">
          <AppIcon name="plus" className="size-6" />
        </div>
      </div>
    </div>
  </article>
);
