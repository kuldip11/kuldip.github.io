import { mapboxVisualPoints, servoraVisualMetricValues } from '@/constants/data/project-visuals.constants';
import type { ProjectVisualVariant } from '@/types/project.types';

import { Bars } from './Bars';

export const ProjectVisual = ({ variant, compact = false }: { variant: ProjectVisualVariant; compact?: boolean }) => {
  if (variant === 'mapbox') {
    return (
      <div
        className={`relative overflow-hidden rounded-[12px] border border-[#207653] bg-[radial-gradient(circle_at_22%_30%,#19eaa9_0_2px,transparent_3px),radial-gradient(circle_at_70%_48%,#23d7ff_0_2px,transparent_3px),radial-gradient(circle_at_48%_68%,#67efb6_0_2px,transparent_3px),linear-gradient(145deg,#071b18,#07111b)] [background-size:33px_33px,41px_41px,27px_27px,auto] ${compact ? 'min-h-[112px]' : 'min-h-[260px] sm:min-h-[320px]'}`}
      >
        <div className="absolute inset-x-[8%] bottom-[12%] flex h-[55%] items-end justify-around opacity-85">
          {mapboxVisualPoints.map((_, index) => (
            <span
              className="absolute grid size-8 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-[#55edb1] bg-[#0b3f30] text-[9px] font-bold text-[#79f3c1] shadow-[0_0_18px_rgba(70,240,177,.35)]"
              key={index}
            >
              {index % 2 ? '892' : '1.2K'}
            </span>
          ))}
        </div>
        <div className="absolute top-4 right-4 rounded-xl border border-[#2c7e60] bg-[#09221a]/95 px-3 py-2">
          <span className="block text-[11px] text-[#b6c9c0]">Performance</span>
          <strong className="text-[18px] text-[#59ecb0]">60 FPS</strong>
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
