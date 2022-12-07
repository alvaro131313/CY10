Cypress.Commands.add('validateType', (element, name ) => {
    cy.get(element).type(name)
})

Cypress.Commands.add('validateText', (element, name ) => {
    cy.get(element).type(name).should('have.value', name)
})