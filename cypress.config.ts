import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:3000", // Replace with your app's actual URL
    supportFile: "cypress/support/e2e.ts", // Ensure this file exists
  },
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
