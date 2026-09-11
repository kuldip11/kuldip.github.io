import { homeEnterpriseVisualNodes, homeServoraVisualCards } from '@/constants/data/project-visuals.constants';

export const ProjectVisual = ({ index }: { index: string }) => {
  if (index === '01')
    return (
      <div className="relative min-h-[520px] overflow-hidden bg-[radial-gradient(circle_at_55%_48%,#7cb8ff21,transparent_40%),linear-gradient(135deg,#0a1714,#112820)] max-[650px]:min-h-[430px]">
        {homeServoraVisualCards.map(([label, value, copy, pos]) => (
          <div
            key={label}
            className={`absolute flex w-[230px] flex-col rounded-[15px] border border-[#7cb8ff3b] bg-[#0d1e19ed] p-[18px] shadow-[0_30px_60px_#0005] max-[650px]:w-[170px] ${pos}`}
          >
            <small className="font-mono text-[10px] tracking-[.12em] text-[#7cb8ff]">{label}</small>
            <b className="my-[34px] mb-[7px] font-mono text-[30px] font-medium">{value}</b>
            <span className="text-[11px] text-[#8fa29a]">{copy}</span>
          </div>
        ))}
      </div>
    );
  if (index === '02')
    return (
      <div className="relative min-h-[520px] overflow-hidden bg-[#e5e9df] text-[#07110f] max-[650px]:min-h-[430px]">
        <div className="absolute inset-0 bg-[linear-gradient(25deg,transparent_48%,#a3afa4_49%,#a3afa4_50%,transparent_51%),linear-gradient(115deg,transparent_48%,#a3afa4_49%,#a3afa4_50%,transparent_51%)] bg-[length:65px_65px] opacity-40" />
        <div className="absolute top-[10%] left-[20%] size-[410px] rounded-full border border-[#087a4b73] shadow-[inset_0_0_80px_#71f6b53d] max-[650px]:left-[-8%]" />
        <div className="absolute top-[29%] left-[37%] size-[210px] rounded-full border-[30px] border-[#087a4b1c]" />
        <span className="absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 font-mono text-[clamp(3rem,5vw,6rem)] leading-none font-medium tracking-[-.09em] max-[650px]:text-[49px]">
          100,000
          <small className="mt-3 block text-center font-mono text-[10px] tracking-[.2em] text-[#3a5a4c]">
            LIVE POINTS
          </small>
        </span>
        <div className="absolute right-6 bottom-6 bg-[#07110f] px-3 py-2.5 font-mono text-[10px] text-[#71f6b5]">
          15+ DOMAIN LAYERS
        </div>
      </div>
    );
  return (
    <div className="relative min-h-[520px] overflow-hidden bg-[linear-gradient(#ffb86b0a_1px,transparent_1px),linear-gradient(90deg,#ffb86b0a_1px,transparent_1px),#1a1711] bg-[length:26px_26px] max-[650px]:min-h-[430px]">
      <svg
        className="absolute inset-0 size-full fill-none stroke-[#65543e] stroke-2 [stroke-dasharray:8_7]"
        viewBox="0 0 500 350"
        aria-hidden="true"
      >
        <path d="M64 91H188V170H318V92H440M318 170V270H440" />
      </svg>
      {homeEnterpriseVisualNodes.map(([label, position]) => (
        <div
          key={label}
          className={`absolute z-10 rounded-lg border border-[#61513a] bg-[#211d15] px-[18px] py-[13px] font-mono text-[10px] text-[#ffb86b] shadow-[0_14px_30px_#0006] ${position}`}
        >
          {label}
        </div>
      ))}
    </div>
  );
};
