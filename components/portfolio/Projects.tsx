import Link from 'next/link';

import { projects } from '@/constants/data/projects';
import { HOME_SECTION_HEADERS } from '@/constants/pages/home.constants';
import { ROUTES } from '@/constants/routes';

import { ExternalArrow } from './ExternalArrow';
import { ProjectVisual } from './ProjectVisual';
import { SectionHeader } from './SectionHeader';

export const Projects = () => {
  return (
    <section
      className="mx-auto max-w-[1344px] pb-[150px] max-[1380px]:mx-12 max-[650px]:mx-5 max-[650px]:pb-[100px]"
      id="work"
    >
      <SectionHeader
        index={HOME_SECTION_HEADERS.projects.index}
        eyebrow={HOME_SECTION_HEADERS.projects.eyebrow}
        title={HOME_SECTION_HEADERS.projects.title}
        copy={HOME_SECTION_HEADERS.projects.copy}
      />
      <div className="grid gap-7">
        {projects.map((project) => (
          <article
            className="grid min-h-[560px] grid-cols-[.84fr_1.16fr] overflow-hidden rounded-[22px] border border-[#20362f] bg-[#0c1916] max-[1000px]:grid-cols-1"
            key={project.index}
          >
            <div className="flex flex-col p-14 max-[650px]:min-h-[500px] max-[650px]:p-[30px]">
              <p className="mb-[50px] font-mono text-[12px] leading-[1.4] font-semibold tracking-[.12em] text-[#a5b7ae] uppercase max-[650px]:mb-[35px]">
                <span className="mr-[18px] text-[#71f6b5]">{project.index}</span>
                {project.label}
              </p>
              <h3 className="m-0 max-w-[520px] text-[clamp(2rem,3.3vw,4rem)] leading-[1.02] font-medium tracking-[-.05em]">
                {project.title}
              </h3>
              <p className="max-w-[490px] leading-[1.65] text-[#8fa29a]">{project.description}</p>
              <ul className="my-5 mb-[30px] flex list-none flex-wrap gap-2 p-0">
                {project.stats.map((stat) => (
                  <li
                    className="rounded-full border border-[#2c463e] px-2.5 py-[7px] font-mono text-[12px] text-[#b6c5be]"
                    key={stat}
                  >
                    {stat}
                  </li>
                ))}
              </ul>
              {project.showcaseLinks && project.showcaseLinksLabel && (
                <div className="mb-8">
                  <p className="mb-3 font-mono text-[12px] tracking-[.1em] text-[#71f6b5] uppercase">
                    {project.showcaseLinksLabel}
                  </p>
                  <div className="flex flex-wrap gap-x-4 gap-y-2">
                    {project.showcaseLinks.map((link) => (
                      <a
                        className="inline-flex items-center gap-1.5 text-xs text-[#c3d0ca] transition-colors hover:text-[#71f6b5]"
                        href={link.href}
                        key={link.label}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {link.label} <ExternalArrow />
                      </a>
                    ))}
                  </div>
                </div>
              )}
              <Link
                className="mt-auto flex w-max items-center gap-[7px] border-b border-[#577268] pb-[5px] text-[14px] transition-colors hover:text-[#71f6b5]"
                href={ROUTES.project(project.slug)}
              >
                Read case study <ExternalArrow />
              </Link>
            </div>
            <ProjectVisual index={project.index} />
          </article>
        ))}
      </div>
    </section>
  );
};
