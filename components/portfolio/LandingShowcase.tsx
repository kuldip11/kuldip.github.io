import Image from 'next/image';
import Link from 'next/link';

const expertise = [
  ['5+ Years', '▣'],
  ['React / Next.js', '⚛'],
  ['TypeScript', 'TS'],
  ['Frontend Architecture', '◇'],
  ['Performance', '◔'],
  ['Testing & CI/CD', '⚙'],
  ['Full-stack Collaboration', '◎'],
] as const;

const capabilities = [
  ['</>', 'Build scalable products', 'From idea to a polished, production-ready frontend application.'],
  ['▱', 'Design maintainable architecture', 'Reusable UI systems and clean, maintainable codebases.'],
  ['ϟ', 'Optimize performance', 'Fast, accessible and delightful user experiences.'],
  ['☁', 'Work end-to-end', 'Integrate with APIs, testing, deployment and iterate based on real user feedback.'],
] as const;

const tools = [
  ['React', 'react', '61DAFB'],
  ['Next.js', 'nextdotjs', 'FFFFFF'],
  ['TypeScript', 'typescript', '3178C6'],
  ['JavaScript', 'javascript', 'F7DF1E'],
  ['Node.js', 'nodedotjs', '5FA04E'],
  ['PostgreSQL', 'postgresql', '4169E1'],
  ['Tailwind CSS', 'tailwindcss', '06B6D4'],
  ['Docker', 'docker', '2496ED'],
  ['GitHub', 'github', 'FFFFFF'],
  ['Git', 'git', 'F05032'],
  ['Vercel', 'vercel', 'FFFFFF'],
  ['Figma', 'figma', 'F24E1E'],
] as const;

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="m-0 font-mono text-[11px] font-semibold tracking-[.22em] text-[#56e9ad] uppercase sm:text-[12px]">
      {children}
    </p>
  );
}

