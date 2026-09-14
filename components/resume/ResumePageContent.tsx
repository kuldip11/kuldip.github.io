import { ResumeBeyondWork } from './ResumeBeyondWork';
import { ResumeExperience } from './ResumeExperience';
import { ResumeHero } from './ResumeHero';
import { ResumeHighlights } from './ResumeHighlights';
import { ResumeMetrics } from './ResumeMetrics';
import { ResumeNavigation } from './ResumeNavigation';
import { ResumeSelectedProject } from './ResumeSelectedProject';
import { ResumeSidebar } from './ResumeSidebar';
import { ResumeSkills } from './ResumeSkills';
import { ResumeSummary } from './ResumeSummary';

export const ResumePageContent = () => (
  <main id="main-content" tabIndex={-1} className="min-h-screen overflow-x-clip bg-page text-foreground">
    <article className="mx-auto w-full max-w-[1280px] min-w-0 px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <ResumeHero />
      <ResumeMetrics />
      <ResumeNavigation />

      <div className="grid min-w-0 gap-12 py-12 lg:grid-cols-[.95fr_1.05fr] lg:gap-16 lg:py-16">
        <ResumeSummary />
        <ResumeHighlights />
      </div>

      <div className="grid min-w-0 gap-14 border-t border-border py-12 lg:grid-cols-[1.15fr_.85fr] lg:gap-16 lg:py-16">
        <ResumeExperience />
        <div className="min-w-0 space-y-12">
          <ResumeSkills />
          <ResumeSidebar />
        </div>
      </div>

      <ResumeSelectedProject />
      <ResumeBeyondWork />
    </article>
  </main>
);
