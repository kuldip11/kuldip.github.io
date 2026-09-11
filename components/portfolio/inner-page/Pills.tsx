export const Pills = ({ items, active = 0 }: { items: readonly string[]; active?: number }) => (
  <div className="flex flex-wrap gap-2">
    {items.map((item, index) => (
      <span
        className={`rounded-full border px-4 py-2 text-[12px] font-medium transition sm:text-[13px] ${index === active ? 'border-[#44efb0] bg-[#3cecad] text-[#03100b] shadow-[0_0_26px_rgba(68,239,176,.22)]' : 'border-[#27775a] bg-[#071713] text-[#d7e3dd]'}`}
        key={item}
      >
        {item}
      </span>
    ))}
  </div>
);
