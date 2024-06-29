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
    reporter: "",
  },
});
