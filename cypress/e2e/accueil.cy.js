describe('test page acceuil', () => {
  it('test acceuil', () => {
    cy.visit('http://localhost:4200/')
    cy.get('#learn-angular').should('exist')
    cy.get('#learn-angular').click()
  })
})
