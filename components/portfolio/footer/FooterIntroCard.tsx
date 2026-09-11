import { footerSocialLinks } from '@/constants/data/footer.constants';
import { siteConfig } from '@/constants/site';

import { FooterSocialLink } from './FooterSocialLink';

export const FooterIntroCard = () => (
  <section
    className="relative min-w-0 max-[699px]:px-5 max-[699px]:pt-14 max-[699px]:pb-12 min-[700px]:rounded-[18px] min-[700px]:border min-[700px]:border-[#176b4b] min-[700px]:bg-[#05130fc2] min-[700px]:p-9 min-[1100px]:rounded-none min-[1100px]:border-0 min-[1100px]:bg-transparent min-[1100px]:p-0"
    aria-labelledby="footer-name"
  >
    <div
      className="pointer-events-none absolute top-5 right-5 text-[98px] leading-none font-black tracking-[-.12em] text-[#41d99a08] min-[700px]:hidden"
      aria-hidden="true"
    >
      KK
    </div>
    <h2 id="footer-name" className="relative text-[clamp(1.85rem,3vw,2.2rem)] font-bold tracking-[-.04em]">
      {siteConfig.name} <span className="text-[#59ecb0]">•</span>
    </h2>
    <p className="mt-2 font-mono text-[12px] tracking-[.27em] text-[#59ecb0] uppercase sm:text-[13px]">
      {siteConfig.role}
    </p>
    <p className="mt-8 max-w-[370px] text-[16px] leading-[1.55] text-[#b7c4be] max-[699px]:mt-7 max-[699px]:text-[17px]">
      Building scalable, user-centric products with React, Next.js and modern web technologies.
    </p>
    <div className="mt-8 flex gap-5 max-[699px]:gap-4">
      {footerSocialLinks.map((link) => (
        <FooterSocialLink key={link.label} {...link} />
      ))}
    </div>
    <p className="mt-14 rotate-[-4deg] font-serif text-[24px] leading-[1.35] text-[#59ecb0] italic [text-shadow:0_0_18px_rgba(89,236,176,.18)] max-[699px]:mt-16 max-[699px]:text-[26px]">
      Better interfaces
      <br />
      create a brighter tomorrow.
      <span className="mt-4 block h-[2px] w-20 bg-[#59ecb0]" />
    </p>
  </section>
);
