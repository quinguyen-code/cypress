const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  baseURL: "http://localhost:4200/",

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
