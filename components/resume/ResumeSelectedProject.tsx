import { AppIcon } from '@/components/portfolio/AppIcon';
import { projects } from '@/constants/data/projects';
import { RESUME_PAGE_CONTENT } from '@/constants/pages/resume.constants';

const servora = projects.find((project) => project.slug === 'servora');

export const ResumeSelectedProject = () => {
  if (!servora) return null;

  return (
    <section className="border-t border-border py-12 lg:py-16" aria-labelledby="resume-selected-project">
      <div className="grid min-w-0 gap-8 lg:grid-cols-[.72fr_1.28fr] lg:gap-14">
        <div>
          <p className="text-[12px] font-bold tracking-[.14em] text-primary uppercase">
            {RESUME_PAGE_CONTENT.sections.selectedProjectEyebrow}
          </p>
          <h2 id="resume-selected-project" className="mt-3 text-[30px] font-semibold tracking-[-.04em]">
            {servora.name} · {servora.category}
          </h2>
          <p className="mt-4 max-w-[520px] text-[14px] leading-7 text-foreground-secondary">{servora.description}</p>
        </div>

        <div className="grid min-w-0 gap-3 sm:grid-cols-2">
          {servora.showcaseLinks.map((link) => (
            <a
              className="group flex min-h-20 items-center justify-between gap-4 rounded-xl border border-border bg-surface px-4 py-3 transition hover:border-primary-muted hover:shadow-card focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              key={link.label}
            >
              <span>
                <strong className="block text-[13px] font-semibold text-foreground">{link.label}</strong>
                <span className="mt-1 block text-[11px] leading-5 text-foreground-muted">{link.description}</span>
              </span>
              <AppIcon
                name="arrow-up-right"
                className="size-4 shrink-0 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
