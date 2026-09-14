import { defineConfig, devices } from '@playwright/test';

const baseURL = process.env.PLAYWRIGHT_BASE_URL ?? 'http://localhost:3000';

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: 1,
  reporter: 'html',

  use: {
    baseURL,
    ...(process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH
      ? {
          launchOptions: {
            executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH,
            args: process.env.PLAYWRIGHT_CHROMIUM_ARGS
              ? process.env.PLAYWRIGHT_CHROMIUM_ARGS.split(' ').filter(Boolean)
              : undefined,
          },
        }
      : {}),
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: process.env.PLAYWRIGHT_DISABLE_VIDEO ? 'off' : 'retain-on-failure',
  },

  webServer: {
    command: process.env.PLAYWRIGHT_WEB_SERVER_COMMAND ?? 'bun run dev:e2e',
    url: baseURL,
    reuseExistingServer: false,
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
