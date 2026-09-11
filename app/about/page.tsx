import Image from 'next/image';
import Link from 'next/link';

import { AppIcon } from '@/components/portfolio/AppIcon';
import { Footer } from '@/components/portfolio/Footer';
import { Header } from '@/components/portfolio/Header';
import { seoCopy } from '@/constants/seo';
import { siteConfig, socialImage } from '@/constants/site';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: seoCopy.about.title,
  description: seoCopy.about.description,
  alternates: { canonical: '/about' },
  openGraph: {
    type: 'profile',
    url: '/about',
    siteName: siteConfig.name,
    title: `About ${siteConfig.name} — ${siteConfig.role}`,
    description: seoCopy.about.description,
    images: [socialImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: `About ${siteConfig.name} — ${siteConfig.role}`,
    description: seoCopy.about.description,
    images: [socialImage],
  },
};

const AboutPage = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#07110f] text-[#f2f4ee]">
        <section className="mx-auto grid max-w-[1100px] grid-cols-[.75fr_1.25fr] gap-16 px-12 py-24 max-[800px]:grid-cols-1 max-[650px]:px-5">
          <div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[18px] border border-[#20362f]">
              <Image
                src="/kuldip.jpg"
                alt="Kuldip Kumar Sah, Senior Frontend Engineer"
                fill
                sizes="(max-width:800px) 90vw, 420px"
                className="object-cover object-[center_25%]"
              />
            </div>
          </div>
          <div>
            <p className="font-mono text-[11px] tracking-[.13em] text-[#71f6b5] uppercase">About</p>
            <h1 className="mt-5 text-[clamp(3.5rem,7vw,7rem)] leading-[.92] font-medium tracking-[-.065em]">
              Engineering for products that get complicated.
            </h1>
            <div className="mt-10 space-y-6 text-lg leading-8 text-[#9cafa6]">
              <p>
                I&apos;m Kuldip Kumar Sah, a Senior Frontend Engineer focused on React, TypeScript, frontend
                architecture and performance.
              </p>
              <p>
                I work where product ambition meets technical complexity: changing requirements, dense data, role-based
                workflows and interfaces that need to remain understandable as the product grows.
              </p>
              <p>
                My experience spans fintech onboarding, proptech visualization, enterprise SaaS and restaurant
                operations. I collaborate closely with product, design and backend teams and enjoy both architecture
                work and detailed performance debugging.
              </p>
              <p>
                I care about clear boundaries, accessible interaction, measurable performance and delivery systems that
                make quality repeatable.
              </p>
            </div>
            <Link className="mt-8 inline-flex items-center gap-2 border-b border-[#71f6b5] pb-1" href="/resume">
              View résumé <AppIcon name="arrow-right" className="size-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
