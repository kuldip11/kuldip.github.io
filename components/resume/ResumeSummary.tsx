import { RESUME_TRAITS } from '@/constants/pages/resume.constants';
import { INNER_PAGE_PANEL_CLASS } from '@/constants/styles/component-styles.constants';

export const ResumeSummary = () => (
  <section className={`${INNER_PAGE_PANEL_CLASS} p-5`} id="overview">
    <h2 className="text-[20px] font-bold">▣ &nbsp;Professional Summary</h2>
    <p className="mt-4 text-[14px] leading-[1.65] text-[#b5c4bd]">
      Results-driven Senior Frontend Engineer with 5+ years of experience building modern web applications using React,
      Next.js, TypeScript and cloud technologies. I enjoy solving real-world problems and building scalable,
      user-focused products.
    </p>
    <div className="mt-5 flex flex-wrap gap-2">
      {RESUME_TRAITS.map((trait) => (
        <span className="rounded-full border border-[#27775a] px-3 py-1.5 text-[11px] text-[#59ecb0]" key={trait}>
          {trait}
        </span>
      ))}
    </div>
  </section>
);
