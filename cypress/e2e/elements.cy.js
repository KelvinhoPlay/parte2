describe('Criar registro', () => {

  beforeEach(() => {
    
    cy.visit("/",  { failOnStatusCode: false })
  });

  it('Criar, editar e excluir registro', () => {
    cy.ExcluirRegistro()
  })
})