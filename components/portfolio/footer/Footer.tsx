import { footerFeaturedLinks, footerMoreLinks, footerQuickLinks } from '@/constants/data/footer.constants';
import { siteConfig } from '@/constants/site';

import { FooterContactCard } from './FooterContactCard';
import { FooterIntroCard } from './FooterIntroCard';
import { FooterLinkColumn } from './FooterLinkColumn';
import { FooterMobileLinkGroup } from './FooterMobileLinkGroup';

export const Footer = () => (
  <footer className="relative overflow-hidden bg-[#091411] pt-16 text-[#f3f6f3] md:pt-20 lg:pt-28">
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_12%,rgba(46,237,169,.12),transparent_22%),radial-gradient(circle_at_96%_66%,rgba(46,237,169,.08),transparent_22%)]" />
    <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(rgba(89,236,176,.2)_1px,transparent_1px),linear-gradient(90deg,rgba(89,236,176,.2)_1px,transparent_1px)] [background-size:52px_52px] opacity-[.06]" />
    <div className="relative rounded-t-[34px] border-t border-[#36c78e] bg-[#04100dd9] shadow-[0_-18px_80px_rgba(32,210,143,.035)]">
      <span
        className="absolute top-[-6px] left-1/2 size-3 -translate-x-1/2 rotate-45 border-r border-b border-[#67efb6] bg-accent shadow-[0_0_18px_5px_rgba(89,236,176,.6)]"
        aria-hidden="true"
      />
      <div className="relative px-5 pt-14 pb-8 sm:px-8 md:pt-10 lg:px-[3.75vw] lg:pt-24 lg:pb-12">
        <div className="grid gap-6 hero:grid-cols-2 desktop:grid-cols-[1.45fr_.72fr_1fr_.72fr_1.25fr] desktop:items-start desktop:gap-[3.4vw]">
          <FooterIntroCard />
          <div className="hidden desktop:block">
            <FooterLinkColumn title="Quick Links" links={footerQuickLinks} />
          </div>
          <div className="hidden desktop:block">
            <FooterLinkColumn title="Featured Projects" links={footerFeaturedLinks} />
          </div>
          <div className="hidden desktop:block">
            <FooterLinkColumn title="More" links={footerMoreLinks} />
          </div>
          <div className="max-hero:hidden">
            <FooterContactCard />
          </div>
          <div className="col-span-2 hidden rounded-[18px] border border-[#176b4b] bg-[#05130fc2] p-9 hero:grid hero:grid-cols-3 hero:gap-12 desktop:hidden">
            <FooterLinkColumn title="Quick Links" links={footerQuickLinks} />
            <FooterLinkColumn title="Featured Projects" links={footerFeaturedLinks} />
            <FooterLinkColumn title="More" links={footerMoreLinks} />
          </div>
          <div className="space-y-3 hero:hidden">
            <FooterMobileLinkGroup title="Quick Links" icon="link" links={footerQuickLinks} />
            <FooterMobileLinkGroup title="Featured Projects" icon="folder" links={footerFeaturedLinks} />
            <FooterMobileLinkGroup title="More" icon="more" links={footerMoreLinks} />
          </div>
          <div className="hero:hidden">
            <FooterContactCard />
          </div>
        </div>
        <div className="mt-12 flex flex-col border-t border-[#1c6548] pt-8 text-center hero:grid hero:grid-cols-[1fr_auto_1fr] hero:items-center hero:gap-6 hero:text-left lg:mt-20">
          <div className="order-2 mt-14 hero:order-none hero:col-start-1 hero:mt-0">
            <p className="text-[13px] text-[#c4cec9]">© 2026 {siteConfig.name}. All rights reserved.</p>
            <p className="mt-3 font-mono text-[10px] tracking-[.2em] text-[#778981] uppercase">
              Built with Next.js&nbsp; • &nbsp;Deployed on Vercel
            </p>
          </div>
          <div className="order-1 hero:order-none hero:col-start-2">
            <p className="text-[15px] whitespace-nowrap text-accent">
              Build&nbsp; • &nbsp;Ship&nbsp; • &nbsp;Improve&nbsp; • &nbsp;Repeat
            </p>
            <span className="mx-auto mt-3 block h-[2px] w-[54px] bg-accent" />
          </div>
          <p className="order-3 mt-9 text-[13px] text-[#c4cec9] hero:order-none hero:col-start-3 hero:mt-0 hero:text-right">
            Designed &amp; Developed with <span className="mx-1 text-xl text-accent">♥</span> by Kuldip
          </p>
        </div>
      </div>
    </div>
  </footer>
);
