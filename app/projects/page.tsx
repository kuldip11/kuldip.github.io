import { Footer } from '@/components/portfolio/Footer';
import { Header } from '@/components/portfolio/Header';
import { ProjectsPageContent } from '@/components/projects/ProjectsPageContent';
import { seoCopy } from '@/constants/seo';
import { siteConfig, socialImage } from '@/constants/site';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: seoCopy.projects.title,
  description: seoCopy.projects.description,
  alternates: { canonical: '/projects' },
  openGraph: {
    type: 'website',
    url: '/projects',
    siteName: siteConfig.name,
    title: seoCopy.projects.title,
    description: seoCopy.projects.description,
    images: [socialImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: seoCopy.projects.title,
    description: seoCopy.projects.description,
    images: [socialImage],
  },
};

const ProjectsPage = () => (
  <>
    <Header />
    <ProjectsPageContent />
    <Footer />
  </>
);

export default ProjectsPage;
