describe('Todo app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Should show an error if submit with an empty value', () => {
    cy.contains('Submit').click()
    cy.contains('Enter value')
    cy.contains('No items')
  })

  it('Add a new item to the list', () => {
    cy.addItems()

    cy.get('[data-testid=itemsList]').children().should('have.length', 1)
    cy.get('[data-testid=totalItems]').contains('Total items: 1')
  })

  it('Add multiple items to the list', () => {
    cy.addItems(3)

    cy.get('[data-testid=itemsList]').children().should('have.length', 3)
    cy.get('[data-testid=totalItems]').contains('Total items: 3')
    cy.get('[data-testid=doneItems]').contains('Items done: 0')
  })

  it('Should change select value', () => {
    cy.get('select[name=priority]').select('Low').should('have.value', 'LOW')
    cy.get('select[name=priority]').select('Mid').should('have.value', 'MEDIUM')
    cy.get('select[name=priority]').select('High').should('have.value', 'HIGH')
  })

  it('Should mark item as done on checkbox click', () => {
    cy.addItems()

    cy.get('[data-testid=totalItems]').contains('Total items: 1')
    cy.get('[data-testid=doneItems]').contains('Items done: 0')

    cy.get('input[type=checkbox]').check().should('be.checked')

    cy.get('[data-testid=totalItems]').contains('Total items: 1')
    cy.get('[data-testid=doneItems]').contains('Items done: 1')
  })

  it('Should mark proper item as done on checkbox click if multiple items on the page', () => {
    cy.addItems(4)

    cy.get('[data-testid=itemsList]')
      .as('itemsList')
      .children()
      .should('have.length', 4)

    cy.get('@itemsList')
      .children(':nth-child(2)')
      .as('secondItem')
      .find('input[type=checkbox]')
      .check()
      .should('be.checked')

    cy.get('@secondItem')
      .siblings()
      .find('input[type=checkbox]')
      .not('be.checked')
  })
})
