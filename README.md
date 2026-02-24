# API PoC

Lightweight proof-of-concept for API tests using Cucumber and Playwright.

## Summary

This repository contains end-to-end API tests for user endpoints (create, update, delete, retrieve) using Cucumber feature files and step definitions that drive API calls implemented in src/api.

## Prerequisites

- Node.js (>= 14)
- npm

## Setup

Install dependencies:

```bash
npm install
```

## Run tests

Run the test suite (Cucumber + Playwright):

```bash
npm run test
```

After the run, open the HTML report at [reports/cucumber-report.html](reports/cucumber-report.html).

## Project structure

- [features](features) — Cucumber feature files (e.g. [features/user.feature](features/user.feature))
- [step-definitions](step-definitions) — Step implementations (e.g. [features/step-definitions/user.steps.js](features/step-definitions/user.steps.js))
- [src/api](src/api) — API client and endpoint helpers (e.g. [src/api/user.api.js](src/api/user.api.js), [src/api/apiConfig.js](src/api/apiConfig.js))
- [src/config](config) — Test configuration (e.g. [src/config/config.js](src/config/config.js))
- [src/utils](src/utils) — Helpers (e.g. [src/utils/apiClient.js](src/utils/apiClient.js), [src/utils/logger.js](src/utils/logger.js))
- [src/hooks](src/hooks) — Helpers (e.g. [src/hooks/hooks.js](src/utils/apiClient.js)
- [reports](reports) — Generated test reports (HTML)

## Adding tests

1. Add a new feature file under [features](features).
2. Implement corresponding step definitions in [step-definitions](step-definitions).
3. Add or update API helpers in [src/api](src/api) if needed.

## Configuration

- Update environment or base URLs in [src/api/apiConfig.js](src/api/apiConfig.js) or [config/config.js](config/config.js).

## Troubleshooting

- If tests fail, check request/response logs (logger in [src/utils/logger.js](src/utils/logger.js)) and the generated HTML report at [reports/cucumber-report.html](reports/cucumber-report.html).




