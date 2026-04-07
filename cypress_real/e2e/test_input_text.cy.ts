describe('Text Input tests', () => {

  beforeEach(() => {
    cy.visit('/textinput')
  })
  const input= '#newButtonName' 
  const button = '#updatingButton'
  const defaultText = "Button That Should Change it's Name Based on Input Value"

  it('zmení text buttonu podľa inputu', () => {
    cy.get(input).type('testujem')
    cy.get(input).should('have.value', 'testujem')

    cy.get(button).click()

    cy.get(button)
      .should('have.text', 'testujem')
  })

  it('text sa nezmení bez kliknutia', () => {
    cy.get(input).type('Test')
    cy.get(input).should('have.value', 'Test')

    cy.get(button)
      .should('not.have.text', 'Test')
  })

  it('button ostane nezmenený pri prázdnom inpute', () => {
    cy.get(button).click()

    cy.get(button)
      .should('have.text', defaultText)
  })

  it('prepíše hodnotu inputu', () => {
    cy.get(input).type('Prvy')
    cy.get(input).should('have.value','Prvy')

    cy.get(button).click()
    cy.get(button).should('have.text','Prvy')

    cy.get(input).clear().type('Druhy')
    cy.get(input).should('have.value','Druhy')

    cy.get(button).click()

    cy.get(button)
      .should('have.text', 'Druhy')
  })

})