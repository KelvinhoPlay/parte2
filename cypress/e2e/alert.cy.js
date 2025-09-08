describe('Alert, New Window', () => {

  beforeEach(() => {
    
    cy.visit("/",  { failOnStatusCode: false })
  });

  it.only('Valida abertura de nova janela', () => {
    cy.OpenNewWindow()
  })
})