const { Given, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const userAPI = require('../../src/api/user.api');

let response;

Given('I send GET request for user {string}', async function (username) {
  try {
    response = await userAPI.getUserByUsername(username);
  } catch (error) {
    response = error.response; // handle negative scenarios
  }
});

Then('the response status code should be {string}', function (statusCode) {
  expect(response.status).to.equal(Number(statusCode));
});

Then('the response should contain username {string}', function (username) {
  if (response.status === 200) {
    expect(response.data.username).to.equal(username);
  }
});
