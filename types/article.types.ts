export type ArticleSection = readonly [title: string, copy: string];
export type ArticleDefinition = {
  readonly slug: string;
  readonly title: string;
  readonly description: string;
  readonly publishedAt: string;
  readonly updatedAt: string;
  readonly sections: readonly ArticleSection[];
};
export type ArticleCardDefinition = ArticleDefinition & {
  readonly kind: string;
  readonly glyph: string;
};
