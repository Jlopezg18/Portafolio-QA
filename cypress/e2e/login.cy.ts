// cypress/e2e/login.cy.ts
describe('Login Functionality', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
    });

    it('should log in with valid credentials', () => {
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();

        cy.get('.app_logo').should('be.visible');
        cy.url().should('include', '/inventory.html');
    });
});