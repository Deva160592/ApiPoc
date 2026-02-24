const { Before, After } = require('@cucumber/cucumber');

Before(function () {
  console.log("=== Test Started ===");
});

After(function () {
  console.log("=== Test Finished ===");
});
