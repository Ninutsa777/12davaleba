import testData from '../fixtures/dav12.json'



describe('automation', () => {
  it('passes', () => {
    cy.visit('/')

    //Verify that home page is visible successfully
    cy.contains("Full-Fledged practice website for Automation Engineers").should("be.visible")

    //Click on 'Signup / Login' button
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()

   // Verify 'New User Signup!' is visible
   cy.get('.signup-form > h2').should("have.text",'New User Signup!')

   //Enter name and email address
  cy.get('[data-qa="signup-name"]').type (testData.name)
  cy.get('[data-qa="signup-email"]').type(testData.email)

   //Click 'Signup' button
  cy.get('[data-qa="signup-button"]').click()

  // Verify that 'ENTER ACCOUNT INFORMATION' is visible

 cy.get('.login-form > :nth-child(1)').should("have.text",'Enter Account Information')

  //Fill details: Title, Name, Email, Password, Date of birth
 cy.get('#id_gender2').check(testData.title)
 cy.get('[data-qa="password"]').type(testData.password)
 cy.get('[data-qa="days"]').select(testData.birthday)
 cy.get('[data-qa="months"]').select(testData.birthmonth)
 cy.get('[data-qa="years"]').select(testData.birthyear)

   //Select checkbox 'Sign up for our newsletter!'
   cy.get('#newsletter').check()

   //Select checkbox 'Receive special offers from our partners!'
   cy.get('#optin').check()

   //Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
   cy.get('[data-qa="first_name"]').type(testData.firstName)
   cy.get('[data-qa="last_name"]').type(testData.lastName)
   cy.get('[data-qa="company"]').type(testData.company)
   cy.get('[data-qa="address"]').type(testData.adress)
   cy.get('[data-qa="address2"]').type(testData.adress2)
   cy.get('[data-qa="country"]').select(testData.country)
   cy.get('[data-qa="state"]').type(testData.state)
   cy.get('[data-qa="city"]').type(testData.city)
   cy.get('[data-qa="zipcode"]').type(testData.zipcode)
     cy.get('[data-qa="mobile_number"]').type(testData.mobile)

   //Click 'Create Account button'
   cy.get('[data-qa="create-account"]').click()

   //Verify that 'ACCOUNT CREATED!' is visible

   cy.get('[data-qa="account-created"]').should('be.visible')

  // Click 'Continue' button

  cy.get('[data-qa="continue-button"]').click()

 // Verify that 'Logged in as username' is visible
 cy.contains(`Logged in as ${user.firstName}`).should('be.visible')





  })
})

it.only('passes',  () => {
  cy.visit('/')
  cy.registration(testData)
})
