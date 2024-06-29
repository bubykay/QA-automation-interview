import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../../support/pageObjects/LoginPage";
// import { constants } from "../../support/config/index";

const loginpage = new LoginPage();

Given("I open the login page", () => {
  loginpage.visit();
});
When("I submit the login form", () => {
  loginpage.fillUsername();
  loginpage.fillPassword();
  loginpage.elements.button().click();
});
Then("I should see the dashboard", () => {
  console.log("page opened");
});
