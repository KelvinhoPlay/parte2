describe('Verificar progresso', () => {

  beforeEach(() => {
    
    cy.visit("/",  { failOnStatusCode: false })
  });

  it('Verificar status bar', () => {
    cy.ProgressBar()
  })
})