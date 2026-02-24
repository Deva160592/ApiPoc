const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const apiConfig = require('../../src/api/apiConfig');

let requestPayload;
let response;

// Prepare dynamic request body
Given('User prepares update payload for {string} with id {int}', function (username, id) {

  requestPayload = {
    id: id,
    username: username,
    firstName: "Automation",
    lastName: "Engineer",
    email: `${username}@test.com`,
    password: "12345",
    phone: "9999999999",
    userStatus: 1
  };

  console.log("===== REQUEST BODY =====");
  console.log(JSON.stringify(requestPayload, null, 2));
});

// Send PUT request
When('User sends PUT request to update {string}', async function (username) {

  response = await apiConfig.put(`/user/${username}`, requestPayload);

  console.log("Response Status:", response.status());
});

// Validate status code
Then('Response status code should be {int}', function (expectedStatusCode) {
  expect(response.status()).toBe(expectedStatusCode);
});

// Validate response body code field
Then('Response body should contain code {int}', async function (expectedCode) {
  const body = await response.json();

  console.log("===== RESPONSE BODY =====");
  console.log(JSON.stringify(body, null, 2));

  expect(body.code).toBe(expectedCode);
});
