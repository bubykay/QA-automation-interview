const cucumber = require("cypress-cucumber-preprocessor").default;
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
    },
    specPattern: [
      "cypress/e2e/mifos/login/*.feature",
      "cypress/e2e/mifos/loan/accountCreation/*.feature",
      "cypress/e2e/mifos/loan/approval/*.feature",
      "cypress/e2e/mifos/loan/repayment/*.feature",
    ],
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      reportDir: "cypress/reports",
      overwrite: true,
      html: true,
      json: true,
      timestamp: "yyyy-mm-dd-HH-MM-ss",
      reportPageTitle: "Test Report",
    },
  },
});
