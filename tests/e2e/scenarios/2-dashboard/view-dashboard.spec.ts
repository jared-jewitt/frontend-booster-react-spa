/// <reference types="../../support" />

describe("E2E - dashboard flow", () => {
  before(() => {
    cy.login();
  });

  beforeEach(() => {
    cy.visit(`http://localhost:${Cypress.env("port")}/dashboard`);
  });

  it("views the content", () => {
    const welcomeTextSelector = "#root > div > p";

    cy.get(welcomeTextSelector).should("have.text", "Welcome to the React SPA boilerplate!");
  });
});
