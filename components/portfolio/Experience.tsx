import { experience } from '@/constants/data/experience.constants';
import { HOME_SECTION_HEADERS } from '@/constants/pages/home.constants';

import { SectionHeader } from './SectionHeader';

export const Experience = () => {
  return (
    <section
      className="mx-auto max-w-[1344px] pt-[150px] pb-[150px] max-[1380px]:mx-12 max-[650px]:mx-5 max-[650px]:pb-[100px]"
      id="experience"
    >
      <SectionHeader
        index={HOME_SECTION_HEADERS.experience.index}
        eyebrow={HOME_SECTION_HEADERS.experience.eyebrow}
        title={HOME_SECTION_HEADERS.experience.title}
      />
      <div className="border-t border-[#20362f]">
        {experience.map(([date, role, company, copy, current]) => (
          <article
            className="grid grid-cols-[.55fr_1.5fr_auto] gap-[45px] border-b border-[#20362f] py-[38px] max-[650px]:grid-cols-1 max-[650px]:gap-2"
            key={role}
          >
            <p className="font-mono text-[12px] text-[#71f6b5]">{date}</p>
            <div>
              <h3 className="mt-0 mb-[7px] text-2xl font-medium tracking-[-.03em]">{role}</h3>
              <span className="text-[14px] text-[#bdd0c7]">{company}</span>
              <p className="max-w-[640px] text-[16px] leading-[1.6] text-[#8fa29a]">{copy}</p>
            </div>
            {current && (
              <b className="h-max rounded-full border border-[#335346] px-[9px] py-1.5 font-mono text-[12px] text-[#71f6b5] uppercase max-[650px]:hidden">
                Current
              </b>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};
