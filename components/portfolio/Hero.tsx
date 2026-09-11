import Image from 'next/image';

import { ExternalArrow } from './ExternalArrow';

const expertise = [
  ['5+ Years', '◫'],
  ['React / Next.js', '⚛'],
  ['TypeScript', 'TS'],
  ['Frontend Architecture', '◇'],
  ['Performance', '↗'],
  ['Testing & CI/CD', '⚙'],
  ['Full-stack Collaboration', '◎'],
] as const;

export function Hero() {
  return (
    <section
      className="relative mx-auto grid max-w-[1440px] grid-cols-[minmax(0,1.05fr)_minmax(420px,.95fr)] items-center gap-10 overflow-hidden px-12 pt-16 pb-12 max-[1050px]:grid-cols-1 max-[650px]:px-5 max-[650px]:pt-10"
      id="top"
    >
      <div className="pointer-events-none absolute top-[-180px] right-[-120px] size-[560px] rounded-full bg-[#26f0a81c] blur-[120px]" />
      <div className="relative z-10">
        <p className="m-0 font-mono text-[13px] leading-[1.4] font-semibold tracking-[.16em] text-[#71f6b5] uppercase max-[650px]:text-[12px]">
          Senior Frontend Engineer
        </p>

        <h1 className="my-6 max-w-[820px] text-[clamp(3.35rem,5.2vw,6.4rem)] leading-[.95] font-semibold tracking-[-.06em] max-[650px]:text-[clamp(3rem,14vw,4.5rem)]">
          I build scalable <span className="text-[#71f6b5]">React</span> products from interface to production.
        </h1>

        <p className="max-w-[760px] text-[clamp(1.08rem,1.28vw,1.28rem)] leading-[1.7] text-[#c0cec7] max-[650px]:text-[1.04rem]">
          Hi, I&apos;m <strong className="font-semibold text-[#f2f4ee]">Kuldip Kumar Sah</strong> — a Senior Frontend
          Engineer focused on React, Next.js, TypeScript, frontend architecture, performance, and product-quality user
          experiences. I also work comfortably across APIs, backend integration, testing, and deployment when needed.
        </p>

        <ul className="mt-7 flex max-w-[780px] list-none flex-wrap gap-2.5 p-0" aria-label="Core expertise">
          {expertise.map(([item, icon]) => (
            <li
              className="inline-flex items-center gap-2 rounded-full border border-[#2b5b4a] bg-[#0b1915cc] px-4 py-2.5 text-[13px] font-medium text-[#d8e4de] shadow-[inset_0_0_18px_rgba(113,246,181,.025)]"
              key={item}
            >
              <span
                className="grid min-w-5 place-items-center font-mono text-[12px] font-bold text-[#71f6b5]"
                aria-hidden="true"
              >
                {icon}
              </span>
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-9 flex flex-wrap items-center gap-5">
          <a
            className="inline-flex items-center gap-8 rounded-full bg-[#71f6b5] px-6 py-4 text-[15px] font-bold text-[#07110f] transition hover:-translate-y-0.5 hover:shadow-[0_12px_30px_#71f6b524]"
            href="#work"
          >
            View my work <span aria-hidden="true">↓</span>
          </a>
          <a
            className="inline-flex items-center gap-2 text-[15px] font-medium transition-colors hover:text-[#71f6b5]"
            href="/resume"
          >
            View résumé <ExternalArrow />
          </a>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-[590px] max-[1050px]:max-w-[680px]">
        <div className="absolute inset-x-[8%] top-[8%] bottom-[2%] rounded-[38px] border border-[#71f6b53d] bg-[linear-gradient(145deg,rgba(17,55,44,.78),rgba(4,18,15,.2))] shadow-[0_0_90px_rgba(55,255,179,.12)]" />
        <div className="absolute top-[12%] left-[3%] h-[74%] w-[74%] rounded-[42px] border border-[#71f6b526] [background-image:radial-gradient(#71f6b52f_1px,transparent_1px)] [background-size:22px_22px] opacity-80" />
        <figure className="relative mx-auto aspect-[4/5] w-[92%] overflow-hidden rounded-[34px]">
          <Image
            className="object-cover object-[center_19%] brightness-[.86] contrast-[1.13] grayscale saturate-0"
            src="/kuldip.jpg"
            alt="Kuldip Kumar Sah, Senior Frontend Engineer"
            fill
            priority
            sizes="(max-width: 1050px) 90vw, 560px"
          />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_42%,#07110f_98%)]" />
          <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_80px_rgba(113,246,181,.13)]" />
        </figure>

        <div className="absolute right-[-1%] bottom-[11%] rounded-2xl border border-[#71f6b54a] bg-[#081712e8] px-5 py-4 backdrop-blur-xl max-[650px]:right-0 max-[650px]:bottom-[5%]">
          <p className="m-0 font-mono text-[12px] leading-6 text-[#9ff7cb] italic">Build · Ship · Improve · Repeat</p>
        </div>
      </div>
    </section>
  );
}
