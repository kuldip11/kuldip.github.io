import { Eyebrow, InnerPageBackdrop, Pills, ProjectCard } from '@/components/portfolio/InnerPageUi';
import { PROJECTS_PAGE_CONTENT } from '@/constants/pages/projects.constants';
import { ROUTES } from '@/constants/routes';

import { ComingSoonProject } from './ComingSoonProject';

export const ProjectsPageContent = () => (
  <InnerPageBackdrop>
    <section className="relative mx-auto max-w-[1500px] px-5 py-10 sm:px-8 sm:py-14 lg:px-12">
      <div className="grid gap-8 lg:grid-cols-[1fr_.85fr] lg:items-center">
        <div>
          <Eyebrow>{PROJECTS_PAGE_CONTENT.eyebrow}</Eyebrow>
          <h1 className="mt-2 text-[clamp(2.8rem,5vw,4.9rem)] leading-none font-bold tracking-[-.055em] text-[#59ecb0]">
            {PROJECTS_PAGE_CONTENT.title}
          </h1>
          <h2 className="mt-2 text-[24px] font-bold tracking-[-.03em] sm:text-[30px]">
            {PROJECTS_PAGE_CONTENT.subtitle}
          </h2>
          <p className="mt-4 max-w-[680px] text-[14px] leading-[1.65] text-[#b5c4bd] sm:text-[16px]">
            {PROJECTS_PAGE_CONTENT.description}
          </p>
        </div>
        <div className="grid grid-cols-[1fr_.8fr] items-center gap-5 rounded-[20px] border border-[#176746] bg-[#071713]/80 p-5">
          <div className="grid min-h-[180px] place-items-center rounded-[16px] border border-[#245b45] bg-[#081d17] text-center font-mono text-[24px] leading-tight text-[#59ecb0]">
            {PROJECTS_PAGE_CONTENT.heroWords[0]}
            <br />
            {PROJECTS_PAGE_CONTENT.heroWords[1]}
            <br />
            {PROJECTS_PAGE_CONTENT.heroWords[2]}
            <br />
            {PROJECTS_PAGE_CONTENT.heroWords[3]}
          </div>
          <ul className="space-y-5 text-[14px] font-semibold text-[#dbe6e0]">
            {PROJECTS_PAGE_CONTENT.heroPoints.map((point) => (
              <li key={point}>◉ &nbsp;{point}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-7 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <Pills items={PROJECTS_PAGE_CONTENT.filters} />
      </div>
      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <ProjectCard {...PROJECTS_PAGE_CONTENT.featuredCard} />
        <ComingSoonProject />
      </div>
      <div className="mt-5 flex flex-col gap-4 rounded-[18px] border border-[#176746] bg-[#071713]/90 p-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-[17px] font-bold">{PROJECTS_PAGE_CONTENT.footerCta.title}</h3>
          <p className="mt-1 text-[13px] text-[#aebdb6]">{PROJECTS_PAGE_CONTENT.footerCta.copy}</p>
        </div>
        <a
          className="rounded-full border border-[#45dba4] px-5 py-3 text-[12px] font-semibold text-[#59ecb0]"
          href={ROUTES.articles}
        >
          {PROJECTS_PAGE_CONTENT.footerCta.linkLabel}
        </a>
      </div>
    </section>
  </InnerPageBackdrop>
);
