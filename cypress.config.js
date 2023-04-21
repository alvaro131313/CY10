const { defineConfig } = require("cypress");

module.exports = defineConfig({
  screenshotOnRunFailure: true,
   reporter : "cypress-mochawesome-reporter",

   reporterOptions : {
  
    reportDir : "cypress/my_report",
    charts : true,
    reportPageTitle : "Gathering Sensible Data",
    embeddedScreenshots: true,
    inlineAssets: true,
    quite : true,
    overwrite: false,
    html : true,
    json : true,
    video: false
    },
  
   e2e: {
    chromeWebSecurity : false,
    baseUrl : "https://www.saucedemo.com/" ,
        
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
