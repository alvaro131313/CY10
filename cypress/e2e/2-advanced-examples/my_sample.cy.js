// This is a alternative typing " function " instead of  " => "


//describe('My First Test', function ()  {
//    it('finds the content "root"', function ()  {
//      cy.visit('https://example.cypress.io')
//
//     cy.contains('root')
//    })
//  })

describe('My First Test', () => {
    it('Gets, types and asserts', () => {
      cy.visit('/')// visits the baseUrl
  
      cy.contains('type').click()
  
      // Should be on a new URL which
      // includes '/commands/actions'
      cy.url().should('include', '/commands/actions')

      // Get an input, type into it and verify
    // that the value has been updated

    cy.validateType('.action-email', 'CRISTIANO@GOUP.IO') 


   // cy.get('.action-email')
    //.type('CRISTIANO@GOUP.IO', {delay: 100})
   // .should('have.value', 'CRISTIANO@GOUP.IO')

    cy.validateText('.action-focus', 'SIU' )

    //cy.get('.action-focus')
    //.type('SIU', {delay: 100})
    //.should('have.value', 'SIU')

    cy.get('.action-blur')
    .type('CR7', {delay: 100})
    .should('have.value', 'CR7')

    cy.get('.action-clear')
    .type('THE SPECIAL ONE', {delay: 100})
    .should('have.value', 'THE SPECIAL ONE')

    cy.get('#couponCode1')
    .type('GOAL', {delay: 100})
    .should('have.value', 'GOAL')

    })
  })