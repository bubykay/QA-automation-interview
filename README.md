
# QA Automation Project with Cypress

This repository contains automated tests using Cypress for QA automation purposes. It includes test scenarios implemented with Cypress and Cucumber for behavior-driven development (BDD).

## Table of Contents

- [QA Automation Project with Cypress](#qa-automation-project-with-cypress)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Features](#features)
  - [Installation](#installation)
  - [Folder Structure](#folder-structure)
  - [Running Tests](#running-tests)
  - [Writing Tests](#writing-tests)
  - [Contributing](#contributing)
  - [License](#license)

## Introduction

This project is designed for QA automation testing using Cypress, a modern JavaScript testing framework for web applications. It utilizes Cucumber for writing test scenarios in a BDD style, making it easier to collaborate between stakeholders, QA, and developers.

## Features

- **Cypress:** Powerful end-to-end testing framework for modern web applications.
- **Cucumber:** BDD framework for writing tests in easy-to-understand Gherkin syntax.
- **Page Object Pattern:** Organized test structure with reusable page objects and locators.
- **Custom Commands:** Extend Cypress with custom commands for reusability and readability.
- **Reporting:** Generate detailed test reports for better visibility into test results.

## Installation

To run the Cypress tests locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/bubykay/QA-automation-interview.git
   cd QA-automation-interview
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

## Folder Structure

The project structure is organized as follows:

```
QA-automation-interview/
│
├── cypress/
│   ├── downloads/            # Downloads folder for test downloads (optional)
│   ├── e2e/
│   │   ├── mifos/
│   │   │   ├── loginPage/               # Example folder for page-specific resources
│   │   │   ├── loginPage.cy.js          # Cypress test file using JavaScript
│   │   │   └── loginPage.feature       # Feature file using Cucumber syntax
│   │   └── spec.cy.js                   # General Cypress test file
│   ├── fixtures/             # Test fixtures (e.g., JSON files)
│   │   └── example.json
│   ├── support/
│   │   ├── commands.js        # Custom Cypress commands
│   │   ├── config/
│   │   │   ├── index.js       # Configuration settings (e.g., URLs)
│   │   │   └── utils.js       # Utility functions for tests
│   │   ├── e2e.js             # Setup for end-to-end testing
│   │   ├── locators/
│   │   │   └── loginLocators.js  # Locators for elements on web pages
│   │   └── pageObjects/
│   │       └── LoginPage.js   # Page objects for different application pages
├── cypress.config.js          # Cypress configuration file
├── jsconfig.json              # JavaScript configuration file
├── package-lock.json          # Dependency lock file
└── package.json               # Project dependencies and scripts
```

## Running Tests

To run the Cypress tests, use the following command:

```bash
npm test
```

This command executes Cypress tests in headless mode and generates reports.

## Writing Tests

- **Writing Tests:** Write your Cypress tests in `.feature` files located in `cypress/integration` directory.
- **Step Definitions:** Implement step definitions in `cypress/support/step_definitions` using Cypress Cucumber preprocessor.
- **Page Objects:** Maintain page objects in `cypress/support/page_objects` for different application pages.

## Contributing

Contributions are welcome! If you find any issues or want to enhance the tests, feel free to open a pull request.

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.
