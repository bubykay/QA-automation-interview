import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../../../support/pageObjects/LoginPage";
import { urls } from "../../../support/config/index";
import LoanPage from "../../../support/pageObjects/LoanPage";
import { getLocator } from "../../../support/config/utils";

const loginPage = new LoginPage();
const loanPage = new LoanPage();
Given("I open the login page", () => {
  // cy.intercept("GET", "https://https://demo.mifos.io/#").as("homePageVisit");
  loginPage.visit();
  // cy.wait("@homePageVisit");
});
When("I submit the login form", () => {
  cy.intercept("POST", "/fineract-provider/api/v1/authentication").as(
    "loginRequest"
  );
  loginPage.fillUsername();
  loginPage.fillPassword();
  loginPage.clickLoginButton();
  cy.get("body").type("{esc}{esc}");
  cy.wait("@loginRequest", { timeout: 400000 });
  loginPage.verifyDashboard();
  cy.visit(urls.viewClient(1));
  loanPage.newLoanButton();
  getLocator("#productId").select("CF Test Sell");
  // getLocator("div > b").click(); //.select("WORKING CAPITAL");
  getLocator("#submittedOnDate").click();
  getLocator(
    '[style="border-spacing: 10px; border-collapse: separate"] > :nth-child(1) > :nth-child(3) > :nth-child(2) > .dropdown-menu > li > .ng-isolate-scope > tbody > [ng-show="showTodayDate"] > .text-center > strong > .ng-binding'
  ).click();
  getLocator("#expectedDisbursementDate").type("31 June 2024");
  getLocator("#expectedDisbursementDate").type("{esc}{esc}{esc}{esc}");
});
Then("I should see the dashboard", () => {
  console.log("Finished");
});
