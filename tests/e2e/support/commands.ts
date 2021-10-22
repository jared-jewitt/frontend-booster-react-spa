/// <reference types="cypress" />

// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("login", () => {
  const loginButtonSelector = "#root > div > button";

  cy.visit(`http://localhost:${Cypress.env("port")}/login`);
  cy.get(loginButtonSelector).contains("Simulate login").click();
  cy.location("pathname").should("equal", "/dashboard");
});

Cypress.Commands.add("logout", () => {
  const logoutButtonSelector = "#root > div > button";

  cy.visit(`http://localhost:${Cypress.env("port")}/dashboard`);
  cy.get(logoutButtonSelector).contains("Simulate logout").click();
  cy.location("pathname").should("equal", "/login");
});
