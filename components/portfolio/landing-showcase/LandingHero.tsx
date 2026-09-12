import Image from 'next/image';

import { ExpertiseIcon } from '@/components/portfolio/ExpertiseIcon';
import { HOME_EXPERTISE } from '@/constants/pages/home.constants';

import { SectionLabel } from './SectionLabel';

const ExpertiseChips = ({ mobile = false }: { mobile?: boolean }) => (
  <ul
    className={
      mobile
        ? 'col-span-2 mt-1 flex list-none flex-wrap gap-2 p-0 hero:hidden'
        : 'mt-5 flex max-w-[790px] list-none flex-wrap gap-2.5 p-0 max-hero:hidden'
    }
    aria-label="Core expertise"
  >
    {HOME_EXPERTISE.map(({ label, icon }) => (
      <li
        className={
          mobile
            ? 'inline-flex min-h-[38px] items-center gap-2 rounded-full border border-[#176f50] bg-[#071814d9] px-3 text-[11px] font-medium text-[#e3ebe7]'
            : 'inline-flex min-h-[42px] items-center gap-2 rounded-full border border-[#176f50] bg-[#071814d9] px-4 text-[13px] font-medium text-[#e3ebe7] shadow-[inset_0_0_18px_rgba(85,239,175,.02)]'
        }
        key={label}
      >
        <span className="flex size-5 shrink-0 items-center justify-center text-[#52ecac]" aria-hidden="true">
          <ExpertiseIcon icon={icon} />
        </span>
        <span>{label}</span>
      </li>
    ))}
  </ul>
);

export const LandingHero = () => (
  <section className="relative w-full px-5 pt-6 pb-4 sm:px-8 desktop:px-12" id="top">
    <div className="grid grid-cols-[minmax(0,.58fr)_minmax(0,.42fr)] items-start gap-0 hero:grid-cols-[minmax(0,1.02fr)_minmax(340px,.98fr)] hero:items-center hero:gap-3 desktop:grid-cols-[minmax(0,1.04fr)_minmax(540px,.96fr)] desktop:gap-4">
      <div className="relative z-10 pt-3 hero:pt-5 desktop:pt-8">
        <SectionLabel>Senior Frontend Engineer</SectionLabel>
        <h1 className="mt-4 mb-4 max-w-[800px] text-[clamp(2.05rem,7.3vw,3.05rem)] leading-[.96] font-bold tracking-[-.055em] hero:text-[clamp(2.65rem,5.2vw,4rem)] desktop:text-[clamp(3.35rem,5.15vw,5.25rem)]">
          I build scalable <span className="text-accent">React</span> products from interface to production.
        </h1>
        <p className="max-w-[780px] text-[13px] leading-[1.48] text-[#d6ded9] hero:text-[15px] desktop:text-[clamp(1.05rem,1.26vw,1.24rem)] desktop:leading-[1.55]">
          Hi, I&apos;m <strong className="font-semibold text-white">Kuldip Kumar Sah</strong> — a Senior Frontend
          Engineer focused on React, Next.js, TypeScript, frontend architecture, performance, and product-quality user
          experiences. I also work comfortably across APIs, backend integration, testing, and deployment when needed.
        </p>
        <ExpertiseChips />
      </div>

      <div className="relative top-[-62px] isolate -mb-[62px] hidden h-[clamp(510px,36vw,610px)] w-full desktop:block">
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

      <div className="relative top-1 mx-auto block h-[430px] w-full hero:h-[500px] desktop:hidden">
        <div className="relative h-full">
          <Image
            src="/kuldip-hero-composite-v4.png"
            alt="Kuldip Kumar Sah, Senior Frontend Engineer"
            fill
            priority
            sizes="(max-width: 699px) 46vw, 48vw"
            className="origin-top scale-[1.04] [mask-image:linear-gradient(to_right,transparent_0%,black_15%,black_94%,transparent_100%),linear-gradient(to_bottom,black_0%,black_72%,rgba(0,0,0,.72)_84%,transparent_98%)] [mask-composite:intersect] object-cover object-[62%_top] [-webkit-mask-composite:source-in] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_15%,black_94%,transparent_100%),linear-gradient(to_bottom,black_0%,black_72%,rgba(0,0,0,.72)_84%,transparent_98%)] hero:scale-100 hero:object-[59%_top]"
          />
          <div className="absolute top-[16%] right-[3%] rotate-[-5deg] font-serif text-[14px] leading-[1.25] text-[#9bf4cb] italic hero:right-[15%] hero:text-[17px]">
            Build
            <br />
            Ship
            <br />
            Improve
            <br />
            Repeat
          </div>
          <div className="absolute top-[40%] right-[-5%] w-[92px] rounded-[12px] border border-[#35b77f82] bg-[#061611e6] p-3 text-[12px] leading-[1.4] text-[#dbe5e0] hero:right-0 hero:w-[112px] hero:p-4 hero:text-[14px]">
            <span className="text-[24px] text-[#4ee9a7]">“</span>
            <p>Better interfaces create a brighter tomorrow.</p>
          </div>
        </div>
      </div>
      <ExpertiseChips mobile />
    </div>
  </section>
);
