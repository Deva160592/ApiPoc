module.exports = {
  default: {
    require: [
      "src/hooks/hooks.js",
      "features/step-definitions/*.js"
    ],
    format: ["progress", "html:reports/cucumber-report.html"],
    timeout: 60000
  }
};
