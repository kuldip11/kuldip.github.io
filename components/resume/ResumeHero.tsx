import { AppIcon } from '@/components/portfolio/AppIcon';
import { ActionLink, Eyebrow } from '@/components/portfolio/InnerPageUi';
import { siteConfig } from '@/constants/site';
import { INNER_PAGE_PANEL_CLASS } from '@/constants/styles/component-styles.constants';
import Image from 'next/image';

export const ResumeHero = () => (
  <section className="grid gap-7 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
    <div>
      <Eyebrow># Professional Resume</Eyebrow>
      <h1 className="mt-4 text-[clamp(2.8rem,5vw,4.8rem)] leading-[.98] font-bold tracking-[-.055em]">
        <span className="text-[#59ecb0]">Experience</span>
        <br />
        Skills. Real Impact.
      </h1>
      <p className="mt-4 max-w-[620px] text-[14px] leading-[1.65] text-[#b4c2bb] sm:text-[16px]">
        Senior Frontend Engineer building scalable React and TypeScript products, frontend architecture and
        high-performance user experiences.
      </p>
      <div className="mt-5 flex flex-wrap gap-3">
        <ActionLink href="/Kuldip_Kumar_Sah.pdf">Download PDF</ActionLink>
        <ActionLink href={siteConfig.linkedin} secondary external>
          View on LinkedIn
        </ActionLink>
      </div>
    </div>
    <div className={`${INNER_PAGE_PANEL_CLASS} p-5 sm:p-6`}>
      <div className="grid gap-5 sm:grid-cols-[100px_1fr_auto] sm:items-center">
        <div className="grid size-24 place-items-center overflow-hidden rounded-full border border-[#48e9ae]">
          <Image
            src="/kuldip.jpg"
            alt="Kuldip Kumar Sah"
            width={96}
            height={96}
            className="size-full object-cover"
            priority
            quality={100}
          />
        </div>
        <div>
          <h2 className="text-[24px] font-bold">Kuldip Kumar Sah</h2>
          <p className="text-[#59ecb0]">Senior Frontend Engineer</p>
          <div className="mt-4 space-y-2 text-[12px] text-[#b5c4bd]">
            <div className="flex items-center gap-2">
              <AppIcon name="apps" className="size-3.5 text-[#59ecb0]" />
              India
            </div>
            <div className="flex items-center gap-2">
              <AppIcon name="mail" className="size-3.5 text-[#59ecb0]" />
              {siteConfig.email}
            </div>
            <div className="flex items-center gap-2">
              <AppIcon name="arrow-up-right" className="size-3.5 text-[#59ecb0]" />
              linkedin.com/in/kuldip-kumar-sah
            </div>
          </div>
        </div>
        <div className="rounded-xl border border-[#245b45] bg-[#092219] p-4 text-[12px]">
          <strong className="text-[#59ecb0]">Open to opportunities</strong>
          <div className="mt-3 space-y-2 text-[#c3d0ca]">
            <div className="flex items-center gap-2">
              <AppIcon name="briefcase" className="size-3.5 text-[#59ecb0]" />
              Full-time
            </div>
            <div className="flex items-center gap-2">
              <AppIcon name="apps" className="size-3.5 text-[#59ecb0]" />
              Remote / Hybrid
            </div>
            <div className="flex items-center gap-2">
              <AppIcon name="apps" className="size-3.5 text-[#59ecb0]" />
              Relocation OK
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
