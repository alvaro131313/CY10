describe('PAYMENT SAUCEDEMO', () => {
    
    it('COMPLETE PAYMENT PROCESS', () => {

      cy.visit("/")// visits the baseUrl

      cy.validateUser('standard_user', 'secret_sauce')
  
      cy.press_AddItem_Button('#add-to-cart-sauce-labs-backpack')
      cy.wait(2000)
      cy.go_Shoppingcart('#shopping_cart_container', '#checkout')
      cy.check_First_name('#first-name','Alvaro')
      cy.check_Last_name('#last-name','Diaz')
      cy.check_Zip_code('#postal-code','10010')
      cy.continue_Button('#continue')
      cy.wait(5000)
      cy.finish_Button('#finish')


    
    })

    //it('ADDING ITEM TO SHOPPING CART', () => {
  
      //  cy.press_AddItem_Button('#add-to-cart-sauce-labs-backpack')
       // cy.wait(2000)
    

    //  })

    //  it('GO TO SHOPPING CART', () => {
  
    //    cy.go_Shoppingcart('#shopping_cart_container')
    //    cy.wait(5000)

    

    //  })



  })