export type ArticleVisual = 'monorepo' | 'authority' | 'spreadsheet' | 'money' | 'ownership';

export type ArticleSection = {
  readonly id: string;
  readonly eyebrow: string;
  readonly title: string;
  readonly paragraphs: readonly string[];
  readonly bullets?: readonly string[];
  readonly visual?: ArticleVisual;
  readonly callout?: string;
};

export type ArticleDefinition = {
  readonly slug: string;
  readonly title: string;
  readonly description: string;
  readonly category: string;
  readonly readingTime: string;
  readonly publishedAt: string;
  readonly updatedAt: string;
  readonly tags: readonly string[];
  readonly takeaways: readonly string[];
  readonly sections: readonly ArticleSection[];
};

export type ArticleCardDefinition = ArticleDefinition & {
  readonly glyph: string;
};
