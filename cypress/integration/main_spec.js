describe('Main test', function() {
  it('visits the home page', function() {
    cy.visit('/');
  });
  it('finds name', function() {
    cy.contains('Adam Witalewski');
  });
  it('finds medium articles', function() {
    cy.contains('a[href^="https://medium.com/@awitalewski"]');
  });
});
