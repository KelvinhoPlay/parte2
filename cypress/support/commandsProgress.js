Cypress.Commands.add('ProgressBar', () => {
  cy.contains('Widgets').click()           
  cy.contains('Progress Bar').click()
  cy.get('#startStopButton').click()
  cy.wait(500)
  cy.get('#startStopButton').click()
  cy.get('#progressBar').invoke('text').then((text) => {
        const percent = parseInt(text.replace('%', ''), 10);
        expect(percent).to.be.lessThan(25);
      });
  cy.get('#startStopButton').click();
  cy.get('#progressBar', { timeout: 30000 }) .should('have.text', '100%');
  cy.get('#resetButton').click();
  
})
