const capabilities = [
  {
    number: '01',
    title: 'PRODUCT FRONTEND',
    copy: 'Complex React & Next.js applications, responsive UI and reusable component systems.',
    stack: 'React · Next.js · TypeScript',
  },
  {
    number: '02',
    title: 'ARCHITECTURE & SCALE',
    copy: 'Maintainable frontend architecture for multi-role products, monorepos and enterprise workflows.',
    stack: 'Architecture · RBAC · Monorepos',
  },
  {
    number: '03',
    title: 'PERFORMANCE & DATA UI',
    copy: 'Fast experiences for dense data, maps and interaction-heavy interfaces at production scale.',
    stack: 'Mapbox · Core Web Vitals · SSR',
  },
  {
    number: '04',
    title: 'FULL-STACK DELIVERY',
    copy: 'Enough backend depth to own typed APIs, data flows, testing and production delivery end to end.',
    stack: 'Bun · PostgreSQL · Redis · CI/CD',
  },
] as const;

export function SystemCanvas() {
  return (
    <aside
      className="overflow-hidden rounded-[22px] border border-[#223b33] bg-[#0c1916] shadow-[0_24px_80px_#0003]"
      aria-labelledby="capability-title"
    >
      <div className="flex items-center justify-between border-b border-[#223b33] px-5 py-4 font-mono text-[10px] font-semibold tracking-[.12em] uppercase">
        <span id="capability-title" className="text-[#a5b7ae]">
          What I can own
        </span>
        <span className="text-[#71f6b5]">
          <i className="mr-[7px] inline-block size-[5px] rounded-full bg-current" />
          End to end
        </span>
      </div>

      <div className="grid grid-cols-2 max-[520px]:grid-cols-1">
        {capabilities.map((capability, index) => (
          <article
            className={`group min-h-[205px] p-6 transition-colors hover:bg-[#10201c] ${
              index % 2 === 0 ? 'border-r border-[#223b33] max-[520px]:border-r-0' : ''
            } ${index < 2 ? 'border-b border-[#223b33]' : 'max-[520px]:border-b max-[520px]:border-[#223b33]'} ${
              index === capabilities.length - 1 ? 'max-[520px]:border-b-0' : ''
            }`}
            key={capability.title}
          >
            <div className="mb-8 flex items-center justify-between font-mono text-[9px] tracking-[.1em] uppercase">
              <span className="text-[#71f6b5]">{capability.number}</span>
              <span className="text-[#527067] transition-colors group-hover:text-[#789087]">Capability</span>
            </div>
            <h2 className="m-0 font-mono text-[11px] font-bold tracking-[.07em] text-[#e2ece7]">{capability.title}</h2>
            <p className="mt-3 mb-5 text-[13px] leading-[1.55] text-[#8fa29a]">{capability.copy}</p>
            <p className="m-0 font-mono text-[9px] leading-[1.55] text-[#6f8b80]">{capability.stack}</p>
          </article>
        ))}
      </div>

      <div className="border-t border-[#223b33] bg-[#0a1512] px-5 py-4">
        <p className="m-0 text-[12px] leading-[1.6] text-[#91a59b]">
          <span className="font-semibold text-[#dbe7e0]">Typical ownership:</span> product requirement → technical
          design → implementation → tests → performance → release.
        </p>
      </div>
    </aside>
  );
}
