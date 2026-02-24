require('dotenv').config();

module.exports = {
  baseURL: process.env.BASE_URL || "https://petstore.swagger.io/v2"
};
