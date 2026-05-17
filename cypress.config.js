const { defineConfig } = require("cypress");
module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL || "https://www.mercadolivre.com.br",
    viewportWidth: 1280,
    viewportHeight: 800,
    video: false,
    retries: {
      runMode: 1,
      openMode: 0,
    },
    env: {
      userEmail: process.env.CYPRESS_USER_EMAIL,
      userPassword: process.env.CYPRESS_USER_PASSWORD,
    },
    setupNodeEvents(on, config) {
      return config;
    },
  },
});