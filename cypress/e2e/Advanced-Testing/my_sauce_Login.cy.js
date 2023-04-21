describe('LOGIN SAUCEDEMO', () => {
  beforeEach("must be in login page", () => {
    cy.visit("/");
  });
    
    it('Login Success User', () => {
      cy.validateUser('standard_user', 'secret_sauce')
    })
    it('Login Locked Out User', () => {
      cy.validateUser('locked_out_user','secret_sauce')
    })

    it('Login Problem User', () => {
      cy.validateUser('problem_user', 'secret_sauce')
    
    })

    it('Login Perfomance Glitch User', () => {
      cy.validateUser('performance_glitch_user', 'secret_sauce')  
    })

  })