function ProjectMock({ variant }: { variant: 'saas' | 'fintech' }) {
  if (variant === 'saas') {
    return (
      <div className="relative h-full min-h-[96px] overflow-hidden rounded-[12px] border border-[#1f4d3c] bg-[#0a1613] p-2">
        <div className="absolute inset-x-2 top-2 h-2 rounded-full bg-[#17352c]" />
        <div className="mt-4 grid h-[68px] grid-cols-[.42fr_1fr] gap-1.5">
          <div className="rounded-md bg-[#13251f] p-1.5">
            <div className="mb-1 h-1.5 w-8 rounded bg-[#3ee7a27a]" />
            <div className="mb-1 h-1 w-10 rounded bg-[#395149]" />
            <div className="mb-1 h-1 w-7 rounded bg-[#395149]" />
            <div className="h-1 w-9 rounded bg-[#395149]" />
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            <div className="rounded-md bg-[#13251f] p-1.5">
              <div className="h-full rounded bg-[linear-gradient(180deg,#17362d,#10201b)]" />
            </div>
            <div className="rounded-md bg-[#13251f] p-1.5">
              <div className="mt-2 h-1 w-7 rounded bg-[#57ebb0]" />
              <div className="mt-1 h-1 w-10 rounded bg-[#365047]" />
            </div>
            <div className="col-span-2 rounded-md bg-[#13251f] p-1.5">
              <div className="h-full rounded bg-[linear-gradient(90deg,#2a5747_20%,#1d3b31_20%_40%,#315f4e_40%_62%,#1f4437_62%)]" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex h-full min-h-[96px] items-end justify-center overflow-hidden rounded-[12px] border border-[#1f4d3c] bg-[radial-gradient(circle_at_50%_0%,rgba(84,247,178,.13),transparent_58%),#0a1613] px-4 pt-3">
      <div className="relative z-10 h-[82px] w-[45px] rotate-[-4deg] rounded-[9px] border border-[#375d50] bg-[#101d1a] p-1 shadow-xl">
        <div className="h-full rounded-[6px] bg-[linear-gradient(160deg,#14241f,#162f28_50%,#101a17)] p-1.5">
          <div className="h-2 w-5 rounded bg-[#48eaa7]" />
          <div className="mt-2 h-8 rounded bg-[#24473a]" />
        </div>
      </div>
      <div className="relative z-20 -ml-1 h-[91px] w-[50px] rotate-[3deg] rounded-[10px] border border-[#3c6858] bg-[#0e1c18] p-1 shadow-xl">
        <div className="h-full rounded-[7px] bg-[linear-gradient(160deg,#13261f,#1a3b30_55%,#101a17)] p-1.5">
          <div className="h-2 w-5 rounded bg-[#48eaa7]" />
          <div className="mt-2 h-9 rounded bg-[#255142]" />
        </div>
      </div>
    </div>
  );
}

export function LandingShowcase() {
  return (
    <main id="main-content" className="relative overflow-x-clip bg-[#030d0a] text-[#f5f7f3]">
      <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(circle_at_12%_9%,rgba(36,255,177,.13),transparent_22%),radial-gradient(circle_at_83%_32%,rgba(52,244,177,.12),transparent_30%),radial-gradient(circle_at_95%_86%,rgba(52,244,177,.1),transparent_22%)] opacity-35" />
      <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(rgba(78,241,181,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(78,241,181,.10)_1px,transparent_1px)] [background-size:72px_72px] opacity-[.12]" />

      <section className="relative w-full px-5 pt-6 pb-4 min-[1100px]:px-12 sm:px-8" id="top">
        <div className="grid grid-cols-[minmax(0,.58fr)_minmax(0,.42fr)] items-start gap-0 min-[700px]:grid-cols-[minmax(0,1.02fr)_minmax(340px,.98fr)] min-[700px]:items-center min-[700px]:gap-3 min-[1100px]:grid-cols-[minmax(0,1.04fr)_minmax(540px,.96fr)] min-[1100px]:gap-4">
          <div className="relative z-10 pt-3 min-[700px]:pt-5 min-[1100px]:pt-8">
            <SectionLabel>Senior Frontend Engineer</SectionLabel>
            <h1 className="mt-4 mb-4 max-w-[800px] text-[clamp(2.05rem,7.3vw,3.05rem)] leading-[.96] font-bold tracking-[-.055em] min-[700px]:text-[clamp(2.65rem,5.2vw,4rem)] min-[1100px]:text-[clamp(3.35rem,5.15vw,5.25rem)]">
              I build scalable <span className="text-[#59ecb0]">React</span> products from interface to production.
            </h1>
            <p className="max-w-[780px] text-[13px] leading-[1.48] text-[#d6ded9] min-[700px]:text-[15px] min-[1100px]:text-[clamp(1.05rem,1.26vw,1.24rem)] min-[1100px]:leading-[1.55]">
              Hi, I&apos;m <strong className="font-semibold text-white">Kuldip Kumar Sah</strong> — a Senior Frontend
              Engineer focused on React, Next.js, TypeScript, frontend architecture, performance, and product-quality
              user experiences. I also work comfortably across APIs, backend integration, testing, and deployment when
              needed.
            </p>

            <ul
              className="mt-5 flex max-w-[790px] list-none flex-wrap gap-2.5 p-0 max-[699px]:hidden"
              aria-label="Core expertise"
            >
              {expertise.map(([label, icon]) => (
                <li
                  className="inline-flex min-h-[42px] items-center gap-2 rounded-full border border-[#176f50] bg-[#071814d9] px-4 text-[13px] font-medium text-[#e3ebe7] shadow-[inset_0_0_18px_rgba(85,239,175,.02)]"
                  key={label}
                >
                  <span
                    className="grid min-w-5 place-items-center font-mono text-[12px] font-bold text-[#52ecac]"
                    aria-hidden="true"
                  >
                    {icon}
                  </span>
                  {label}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative top-[-62px] isolate -mb-[62px] hidden h-[clamp(510px,36vw,610px)] w-full min-[1100px]:block">
            <figure className="absolute inset-[-3%_-4%_-2%_-9%] -z-10 m-0">
              <Image
                src="/kuldip-hero-composite-v4.png"
                alt="Kuldip Kumar Sah, Senior Frontend Engineer"
                fill
                priority
                sizes="52vw"
                className="origin-top scale-[1.27] [mask-image:linear-gradient(to_right,transparent_0%,black_21%,black_90%,transparent_100%),linear-gradient(to_bottom,black_0%,black_58%,rgba(0,0,0,.9)_64%,rgba(0,0,0,.55)_70%,rgba(0,0,0,.18)_76%,transparent_82%)] [mask-composite:intersect] object-cover object-[46%_top] [-webkit-mask-composite:source-in] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_21%,black_90%,transparent_100%),linear-gradient(to_bottom,black_0%,black_58%,rgba(0,0,0,.9)_64%,rgba(0,0,0,.55)_70%,rgba(0,0,0,.18)_76%,transparent_82%)]"
              />
            </figure>

            <div className="absolute top-[29%] right-[18%] z-10 rotate-[-5deg] font-serif text-[19px] leading-[1.3] text-[#9bf4cb] italic opacity-90 [text-shadow:0_0_14px_rgba(68,239,170,.5)]">
              Build
              <br />
              Ship
              <br />
              Improve
              <br />
              Repeat
              <span className="mt-1 block h-px w-14 rotate-[-8deg] bg-[#63eeb1]" />
            </div>

            <div className="absolute top-[17%] right-0 z-20 w-[132px] rounded-[18px] border border-[#35b77f82] bg-[#061611e6] px-5 py-5 shadow-[0_0_42px_rgba(58,232,166,.13),inset_0_0_25px_rgba(66,237,171,.04)] backdrop-blur-md">
              <span className="text-[30px] leading-none text-[#4ee9a7]">“</span>
              <p className="mt-1 mb-3 text-[15px] leading-[1.5] text-[#dbe5e0]">
                Better interfaces create a brighter tomorrow.
              </p>
              <span className="block h-[2px] w-5 bg-[#4fe8a7]" />
            </div>
          </div>

          <div className="relative top-1 mx-auto block h-[430px] w-full min-[700px]:h-[500px] min-[1100px]:hidden">
            <div className="relative h-full">
              <Image
                src="/kuldip-hero-composite-v4.png"
                alt="Kuldip Kumar Sah, Senior Frontend Engineer"
                fill
                priority
                sizes="(max-width: 699px) 46vw, 48vw"
                className="origin-top scale-[1.04] [mask-image:linear-gradient(to_right,transparent_0%,black_15%,black_94%,transparent_100%),linear-gradient(to_bottom,black_0%,black_72%,rgba(0,0,0,.72)_84%,transparent_98%)] [mask-composite:intersect] object-cover object-[62%_top] [-webkit-mask-composite:source-in] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_15%,black_94%,transparent_100%),linear-gradient(to_bottom,black_0%,black_72%,rgba(0,0,0,.72)_84%,transparent_98%)] min-[700px]:scale-100 min-[700px]:object-[59%_top]"
              />
              <div className="absolute top-[16%] right-[3%] rotate-[-5deg] font-serif text-[14px] leading-[1.25] text-[#9bf4cb] italic min-[700px]:right-[15%] min-[700px]:text-[17px]">
                Build
                <br />
                Ship
                <br />
                Improve
                <br />
                Repeat
              </div>
              <div className="absolute top-[40%] right-[-5%] w-[92px] rounded-[12px] border border-[#35b77f82] bg-[#061611e6] p-3 text-[12px] leading-[1.4] text-[#dbe5e0] min-[700px]:right-0 min-[700px]:w-[112px] min-[700px]:p-4 min-[700px]:text-[14px]">
                <span className="text-[24px] text-[#4ee9a7]">“</span>
                <p>Better interfaces create a brighter tomorrow.</p>
              </div>
            </div>
          </div>

          <ul
            className="col-span-2 mt-1 flex list-none flex-wrap gap-2 p-0 min-[700px]:hidden"
            aria-label="Core expertise"
          >
            {expertise.map(([label, icon]) => (
              <li
                className="inline-flex min-h-[38px] items-center gap-2 rounded-full border border-[#176f50] bg-[#071814d9] px-3 text-[11px] font-medium text-[#e3ebe7]"
                key={label}
              >
                <span
                  className="grid min-w-5 place-items-center font-mono text-[15px] font-bold text-[#52ecac]"
                  aria-hidden="true"
                >
                  {icon}
                </span>
                {label}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className="relative grid w-full grid-cols-1 gap-3 px-5 pb-4 min-[900px]:grid-cols-[1.08fr_.92fr] min-[900px]:gap-4 min-[1100px]:grid-cols-[1.46fr_1fr] min-[1100px]:px-12 sm:px-8"
        aria-label="Capabilities and tech stack"
      >
        <article className="rounded-[18px] border border-[#176746] bg-[#061612e8] p-4 shadow-[0_18px_60px_rgba(0,0,0,.22)] backdrop-blur-sm">
          <div className="mb-3 flex items-center justify-between gap-4">
            <h2 className="m-0 text-[clamp(1.8rem,2.3vw,2.35rem)] font-semibold tracking-[-.045em]">What I can do</h2>
            <span className="hidden font-mono text-[10px] tracking-[.24em] text-[#81a89a] uppercase sm:block">
              Turn ideas into impact
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2.5 min-[1100px]:grid-cols-4">
            {capabilities.map(([icon, title, copy]) => (
              <div
                className="min-h-[142px] rounded-[14px] border border-[#1f4e3c] bg-[#0a1b16] p-3 min-[900px]:min-h-[150px] min-[1100px]:min-h-[168px] min-[1100px]:p-4"
                key={title}
              >
                <span
                  className="font-mono text-[28px] font-bold text-[#55eeb0] min-[1100px]:text-[24px]"
                  aria-hidden="true"
                >
                  {icon}
                </span>
                <h3 className="mt-3 mb-1.5 text-[13px] leading-[1.18] font-semibold tracking-[-.02em] min-[700px]:text-[15px] min-[1100px]:text-[16px]">
                  {title}
                </h3>
                <p className="m-0 text-[11px] leading-[1.45] text-[#aebdb6] min-[700px]:text-[12px] min-[1100px]:text-[13px] min-[1100px]:leading-[1.48]">
                  {copy}
                </p>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-[18px] border border-[#176746] bg-[#061612e8] p-4 shadow-[0_18px_60px_rgba(0,0,0,.22)] backdrop-blur-sm">
          <div className="mb-3 flex items-center justify-between gap-4">
            <h2 className="m-0 text-[clamp(1.8rem,2.3vw,2.35rem)] font-semibold tracking-[-.045em]">My Tech Stack</h2>
            <span className="hidden font-mono text-[10px] tracking-[.24em] text-[#81a89a] uppercase sm:block">
              Tools I love
            </span>
          </div>
          <div className="grid grid-cols-6 gap-1.5 min-[900px]:grid-cols-5 min-[1100px]:grid-cols-6 min-[1100px]:gap-2">
            {tools.map(([name, slug, color]) => (
              <div
                className="group grid min-h-[72px] place-items-center rounded-[10px] border border-[#1f4e3c] bg-[#0a1b16] px-1 py-2 text-center transition hover:-translate-y-0.5 hover:border-[#4eeaaa78] min-[1100px]:min-h-[78px] min-[1100px]:rounded-[12px] min-[1100px]:px-2"
                key={name}
              >
                <img
                  className="h-8 w-8 object-contain transition-transform group-hover:scale-110 min-[1100px]:h-7 min-[1100px]:w-7"
                  src={`https://cdn.simpleicons.org/${slug}/${color}`}
                  alt=""
                  width="28"
                  height="28"
                  loading="lazy"
                />
                <span className="mt-1 text-[9px] font-medium text-[#e7ece9] min-[1100px]:text-[11px]">{name}</span>
              </div>
            ))}
            <p className="col-span-3 hidden min-h-[72px] items-center justify-center gap-3 rounded-[10px] border border-[#1f4e3c] text-[12px] text-[#cbd6d1] min-[900px]:flex min-[1100px]:hidden">
              <span className="text-[28px] text-[#52ecac]">＋</span>And more tools
              <br />I use
            </p>
          </div>
          <p className="mt-2.5 mb-0 text-center text-[11px] text-[#9caea6] max-[1099px]:hidden">
            <span className="text-[#52ecac]">＋</span> And more tools I use
          </p>
        </article>
      </section>

      <section
        className="relative grid w-full grid-cols-2 gap-3 px-5 pb-5 min-[900px]:grid-cols-[1.54fr_.74fr_.74fr] min-[900px]:gap-4 min-[1100px]:grid-cols-[1.54fr_.48fr_.48fr] min-[1100px]:px-12 sm:px-8"
        id="work"
      >
        <article className="col-span-2 rounded-[18px] border border-[#176746] bg-[#061612e8] p-4 shadow-[0_18px_60px_rgba(0,0,0,.2)] min-[900px]:col-span-1">
          <div className="mb-3 flex items-end justify-between gap-4">
            <div>
              <SectionLabel>Featured Projects</SectionLabel>
              <h2 className="mt-1 mb-0 text-[clamp(2rem,2.8vw,3rem)] leading-none font-semibold tracking-[-.05em] max-[699px]:hidden">
                Real projects. Real impact.
              </h2>
            </div>
            <Link className="hidden text-[13px] font-medium text-[#57eeb0] hover:text-white sm:block" href="/projects">
              View all projects&nbsp; →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Link
              href="/projects/servora"
              className="group grid min-h-[132px] grid-cols-[.42fr_1fr] gap-3 rounded-[14px] border border-[#1f4e3c] bg-[#0a1b16] p-3 transition hover:border-[#4ae7a36b]"
            >
              <ProjectMock variant="saas" />
              <div className="flex min-w-0 flex-col justify-center">
                <span className="mb-1 w-max rounded-full border border-[#27775a] px-2 py-0.5 text-[10px] text-[#70eeb7]">
                  SaaS / POS
                </span>
                <h3 className="m-0 text-[16px] font-semibold">Servora</h3>
                <p className="my-1 text-[12px] leading-[1.4] text-[#aab9b2]">
                  Multi-app restaurant platform with POS, kitchen, waiter, customer and admin workflows.
                </p>
                <span className="mt-auto text-[11px] font-medium text-[#57eeb0]">View project&nbsp; →</span>
              </div>
            </Link>

            <Link
              href="/projects/mapbox-performance"
              className="group grid min-h-[132px] grid-cols-[.42fr_1fr] gap-3 rounded-[14px] border border-[#1f4e3c] bg-[#0a1b16] p-3 transition hover:border-[#4ae7a36b]"
            >
              <ProjectMock variant="fintech" />
              <div className="flex min-w-0 flex-col justify-center">
                <span className="mb-1 w-max rounded-full border border-[#27775a] px-2 py-0.5 text-[10px] text-[#70eeb7]">
                  Performance
                </span>
                <h3 className="m-0 text-[16px] font-semibold">Mapbox at 100K+ points</h3>
                <p className="my-1 text-[12px] leading-[1.4] text-[#aab9b2]">
                  Dense geospatial UI engineered for fluid interaction across 15+ layers.
                </p>
                <span className="mt-auto text-[11px] font-medium text-[#57eeb0]">View project&nbsp; →</span>
              </div>
            </Link>
          </div>
        </article>

        <article className="rounded-[18px] border border-[#176746] bg-[#071813e8] p-4" id="experience">
          <SectionLabel>Experience</SectionLabel>
          <div className="mt-3 flex items-start gap-3">
            <span className="grid size-9 shrink-0 place-items-center rounded-full border border-[#2a7659] text-[18px] text-[#55eeb0]">
              ▣
            </span>
            <h2 className="m-0 text-[20px] leading-[1.12] font-semibold tracking-[-.03em]">
              A journey of growth and impact.
            </h2>
          </div>
          <p className="mt-4 text-[12px] leading-[1.5] text-[#aebdb6]">
            From building features to owning products, I&apos;ve worked across diverse teams and challenging problems.
          </p>
          <a className="mt-4 inline-flex text-[12px] font-medium text-[#55eeb0]" href="#experience-detail">
            View timeline&nbsp; →
          </a>
        </article>

        <article
          className="rounded-[18px] border border-[#176746] bg-[radial-gradient(circle_at_100%_100%,rgba(62,236,167,.12),transparent_45%),#071813e8] p-4"
          id="approach"
        >
          <SectionLabel>My Approach</SectionLabel>
          <div className="mt-3 flex items-start gap-3">
            <span className="grid size-9 shrink-0 place-items-center rounded-full border border-[#2a7659] text-[18px] text-[#55eeb0]">
              ◎
            </span>
            <h2 className="m-0 text-[20px] leading-[1.12] font-semibold tracking-[-.03em]">
              Thoughtful solutions, lasting results.
            </h2>
          </div>
          <p className="mt-4 text-[12px] leading-[1.5] text-[#aebdb6]">
            I care about user needs, clean architecture, accessibility and measurable impact.
          </p>
          <a className="mt-4 inline-flex text-[12px] font-medium text-[#55eeb0]" href="/about">
            Learn more&nbsp; →
          </a>
        </article>
      </section>

      <div id="experience-detail" className="sr-only">
        Detailed experience is available from the Experience navigation and résumé page.
      </div>
    </main>
  );
}
