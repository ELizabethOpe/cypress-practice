const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    "watchForFilesChanges":false,
    "defaultCommandTimeout":20000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});