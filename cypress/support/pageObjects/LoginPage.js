import { urls } from "../config";
import { constants } from "../config/index";
import { getLocator, visitPage } from "../config/utils";
import { loginLocators } from "../locators/loginLocators";

export default class LoginPage {
  visit = () => {
    visitPage(urls.loginPage);
    // Wait for the URL to include the login page path
    cy.url().should("include", "#/");
  };
  elements = {
    username: () => getLocator(loginLocators.usernameInput),
    password: () => getLocator(loginLocators.passwordInput),
    button: () => getLocator(loginLocators.submitButton),
    welcome: () => getLocator(loginLocators.welcomeMessage),
  };

  fillUsername = (username = constants.USERNAME) =>
    getLocator(loginLocators.usernameInput).type(username);
  fillPassword = (password = constants.PASSWORD) =>
    getLocator(loginLocators.passwordInput).type(password);
  verifyDashboard = () => getLocator(loginLocators.notificationIcon, true);
  clickLoginButton = () => getLocator(loginLocators.submitButton).click();
}
