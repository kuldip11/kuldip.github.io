import Link from 'next/link';

import { ActionLink, PageContainer, SocialLink } from '@/components/ui';
import {
  FOOTER_CONTENT,
  footerFeaturedLinks,
  footerQuickLinks,
  footerSocialLinks,
} from '@/constants/data/footer.constants';
import { siteConfig } from '@/constants/site';

const linkClass =
  'inline-flex min-h-11 items-center text-[14px] text-foreground-secondary transition hover:text-foreground';

export const Footer = () => (
  <footer className="border-t border-border bg-surface">
    <section className="border-b border-border bg-surface-muted">
      <PageContainer className="grid gap-8 py-16 sm:py-20 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <p className="text-[12px] font-bold tracking-[.16em] text-primary uppercase">
            {FOOTER_CONTENT.contact.eyebrow}
          </p>
          <h2 className="mt-3 max-w-[760px] text-[clamp(2.35rem,5vw,4.8rem)] leading-[1.02] font-semibold tracking-[-.055em] text-foreground">
            {FOOTER_CONTENT.contact.title}
          </h2>
          <p className="mt-5 max-w-[660px] text-[15px] leading-[1.7] text-foreground-secondary sm:text-[16px]">
            {FOOTER_CONTENT.contact.description}
          </p>
        </div>
        <ActionLink className="min-h-12 px-5" href={siteConfig.contactHref}>
          {FOOTER_CONTENT.contact.actionLabel}
        </ActionLink>
      </PageContainer>
    </section>

    <PageContainer className="grid gap-10 py-12 md:grid-cols-[1.2fr_.8fr_.8fr]">
      <div>
        <Link className="inline-block" href="/" aria-label={`${siteConfig.name}, home`}>
          <span className="block text-[20px] font-semibold tracking-[-.035em] text-foreground">{siteConfig.name}</span>
          <span className="mt-1 block text-[13px] text-foreground-muted">{siteConfig.role}</span>
        </Link>
        <p className="mt-5 max-w-[390px] text-[14px] leading-[1.7] text-foreground-secondary">{FOOTER_CONTENT.intro}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          {footerSocialLinks.map((link) => {
            return (
              <SocialLink href={link.href} key={link.label}>
                {link.label}
              </SocialLink>
            );
          })}
        </div>
      </div>

      <nav aria-label={FOOTER_CONTENT.navigationLabel}>
        <h2 className="text-[12px] font-bold tracking-[.14em] text-foreground-muted uppercase">
          {FOOTER_CONTENT.exploreLabel}
        </h2>
        <ul className="mt-5 grid list-none gap-3 p-0">
          {footerQuickLinks.map((item) => (
            <li key={item.label}>
              {item.href ? (
                <Link className={linkClass} href={item.href}>
                  {item.label}
                </Link>
              ) : null}
            </li>
          ))}
        </ul>
      </nav>

      <nav aria-label={FOOTER_CONTENT.featuredWorkLabel}>
        <h2 className="text-[12px] font-bold tracking-[.14em] text-foreground-muted uppercase">
          {FOOTER_CONTENT.selectedWorkLabel}
        </h2>
        <ul className="mt-5 grid list-none gap-3 p-0">
          {footerFeaturedLinks.slice(0, 3).map((item) => (
            <li key={item.label}>
              {item.href ? (
                'external' in item && item.external ? (
                  <a className={linkClass} href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.label}
                  </a>
                ) : (
                  <Link className={linkClass} href={item.href}>
                    {item.label}
                  </Link>
                )
              ) : null}
            </li>
          ))}
        </ul>
      </nav>
    </PageContainer>

    <div className="border-t border-border">
      <PageContainer className="flex flex-col gap-2 py-6 text-[12px] text-foreground-muted md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. {FOOTER_CONTENT.copyrightSuffix}
        </p>
        <p>{FOOTER_CONTENT.builtWithLabel}</p>
      </PageContainer>
    </div>
  </footer>
);
