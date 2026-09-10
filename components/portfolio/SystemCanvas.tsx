function SystemNode({
  number,
  title,
  subtitle,
  className,
  core = false,
}: {
  number?: string;
  title: string;
  subtitle: string;
  className: string;
  core?: boolean;
}) {
  return (
    <div
      className={`absolute z-10 w-[138px] rounded-[11px] border bg-[#0c1916ed] px-3.5 py-3 shadow-[0_12px_30px_#0003] transition duration-200 hover:-translate-y-[3px] hover:border-[#71f6b5] ${className}`}
    >
      {number && <small className="float-right font-mono text-[10px] text-[#527067]">{number}</small>}
      {core && (
        <span className="mx-auto mb-2 block size-[7px] rounded-full bg-[#71f6b5] shadow-[0_0_0_8px_#71f6b514]" />
      )}
      <strong className="block font-mono text-[10px] leading-[1.4] font-bold tracking-[.08em] text-[#dbe7e0]">
        {title}
      </strong>
      <span className="mt-1 block text-[10px] text-[#789087]">{subtitle}</span>
    </div>
  );
}

export function SystemCanvas() {
  return (
    <div
      className="relative h-[520px] overflow-hidden rounded-[22px] border border-[#223b33] bg-[radial-gradient(circle_at_50%_42%,#71f6b514,transparent_34%),linear-gradient(#71f6b509_1px,transparent_1px),linear-gradient(90deg,#71f6b509_1px,transparent_1px),#0c1916] bg-[length:auto,28px_28px,28px_28px,auto] max-[650px]:h-[440px]"
      aria-label="A diagram connecting interface, data, API, testing and delivery layers"
    >
      <div className="flex h-[54px] items-center justify-between border-b border-[#223b33] px-5 font-mono text-[11px] font-semibold tracking-[.12em] text-[#a5b7ae] uppercase">
        <span>Live architecture</span>
        <span className="text-[#71f6b5]">
          <i className="mr-[7px] inline-block size-[5px] rounded-full bg-current" />
          All systems ready
        </span>
      </div>
      <svg
        className="absolute top-[54px] left-0 h-[calc(100%-54px)] w-full fill-none stroke-[#31564a] stroke-[1.2] [stroke-dasharray:5_5]"
        viewBox="0 0 620 430"
        aria-hidden="true"
      >
        <path d="M310 30V100M310 100H175V175M310 100H445V175M175 221V260H310V307M445 221V260H310M310 353V378H205V410M310 378H415V410" />
      </svg>
      <SystemNode
        number="01"
        title="INTERFACE"
        subtitle="React · Next.js"
        className="top-[77px] left-1/2 -translate-x-1/2 hover:!translate-x-[-50%] hover:!translate-y-[-3px]"
      />
      <SystemNode
        number="02"
        title="DATA STATE"
        subtitle="Query · Redux"
        className="top-[195px] left-[8%] max-[650px]:left-[4%]"
      />
      <SystemNode
        number="03"
        title="API LAYER"
        subtitle="Elysia · REST"
        className="top-[195px] right-[8%] max-[650px]:right-[4%]"
      />
      <SystemNode
        title="SYSTEM CORE"
        subtitle="Typed end to end"
        className="top-[326px] left-1/2 -translate-x-1/2 border-[#71f6b580] text-center hover:!translate-x-[-50%] hover:!translate-y-[-3px]"
        core
      />
      <SystemNode
        number="04"
        title="QUALITY"
        subtitle="Vitest · Playwright"
        className="bottom-[22px] left-[13%] max-[650px]:left-[4%]"
      />
      <SystemNode
        number="05"
        title="DELIVERY"
        subtitle="CI/CD · Cloud"
        className="right-[13%] bottom-[22px] max-[650px]:right-[4%]"
      />
    </div>
  );
}
