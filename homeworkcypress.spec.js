describe('', () => {
    it('', () => {
        cy.visit('https://react-redux.realworld.io/#/login');
        cy.get(':nth-child(1) > .form-control').type('n@n.com');
        cy.get(':nth-child(2) > .form-control').type('1234');
        cy.get('.btn').click();
        cy.get('.navbar').contains('test007').should('exist');
    });
});
