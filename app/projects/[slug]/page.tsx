import { notFound } from 'next/navigation';

import { Footer } from '@/components/portfolio/Footer';
import { Header } from '@/components/portfolio/Header';
import { ProjectCaseStudy as ProjectCaseStudyContent } from '@/components/projects/case-study/ProjectCaseStudy';
import { getProjectBySlug } from '@/lib/projects/getProjectBySlug';
import { getProjectStaticParams } from '@/lib/projects/getProjectStaticParams';
import { createProjectMetadata } from '@/lib/seo/createProjectMetadata';

import type { Metadata } from 'next';

type Params = Promise<{ slug: string }>;

export const generateStaticParams = () => getProjectStaticParams();

export const generateMetadata = async ({ params }: { params: Params }): Promise<Metadata> => {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  return project ? createProjectMetadata(project) : {};
};

const ProjectCaseStudy = async ({ params }: { params: Params }) => {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <>
      <Header />
      <ProjectCaseStudyContent project={project} />
      <Footer />
    </>
  );
};

export default ProjectCaseStudy;
