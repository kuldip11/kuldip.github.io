import { servoraVisualMetricValues } from '@/constants/data/project-visuals.constants';
import type { ProjectVisualVariant } from '@/types/project.types';

import { Bars } from './Bars';

export const ProjectVisual = ({ variant, compact = false }: { variant: ProjectVisualVariant; compact?: boolean }) => {
  if (variant === 'tallylite') {
    return (
      <div
        className={`relative overflow-hidden rounded-[14px] border border-[#207653] bg-[radial-gradient(circle_at_15%_0%,rgba(89,236,176,.12),transparent_36%),#071713] p-4 ${compact ? 'min-h-[142px]' : 'min-h-[290px] sm:min-h-[340px]'}`}
      >
        <div className="absolute inset-x-[6%] top-[9%] bottom-[9%] grid grid-cols-[.34fr_1fr] overflow-hidden rounded-[14px] border border-[#245b45] bg-[#081b16] shadow-2xl">
          <aside className="border-r border-[#1f4e3c] bg-[#0a211a] p-3">
            <div className="mb-4 h-2 w-14 rounded-full bg-[#59ecb0]" />
            <div className="space-y-2">
              {Array.from({ length: 6 }).map((_, index) => (
                <div className="flex items-center gap-2" key={index}>
                  <span className="size-2 rounded-sm border border-[#3f725f] bg-[#153d30]" />
                  <span className={`h-1.5 rounded bg-[#234b3c] ${index % 2 ? 'w-10' : 'w-14'}`} />
                </div>
              ))}
            </div>
          </aside>
          <section className="p-3">
            <div className="grid grid-cols-3 gap-2">
              {['Sales', 'Due', 'Stock'].map((label, index) => (
                <div className="rounded-lg border border-[#245b45] bg-[#0b251d] p-2" key={label}>
                  <span className="block text-[5px] text-[#84a99a]">{label}</span>
                  <strong className="mt-1 block text-[9px] text-[#70eeb7]">
                    {index === 0 ? '₹ 84K' : index === 1 ? '₹ 12K' : '326'}
                  </strong>
                </div>
              ))}
            </div>
            <div className="mt-3 grid grid-cols-[1fr_.72fr] gap-2">
              <div className="rounded-lg border border-[#245b45] bg-[#091f19] p-2">
                <div className="flex h-[72px] items-end gap-1.5">
                  {[35, 52, 44, 68, 57, 82, 74].map((height, index) => (
                    <span className="flex-1 rounded-t bg-[#42dca2]/70" style={{ height: `${height}%` }} key={index} />
                  ))}
                </div>
              </div>
              <div className="rounded-lg border border-[#245b45] bg-[#091f19] p-2">
                <div className="grid h-full place-items-center">
                  <div className="grid size-16 place-items-center rounded-full border-[8px] border-[#153e31] border-t-[#59ecb0] text-[6px] text-[#9fc6b7]">
                    GST
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }

  if (variant === 'other') {
    return (
      <div
        className={`relative overflow-hidden rounded-[14px] border border-[#207653] bg-[#071612] p-4 ${compact ? 'min-h-[142px]' : 'min-h-[290px]'}`}
      >
        <div className="grid h-full grid-cols-2 gap-3">
          <div className="rounded-xl border border-[#245b45] bg-[#0b2119] p-3">
            <div className="h-3 w-16 rounded bg-[#35d49c]/70" />
            <div className="mt-5 space-y-2">
              <div className="h-2 rounded bg-[#194c3a]" />
              <div className="h-2 w-4/5 rounded bg-[#194c3a]" />
              <div className="h-2 w-3/5 rounded bg-[#194c3a]" />
            </div>
          </div>
          <div className="grid place-items-center rounded-xl border border-[#245b45] bg-[#0b2119]">
            <div className="size-20 rounded-full border-[10px] border-[#153e31] border-t-[#54ecb0]" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden rounded-[14px] border border-[#207653] bg-[radial-gradient(circle_at_85%_80%,rgba(71,240,172,.14),transparent_32%),#071713] p-4 ${compact ? 'min-h-[142px]' : 'min-h-[290px] sm:min-h-[340px]'}`}
    >
      <div className="absolute top-[10%] left-[7%] h-[74%] w-[68%] rounded-[14px] border-[5px] border-[#172b24] bg-[#071d17] p-3 shadow-2xl">
        <div className="flex h-full gap-3">
          <aside className="w-[22%] rounded-lg bg-[#0d2c22] p-2">
            <div className="h-3 rounded bg-[#3cecad]/35" />
            <div className="mt-4 space-y-3">
              {Array.from({ length: 2 }).map((_, index) => (
                <div className="h-2 rounded bg-[#1c4a3a]" key={index} />
              ))}
            </div>
          </aside>
          <section className="flex-1">
            <div className="grid grid-cols-4 gap-2">
              {servoraVisualMetricValues.map((value) => (
                <div className="rounded-md border border-[#1d4c3b] bg-[#0a2a20] p-2" key={value} />
              ))}
            </div>
            <div className="relative mt-3 h-[56%] rounded-lg border border-[#1d4c3b] bg-[#081c17]">
              <svg
                aria-hidden="true"
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 260 120"
                preserveAspectRatio="none"
              >
                <polyline
                  fill="none"
                  stroke="#59ecb0"
                  strokeWidth="2"
                  points="0,92 35,75 68,80 95,57 126,62 160,40 190,45 218,24 260,30"
                />
              </svg>
              <div className="absolute right-3 bottom-3 h-12">
                <Bars compact />
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="absolute right-[5%] bottom-[7%] h-[54%] w-[22%] rounded-[16px] border-[5px] border-[#162a23] bg-[#081e18] p-3 shadow-2xl">
        <div className="h-2 rounded bg-[#44e9aa]" />

        <div className="mt-3 rounded-md bg-[#51efb2] py-1 text-center text-[3px] font-bold text-[#042016]" />
      </div>
    </div>
  );
};
