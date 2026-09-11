import Link from 'next/link';

export const panel = 'rounded-[16px] border border-[#176746] bg-[#061612e8] shadow-[0_18px_60px_rgba(0,0,0,.2)]';

export function InnerPageBackdrop({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020b08] text-[#f5f7f3]">
      <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(circle_at_86%_5%,rgba(28,224,155,.16),transparent_22%),radial-gradient(circle_at_10%_92%,rgba(28,224,155,.08),transparent_24%)]" />
      <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(rgba(66,230,169,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(66,230,169,.08)_1px,transparent_1px)] [background-size:48px_48px] opacity-[.08]" />
      {children}
    </main>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="m-0 font-mono text-[11px] font-semibold tracking-[.22em] text-[#4ff0b2] uppercase sm:text-[12px]">
      {children}
    </p>
  );
}

export function Pills({ items, active = 0 }: { items: readonly string[]; active?: number }) {
  return (
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
}

function Bars({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-end gap-1.5">
      {[35, 62, 44, 76, 52, 88, 70].map((height, index) => (
        <span
          className={`rounded-t bg-[linear-gradient(#59ecb0,#0e7257)] ${compact ? 'w-1.5' : 'w-2'}`}
          style={{ height: `${height}%` }}
          key={index}
        />
      ))}
    </div>
  );
}

export function ProjectVisual({
  variant,
  compact = false,
}: {
  variant: 'servora' | 'mapbox' | 'other';
  compact?: boolean;
}) {
  if (variant === 'mapbox') {
    return (
      <div
        className={`relative overflow-hidden rounded-[12px] border border-[#207653] bg-[radial-gradient(circle_at_22%_30%,#19eaa9_0_2px,transparent_3px),radial-gradient(circle_at_70%_48%,#23d7ff_0_2px,transparent_3px),radial-gradient(circle_at_48%_68%,#67efb6_0_2px,transparent_3px),linear-gradient(145deg,#071b18,#07111b)] [background-size:33px_33px,41px_41px,27px_27px,auto] ${compact ? 'min-h-[112px]' : 'min-h-[260px] sm:min-h-[320px]'}`}
      >
        <div className="absolute inset-x-[8%] bottom-[12%] flex h-[55%] items-end justify-around opacity-85">
          {[36, 68, 48, 90, 58, 76, 42, 82, 54].map((height, index) => (
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
              {['128', '₹24,560', '18', '42'].map((value) => (
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
}

export function ActionLink({
  href,
  children,
  secondary = false,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  secondary?: boolean;
  external?: boolean;
}) {
  return (
    <a
      className={`inline-flex min-h-[44px] items-center justify-center gap-3 rounded-full px-5 text-[13px] font-bold transition hover:-translate-y-0.5 ${secondary ? 'border border-[#2a7659] bg-[#071713] text-white' : 'bg-[#4fefb1] text-[#03100b] shadow-[0_0_26px_rgba(78,239,177,.2)]'}`}
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children} <span aria-hidden="true">→</span>
    </a>
  );
}

export function ProjectCard({
  slug,
  title,
  copy,
  variant,
  tags,
  badge,
  category,
}: {
  slug: string;
  title: string;
  copy: string;
  variant: 'servora' | 'mapbox' | 'other';
  tags: string[];
  badge?: string;
  category?: string;
}) {
  return (
    <article className={`${panel} grid gap-5 p-4 sm:grid-cols-[.85fr_1.15fr] sm:items-center lg:p-5`}>
      <ProjectVisual variant={variant} compact />
      <div>
        <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
          {badge ? (
            <span className="rounded-full border border-[#42dca2] px-2.5 py-1 text-[10px] text-[#58eeb1]">{badge}</span>
          ) : (
            <span />
          )}
          {category ? (
            <span className="rounded-full border border-[#245b45] px-2.5 py-1 text-[10px] text-[#a9bbb3]">
              {category}
            </span>
          ) : null}
        </div>
        <h2
          aria-label={slug === 'mapbox-performance' ? 'Rendering 100,000+ Mapbox Points in React' : title}
          className="text-[22px] font-bold tracking-[-.03em]"
        >
          {title}
        </h2>
        <p className="mt-2 text-[13px] leading-[1.55] text-[#b1c0b9] sm:text-[14px]">{copy}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span className="rounded-full border border-[#27775a] px-2.5 py-1 text-[10px] text-[#cce0d7]" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <Link
          aria-label={`Read ${title}`}
          className="mt-5 inline-flex text-[13px] font-semibold text-[#59ecb0]"
          href={`/projects/${slug}`}
        >
          View project&nbsp; →
        </Link>
      </div>
    </article>
  );
}
