import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: ['./tests/setup.tsx'],

    include: ['tests/**/*.test.{ts,tsx}'],

    exclude: ['tests/e2e/**', 'node_modules/**', '.next/**', 'playwright-report/**', 'test-results/**'],
  },

  resolve: {
    alias: {
      '@': new URL('./', import.meta.url).pathname,
    },
  },
});
