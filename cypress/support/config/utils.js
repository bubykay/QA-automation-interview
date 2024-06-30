export const getLocator = (locator, visible = false) => {
  return visible
    ? cy.get(locator, { timeout: 40000 }).should("be.visible")
    : cy.get(locator);
};

export const visitPage = (url) => {
  return cy.visit(url);
};
