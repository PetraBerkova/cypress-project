describe('vyber prvkov', () => {
   
  beforeEach(() => {
    cy.visit('/dynamicid')
  })

  it('css selector', () => {

    cy.get('.container h3')
      .should('have.text', 'Dynamic ID')

  })

  it('výber tlačítka s dynamickým id', () => {

    cy.contains('Button with Dynamic ID')
      .should('be.visible')

  })

})