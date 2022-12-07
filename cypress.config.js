const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl : "https://example.cypress.io" ,
    reporter : "cypress-multi-reporters",
    reporterOptions : {
      reporterEnable : "mochawesome",
      mochawesomeReporterOption : {
        reportDir : "cypress/report/mocha",
        quite : true,
        overwrite: false,
        html : false,
        json : true,

        }

        }, 
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
