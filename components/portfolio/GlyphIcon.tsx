import { AppIcon, type AppIconName } from './AppIcon';

const ICON_NAME_MAP: Record<string, AppIconName> = {
  '</>': 'code',
  '▱': 'architecture',
  ϟ: 'performance',
  '↯': 'performance',
  '☁': 'cloud',
  '⌘': 'architecture',
  '◉': 'apps',
  '♙': 'architecture',
  '◎': 'testing',
  '⌖': 'apps',
  '▣': 'apps',
  '◈': 'code',
  '◇': 'article',
  '↗': 'arrow-up-right',
  code: 'code',
  architecture: 'architecture',
  performance: 'performance',
  cloud: 'cloud',
};

export const GlyphIcon = ({ glyph, className = 'size-5' }: { glyph: string; className?: string }) => (
  <AppIcon name={ICON_NAME_MAP[glyph] ?? 'apps'} className={className} />
);
