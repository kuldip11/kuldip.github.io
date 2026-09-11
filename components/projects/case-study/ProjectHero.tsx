import { ActionLink, ProjectVisual } from '@/components/portfolio/InnerPageUi';
import { PROJECT_DETAIL_CONTENT } from '@/constants/pages/projects.constants';
import type { ProjectDefinition } from '@/types/project.types';

export const ProjectHero = ({ project }: { project: ProjectDefinition }) => {
  const { caseStudy } = project;
  const firstLine = caseStudy.heroLines[0] ?? '';
  const firstLineRemainder = firstLine.startsWith(caseStudy.heroAccent)
    ? firstLine.slice(caseStudy.heroAccent.length)
    : firstLine;

  return (
    <section className="mt-6 grid gap-7 lg:grid-cols-[.82fr_1.18fr] lg:items-center">
      <div>
        <span className="rounded-full border border-[#42dca2] px-3 py-1.5 text-[11px] text-[#59ecb0]">
          {PROJECT_DETAIL_CONTENT.featuredLabel}
        </span>
        <h1
          aria-label={project.seoTitle}
          className="mt-4 text-[clamp(2.45rem,5vw,4.8rem)] leading-[.96] font-bold tracking-[-.055em]"
        >
          <>
            <span className="text-[#59ecb0]">{caseStudy.heroAccent}</span>
            {firstLineRemainder}
            <br />
            {caseStudy.heroLines[1]}
            <br />
            {caseStudy.heroLines[2]}
          </>
        </h1>
        <p className="mt-4 max-w-[650px] text-[14px] leading-[1.62] text-[#b5c4bd] sm:text-[16px]">{caseStudy.intro}</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <ActionLink href={caseStudy.liveDemoHref} external={caseStudy.liveDemoExternal}>
            {PROJECT_DETAIL_CONTENT.liveDemoLabel}
          </ActionLink>
          <ActionLink href={caseStudy.sourceHref} secondary external>
            {PROJECT_DETAIL_CONTENT.sourceLabel}
          </ActionLink>
        </div>
      </div>
      <ProjectVisual variant={caseStudy.visualVariant} />
    </section>
  );
};
