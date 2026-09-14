import { THEME_COPY } from '@/constants/ui/theme.constants';

const themeScript = `(function(){try{var stored=localStorage.getItem('${THEME_COPY.storageKey}');var theme=stored==='light'||stored==='dark'?stored:(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');var root=document.documentElement;root.dataset.theme=theme;root.style.colorScheme=theme;var sync=function(){var color=getComputedStyle(root).getPropertyValue('--color-page').trim();if(!color)return;var meta=document.querySelector('meta[name="theme-color"]');if(!meta){meta=document.createElement('meta');meta.name='theme-color';document.head.appendChild(meta);}meta.content=color;};requestAnimationFrame(sync);}catch(e){document.documentElement.dataset.theme='light';}})();`;

export const ThemeScript = () => <script dangerouslySetInnerHTML={{ __html: themeScript }} />;
