/// <reference types="../../support" />

describe("E2E - login flow", () => {
  it("logs the user in", () => {
    cy.login();
  });
});
