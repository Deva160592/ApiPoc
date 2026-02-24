# ApiPoc - API Testing with Playwright & Cucumber

A comprehensive API testing framework built with Playwright, Cucumber (BDD), and JavaScript. This project demonstrates end-to-end testing of user management APIs with automated test scenarios.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running Tests](#running-tests)
- [Test Scenarios](#test-scenarios)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

- **BDD Framework**: Cucumber.js for behavior-driven development with Gherkin syntax
- **Playwright Integration**: Modern browser automation and API testing capabilities
- **API Testing**: Comprehensive REST API testing using Axios
- **Assertion Library**: Chai for powerful assertions
- **Configuration Management**: Environment-based configuration using dotenv
- **Modular Architecture**: Separated concerns with dedicated modules for API client, config, and step definitions
- **Hooks Support**: Before/After hooks for test setup and cleanup
- **Logging**: Built-in logging capabilities for test execution tracking

## 🛠️ Tech Stack

- **Node.js** - Runtime environment
- **Playwright** (v1.58.2) - Browser automation and API testing
- **Cucumber.js** (v12.6.0) - BDD testing framework
- **Axios** (v1.13.5) - HTTP client for API requests
- **Chai** (v6.2.2) - Assertion library
- **dotenv** (v17.3.1) - Environment variable management

## 📁 Project Structure

```
ApiPoc/
├── apiClient.js              # API client wrapper using Axios
├── apiConfig.js              # API endpoints and configuration
├── config.js                 # Environment and general configuration
├── cucumber.js               # Cucumber configuration
├── hooks.js                  # Test hooks (setup/teardown)
├── logger.js                 # Logging utility (extensible)
├── playwright.config.js      # Playwright configuration
├── user.api.js              # User-specific API methods
├── package.json             # Dependencies and scripts
├── package-lock.json        # Locked dependency versions
│
├── Feature Files (.feature)
│   ├── user.feature         # User retrieval scenarios
│   ├── createUsers.feature  # User creation scenarios
│   ├── updateUser.feature   # User update scenarios
│   └── deleteUser.feature   # User deletion scenarios
│
└── Step Definitions (.steps.js)
    ├── user.steps.js        # Steps for user retrieval
    ├── createUsers.steps.js # Steps for user creation
    ├── updateUserSteps.js   # Steps for user updates
    └── deleteUser.steps.js  # Steps for user deletion
```

## 📦 Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Deva160592/ApiPoc.git
   cd ApiPoc
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Verify installation**
   ```bash
   npm list
   ```

## ⚙️ Configuration

### Environment Setup

Create a `.env` file in the project root (or update existing configuration):

```env
# API Configuration
API_BASE_URL=https://api.example.com
API_TIMEOUT=5000

# Environment
NODE_ENV=test
```

### API Configuration (`apiConfig.js`)

The API endpoints are configured in `apiConfig.js`. Update the base URL and endpoints as needed for your API:

```javascript
// Example structure
const apiConfig = {
  baseURL: process.env.API_BASE_URL || 'https://api.example.com',
  timeout: process.env.API_TIMEOUT || 5000,
  endpoints: {
    users: '/users',
    user: (id) => `/users/${id}`
  }
};
```

### Playwright Configuration (`playwright.config.js`)

Configure Playwright test settings for API testing:

```javascript
// Add to playwright.config.js
module.exports = {
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: process.env.API_BASE_URL,
    trace: 'on-first-retry',
  },
};
```

## 🧪 Running Tests

### Run All Tests
```bash
npm test
```

### Run Specific Feature File
```bash
npm test -- user.feature
```

### Run with Specific Tags
```bash
npm test -- --tags "@smoke"
```

### Run in Dry-Run Mode
```bash
npm test -- --dry-run
```

### Run with Detailed Reporting
```bash
npm test -- --format progress
npm test -- --format html:reports/cucumber-report.html
```

## 📝 Test Scenarios

### User Management Tests

#### 1. **User Retrieval** (`user.feature`)
- Fetch user by ID
- Validate user data structure
- Verify response status codes

#### 2. **User Creation** (`createUsers.feature`)
- Create new users with required fields
- Validate user creation response
- Verify user appears in system
- Handle validation errors

#### 3. **User Update** (`updateUser.feature`)
- Update existing user information
- Partial updates
- Verify updated data
- Handle update conflicts

#### 4. **User Deletion** (`deleteUser.feature`)
- Delete user by ID
- Verify deletion from system
- Validate deletion response
- Handle non-existent user scenarios

## 🔧 API Documentation

### API Client (`apiClient.js`)

The `apiClient.js` module provides a wrapper around Axios with built-in error handling:

```javascript
// Example usage
const apiClient = require('./apiClient');

// GET request
const user = await apiClient.get('/users/1');

// POST request
const newUser = await apiClient.post('/users', {
  name: 'John Doe',
  email: 'john@example.com'
});

// PUT request
const updated = await apiClient.put('/users/1', {
  name: 'Jane Doe'
});

// DELETE request
await apiClient.delete('/users/1');
```

### User API Methods (`user.api.js`)

Dedicated user API methods for common operations:

```javascript
const userApi = require('./user.api');

// Get all users
const users = await userApi.getAllUsers();

// Get single user
const user = await userApi.getUser(userId);

// Create user
const newUser = await userApi.createUser(userData);

// Update user
const updated = await userApi.updateUser(userId, userData);

// Delete user
await userApi.deleteUser(userId);
```

## 🎯 Step Definitions

### Using Cucumber Steps

Step definitions follow the Gherkin syntax and are organized by feature:

```javascript
// Example from user.steps.js
const { Given, When, Then } = require('@cucumber/cucumber');

Given('I have a user ID {int}', function(userId) {
  this.userId = userId;
});

When('I fetch the user', async function() {
  this.response = await apiClient.get(`/users/${this.userId}`);
});

Then('the response should contain user data', function() {
  expect(this.response.data).to.have.property('id');
  expect(this.response.data).to.have.property('name');
});
```

## 🔐 Best Practices

- **Environment Variables**: Never commit sensitive data; use `.env` files
- **Test Data**: Use realistic test data and clean up after tests
- **Assertions**: Use Chai for clear, readable assertions
- **Error Handling**: Implement proper error handling in step definitions
- **Test Organization**: Keep feature files focused and step definitions DRY
- **Hooks**: Use hooks for setup (Before) and cleanup (After) operations

## 📊 Reporting

Test reports are generated automatically. Access them at:
- **HTML Reports**: `./reports/` directory
- **Console Output**: Detailed test execution logs

## 🐛 Troubleshooting

### Common Issues

**Issue: Tests timeout**
- Increase timeout in `apiConfig.js`
- Check API endpoint availability

**Issue: Authentication failures**
- Verify API credentials in `.env`
- Check token expiration

**Issue: Module not found**
```bash
# Reinstall dependencies
rm -rf node_modules
npm install
```

## 📚 Additional Resources

- [Playwright Documentation](https://playwright.dev/)
- [Cucumber.js Guide](https://cucumber.io/docs/cucumber/)
- [Axios Documentation](https://axios-http.com/)
- [Chai Assertion Library](https://www.chaijs.com/)

## 🤝 Contributing

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit changes (`git commit -m 'Add amazing feature'`)
3. Push to branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the LICENSE file for details.

---

**Author**: Deva160592  
**Last Updated**: 2026-02-24 17:23:07

For questions or issues, please open an issue on GitHub.