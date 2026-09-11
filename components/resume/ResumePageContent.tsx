import { InnerPageBackdrop } from '@/components/portfolio/InnerPageUi';

import { ResumeBeyondWork } from './ResumeBeyondWork';
import { ResumeExperience } from './ResumeExperience';
import { ResumeHero } from './ResumeHero';
import { ResumeHighlights } from './ResumeHighlights';
import { ResumeMetrics } from './ResumeMetrics';
import { ResumeNavigation } from './ResumeNavigation';
import { ResumeSidebar } from './ResumeSidebar';
import { ResumeSkills } from './ResumeSkills';
import { ResumeSummary } from './ResumeSummary';

export const ResumePageContent = () => (
  <InnerPageBackdrop>
    <article className="relative mx-auto max-w-[1500px] px-5 py-10 sm:px-8 sm:py-14 lg:px-12">
      <ResumeHero />
      <ResumeMetrics />
      <ResumeNavigation />
      <div className="mt-4 grid gap-4 xl:grid-cols-2">
        <ResumeSummary />
        <ResumeHighlights />
      </div>
      <div className="mt-4 grid gap-4 lg:grid-cols-[1.15fr_1fr_.8fr]">
        <ResumeSkills />
        <ResumeExperience />
        <ResumeSidebar />
      </div>
      <ResumeBeyondWork />
    </article>
  </InnerPageBackdrop>
);
