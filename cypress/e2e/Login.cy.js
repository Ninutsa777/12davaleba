import testData from '../fixtures/dav12.json'


describe('automation', () => {
    it('passes', () => {
      cy.visit('/')
  
      //Verify that home page is visible successfully
      cy.contains("Full-Fledged practice website for Automation Engineers").should("be.visible")
  
      //Click on 'Signup / Login' button
      cy.get('.shop-menu > .nav > :nth-child(4) > a').click()

     // Verify 'Login to your account' is visible

     cy.get('.login-form > h2').should("be.visible")

     //Enter correct email address and password

     cy.get('[data-qa="login-email"]').type (testData.email)
     cy.get('[data-qa="login-password"]').type (testData.password)

     //Click 'login' button
     cy.get('[data-qa="login-button"]').click()

     //Verify that 'Logged in as username' is visible
     cy.get(':nth-child(10) > a').should('be.visible')

    // Click 'Delete Account' button
    cy.get('.shop-menu > .nav > :nth-child(5) > a').click()

    //Verify that 'ACCOUNT DELETED!' is visible
    cy.get('[data-qa="account-deleted"]').should('be.visible')


    })
})  