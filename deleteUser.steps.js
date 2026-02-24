const { Given, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const userAPI = require('../../src/api/user.api');

let response;

Given('I send DELETE request for user {string}', async function (username) {
  try {
    response = await userAPI.deleteUserByUsername(username);
  } catch (error) {
    response = error.response;  // handle negative cases like 404
  }
});

Then('the delete response status code should be {string}', function (statusCode) {
  expect(response.status).to.equal(Number(statusCode));
});
