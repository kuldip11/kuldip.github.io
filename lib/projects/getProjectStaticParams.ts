import { projects } from '@/constants/data/projects';

export const getProjectStaticParams = () => projects.map(({ slug }) => ({ slug }));
