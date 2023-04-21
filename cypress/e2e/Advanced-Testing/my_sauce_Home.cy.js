describe('HOME SAUCEDEMO', () => {
  before("must be in login page", () => {
    cy.visit("/");
    cy.validateUser('standard_user', 'secret_sauce')
  });
    

    it('Sort Name (Z to A)', () => {
  
        cy.press_Sort_Button('.product_sort_container', 'za')
        cy.wait(6000)

      })

    it('Sort Name (A to Z)', () => {
  
        cy.press_Sort_Button('.product_sort_container', 'az')
        cy.wait(6000)

      })

    it('Sort Price (low to high)', () => {
  
        cy.press_Sort_Button('.product_sort_container', 'lohi')
        cy.wait(6000)

      })

    it('Sort Price (high to low)', () => {
  
        cy.press_Sort_Button('.product_sort_container', 'hilo')
        cy.wait(6000)

      })


  })