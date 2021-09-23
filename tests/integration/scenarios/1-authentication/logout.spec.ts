/// <reference types="../../support" />

describe("authentication - logout", () => {
  before(() => {
    cy.login();
  });

  it("logs the user out", () => {
    cy.logout();
  });
});
