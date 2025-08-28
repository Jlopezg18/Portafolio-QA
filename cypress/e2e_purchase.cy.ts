// e2e_purchase.cy.ts

describe('E2E Purchase Flow', () => {

  it('should allow a user to log in and complete a purchase successfully', () => {
    // 1. Visit the home page and log in
    cy.visit('https://www.demoblaze.com/')
    cy.get('#login2').click()
    cy.get('#loginusername').type('testuser')
    cy.get('#loginpassword').type('testpass')
    cy.get('button').contains('Log in').click()
    
    // Validate login success by checking for a welcome message
    cy.get('#nameofuser').should('contain.text', 'Welcome testuser')
    
    // 2. Add a product to the cart
    cy.get('.card-title').first().click()
    cy.get('.btn-success').contains('Add to cart').click()
    
    // 3. Navigate to the cart and checkout
    cy.get('#cartur').click()
    cy.get('.btn-success').contains('Place Order').click()
    
    // 4. Fill out the order form
    cy.get('#name').type('John Doe')
    cy.get('#country').type('USA')
    cy.get('#city').type('New York')
    cy.get('#card').type('1234-5678-9012-3456')
    cy.get('#month').type('12')
    cy.get('#year').type('2025')
    
    // 5. Complete the purchase
    cy.get('button').contains('Purchase').click()
    
    // 6. Validate the purchase confirmation message
    cy.get('.sweet-alert').should('be.visible')
    cy.get('h2').should('contain.text', 'Thank you for your purchase!')
    cy.get('.confirm').contains('OK').click()
  })

})