import Link from 'next/link';

import { ROUTES } from '@/constants/routes';
import { INNER_PAGE_PANEL_CLASS } from '@/constants/styles/component-styles.constants';
import type { ProjectVisualVariant } from '@/types/project.types';

import { AppIcon } from '../AppIcon';

import { Badge } from './Badge';
import { ProjectVisual } from './ProjectVisual';

export const ProjectCard = ({
  slug,
  title,
  copy,
  variant,
  tags,
  badge,
  category,
  ariaLabel,
}: {
  slug: string;
  title: string;
  copy: string;
  variant: ProjectVisualVariant;
  tags: readonly string[];
  badge?: string;
  category?: string;
  ariaLabel?: string;
}) => (
  <article className={`${INNER_PAGE_PANEL_CLASS} grid gap-5 p-4 sm:grid-cols-[.85fr_1.15fr] sm:items-center lg:p-5`}>
    <ProjectVisual variant={variant} compact />
    <div>
      <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
        {badge ? <Badge variant="featured">{badge}</Badge> : <span />}
        {category ? <Badge variant="category">{category}</Badge> : null}
      </div>
      <h2 aria-label={ariaLabel ?? title} className="text-[22px] font-bold tracking-[-.03em]">
        {title}
      </h2>
      <p className="mt-2 text-[13px] leading-[1.55] text-[#b1c0b9] sm:text-[14px]">{copy}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {tags.map((tag) => (
          <Badge variant="tag" key={tag}>
            {tag}
          </Badge>
        ))}
      </div>
      <Link
        aria-label={`Read ${title}`}
        className="mt-5 inline-flex text-[13px] font-semibold text-[#59ecb0]"
        href={ROUTES.project(slug)}
      >
        View project&nbsp; <AppIcon name="arrow-right" className="size-4" />
      </Link>
    </div>
  </article>
);
