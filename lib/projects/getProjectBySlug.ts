import { projects } from '@/constants/data/projects';

export const getProjectBySlug = (slug: string) => projects.find((project) => project.slug === slug);
