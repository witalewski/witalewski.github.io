describe('Main test', function() {
    it('visits the home page', function() {
        cy.visit('/')
    })
    it('finds name', function() {
        cy.contains('Adam Witalewski')
    })
    it('finds instagram feed', function() {
        cy.get('a[href^="https://www.instagram.com/p/"]').should('have.length', 12)
    })
  })