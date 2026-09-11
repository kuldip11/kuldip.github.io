import { principles } from '@/constants/data/portfolio.constants';
import { HOME_SECTION_HEADERS } from '@/constants/pages/home.constants';

import { SectionHeader } from './SectionHeader';

export const Approach = () => {
  return (
    <section
      className="bg-[#f2f4ee] px-[max(48px,calc((100vw-1344px)/2))] py-[140px] text-[#07110f] max-[650px]:px-5 max-[650px]:py-[95px]"
      id="approach"
    >
      <SectionHeader
        index={HOME_SECTION_HEADERS.approach.index}
        eyebrow={HOME_SECTION_HEADERS.approach.eyebrow}
        title={HOME_SECTION_HEADERS.approach.title}
        theme="light"
      />
      <div className="grid grid-cols-2 border-t border-[#bdc8be] max-[650px]:grid-cols-1">
        {principles.map(([label, title, copy], index) => (
          <article
            className={`border-b border-[#bdc8be] py-[46px] pb-[70px] ${index % 2 === 0 ? 'border-r pr-10 max-[650px]:border-r-0 max-[650px]:pr-0' : 'pl-[54px] max-[650px]:pl-0'} max-[650px]:py-9 max-[650px]:pb-[50px]`}
            key={label}
          >
            <span className="font-mono text-[12px] tracking-[.1em] text-[#087a4b]">{label}</span>
            <h3 className="mt-[50px] mb-3.5 text-[clamp(1.8rem,3vw,3.5rem)] font-medium tracking-[-.045em] max-[650px]:mt-[34px]">
              {title}
            </h3>
            <p className="max-w-[540px] text-[16px] leading-[1.65] text-[#526159]">{copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
};
