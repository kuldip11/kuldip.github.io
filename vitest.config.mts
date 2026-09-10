import { fileURLToPath } from 'node:url';

import { defineConfig } from 'vitest/config';

const rootDir = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  resolve: {
    alias: {
      '@': rootDir,
    },
  },

  test: {
    environment: 'jsdom',
    setupFiles: ['./tests/setup.tsx'],

    include: ['tests/**/*.test.{ts,tsx}'],

    exclude: ['tests/e2e/**', 'node_modules/**', '.next/**', 'coverage/**', 'playwright-report/**', 'test-results/**'],

    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
    },
  },
});
