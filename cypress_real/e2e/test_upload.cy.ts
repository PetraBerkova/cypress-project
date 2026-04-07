describe('File upload test', () => {

  // helper na prácu s iframe
  const getIframeBody = () => {
    return cy
      .get('iframe')
      .its('0.contentDocument.body')
      .should('not.be.empty')
      .then(cy.wrap)
  }

  it('uploadne a zmaže súbor', () => {
    cy.visit('/upload')

    // uloženie iframe do aliasu
    getIframeBody().as('frame')

    const fileName = 'subor.txt'
    const filePath = `cypress/fixtures/${fileName}`

    //  upload súboru
    cy.get('@frame')
      .find('input[type="file"]#browse')
      .should('exist')
      .selectFile(filePath, { force: true })

    // overenie uploadu
    cy.get('@frame')
      .should('contain.text', fileName)

    //  klik na delete pre konkrétny súbor
    cy.get('@frame')
      .contains('.file-item', fileName)
      .find('.file-actions svg')
      .click({ force: true })

    //  overenie že súbor zmizol
    cy.get('@frame')
      .should('not.contain.text', fileName)
  })

})