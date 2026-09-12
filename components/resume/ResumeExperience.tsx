import { AppIcon } from '@/components/portfolio/AppIcon';
import { experience } from '@/constants/data/experience.constants';
import { INNER_PAGE_PANEL_CLASS } from '@/constants/styles/component-styles.constants';

export const ResumeExperience = () => (
  <section className={`${INNER_PAGE_PANEL_CLASS} p-5`} id="experience">
    <h2 className="flex items-center gap-2 text-[20px] font-bold">
      <AppIcon name="briefcase" className="size-5 text-accent" />
      Experience Timeline
    </h2>
    <div className="mt-5 space-y-5">
      {experience.map(([date, role, company, copy]) => (
        <article className="border-l border-[#46eeb0] pl-5" key={role}>
          <h3 className="text-[14px] font-bold">{role}</h3>
          <p className="text-[12px] text-accent">{company}</p>
          <time className="mt-1 block text-[10px] text-[#91a69d]">{date}</time>
          <p className="mt-2 text-[11px] leading-[1.5] text-[#9fb2a9]">{copy}</p>
        </article>
      ))}
    </div>
  </section>
);
