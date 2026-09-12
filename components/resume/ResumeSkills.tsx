'use client';

import { useRef, useState } from 'react';

import { AppIcon } from '@/components/portfolio/AppIcon';
import { RESUME_SKILLS, RESUME_SKILL_TABS, type ResumeSkillTab } from '@/constants/pages/resume.constants';
import { INNER_PAGE_PANEL_CLASS } from '@/constants/styles/component-styles.constants';

export const ResumeSkills = () => {
  const [activeTab, setActiveTab] = useState<ResumeSkillTab>(RESUME_SKILL_TABS[0]);
  const activeSkills = RESUME_SKILLS[activeTab];
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const selectTabByIndex = (index: number) => {
    const normalizedIndex = (index + RESUME_SKILL_TABS.length) % RESUME_SKILL_TABS.length;
    setActiveTab(RESUME_SKILL_TABS[normalizedIndex]);
    tabRefs.current[normalizedIndex]?.focus();
  };

  return (
    <section className={`${INNER_PAGE_PANEL_CLASS} p-5`} id="skills">
      <h2 className="flex items-center gap-2 text-[20px] font-bold">
        <AppIcon name="code" className="size-[19px] text-accent" />
        Core Skills
      </h2>
      <div className="mt-5 flex flex-wrap gap-2" role="tablist" aria-label="Core skill categories">
        {RESUME_SKILL_TABS.map((item, index) => {
          const isActive = item === activeTab;

          return (
            <button
              ref={(element) => {
                tabRefs.current[index] = element;
              }}
              aria-controls="resume-skill-panel"
              aria-selected={isActive}
              className={`rounded-lg border px-3 py-2 text-[10px] transition-colors ${isActive ? 'border-accent bg-accent text-black' : 'border-[#27775a] hover:border-accent hover:text-accent'}`}
              key={item}
              onClick={() => setActiveTab(item)}
              onKeyDown={(event) => {
                if (event.key === 'ArrowRight') selectTabByIndex(index + 1);
                else if (event.key === 'ArrowLeft') selectTabByIndex(index - 1);
                else if (event.key === 'Home') selectTabByIndex(0);
                else if (event.key === 'End') selectTabByIndex(RESUME_SKILL_TABS.length - 1);
                else return;
                event.preventDefault();
              }}
              role="tab"
              tabIndex={isActive ? 0 : -1}
              type="button"
            >
              {item}
            </button>
          );
        })}
      </div>
      <div aria-live="polite" className="mt-6 space-y-5" id="resume-skill-panel" role="tabpanel">
        {activeSkills.map(([skill, percent]) => (
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
};
