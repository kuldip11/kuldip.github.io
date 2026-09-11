import { projects } from '@/constants/data/projects';
import type { ProjectSection } from '@/types/project.types';

export type ProjectDetail = {
  readonly eyebrow: string;
  readonly intro: string;
  readonly sections: readonly ProjectSection[];
};

export const projectDetails = Object.fromEntries(
  projects.map(({ slug, caseStudy }) => [
    slug,
    { eyebrow: caseStudy.eyebrow, intro: caseStudy.intro, sections: caseStudy.sections },
  ]),
);
