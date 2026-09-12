import { ProjectsPageContent } from '@/components/projects/ProjectsPageContent';
import { seoCopy } from '@/constants/seo';
import { createStaticPageMetadata } from '@/lib/seo/createStaticPageMetadata';

import type { Metadata } from 'next';

export const metadata: Metadata = createStaticPageMetadata({
  title: seoCopy.projects.title,
  description: seoCopy.projects.description,
  path: '/projects',
  type: 'website',
});

const ProjectsPage = () => (
  <>
    <ProjectsPageContent />
  </>
);

export default ProjectsPage;
