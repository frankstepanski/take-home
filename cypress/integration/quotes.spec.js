describe('Inputs and submit button', () => {
  it('can navigate to the site', () => {
    cy.visit('http://localhost:1234')
    cy.url().should('include', 'localhost')
  })

  it('submit button is disabled', () => {
    cy.get('button#submitBtn')
      .should('be.disabled')
  })

  it('can type a text for a new quote', () => {
    cy.get('input[name="text"]')
      .type('Have fun!')
      .should('have.value', 'Have fun!')
  })

  it('can type an author for a new quote', () => {
    cy.get('input[name="author"]')
      .type('Gabe')
      .should('have.value', 'Gabe')
  })

  it('button is not disabled any more', () => {
    cy.get('button#submitBtn')
      .should('not.be.disabled')
  })

  it('can cancel the new quote', () => {
    cy.get('button#cancelBtn').click()
  })

  it('text input is back to blank', () => {
    cy.get('input[name="text"]')
      .should('have.value', '')
  })

  it('author input is back to blank', () => {
    cy.get('input[name="author"]')
      .should('have.value', '')
  })

  it('button is back to being disabled', () => {
    cy.get('button#submitBtn')
      .should('be.disabled')
  })
})


describe('Adding a new quote', () => {
  it('can navigate to the site', () => {
    cy.visit('http://localhost:1234')
    cy.url().should('include', 'localhost')
  })

  it('can submit a new quote', () => {
    cy.get('input[name="text"]')
      .type('Have fun!')

    cy.get('input[name="author"]')
      .type('Gabe')

    cy.get('button#submitBtn').click()
    cy.contains('Have fun!')
  })

  it('can delete newly created quote', () => {
    cy.contains('Have fun!').siblings('button:nth-of-type(2)').click()
    cy.contains('Have fun!').should('not.exist')
  })
})

describe('Editing an existing quote', () => {
  it('can navigate to the site', () => {
    cy.visit('http://localhost:1234')
    cy.url().should('include', 'localhost')
  })

  it('can submit a new quote', () => {
    cy.get('input[name="text"]').type('Use Postman')
    cy.get('input[name="author"]').type('Gabriel')
    cy.get('button#submitBtn').click()
  })

  it('can edit newly created quote', () => {
    cy.contains('Use Postman').siblings('button:nth-of-type(1)').click()
    cy.get('input[name="text"]').should('have.value', 'Use Postman')
    cy.get('input[name="author"]').should('have.value', 'Gabriel')

    cy.get('input[name="text"]').type(' for realz')
    cy.get('input[name="author"]').type(' Cabrejas')

    cy.get('button#submitBtn').click()
  })

  it('can delete newly edited quote', () => {
    cy.contains('Use Postman for realz (Gabriel Cabrejas)')
    cy.contains('Use Postman for realz (Gabriel Cabrejas)').next().next().click()
    cy.contains('Use Postman for realz (Gabriel Cabrejas)').should('not.exist')
  })
})
