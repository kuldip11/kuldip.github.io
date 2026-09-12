import type { ProjectMockVariant } from '@/types/project.types';

export const ProjectMock = ({ variant }: { variant: ProjectMockVariant }) => {
  if (variant === 'saas') {
    return (
      <div className="relative h-full min-h-[96px] overflow-hidden rounded-[12px] border border-[#1f4d3c] bg-[#0a1613] p-2">
        <div className="absolute inset-x-2 top-2 h-2 rounded-full bg-[#17352c]" />
        <div className="mt-4 grid h-[68px] grid-cols-[.42fr_1fr] gap-1.5">
          <div className="rounded-md bg-[#13251f] p-1.5">
            <div className="mb-1 h-1.5 w-8 rounded bg-[#3ee7a27a]" />
            <div className="mb-1 h-1 w-10 rounded bg-[#395149]" />
            <div className="mb-1 h-1 w-7 rounded bg-[#395149]" />
            <div className="h-1 w-9 rounded bg-[#395149]" />
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            <div className="rounded-md bg-[#13251f] p-1.5">
              <div className="h-full rounded bg-[linear-gradient(180deg,#17362d,#10201b)]" />
            </div>
            <div className="rounded-md bg-[#13251f] p-1.5">
              <div className="mt-2 h-1 w-7 rounded bg-[#57ebb0]" />
              <div className="mt-1 h-1 w-10 rounded bg-[#365047]" />
            </div>
            <div className="col-span-2 rounded-md bg-[#13251f] p-1.5">
              <div className="h-full rounded bg-[linear-gradient(90deg,#2a5747_20%,#1d3b31_20%_40%,#315f4e_40%_62%,#1f4437_62%)]" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex h-full min-h-[96px] items-end justify-center overflow-hidden rounded-[12px] border border-[#1f4d3c] bg-[radial-gradient(circle_at_50%_0%,rgba(84,247,178,.13),transparent_58%),#0a1613] px-4 pt-3">
      <div className="relative z-10 h-[82px] w-[45px] rotate-[-4deg] rounded-[9px] border border-[#375d50] bg-[#101d1a] p-1 shadow-xl">
        <div className="h-full rounded-[6px] bg-[linear-gradient(160deg,#14241f,#162f28_50%,#101a17)] p-1.5">
          <div className="h-2 w-5 rounded bg-[#48eaa7]" />
          <div className="mt-2 h-8 rounded bg-[#24473a]" />
        </div>
      </div>
      <div className="relative z-20 -ml-1 h-[91px] w-[50px] rotate-[3deg] rounded-[10px] border border-[#3c6858] bg-[#0e1c18] p-1 shadow-xl">
        <div className="h-full rounded-[7px] bg-[linear-gradient(160deg,#13261f,#1a3b30_55%,#101a17)] p-1.5">
          <div className="h-2 w-5 rounded bg-[#48eaa7]" />
          <div className="mt-2 h-9 rounded bg-[#255142]" />
        </div>
      </div>
    </div>
  );
};
