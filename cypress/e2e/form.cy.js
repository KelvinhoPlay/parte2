describe('Pratice form', () => {

  beforeEach(() => {
    
    cy.visit("/",  { failOnStatusCode: false })
  });

  it('Preencher formulário com sucesso', () => {
    cy.PreencherFormulário()
  })
})