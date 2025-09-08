const moverItem = (texto, posicaoDestino) => {
  cy.get('.vertical-list-container.mt-4 .list-group-item.list-group-item-action')
    .contains(texto)
    .then($el => {
      const rect = $el[0].getBoundingClientRect();

      cy.wrap($el).trigger('mousedown', {
        which: 1,
        pageX: rect.x + rect.width / 2,
        pageY: rect.y + rect.height / 2,
        force: true,
      });

      cy.get('.vertical-list-container.mt-4 .list-group-item.list-group-item-action')
        .eq(posicaoDestino)
        .then($target => {
          const targetRect = $target[0].getBoundingClientRect();

          cy.wrap($el)
            .trigger('mousemove', {
              which: 1,
              pageX: targetRect.x + targetRect.width / 2,
              pageY: targetRect.y + targetRect.height / 2,
              force: true,
            })
            .trigger('mouseup', { force: true });
        });
    });
};

Cypress.Commands.add('OrdenarRegi', () => {
  cy.contains('Interactions').click();
  cy.contains('Sortable').click();
  cy.contains('List').click({ force: true });

  moverItem('Six', 0);
  moverItem('Five', 1);
  moverItem('Four', 2);
  moverItem('Three', 3);
  moverItem('Two', 4);
  moverItem('One', 5);
});
