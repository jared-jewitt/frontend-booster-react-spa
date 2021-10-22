/// <reference types="../../support" />

describe("E2E - logout flow", () => {
  before(() => {
    cy.login();
  });

  it("logs the user out", () => {
    cy.logout();
  });
});
