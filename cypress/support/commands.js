import { cyan } from "color-name"

// ***********************************************
// This example commands.js shows you how to
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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })


Cypress.Commands.add('loginTointelliHr', () => {
    cy.visit('/');
    cy.get('#username').type("vinod");
    cy.get('#password').type("");
    cy.get('button[type="submit"]').contains("Sign In").click(); 
})

Cypress.Commands.add('createPerson', () => {
    cy.get('a[href="https://vinod-demo.intellihrdev.net/people"]').click();
    cy.get('a[title="Create New Person"]').click();
    cy.wait(10000);
    cy.get('#firstName').type('Demo');
    cy.get('#lastName').type('Test');
    cy.get('span > button[type="submit"]').contains("Continue to Create Job").click().scrollIntoView();
})

Cypress.Commands.add('createJob', () => {
    cy.get('#startDate').type('10/03/2020');
    cy.get('#name').type('Tester');
})