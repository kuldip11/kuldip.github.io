import { stack } from '@/data/portfolio';
export function TechStack() {
  return (
    <section
      className="mx-auto max-w-[1344px] pb-[150px] max-[1380px]:mx-12 max-[650px]:mx-5 max-[650px]:pb-[100px]"
      aria-labelledby="stack-title"
    >
      <p className="m-0 font-mono text-[11px] leading-[1.4] font-semibold tracking-[.12em] text-[#a5b7ae] uppercase">
        The working stack
      </p>
      <h2
        id="stack-title"
        className="my-6 mb-16 max-w-[850px] text-[clamp(2.6rem,5vw,5.6rem)] leading-[.96] font-medium tracking-[-.055em]"
      >
        Tools change. Engineering judgment compounds.
      </h2>
      <div className="grid grid-cols-3 border-t border-l border-[#20362f] max-[800px]:grid-cols-2 max-[650px]:grid-cols-1">
        {stack.map(([title, copy]) => (
          <div
            className="min-h-[180px] border-r border-b border-[#20362f] p-[30px] max-[650px]:min-h-[150px]"
            key={title}
          >
            <span className="font-mono text-[10px] tracking-[.11em] text-[#71f6b5] uppercase">{title}</span>
            <p className="mt-12 mb-0 leading-[1.6] text-[#b6c5be] max-[650px]:mt-[34px]">{copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
