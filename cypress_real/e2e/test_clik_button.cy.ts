describe('Click page tests', () => {

  beforeEach(() => {
    cy.visit('/click')
    cy.get('#badButton').as('button')
  })
  
  it('test title', () => {
    cy.title().should('include', 'Click')
    cy.title().then(title => cy.log(title))
  })

  it('button je viditeľný a klikateľný', () => {
    cy.get('@button')
      .should('be.visible')
      .and('not.be.disabled')
  })

  it('button nemá success class pred kliknutím', () => {
    cy.get('@button')
      .should('not.have.class', 'btn-success')
  })

  it('klikne na button a zmení class aj farbu', () => {
    cy.get('@button').click()

    cy.get('@button')
      .should('have.class', 'btn-success')
      .and('have.css', 'background-color', 'rgb(40, 167, 69)')
  })

  it('button ostane success po kliknutí', () => {
    cy.get('@button').click().click()

    cy.get('@button')
      .should('have.class', 'btn-success')
  })

})