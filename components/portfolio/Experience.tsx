import { experience } from '@/data/portfolio';
export function Experience() {
  return (
    <section
      className="mx-auto max-w-[1344px] pt-[150px] pb-[150px] max-[1380px]:mx-12 max-[650px]:mx-5 max-[650px]:pb-[100px]"
      id="experience"
    >
      <div className="mb-16 grid grid-cols-[1fr_1.7fr_1fr] items-end gap-10 max-[1000px]:grid-cols-[1fr_2fr] max-[650px]:grid-cols-1 max-[650px]:gap-[22px]">
        <div>
          <span className="mb-2.5 block font-mono text-[12px] text-[#71f6b5]">03</span>
          <p className="m-0 font-mono text-[12px] leading-[1.4] font-semibold tracking-[.12em] text-[#a5b7ae] uppercase">
            Experience
          </p>
        </div>
        <h2 className="m-0 max-w-[660px] text-[clamp(2.6rem,5vw,5.6rem)] leading-[.96] font-medium tracking-[-.055em]">
          From interfaces to systems.
        </h2>
      </div>
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
}
