'use client';

import { useRef, useState } from 'react';

import {
  RESUME_PAGE_CONTENT,
  RESUME_SKILLS,
  RESUME_SKILL_TABS,
  type ResumeSkillTab,
} from '@/constants/pages/resume.constants';

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
    <section className="min-w-0 scroll-mt-32" id="skills">
      <p className="text-[12px] font-bold tracking-[.14em] text-primary uppercase">
        {RESUME_PAGE_CONTENT.sections.skillsEyebrow}
      </p>
      <h2 className="mt-3 text-[30px] font-semibold tracking-[-.04em]">{RESUME_PAGE_CONTENT.sections.skillsTitle}</h2>
      <div
        className="mt-6 flex gap-2 overflow-x-auto pb-2"
        role="tablist"
        aria-label={RESUME_PAGE_CONTENT.sections.skillTabsLabel}
      >
        {RESUME_SKILL_TABS.map((item, index) => {
          const isActive = item === activeTab;
          return (
            <button
              ref={(element) => {
                tabRefs.current[index] = element;
              }}
              aria-controls="resume-skill-panel"
              aria-selected={isActive}
              className={`min-h-11 shrink-0 rounded-full border px-3.5 py-2 text-[12px] font-semibold transition ${isActive ? 'border-primary bg-primary-soft text-primary' : 'border-border bg-surface text-foreground-secondary hover:border-border-strong hover:text-foreground'}`}
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
      <div aria-live="polite" className="mt-5 flex flex-wrap gap-2.5" id="resume-skill-panel" role="tabpanel">
        {activeSkills.map((skill) => (
          <span
            className="rounded-xl border border-border bg-surface px-3.5 py-2.5 text-[13px] text-foreground-secondary"
            key={skill}
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};
