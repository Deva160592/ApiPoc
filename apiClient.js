const axios = require('axios');
const config = require('../config/config');

class APIClient {
  constructor() {
    this.client = axios.create({
      baseURL: config.baseURL,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });

    // 🔹 Request Interceptor
    this.client.interceptors.request.use(
      (request) => {
        console.log("\n========== API REQUEST ==========");
        console.log("Method:", request.method.toUpperCase());
        console.log("URL:", request.baseURL + request.url);
        console.log("Headers:", JSON.stringify(request.headers, null, 2));

        if (request.data) {
          console.log("Request Body:", JSON.stringify(request.data, null, 2));
        }

        console.log("=================================\n");
        return request;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // 🔹 Response Interceptor
    this.client.interceptors.response.use(
      (response) => {
        console.log("\n========== API RESPONSE ==========");
        console.log("Status Code:", response.status);
        console.log("Status Text:", response.statusText);
        console.log("Response Body:", JSON.stringify(response.data, null, 2));
        console.log("==================================\n");

        return response;
      },
      (error) => {
        if (error.response) {
          console.log("\n========== API ERROR RESPONSE ==========");
          console.log("Status Code:", error.response.status);
          console.log("Response Body:", JSON.stringify(error.response.data, null, 2));
          console.log("========================================\n");
        } else {
          console.log("Error:", error.message);
        }
        return Promise.reject(error);
      }
    );
  }

  async get(endpoint) {
    return await this.client.get(endpoint);
  }

  async post(endpoint, data) {
    return await this.client.post(endpoint, data);
  }

  async put(endpoint, data) {
    return await this.client.put(endpoint, data);
  }

  async delete(endpoint) {
    return await this.client.delete(endpoint);
  }
}

module.exports = new APIClient();
