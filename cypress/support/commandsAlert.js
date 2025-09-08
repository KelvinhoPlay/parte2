Cypress.Commands.add('OpenNewWindow', () => {
  cy.contains('Alerts, Frame & Windows').click()           
  cy.contains('Browser Windows').click()
  cy.window().then((win) => {
    cy.stub(win, 'open').callsFake((url) => {
      win.location.href = url
    }).as('windowOpen')
  })

  cy.get('#windowButton').click()
  cy.get('@windowOpen').should('be.calledWith', '/sample')
  cy.contains('This is a sample page').should('be.visible')
})

