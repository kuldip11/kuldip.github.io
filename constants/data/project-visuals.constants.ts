export const projectMetricBarHeights = [35, 62, 44, 76, 52, 88, 70] as const;

export const servoraVisualMetricValues = ['128', '₹24,560', '18', '42'] as const;

export const SERVORA_VISUAL_CONTENT = {
  windowTitle: 'Servora Admin / POS',
  sidebarItems: ['Orders', 'Menu', 'Tables'],
  metricLabel: 'Metric',
  tableItems: ['Table 04', 'Table 11', 'Table 14'],
  kitchenTitle: 'Kitchen',
  kitchenTickets: ['#128 Prep', '#129 Ready', '#130 New'],
  waiterTitle: 'Waiter',
  waiterItems: ['Table 14', 'Ready', 'Serve'],
  mockTitle: 'Servora · Restaurant operations',
  mockSidebarItems: ['Orders', 'Tables', 'Menu', 'Analytics'],
  mockMetricLabel: 'Live',
  mockMetricValues: ['128', '18', '42'],
  mockKitchenLabel: 'Kitchen · 08 cooking',
  mockWaiterLabel: 'Waiter · Table 14 ready',
  mockCustomerLabel: 'Customer ordering',
} as const;

export const TALLYLITE_VISUAL_CONTENT = {
  sidebarItems: ['Invoices', 'Customers', 'Reports', 'Settings'],
  metricCards: [
    { label: 'Sales', value: '₹84K' },
    { label: 'Due', value: '₹12K' },
    { label: 'Invoices', value: '326' },
  ],
  chartHeights: [35, 52, 44, 68, 57, 82, 74],
  taxLabel: 'GST',
  mockTitle: 'TallyLite · invoicing',
  mockPrimaryStat: '₹84K sales',
  mockSecondaryStat: '12 invoices due',
} as const;
