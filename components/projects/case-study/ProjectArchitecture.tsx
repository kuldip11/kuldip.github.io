import { AppIcon } from '@/components/portfolio/AppIcon';
import { PROJECT_DETAIL_CONTENT } from '@/constants/pages/projects.constants';
import { INNER_PAGE_PANEL_CLASS } from '@/constants/styles/component-styles.constants';
import type { ProjectCaseStudyDefinition } from '@/types/project.types';

export const ProjectArchitecture = ({ caseStudy }: { caseStudy: ProjectCaseStudyDefinition }) => (
  <section className={`${INNER_PAGE_PANEL_CLASS} mt-4 overflow-hidden p-5 sm:p-6`} id="architecture">
    <div className="grid gap-7 lg:grid-cols-[.72fr_1.28fr] lg:items-center">
      <div>
        <p className="font-mono text-[10px] tracking-[.16em] text-accent uppercase">
          {PROJECT_DETAIL_CONTENT.architectureTitle}
        </p>
        <h2 className="mt-2 text-[clamp(1.8rem,3vw,3rem)] leading-[1.02] font-bold tracking-[-.045em]">
          {caseStudy.architectureTitle}
        </h2>
        <p className="mt-4 text-[13px] leading-[1.7] text-[#afc0b7] sm:text-[14px]">{caseStudy.architectureCopy}</p>
      </div>
      <div className="relative grid gap-3">
        <div
          aria-hidden="true"
          className="absolute top-7 bottom-7 left-[22px] w-px bg-[linear-gradient(to_bottom,transparent,#59ecb0_20%,#59ecb0_80%,transparent)] opacity-60"
        />
        {caseStudy.architecture.map((node, index) => (
          <div className="group relative grid grid-cols-[46px_1fr] items-center gap-3" key={node.label}>
            <span className="relative z-10 grid size-[46px] place-items-center rounded-full border border-[#2d8463] bg-[#082019] text-accent shadow-[0_0_26px_rgba(89,236,176,.08)] transition group-hover:border-accent">
              <AppIcon
                name={index === caseStudy.architecture.length - 1 ? 'cloud' : index === 0 ? 'apps' : 'architecture'}
                className="size-5"
              />
            </span>
            <div className="rounded-[14px] border border-[#214f3d] bg-[#081b16] px-4 py-3 transition group-hover:-translate-y-0.5 group-hover:border-[#3d916e]">
              <strong className="text-[13px]">{node.label}</strong>
              <span className="mt-1 block text-[11px] leading-[1.5] text-[#9eb2a8]">{node.detail}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
