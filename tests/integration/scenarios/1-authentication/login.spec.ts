/// <reference types="../../support" />

describe("authentication - login", () => {
  it("logs the user in", () => {
    cy.login();
  });
});
