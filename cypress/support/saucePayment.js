Cypress.Commands.add('press_AddItem_Button', (element_AddItem_button) => {
    cy.get(element_AddItem_button).click()
})

Cypress.Commands.add('go_Shoppingcart', (element_press_Go_shoppingcart , check_Button) => {
    cy.get(element_press_Go_shoppingcart).click()
    cy.get(check_Button).click()
})

Cypress.Commands.add('check_First_name', (element_First_name, First_N) => {
    cy.get(element_First_name).type(First_N , {delay: 200})
})

Cypress.Commands.add('check_Last_name', (element_Last_name, Last_N) => {
    cy.get(element_Last_name).type(Last_N , {delay: 200})
})

Cypress.Commands.add('check_Zip_code', (element_Zip_code, Zip_C) => {
    cy.get(element_Zip_code).type(Zip_C , {delay: 200})
})

Cypress.Commands.add('continue_Button', (element_continue_Button) => {
    cy.get(element_continue_Button).click()
})

Cypress.Commands.add('finish_Button', (element_finish_Button) => {
    cy.get(element_finish_Button).click()
})