import { AppIcon } from '@/components/portfolio/AppIcon';
import { INNER_PAGE_PANEL_CLASS } from '@/constants/styles/component-styles.constants';

export const ResumeSidebar = () => (
  <div className="space-y-4">
    <section className={`${INNER_PAGE_PANEL_CLASS} p-5`} id="education">
      <h2 className="flex items-center gap-2 text-[18px] font-bold">
        <AppIcon name="education" className="size-[18px] text-[#59ecb0]" />
        Education
      </h2>
      <p className="mt-4 text-[13px] font-semibold">Bachelor&apos;s Degree</p>
      <p className="mt-1 text-[11px] text-[#9fb2a9]">Electronics & Instrumentation · India</p>
    </section>
    <section className={`${INNER_PAGE_PANEL_CLASS} p-5`} id="certifications">
      <h2 className="flex items-center gap-2 text-[18px] font-bold">
        <AppIcon name="testing" className="size-[18px] text-[#59ecb0]" />
        Certifications
      </h2>
      <ul className="mt-4 space-y-3 text-[12px]">
        <li>AWS / Cloud Fundamentals</li>
        <li>Frontend Engineering</li>
        <li>JavaScript & Algorithms</li>
      </ul>
    </section>
  </div>
);
