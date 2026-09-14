import { experience } from '@/constants/data/experience.constants';
import { RESUME_PAGE_CONTENT } from '@/constants/pages/resume.constants';

export const ResumeExperience = () => (
  <section className="scroll-mt-32" id="experience">
    <p className="text-[12px] font-bold tracking-[.14em] text-primary uppercase">
      {RESUME_PAGE_CONTENT.sections.experienceEyebrow}
    </p>
    <h2 className="mt-3 text-[30px] font-semibold tracking-[-.04em]">{RESUME_PAGE_CONTENT.sections.experienceTitle}</h2>
    <div className="mt-7 divide-y divide-border border-y border-border">
      {experience.map((item) => (
        <article className="grid gap-4 py-7 md:grid-cols-[160px_1fr]" key={`${item.company}-${item.role}`}>
          <div>
            <time className="text-[12px] font-semibold text-foreground-muted">{item.period}</time>
            {item.current ? (
              <span className="mt-2 block w-max rounded-full bg-primary-soft px-2.5 py-1 text-[10px] font-bold text-primary">
                {RESUME_PAGE_CONTENT.sections.currentLabel}
              </span>
            ) : null}
          </div>
          <div>
            <h3 className="text-[20px] font-semibold tracking-[-.025em]">{item.role}</h3>
            <p className="mt-1 text-[13px] font-semibold text-primary">
              {item.company} · {item.location}
            </p>
            <p className="mt-3 max-w-[760px] text-[14px] leading-7 text-foreground-secondary">{item.summary}</p>
          </div>
        </article>
      ))}
    </div>
  </section>
);
