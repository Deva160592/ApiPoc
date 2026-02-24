const { request } = require('@playwright/test');

class ApiConfig {

  constructor() {
    this.baseURL = 'https://petstore.swagger.io/v2';
  }

  async getContext() {
    return await request.newContext({
      baseURL: this.baseURL,
      extraHTTPHeaders: {
        'Content-Type': 'application/json'
      }
    });
  }

  async put(endpoint, payload) {
    const context = await this.getContext();

    console.log("Endpoint:", this.baseURL + endpoint);

    const response = await context.put(endpoint, {
      data: payload
    });

    return response;
  }
}

module.exports = new ApiConfig();
