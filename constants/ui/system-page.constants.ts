export const SYSTEM_PAGE_CONTENT = {
  notFound: {
    code: '404',
    title: 'This page doesn’t exist.',
    description: 'The route may have moved, or the page may no longer be part of this portfolio.',
    actionLabel: 'Back to portfolio',
  },
  error: {
    symbol: '!',
    title: 'Something went wrong',
    description: 'This page could not be loaded. You can retry without leaving the portfolio.',
    actionLabel: 'Try again',
  },
} as const;
