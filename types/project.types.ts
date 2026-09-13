export type ProjectVisualVariant = 'servora' | 'tallylite' | 'other';
export type ProjectMockVariant = 'saas' | 'fintech';

export type ProjectMetric = {
  readonly value: string;
  readonly label: string;
  readonly icon: string;
};
export type ProjectFeature = {
  readonly title: string;
  readonly description: string;
};
export type ProjectHighlight = {
  readonly title: string;
  readonly description: string;
  readonly icon: string;
};
export type ProjectSection = {
  readonly id: string;
  readonly eyebrow?: string;
  readonly title: string;
  readonly copy: string;
  readonly items?: readonly string[];
};
export type ProjectLink = {
  readonly label: string;
  readonly href: string;
  readonly description: string;
};
export type ProjectArchitectureNode = {
  readonly label: string;
  readonly detail: string;
};
export type ProjectContextBlock = {
  readonly eyebrow: string;
  readonly title: string;
  readonly copy: string;
  readonly points?: readonly string[];
};
export type ProjectEcosystemDefinition = {
  readonly eyebrow: string;
  readonly title: string;
  readonly copy: string;
  readonly hubLabel: string;
  readonly hubDetail: string;
  readonly nodes: readonly ProjectArchitectureNode[];
};
export type ProjectDecision = {
  readonly title: string;
  readonly problem: string;
  readonly decision: string;
  readonly outcome: string;
};
export type ProjectStackGroup = {
  readonly label: string;
  readonly items: readonly string[];
};
export type ProjectQualityItem = {
  readonly value: string;
  readonly label: string;
  readonly detail: string;
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
  readonly navigation: readonly { readonly label: string; readonly href: string }[];
  readonly overviewItems: readonly ProjectFeature[];
  readonly context?: ProjectContextBlock;
  readonly ecosystem?: ProjectEcosystemDefinition;
  readonly highlights: readonly ProjectHighlight[];
  readonly architectureTitle: string;
  readonly architectureCopy: string;
  readonly architecture: readonly ProjectArchitectureNode[];
  readonly decisions: readonly ProjectDecision[];
  readonly stack: readonly ProjectStackGroup[];
  readonly quality: readonly ProjectQualityItem[];
  readonly sections: readonly ProjectSection[];
  readonly applicationHeading: string;
  readonly applications: readonly ProjectLink[];
};
export type ProjectDefinition = {
  readonly index: string;
  readonly slug: string;
  readonly name: string;
  readonly label: string;
  readonly title: string;
  readonly description: string;
  readonly stats: readonly string[];
  readonly tags: readonly string[];
  readonly category: string;
  readonly featured?: boolean;
  readonly mockVariant: ProjectMockVariant;
  readonly seoTitle: string;
  readonly summary: string;
  readonly publishedAt: string;
  readonly updatedAt: string;
  readonly showcaseLinksLabel?: string;
  readonly showcaseLinks?: readonly ProjectLink[];
  readonly caseStudy: ProjectCaseStudyDefinition;
};
