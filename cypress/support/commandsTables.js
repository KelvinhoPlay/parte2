Cypress.Commands.add('CriarRegistro', () => {
  cy.contains('Elements').click()           
  cy.contains('Web Tables').click()
  cy.get('#addNewRecordButton').click()
  cy.get('#firstName').type('Kelves')
  cy.get('#lastName').type('Souza')
  cy.get('#userEmail').type('kelvessilva@live.com')
  cy.get('#age').type('34')
  cy.get('#salary').type('100000')
  cy.get('#department').type('QA')
  cy.get('#submit').click()
})

Cypress.Commands.add('EditarRegistro', () => {
    cy.CriarRegistro()
    cy.contains('Kelves').parents('div.rt-tr').within(() => {
        cy.get('[title="Edit"]').click(); 
      });
    cy.get('#userEmail').clear().type('teste@live.com')
    cy.get('#submit').click()
    cy.contains('teste@live.com').should('be.visible')
})

Cypress.Commands.add('ExcluirRegistro', () => {
    cy.EditarRegistro()
    cy.contains('Kelves').parents('div.rt-tr').within(() => {
        cy.get('[title="Delete"]').click(); 
      });
    
})

