const baseUrl = "https://demo.mifos.io/";

export const urls = {
  loginPage: baseUrl + "",
  viewClient: (id) => `${baseUrl}#/viewclient/${id}`,
};

export const constants = {
  USERNAME: "mifos",
  PASSWORD: "password",
  WELCOME: "cy.get('.paddedleft > strong.ng-binding')",
};
