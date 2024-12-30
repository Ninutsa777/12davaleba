import testData from'../fixtures/dav12.json'

describe('automation', () => {
    it('passes', () => {
      cy.visit('/')
  
      //Verify that home page is visible successfully
      cy.contains("Full-Fledged practice website for Automation Engineers").should("be.visible")
  
      //Click on 'Signup / Login' button
      cy.get('.shop-menu > .nav > :nth-child(4) > a').click()

      // Verify 'Login to your account' is visible

     cy.get('.login-form > h2').should("be.visible")

     //Enter incorrect email address and password

     cy.get('[data-qa="login-email"]').type(testData.incorrectmail)
     cy.get('[data-qa="login-password"]').type(testData.incrrecpassword)

    // Click 'login' button
    cy.get('[data-qa="login-button"]').click()

    //Verify error 'Your email or password is incorrect!' is visible

    cy.get('.login-form > form > p').should('be.visible')




    })
})