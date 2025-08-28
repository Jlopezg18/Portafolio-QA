// Describe a set of tests for the login functionality
describe('Login Functionality', () => {

  // Before each test, visit the login page
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
  })

  // The individual test
  it('should allow a user to log in with valid credentials', () => {
    // 1. Locate the username field and type the credentials
    cy.get('#user-name').type('standard_user')

    // 2. Locate the password field and type the credentials
    cy.get('#password').type('secret_sauce')

    // 3. Locate and click the login button
    cy.get('#login-button').click()

    // 4. Validate that the login was successful by checking for a unique element on the next page
    cy.get('.app_logo').should('be.visible').and('contain.text', 'Swag Labs')

    // 5. Validate that the URL changed
    cy.url().should('include', '/inventory.html')
  })

})