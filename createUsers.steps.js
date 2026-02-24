const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const userAPI = require('../../src/api/user.api');

let requestBody;
let response;

Given(
  'I prepare user payload with id {string} and username {string}',
  function (id, username) {

    requestBody = [
      {
        id: Number(id),
        username: username,
        firstName: "test",
        lastName: "api",
        email: "testapi@gmail.com",
        password: "12345",
        phone: "7777777777",
        userStatus: 10
      }
    ];
  }
);

When('I send POST request to create users', async function () {
  try {
    response = await userAPI.createUsersWithList(requestBody);
  } catch (error) {
    response = error.response;
  }
});

Then('the POST response status code should be {string}', function (statusCode) {
  expect(response.status).to.equal(Number(statusCode));
});

Then('the POST response message should be {string}', function (message) {
  expect(response.data.message.toLowerCase()).to.equal(message.toLowerCase());
});
