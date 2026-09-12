import { ResumePageContent } from '@/components/resume/ResumePageContent';
import { seoCopy } from '@/constants/seo';
import { siteConfig } from '@/constants/site';
import { createStaticPageMetadata } from '@/lib/seo/createStaticPageMetadata';

import type { Metadata } from 'next';

export const metadata: Metadata = createStaticPageMetadata({
  title: `${siteConfig.name} — Senior Frontend Engineer Résumé`,
  description: seoCopy.resume.description,
  path: '/resume',
  type: 'website',
});
const ResumePage = () => (
  <>
    <ResumePageContent />
  </>
);

export default ResumePage;
