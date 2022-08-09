const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "WatchForFileChanges":false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
