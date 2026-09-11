import Link from 'next/link';

import { siteConfig } from '@/constants/site';

type IconName = 'github' | 'linkedin' | 'x' | 'mail' | 'link' | 'folder' | 'more' | 'chevron';
type FooterLink = { label: string; href?: string; suffix?: string; external?: boolean; download?: boolean };

const quickLinks: FooterLink[] = [
  { label: 'Home', href: '/#top' },
  { label: 'Projects', href: '/projects' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Approach', href: '/#approach' },
  { label: 'Contact', href: siteConfig.contactHref },
];
const featuredLinks: FooterLink[] = [
  { label: 'Servora (POS)', href: '/projects/servora' },
  { label: 'React Components', href: '/projects' },
  { label: 'UI/UX Implementations', href: '/projects' },
  { label: 'Open Source', href: siteConfig.github, external: true },
  { label: 'View All', href: '/projects' },
];
const moreLinks: FooterLink[] = [
  { label: 'Blog', suffix: ' (Soon)', href: '/articles' },
  { label: 'Resume', href: '/resume' },
  { label: 'Download CV', href: '/Kuldip_Kumar_Sah.pdf', download: true },
  { label: 'Privacy Policy' },
  { label: 'Terms of Use' },
];

function Icon({ name, className = 'size-5' }: { name: IconName; className?: string }) {
  if (name === 'linkedin')
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M5.2 7.1A2.1 2.1 0 1 0 5.2 3a2.1 2.1 0 0 0 0 4.1ZM3.4 21h3.7V9H3.4v12ZM9.3 9H13v1.6h.1c.5-1 1.8-2 3.6-2 3.9 0 4.6 2.5 4.6 5.9V21h-3.8v-5.8c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1V21H9.3V9Z" />
      </svg>
    );
  if (name === 'github')
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.87c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.64-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 6.82c.85 0 1.7.11 2.5.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86v2.76c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
      </svg>
    );
  if (name === 'x')
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        <path d="M4 4l16 16M20 4 4 20" />
      </svg>
    );
  if (name === 'mail')
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    );
  if (name === 'link')
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <path d="m10 13.5 4-4M7.5 16.5l-1 1a3.5 3.5 0 0 1-5-5l4-4a3.5 3.5 0 0 1 5 0M16.5 7.5l1-1a3.5 3.5 0 0 1 5 5l-4 4a3.5 3.5 0 0 1-5 0" />
      </svg>
    );
  if (name === 'folder')
    return (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <path d="M3 6.5A1.5 1.5 0 0 1 4.5 5H9l2 2h8.5A1.5 1.5 0 0 1 21 8.5v9A1.5 1.5 0 0 1 19.5 19h-15A1.5 1.5 0 0 1 3 17.5v-11Z" />
      </svg>
    );
  if (name === 'more')
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <circle cx="5" cy="12" r="1.8" />
        <circle cx="12" cy="12" r="1.8" />
        <circle cx="19" cy="12" r="1.8" />
      </svg>
    );
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function LinkList({ links }: { links: FooterLink[] }) {
  return (
    <ul className="mt-7 space-y-4 text-[15px] text-[#bec9c4] max-[1099px]:mt-5 max-[1099px]:space-y-3">
      {links.map((item) => (
        <li key={item.label}>
          {item.href ? (
            <Link
              className="group inline-flex items-center gap-3 transition-colors hover:text-[#59ecb0]"
              href={item.href}
              {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              {...(item.download ? { download: true } : {})}
            >
              <span>
                {item.label}
                {item.suffix}
              </span>
              <span
                className="text-[#59ecb0] opacity-0 transition-opacity group-hover:opacity-100 max-[1099px]:opacity-100"
                aria-hidden="true"
              >
                →
              </span>
            </Link>
          ) : (
            item.label
          )}
        </li>
      ))}
    </ul>
  );
}

function LinkColumn({ title, links }: { title: string; links: FooterLink[] }) {
  return (
    <nav aria-label={title}>
      <h2 className="text-[18px] font-bold tracking-[-.02em]">{title}</h2>
      <span className="mt-5 block h-px w-9 bg-[#59ecb0]" />
      <LinkList links={links} />
    </nav>
  );
}

function MobileLinkGroup({ title, icon, links }: { title: string; icon: IconName; links: FooterLink[] }) {
  return (
    <details className="group rounded-[17px] border border-[#1d7a55] bg-[#051410c7]">
      <summary className="flex min-h-[78px] cursor-pointer list-none items-center gap-6 px-7 text-[18px] font-bold [&::-webkit-details-marker]:hidden">
        <span className="text-[#55edac]">
          <Icon name={icon} className="size-6" />
        </span>
        <span>{title}</span>
        <span className="ml-auto transition-transform group-open:rotate-180">
          <Icon name="chevron" className="size-6" />
        </span>
      </summary>
      <div className="border-t border-[#1d7a554d] px-7 pt-1 pb-6 pl-[76px]">
        <LinkList links={links} />
      </div>
    </details>
  );
}

function SocialLink({ href, label, icon }: { href: string; label: string; icon: IconName }) {
  const external = href.startsWith('http');
  return (
    <a
      className="grid size-14 place-items-center rounded-full border border-[#25845f] transition hover:-translate-y-1 hover:border-[#59ecb0] hover:bg-[#59ecb014] hover:text-[#59ecb0] max-[699px]:size-[58px]"
      href={href}
      aria-label={label}
      target={external ? '_blank' : undefined}
      rel={external ? 'me noopener noreferrer' : undefined}
    >
      <Icon name={icon} className="size-[22px]" />
    </a>
  );
}

function IntroCard() {
  return (
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
        <SocialLink href={siteConfig.github} label="GitHub" icon="github" />
        <SocialLink href={siteConfig.linkedin} label="LinkedIn" icon="linkedin" />
        <SocialLink href="https://x.com/kuldip11" label="X" icon="x" />
        <SocialLink href={siteConfig.contactHref} label="Email" icon="mail" />
      </div>
      <p className="mt-14 rotate-[-4deg] font-serif text-[24px] leading-[1.35] text-[#59ecb0] italic [text-shadow:0_0_18px_rgba(89,236,176,.18)] max-[699px]:mt-16 max-[699px]:text-[26px]">
        Better interfaces
        <br />
        create a brighter tomorrow.
        <span className="mt-4 block h-[2px] w-20 bg-[#59ecb0]" />
      </p>
    </section>
  );
}

function ContactCard() {
  return (
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
        <Icon name="mail" className="size-7" />
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
        Say Hello <span aria-hidden="true">→</span>
      </a>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#091411] pt-16 text-[#f3f6f3] md:pt-20 lg:pt-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_12%,rgba(46,237,169,.12),transparent_22%),radial-gradient(circle_at_96%_66%,rgba(46,237,169,.08),transparent_22%)]" />
      <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(rgba(89,236,176,.2)_1px,transparent_1px),linear-gradient(90deg,rgba(89,236,176,.2)_1px,transparent_1px)] [background-size:52px_52px] opacity-[.06]" />
      <div className="relative rounded-t-[34px] border-t border-[#36c78e] bg-[#04100dd9] shadow-[0_-18px_80px_rgba(32,210,143,.035)]">
        <span
          className="absolute top-[-6px] left-1/2 size-3 -translate-x-1/2 rotate-45 border-r border-b border-[#67efb6] bg-[#59ecb0] shadow-[0_0_18px_5px_rgba(89,236,176,.6)]"
          aria-hidden="true"
        />
        <div className="relative px-5 pt-14 pb-8 sm:px-8 md:pt-10 lg:px-[3.75vw] lg:pt-24 lg:pb-12">
          <div className="grid gap-6 min-[700px]:grid-cols-2 min-[1100px]:grid-cols-[1.45fr_.72fr_1fr_.72fr_1.25fr] min-[1100px]:items-start min-[1100px]:gap-[3.4vw]">
            <IntroCard />
            <div className="hidden min-[1100px]:block">
              <LinkColumn title="Quick Links" links={quickLinks} />
            </div>
            <div className="hidden min-[1100px]:block">
              <LinkColumn title="Featured Projects" links={featuredLinks} />
            </div>
            <div className="hidden min-[1100px]:block">
              <LinkColumn title="More" links={moreLinks} />
            </div>
            <div className="max-[699px]:hidden">
              <ContactCard />
            </div>
            <div className="col-span-2 hidden rounded-[18px] border border-[#176b4b] bg-[#05130fc2] p-9 min-[700px]:grid min-[700px]:grid-cols-3 min-[700px]:gap-12 min-[1100px]:hidden">
              <LinkColumn title="Quick Links" links={quickLinks} />
              <LinkColumn title="Featured Projects" links={featuredLinks} />
              <LinkColumn title="More" links={moreLinks} />
            </div>
            <div className="space-y-3 min-[700px]:hidden">
              <MobileLinkGroup title="Quick Links" icon="link" links={quickLinks} />
              <MobileLinkGroup title="Featured Projects" icon="folder" links={featuredLinks} />
              <MobileLinkGroup title="More" icon="more" links={moreLinks} />
            </div>
            <div className="min-[700px]:hidden">
              <ContactCard />
            </div>
          </div>
          <div className="mt-12 flex flex-col border-t border-[#1c6548] pt-8 text-center min-[700px]:grid min-[700px]:grid-cols-[1fr_auto_1fr] min-[700px]:items-center min-[700px]:gap-6 min-[700px]:text-left lg:mt-20">
            <div className="order-2 mt-14 min-[700px]:order-none min-[700px]:col-start-1 min-[700px]:mt-0">
              <p className="text-[13px] text-[#c4cec9]">© 2026 {siteConfig.name}. All rights reserved.</p>
              <p className="mt-3 font-mono text-[10px] tracking-[.2em] text-[#778981] uppercase">
                Built with Next.js&nbsp; • &nbsp;Deployed on Vercel
              </p>
            </div>
            <div className="order-1 min-[700px]:order-none min-[700px]:col-start-2">
              <p className="text-[15px] whitespace-nowrap text-[#59ecb0]">
                Build&nbsp; • &nbsp;Ship&nbsp; • &nbsp;Improve&nbsp; • &nbsp;Repeat
              </p>
              <span className="mx-auto mt-3 block h-[2px] w-[54px] bg-[#59ecb0]" />
            </div>
            <p className="order-3 mt-9 text-[13px] text-[#c4cec9] min-[700px]:order-none min-[700px]:col-start-3 min-[700px]:mt-0 min-[700px]:text-right">
              Designed &amp; Developed with <span className="mx-1 text-xl text-[#59ecb0]">♥</span> by Kuldip
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
