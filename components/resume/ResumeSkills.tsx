import { RESUME_SKILL_ROWS, RESUME_SKILL_TABS } from '@/constants/pages/resume.constants';
import { INNER_PAGE_PANEL_CLASS } from '@/constants/styles/component-styles.constants';

export const ResumeSkills = () => (
  <section className={`${INNER_PAGE_PANEL_CLASS} p-5`} id="skills">
    <h2 className="text-[20px] font-bold">&lt;/&gt; &nbsp;Core Skills</h2>
    <div className="mt-5 flex flex-wrap gap-2">
      {RESUME_SKILL_TABS.map((item, index) => (
        <span
          className={`rounded-lg border px-3 py-2 text-[10px] ${index === 0 ? 'border-[#59ecb0] bg-[#59ecb0] text-black' : 'border-[#27775a]'}`}
          key={item}
        >
          {item}
        </span>
      ))}
    </div>
    <div className="mt-6 space-y-5">
      {RESUME_SKILL_ROWS.map(([skill, percent]) => (
        <div key={skill}>
          <div className="flex justify-between text-[12px]">
            <span>{skill}</span>
            <span>{percent}</span>
          </div>
          <div className="mt-2 h-2 rounded-full bg-[#103a2d]">
            <div className="h-full rounded-full bg-[#46eeb0]" style={{ width: percent }} />
          </div>
        </div>
      ))}
    </div>
  </section>
);
