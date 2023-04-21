Cypress.Commands.add('press_Sort_Button', (element_sort_button , dropdown_option) => {
    cy.get(element_sort_button).select(dropdown_option)
})