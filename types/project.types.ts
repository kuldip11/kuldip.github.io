export type ProjectVisualVariant = 'servora' | 'mapbox' | 'other';

export type ProjectMetric = readonly [value: string, label: string, icon: string];
export type ProjectFeature = readonly [title: string, description: string];
export type ProjectHighlight = readonly [title: string, description: string, icon: string];
export type ProjectSection = {
  readonly title: string;
  readonly copy: string;
  readonly items?: readonly string[];
};
export type ProjectLink = {
  readonly label: string;
  readonly href: string;
  readonly description: string;
};
export type ProjectCaseStudyDefinition = {
  readonly eyebrow: string;
  readonly intro: string;
  readonly heroLines: readonly string[];
  readonly heroAccent: string;
  readonly visualVariant: ProjectVisualVariant;
  readonly liveDemoHref: string;
  readonly liveDemoExternal: boolean;
  readonly sourceHref: string;
  readonly metrics: readonly ProjectMetric[];
  readonly navigation: readonly string[];
  readonly overviewItems: readonly ProjectFeature[];
  readonly highlights: readonly ProjectHighlight[];
  readonly sections: readonly ProjectSection[];
  readonly applicationHeading: string;
  readonly applications: readonly ProjectLink[];
};
export type ProjectDefinition = {
  readonly index: string;
  readonly slug: string;
  readonly label: string;
  readonly title: string;
  readonly description: string;
  readonly stats: readonly string[];
  readonly seoTitle: string;
  readonly summary: string;
  readonly publishedAt: string;
  readonly updatedAt: string;
  readonly showcaseLinksLabel?: string;
  readonly showcaseLinks?: readonly ProjectLink[];
  readonly caseStudy: ProjectCaseStudyDefinition;
};
