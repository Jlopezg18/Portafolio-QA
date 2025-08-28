describe('E2E and Regression Test Suite', () => {

  beforeEach(() => {
    cy.visit('http://the-internet.herokuapp.com/')
  })

  it('should navigate to A/B Testing page and validate content', () => {
    cy.contains('A/B Testing').click()
    cy.url().should('include', '/abtest')
    cy.get('h3').should('be.visible').and('contain.text', 'A/B Test')
  })

  it('should handle successful basic authentication', () => {
    cy.visit('http://admin:admin@the-internet.herokuapp.com/basic_auth')
    cy.get('p').should('be.visible').and('contain.text', 'Congratulations!')
  })
})