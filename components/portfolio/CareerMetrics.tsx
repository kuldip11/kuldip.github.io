import { metrics } from '@/data/portfolio';
export function CareerMetrics() {
  return (
    <section
      className="mx-auto mb-[150px] grid max-w-[1344px] grid-cols-4 border-y border-[#20362f] max-[1380px]:mx-12 max-[1000px]:grid-cols-2 max-[650px]:mx-5 max-[650px]:mb-[100px]"
      aria-label="Career highlights"
    >
      {metrics.map(([number, label], index) => (
        <div
          className={`flex flex-col border-[#20362f] px-[30px] py-7 max-[650px]:px-3 ${index !== metrics.length - 1 ? 'border-r' : ''} ${index === 1 ? 'max-[1000px]:border-r-0' : ''} ${index < 2 ? 'max-[1000px]:border-b' : ''}`}
          key={label}
        >
          <strong className="font-mono text-[clamp(2rem,3.2vw,3.6rem)] leading-none font-medium tracking-[-.07em] text-[#71f6b5]">
            {number}
          </strong>
          <span className="mt-2.5 text-xs text-[#8fa29a] max-[650px]:text-[10px]">{label}</span>
        </div>
      ))}
    </section>
  );
}
