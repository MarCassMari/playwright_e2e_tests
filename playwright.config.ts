import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

if (!process.env.CI) {
  dotenv.config();
}
export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',

  // Configurações globais (Trace e Screenshot)
  use: {
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },

  projects: [
    {
      name: 'API-Tests',
      testMatch: /.*\.spec\.ts/,
      testDir: './tests/api', // Organização por pasta
      use: {
        baseURL: process.env.GOREST_BASE_URL, // Pega da Secret do GitHub
        extraHTTPHeaders: {
          Authorization: `Bearer ${process.env.GOREST_TOKEN}`, // Token isolado aqui
        },
      },
    },
    {
      name: 'E2E-Tests',
      testMatch: /.*\.spec\.ts/,
      testDir: './tests/e2e', // Organização por pasta
      use: {
        ...devices['Desktop Chrome'],
        baseURL: 'https://www.saucedemo.com', // URL de UI
      },
    },
  ],
});
