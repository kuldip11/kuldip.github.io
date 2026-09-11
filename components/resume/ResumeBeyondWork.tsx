import { siteConfig } from '@/constants/site';
import { INNER_PAGE_PANEL_CLASS } from '@/constants/styles/component-styles.constants';

export const ResumeBeyondWork = () => (
  <section
    className={`${INNER_PAGE_PANEL_CLASS} mt-4 flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between`}
  >
    <div>
      <h2 className="text-[18px] font-bold">“ Beyond Work</h2>
      <p className="mt-2 max-w-[760px] text-[12px] text-[#aebdb6]">
        I enjoy exploring new technologies, contributing to open source, writing technical articles and building side
        projects.
      </p>
    </div>
    <a
      className="rounded-full border border-[#59ecb0] px-5 py-3 text-[12px] font-semibold text-[#59ecb0]"
      href={siteConfig.contactHref}
    >
      Let&apos;s Connect →
    </a>
  </section>
);
