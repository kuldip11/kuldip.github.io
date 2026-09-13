import { RESUME_PAGE_CONTENT } from '@/constants/pages/resume.constants';

export const ResumeSidebar = () => (
  <div className="grid gap-8 sm:grid-cols-2" id="education">
    <section className="border-t border-border pt-5">
      <p className="text-[12px] font-bold tracking-[.14em] text-primary uppercase">
        {RESUME_PAGE_CONTENT.sections.educationLabel}
      </p>
      <h2 className="mt-4 text-[19px] font-semibold">{RESUME_PAGE_CONTENT.education.degree}</h2>
      <p className="mt-2 text-[13px] leading-6 text-foreground-secondary">{RESUME_PAGE_CONTENT.education.detail}</p>
    </section>
    <section className="border-t border-border pt-5">
      <p className="text-[12px] font-bold tracking-[.14em] text-primary uppercase">
        {RESUME_PAGE_CONTENT.sections.certificationsLabel}
      </p>
      <ul className="mt-4 grid list-none gap-2.5 p-0 text-[13px] text-foreground-secondary">
        {RESUME_PAGE_CONTENT.certifications.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  </div>
);
