export const ARTICLE_VISUAL_CONTENT = {
  monorepo: {
    apps: ['Admin / POS', 'Kitchen', 'Customer'],
    shared: 'Types · Validation · API Client · Realtime · UI',
    authority: 'Server authority',
    caption: 'share contracts → keep workflows local',
  },
  authority: {
    client: ['Selection', 'Preview', 'Explain'],
    server: ['Authorize', 'Recalculate', 'Commit'],
    caption: 'client intent → API decision → realtime committed state',
  },
  spreadsheet: {
    layers: ['UI', 'Use cases', 'Domain', 'Repositories', 'Google Sheets'],
    headers: ['Invoice', 'Customer', 'Total', 'Status'],
    rows: [
      ['INV-1042', 'Acme', '₹12,840', 'Paid'],
      ['INV-1043', 'Nexa', '₹8,290', 'Due'],
      ['INV-1044', 'Orbit', '₹4,560', 'Draft'],
    ],
  },
  money: {
    pipelineLabel: 'Invoice pipeline',
    pipeline: ['Line values', 'Discounts', 'Taxable amount', 'GST split', 'Grand total'],
    resultLabel: 'Decimal-safe result',
    resultValue: '₹ 12,840.00',
    resultCaption: 'auditable · testable · explicit',
  },
  ownership: {
    layers: ['Domain', 'Application', 'Adapter', 'Browser'],
    layerCaption: 'different question, different test',
    flow: ['local correctness', 'boundary confidence', 'user journey'],
  },
} as const;
