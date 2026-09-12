import { ROUTES } from '@/constants/routes';
import { siteConfig, socialImage } from '@/constants/site';
import type { ProjectDefinition } from '@/types/project.types';

import type { Metadata } from 'next';

export const createProjectMetadata = (project: ProjectDefinition): Metadata => ({
  title: project.seoTitle,
  description: project.summary,
  alternates: { canonical: ROUTES.project(project.slug) },
  openGraph: {
    type: 'article',
    url: ROUTES.project(project.slug),
    title: project.seoTitle,
    description: project.summary,
    publishedTime: project.publishedAt,
    modifiedTime: project.updatedAt,
    authors: [siteConfig.name],
    images: [socialImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: project.seoTitle,
    description: project.summary,
    images: [socialImage],
  },
});
