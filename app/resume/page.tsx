import { ExternalArrow } from '@/components/portfolio/ExternalArrow';
import { Footer } from '@/components/portfolio/Footer';
import { Header } from '@/components/portfolio/Header';
import { seoCopy } from '@/constants/seo';
import { servoraLinks, siteConfig, socialImage } from '@/constants/site';
import { experience, stack } from '@/data/portfolio';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: seoCopy.resume.title,
  description: seoCopy.resume.description,
  alternates: { canonical: '/resume' },
  openGraph: {
    type: 'website',
    url: '/resume',
    siteName: siteConfig.name,
    title: `${siteConfig.name} — Senior Frontend Engineer Résumé`,
    description: seoCopy.resume.description,
    images: [socialImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} — Senior Frontend Engineer Résumé`,
    description: seoCopy.resume.description,
    images: [socialImage],
  },
};

export default function ResumePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#07110f] text-[#f2f4ee]">
        <article className="mx-auto max-w-[1000px] px-12 py-24 max-[650px]:px-5">
          <div className="flex items-end justify-between gap-8 max-[650px]:flex-col max-[650px]:items-start">
            <div>
              <p className="font-mono text-[11px] tracking-[.13em] text-[#71f6b5] uppercase">Résumé</p>
              <h1 className="mt-5 text-[clamp(3.6rem,7vw,7rem)] leading-[.92] font-medium tracking-[-.065em]">
                Kuldip Kumar Sah
              </h1>
              <p className="mt-5 text-xl text-[#9cafa6]">
                Senior Frontend Engineer · React · TypeScript · Frontend Architecture
              </p>
            </div>
            <a
              className="rounded-full border border-[#39524a] px-5 py-3 text-sm hover:border-[#71f6b5]"
              href="/Kuldip_Kumar_Sah.pdf"
              download
            >
              Download PDF
            </a>
          </div>

          <section className="mt-20">
            <h2 className="font-mono text-sm tracking-[.12em] text-[#71f6b5] uppercase">Experience</h2>
            <div className="mt-6 border-t border-[#20362f]">
              {experience.map(([date, role, company, copy]) => (
                <div
                  className="grid grid-cols-[.45fr_1.55fr] gap-10 border-b border-[#20362f] py-8 max-[650px]:grid-cols-1 max-[650px]:gap-3"
                  key={role}
                >
                  <span className="font-mono text-xs text-[#71f6b5]">{date}</span>
                  <div>
                    <h3 className="m-0 text-2xl">{role}</h3>
                    <p className="text-sm text-[#c4d1cb]">{company}</p>
                    <p className="max-w-[720px] leading-7 text-[#9cafa6]">{copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-16">
            <p className="font-mono text-sm tracking-[.12em] text-[#71f6b5] uppercase">Selected project</p>
            <h2 className="mt-4 text-4xl font-medium tracking-[-.04em]">Servora · Full-Stack Restaurant OS</h2>
            <p className="max-w-[780px] leading-8 text-[#9cafa6]">
              A six-application restaurant operating system built as a typed monorepo. Explore the same live demos
              linked from the PDF résumé.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 max-[650px]:grid-cols-1">
              {servoraLinks.map((link) => (
                <a
                  className="flex items-center justify-between rounded-xl border border-[#29463d] px-4 py-3 text-sm transition hover:border-[#71f6b5]"
                  href={link.href}
                  key={link.label}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>
                    <strong className="block">{link.label}</strong>
                    <span className="mt-1 block text-xs text-[#8fa29a]">{link.description}</span>
                  </span>
                  <ExternalArrow />
                </a>
              ))}
            </div>
          </section>

          <section className="mt-16">
            <h2 className="font-mono text-sm tracking-[.12em] text-[#71f6b5] uppercase">Technical focus</h2>
            <div className="mt-6 grid grid-cols-2 gap-px bg-[#20362f] max-[650px]:grid-cols-1">
              {stack.map(([title, copy]) => (
                <div className="bg-[#07110f] p-6" key={title}>
                  <h3 className="text-sm text-[#dce6e1]">{title}</h3>
                  <p className="leading-7 text-[#9cafa6]">{copy}</p>
                </div>
              ))}
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
