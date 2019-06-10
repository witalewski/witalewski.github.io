describe('Main test', function() {
    it('visits the home page', function() {
        cy.visit('/')
    })
    it('finds name', function() {
        cy.contains('Adam Witalewski')
    })
    it('finds medium articles', function() {
        cy.get('a[href^="https://medium.com/@awitalewski"]').should('have.length', 4)
    })
    it('finds github repos ', function() {
        cy.get('a[href^="https://github.com/witalewski"]').should('have.length', 5)
    })
    it('finds instagram feed', function() {
        cy.get('a[href^="https://www.instagram.com/p/"]').should('have.length', 12)
    })
  })