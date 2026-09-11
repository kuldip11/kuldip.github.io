import Image from 'next/image';
import Link from 'next/link';

import { ExternalArrow } from './ExternalArrow';
export const About = () => {
  return (
    <section
      className="mx-auto grid max-w-[1344px] grid-cols-[1fr_1.45fr] gap-[110px] px-0 pt-10 pb-[150px] max-[1380px]:mx-12 max-[800px]:grid-cols-1 max-[800px]:gap-[30px] max-[650px]:mx-5 max-[650px]:pt-0 max-[650px]:pb-[100px]"
      id="about"
    >
      <div>
        <p className="m-0 font-mono text-[11px] leading-[1.4] font-semibold tracking-[.12em] text-[#a5b7ae] uppercase">
          About / 04
        </p>
        <h2 className="mt-7 mb-0 text-[clamp(2.6rem,5vw,5.6rem)] leading-[.96] font-medium tracking-[-.055em]">
          Engineering for the messy middle.
        </h2>
        <figure className="relative mt-16 aspect-[4/5] w-[min(380px,100%)] overflow-hidden rounded-[18px] border border-[#20362f] bg-[#0c1916] shadow-[inset_0_0_0_1px_#fff1]">
          <Image
            className="object-cover object-[center_25%] contrast-[1.04] saturate-[.78]"
            src="/kuldip.jpg"
            alt="Kuldip Kumar Sah, Senior Frontend Engineer"
            fill
            sizes="(max-width: 800px) 90vw, 380px"
          />
          <figcaption className="absolute bottom-3.5 left-3.5 rounded-[7px] bg-[#07110fd9] px-2.5 py-2 font-mono text-[9px] tracking-[.1em] text-[#cfe0d8] uppercase backdrop-blur-lg">
            Kuldip Kumar Sah · India
          </figcaption>
        </figure>
      </div>
      <div className="pt-9 max-[650px]:pt-0">
        <p className="text-[clamp(1.1rem,1.6vw,1.45rem)] leading-[1.62] text-[#9fb1a8]">
          I work where product ambition meets technical complexity—turning changing requirements, dense data and
          multi-role workflows into interfaces that remain clear and maintainable.
        </p>
        <p className="text-[clamp(1.1rem,1.6vw,1.45rem)] leading-[1.62] text-[#9fb1a8]">
          My experience spans fintech onboarding, proptech visualization, enterprise SaaS and restaurant operations. I
          collaborate closely with product, design and backend teams, and I&apos;m equally comfortable shaping
          architecture or chasing the last meaningful performance bottleneck.
        </p>
        <Link className="mt-[25px] inline-block border-b border-[#71f6b5] pb-[7px] text-[13px]" href="/about">
          More about how I work <ExternalArrow />
        </Link>
      </div>
    </section>
  );
};
