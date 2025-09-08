describe('Ordenar de forma crescente', () => {

  beforeEach(() => {
    
    cy.visit("/",  { failOnStatusCode: false })
  });

  it('Ordenar registros', () => {
    cy.OrdenarRegi()
  })
})