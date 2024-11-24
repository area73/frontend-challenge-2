import { defineConfig } from 'vitest/config';

const config = defineConfig({
  test: {
    globals: true, // Enables global functions like `describe`, `it`, etc.
    environment: 'jsdom', // Set environment to 'node' for Express testing
    include: ['src/**/*.spec.ts', 'src/**/*.spec.tsx'], // Specify test files location
    setupFiles: 'vitest.setup.ts', // Specify setup file location
    coverage: {
      reporter: ['text', 'json', 'html'], // Optional: enable coverage reports
    },
  },
});

export default config;
