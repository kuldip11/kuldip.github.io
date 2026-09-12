import { AppIcon } from '@/components/portfolio/AppIcon';
import { PROJECT_DETAIL_CONTENT } from '@/constants/pages/projects.constants';
import type { ProjectQualityItem } from '@/types/project.types';

export const ProjectQuality = ({ items }: { items: readonly ProjectQualityItem[] }) => (
  <section className="mt-4" id="quality">
    <div className="mb-4 flex items-center gap-2">
      <AppIcon name="testing" className="size-5 text-accent" />
      <h2 className="text-[20px] font-bold">{PROJECT_DETAIL_CONTENT.qualityTitle}</h2>
    </div>
    <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
      {items.map((item) => (
        <article className="rounded-[16px] border border-panel-border bg-[#071713]/90 p-4 sm:p-5" key={item.label}>
          <strong className="block text-[clamp(1.6rem,3vw,2.5rem)] leading-none text-accent">{item.value}</strong>
          <span className="mt-2 block text-[12px] font-semibold">{item.label}</span>
          <p className="mt-2 text-[10px] leading-[1.55] text-[#98ada3]">{item.detail}</p>
        </article>
      ))}
    </div>
  </section>
);
