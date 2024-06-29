# QA Automation Interview

## Overview
This repository contains the code for the Blusalt interview practical assessment. The assessment involves functional testing and defect management of the Mifos X loan management system, followed by writing automated web-based tests using Cypress with a page object model approach and BDD.

## Project Structure
```
.
├── README.md
├── cypress
│   ├── downloads
│   ├── e2e
│   │   ├── mifos
│   │   │   ├── loan
│   │   │   │   ├── accountCreation
│   │   │   │   │   ├── loanAccountCreation.feature
│   │   │   │   │   └── loanAccountCreation.cy.js
│   │   │   │   ├── approval
│   │   │   │   │   ├── approveLoan.feature
│   │   │   │   │   └── approveLoan.cy.js
│   │   │   │   ├── repayment
│   │   │   │   │   ├── loanRepayment.feature
│   │   │   │   │   └── loanRepayment.cy.js
│   │   │   └── login
│   │   │       ├── loginPage.feature
│   │   │       └── loginPage.cy.js
│   │   └── spec.cy.js
│   ├── fixtures
│   │   └── example.json
│   └── support
│       ├── commands.js
│       ├── config
│       │   ├── index.js
│       │   └── utils.js
│       ├── e2e.js
│       ├── locators
│       │   ├── loginLocators.js
│       │   ├── loanLocators.js
│       │   ├── approveLoanLocators.js
│       └── pageObjects
│           ├── LoginPage.js
│           ├── LoanPage.js
│           ├── ApproveLoanPage.js
│           ├── LoanRepaymentPage.js
├── cypress.config.js
├── jsconfig.json
├── package-lock.json
└── package.json
```

## Prerequisites
- Node.js (https://nodejs.org/)
- npm (comes with Node.js)
- Git (https://git-scm.com/)

## Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:bubykay/QA-automation-interview.git
   ```

2. Navigate to the project directory:
   ```bash
   cd QA-automation-interview
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

## Running the Tests

To run the Cypress tests, use the following command:
```bash
npx cypress open
```
This will open the Cypress Test Runner where you can run the tests.

## Folder Structure Description

- **cypress**
  - **downloads**: Directory for downloaded files during tests.
  - **e2e**
    - **mifos**
      - **loan**
        - **accountCreation**: Contains tests and feature files for loan account creation.
        - **approval**: Contains tests and feature files for loan approval.
        - **repayment**: Contains tests and feature files for loan repayment.
      - **login**: Contains tests and feature files for the login functionality.
  - **fixtures**: Contains test data files.
  - **support**
    - **commands.js**: Custom commands for Cypress.
    - **config**: Configuration files and utility functions.
    - **locators**: Contains locator files for different page elements.
    - **pageObjects**: Page object model classes for different pages.
  
- **cypress.config.js**: Cypress configuration file.
- **jsconfig.json**: Configuration file for JavaScript.
- **package.json**: Project metadata and dependencies.
- **package-lock.json**: Lock file for npm dependencies.

## Repository Links

- **Repository**: [GitHub](https://github.com/bubykay/QA-automation-interview)
- **Issues**: [GitHub Issues](https://github.com/bubykay/QA-automation-interview/issues)

## Author

- **Kayode Adetayo**