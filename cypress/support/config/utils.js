export const getLocator = (locator) => {
  return cy.get(locator);
};

export const visitPage = (url) => {
  return cy.visit(url);
};
