const passwordField = "#password";
const userField = "#user-name";
const loginButton = "#login-button";

/*Cypress.Commands.add('validateUser', (element_user, name_user) => {
    cy.get(element_user).type(name_user , {delay: 200})
})*/

Cypress.Commands.add('validateUser', (name_user, password_user) => {
    cy.get(userField).type(name_user , {delay: 200})
    cy.get(passwordField).type(password_user , {delay: 200})
    cy.get(loginButton).click()
})

Cypress.Commands.add('pressLogin_Button', (element_login_button) => {
    cy.get(element_login_button).click()
})