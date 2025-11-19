describe('Locating Elements with Different Selectors', () => {

    const formData = {
      Name: 'sifen',
      email: 'jbond@example.com',
      password: 'sifen1995',
      Gender: 'Female', 
      EmploymentStatus: 'Employed',
      DateOfBerth: '1995-05-18'
    };

    it('successfully locate the elements and fill the form fields', () => {
      cy.visit('https://rahulshettyacademy.com/angularpractice/')

      // 1. Name Input (input[name="name"] is the first field)
      cy.get('input[name="name"]').eq(0).type(formData.Name) 
      
      // 2. Email Input
      cy.get('input[name="email"]').type(formData.email)
      
      // 3. Password Input (using its ID selector)
      cy.get('#exampleInputPassword1').type(formData.password)
      
      // 4. Check the 'I love IceCream' checkbox
      cy.get('#exampleCheck1').check() 
      
      // 5. Gender Dropdown (using its ID selector and .select() command)
      cy.get('#exampleFormControlSelect1').select(formData.Gender)
      
      // 6. Employment Status (Target the radio button input with the value 'Employed')
      
      cy.get('input[type="radio"][value="option2"]').check()

      // 7. Date of Birth (Target the date input field)
      cy.get('input[type="date"]').type(formData.DateOfBerth)
      
      // Optional: Assert that 'Student' is no longer checked
      cy.get('input[type="radio"][value="option1"]').should('not.be.checked')
      
      // Optional: Assert that 'Employed' is now checked
      cy.get('input[type="radio"][value="option2"]').should('be.checked')

      cy.get('input[type="submit"][value="Submit"]').click()
    });
})