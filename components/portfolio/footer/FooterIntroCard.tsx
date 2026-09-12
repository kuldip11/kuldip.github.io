import { footerSocialLinks } from '@/constants/data/footer.constants';
import { siteConfig } from '@/constants/site';

import { FooterSocialLink } from './FooterSocialLink';

export const FooterIntroCard = () => (
  <section
    className="relative min-w-0 max-hero:px-5 max-hero:pt-14 max-hero:pb-12 hero:rounded-[18px] hero:border hero:border-[#176b4b] hero:bg-[#05130fc2] hero:p-9 desktop:rounded-none desktop:border-0 desktop:bg-transparent desktop:p-0"
    aria-labelledby="footer-name"
  >
    <div
      className="pointer-events-none absolute top-5 right-5 text-[98px] leading-none font-black tracking-[-.12em] text-[#41d99a08] hero:hidden"
      aria-hidden="true"
    >
      KK
    </div>
    <h2 id="footer-name" className="relative text-[clamp(1.85rem,3vw,2.2rem)] font-bold tracking-[-.04em]">
      {siteConfig.name} <span className="text-accent">•</span>
    </h2>
    <p className="mt-2 font-mono text-[12px] tracking-[.27em] text-accent uppercase sm:text-[13px]">
      {siteConfig.role}
    </p>
    <p className="mt-8 max-w-[370px] text-[16px] leading-[1.55] text-[#b7c4be] max-hero:mt-7 max-hero:text-[17px]">
      Building scalable, user-centric products with React, Next.js and modern web technologies.
    </p>
    <div className="mt-8 flex gap-5 max-hero:gap-4">
      {footerSocialLinks.map((link) => (
        <FooterSocialLink key={link.label} {...link} />
      ))}
    </div>
    <p className="mt-14 rotate-[-4deg] font-serif text-[24px] leading-[1.35] text-accent italic [text-shadow:0_0_18px_rgba(89,236,176,.18)] max-hero:mt-16 max-hero:text-[26px]">
      Better interfaces
      <br />
      create a brighter tomorrow.
      <span className="mt-4 block h-[2px] w-20 bg-accent" />
    </p>
  </section>
);
