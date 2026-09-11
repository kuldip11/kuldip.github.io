import { Footer } from '@/components/portfolio/Footer';
import { Header } from '@/components/portfolio/Header';
import { ResumePageContent } from '@/components/resume/ResumePageContent';
import { seoCopy } from '@/constants/seo';
import { siteConfig, socialImage } from '@/constants/site';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: seoCopy.resume.title,
  description: seoCopy.resume.description,
  alternates: { canonical: '/resume' },
  openGraph: {
    type: 'website',
    url: '/resume',
    siteName: siteConfig.name,
    title: `${siteConfig.name} — Senior Frontend Engineer Résumé`,
    description: seoCopy.resume.description,
    images: [socialImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} — Senior Frontend Engineer Résumé`,
    description: seoCopy.resume.description,
    images: [socialImage],
  },
};
const ResumePage = () => (
  <>
    <Header />
    <ResumePageContent />
    <Footer />
  </>
);

export default ResumePage;
