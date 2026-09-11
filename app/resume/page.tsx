import { Footer } from '@/components/portfolio/Footer';
import { Header } from '@/components/portfolio/Header';
import { ActionLink, Eyebrow, InnerPageBackdrop, panel } from '@/components/portfolio/InnerPageUi';
import { seoCopy } from '@/constants/seo';
import { siteConfig, socialImage } from '@/constants/site';
import { experience } from '@/data/portfolio';
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
const skillRows = [
  ['React', '95%'],
  ['Next.js', '90%'],
  ['TypeScript', '90%'],
  ['JavaScript', '95%'],
  ['Tailwind CSS', '88%'],
];
export default function ResumePage() {
  return (
    <>
      <Header />
      <InnerPageBackdrop>
        <article className="relative mx-auto max-w-[1500px] px-5 py-10 sm:px-8 sm:py-14 lg:px-12">
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
            <div className={`${panel} p-5 sm:p-6`}>
              <div className="grid gap-5 sm:grid-cols-[100px_1fr_auto] sm:items-center">
                <div className="grid size-24 place-items-center rounded-full border border-[#48e9ae] text-[28px]">
                  KS
                </div>
                <div>
                  <h2 className="text-[24px] font-bold">Kuldip Kumar Sah</h2>
                  <p className="text-[#59ecb0]">Senior Frontend Engineer</p>
                  <div className="mt-4 space-y-2 text-[12px] text-[#b5c4bd]">
                    <div>⌖ India</div>
                    <div>✉ {siteConfig.email}</div>
                    <div>↗ linkedin.com/in/kuldip-kumar-sah</div>
                  </div>
                </div>
                <div className="rounded-xl border border-[#245b45] bg-[#092219] p-4 text-[12px]">
                  <strong className="text-[#59ecb0]">Open to opportunities</strong>
                  <div className="mt-3 space-y-2 text-[#c3d0ca]">
                    <div>▣ Full-time</div>
                    <div>⌂ Remote / Hybrid</div>
                    <div>⌖ Relocation OK</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {[
              ['5+', 'Years Experience'],
              ['20+', 'Projects'],
              ['5+', 'Teams Collaborated'],
              ['100%', 'Commitment'],
            ].map(([v, l]) => (
              <div className={`${panel} p-5`} key={l}>
                <strong className="text-[28px]">{v}</strong>
                <span className="mt-1 block text-[12px] text-[#aebdb6]">{l}</span>
              </div>
            ))}
          </section>
          <nav className={`${panel} mt-5 grid grid-cols-2 overflow-hidden text-center text-[11px] sm:grid-cols-5`}>
            {['Overview', 'Experience', 'Skills', 'Education', 'Certifications'].map((x, i) => (
              <a
                className={`px-4 py-3 ${i === 0 ? 'border border-[#59ecb0] text-[#59ecb0]' : ''}`}
                href={`#${x.toLowerCase()}`}
                key={x}
              >
                {x}
              </a>
            ))}
          </nav>
          <div className="mt-4 grid gap-4 xl:grid-cols-2">
            <section className={`${panel} p-5`} id="overview">
              <h2 className="text-[20px] font-bold">▣ &nbsp;Professional Summary</h2>
              <p className="mt-4 text-[14px] leading-[1.65] text-[#b5c4bd]">
                Results-driven Senior Frontend Engineer with 5+ years of experience building modern web applications
                using React, Next.js, TypeScript and cloud technologies. I enjoy solving real-world problems and
                building scalable, user-focused products.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {['Problem Solver', 'Team Player', 'Fast Learner', 'Product Mindset'].map((x) => (
                  <span className="rounded-full border border-[#27775a] px-3 py-1.5 text-[11px] text-[#59ecb0]" key={x}>
                    {x}
                  </span>
                ))}
              </div>
            </section>
            <section className={`${panel} p-5`}>
              <h2 className="text-[20px] font-bold">☆ &nbsp;Key Highlights</h2>
              <ul className="mt-4 space-y-3 text-[13px] text-[#c2d0c9]">
                <li>◉ Built and shipped real-world products</li>
                <li>◉ SaaS, POS and multi-tenant systems</li>
                <li>◉ Strong focus on performance and UX</li>
                <li>◉ Cross-functional collaboration</li>
                <li>◉ Continuous learning and technical depth</li>
              </ul>
            </section>
          </div>
          <div className="mt-4 grid gap-4 lg:grid-cols-[1.15fr_1fr_.8fr]">
            <section className={`${panel} p-5`} id="skills">
              <h2 className="text-[20px] font-bold">&lt;/&gt; &nbsp;Core Skills</h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {['Frontend', 'Backend', 'Tools & DevOps', 'Databases', 'Others'].map((x, i) => (
                  <span
                    className={`rounded-lg border px-3 py-2 text-[10px] ${i === 0 ? 'border-[#59ecb0] bg-[#59ecb0] text-black' : 'border-[#27775a]'}`}
                    key={x}
                  >
                    {x}
                  </span>
                ))}
              </div>
              <div className="mt-6 space-y-5">
                {skillRows.map(([s, p]) => (
                  <div key={s}>
                    <div className="flex justify-between text-[12px]">
                      <span>{s}</span>
                      <span>{p}</span>
                    </div>
                    <div className="mt-2 h-2 rounded-full bg-[#103a2d]">
                      <div className="h-full rounded-full bg-[#46eeb0]" style={{ width: p }} />
                    </div>
                  </div>
                ))}
              </div>
            </section>
            <section className={`${panel} p-5`} id="experience">
              <h2 className="text-[20px] font-bold">▣ &nbsp;Experience Timeline</h2>
              <div className="mt-5 space-y-5">
                {experience.map(([date, role, company, copy]) => (
                  <article className="border-l border-[#46eeb0] pl-5" key={role}>
                    <h3 className="text-[14px] font-bold">{role}</h3>
                    <p className="text-[12px] text-[#59ecb0]">{company}</p>
                    <time className="mt-1 block text-[10px] text-[#91a69d]">{date}</time>
                    <p className="mt-2 text-[11px] leading-[1.5] text-[#9fb2a9]">{copy}</p>
                  </article>
                ))}
              </div>
            </section>
            <div className="space-y-4">
              <section className={`${panel} p-5`} id="education">
                <h2 className="text-[18px] font-bold">▱ &nbsp;Education</h2>
                <p className="mt-4 text-[13px] font-semibold">Bachelor&apos;s Degree</p>
                <p className="mt-1 text-[11px] text-[#9fb2a9]">Electronics & Instrumentation · India</p>
              </section>
              <section className={`${panel} p-5`} id="certifications">
                <h2 className="text-[18px] font-bold">✿ &nbsp;Certifications</h2>
                <ul className="mt-4 space-y-3 text-[12px]">
                  <li>AWS / Cloud Fundamentals</li>
                  <li>Frontend Engineering</li>
                  <li>JavaScript & Algorithms</li>
                </ul>
              </section>
            </div>
          </div>
          <section className={`${panel} mt-4 flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between`}>
            <div>
              <h2 className="text-[18px] font-bold">“ Beyond Work</h2>
              <p className="mt-2 max-w-[760px] text-[12px] text-[#aebdb6]">
                I enjoy exploring new technologies, contributing to open source, writing technical articles and building
                side projects.
              </p>
            </div>
            <a
              className="rounded-full border border-[#59ecb0] px-5 py-3 text-[12px] font-semibold text-[#59ecb0]"
              href={siteConfig.contactHref}
            >
              Let&apos;s Connect →
            </a>
          </section>
        </article>
      </InnerPageBackdrop>
      <Footer />
    </>
  );
}
