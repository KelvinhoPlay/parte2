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
//Cypress.Commands.add('login', (email, password) => {  })
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

Cypress.Commands.add('PreencherFormulário', () => {
  cy.contains('Forms').click()           
  cy.contains('Practice Form').click()  
  cy.get('#firstName').type('Kelves') 
  cy.get('#lastName').type('Souza')
  const email = `kelves_${Date.now()}@teste.com`
  cy.get('#userEmail').type(email)
  cy.contains('Male').click()
  cy.get('#userNumber').type('71996680629')
  cy.get('#dateOfBirthInput', { timeout: 10000 }).should('be.visible')
  cy.get('.subjects-auto-complete__value-container').type('teste parte 2')
  cy.contains('Sports').click()
  cy.get('#uploadPicture').attachFile('parte2.txt')
  cy.get('#currentAddress').type('Rua Jornalista Vicente Sarno')
  cy.get('#state').click()
  cy.contains('.css-26l3qy-menu div', 'Haryana').click()
  cy.get('#city').click()
  cy.contains('.css-26l3qy-menu div', 'Karnal').click()
  cy.get('#submit').click()
  cy.get('.modal-header').should('be.visible')
  cy.contains('Close').click({ force: true })
    
})
