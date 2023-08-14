/* eslint-disable no-undef */
describe('Functional test of shopping cart', () => {

  it('Should add products at the cart with success', () => {
    cy.visit('http://localhost:3000/');

    cy.get('.add-cart-button').click({ force: true });

    cy.get('.cart-status').should('contain', '1');
  });

  it('Should delete products from the cart with success', () => {
    cy.visit('http://localhost:3000/');

    cy.get('.add-cart-button').click({ force: true });
    cy.get('.cart-status').click();
    cy.get('.button-remove-item').click();
    cy.get('.cart-button').click();

    cy.get('.cart-status').should('contain', '0');
  });
});
