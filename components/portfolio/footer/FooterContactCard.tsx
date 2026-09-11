import { siteConfig } from '@/constants/site';

import { AppIcon } from '../AppIcon';

import { FooterIcon } from './FooterIcon';

export const FooterContactCard = () => (
  <section
    className="relative overflow-hidden rounded-[18px] border border-[#207953] bg-[radial-gradient(circle_at_80%_70%,rgba(55,234,165,.08),transparent_55%),#061511db] p-6 shadow-[inset_0_0_40px_rgba(51,230,162,.025)] min-[700px]:p-9"
    aria-labelledby="footer-contact-title"
  >
    <span
      className="pointer-events-none absolute -top-4 right-5 text-[112px] leading-none font-black tracking-[-.13em] text-[#45d89b08]"
      aria-hidden="true"
    >
      KK
    </span>
    <span className="relative grid size-[58px] place-items-center rounded-[13px] border border-[#278e65] bg-[#0a3426] text-[#59ecb0] shadow-[0_0_25px_rgba(75,237,171,.12),inset_0_0_18px_rgba(75,237,171,.08)]">
      <FooterIcon name="mail" className="size-7" />
    </span>
    <h2 id="footer-contact-title" className="relative mt-5 text-[24px] font-bold tracking-[-.03em]">
      Let&apos;s Connect
    </h2>
    <p className="relative mt-2 max-w-[370px] text-[16px] leading-[1.55] text-[#b7c4be]">
      Open to opportunities, collaborations, and interesting projects.
    </p>
    <a
      className="relative mt-7 flex min-h-[50px] w-full items-center justify-center gap-4 rounded-full bg-[#59ecb0] px-6 text-[15px] font-bold text-[#03100b] transition hover:-translate-y-0.5 hover:bg-[#85f6c7]"
      href={siteConfig.contactHref}
    >
      Say Hello <AppIcon name="arrow-right" className="size-4" />
    </a>
  </section>
);
