describe('Login Form Validation Test', () => {

    const url = 'https://practicetestautomation.com/practice-test-login/';
    
    // Define the valid and invalid credential sets
    const credentials = {
        validUsername: 'student',
        validPassword: 'Password123',
        invalidUsername: 'wrongUser',
        invalidPassword: 'wrongPassword'
    };

    // Define selectors
    const selectors = {
        usernameField: '#username',
        passwordField: '#password',
        submitButton: '#submit',
        errorMessage: '#error',
        successMessage: '.post-title'
    };

    // Ensure we start on the login page for this test
    beforeEach(() => {
        cy.visit(url);
    });

    it('Should display an error for invalid credentials and successfully log in with valid credentials', () => {
        // --- NEGATIVE TEST: Invalid Credentials ---
        cy.log('Attempting login with INVALID credentials...');
        
        // 1. Enter an invalid username and password
        cy.get(selectors.usernameField).type(credentials.invalidUsername);
        cy.get(selectors.passwordField).type(credentials.invalidPassword);
        
        // 2. Submit the login form
        cy.get(selectors.submitButton).click();
        
        // 3. Verify that the error message appears and contains the exact text
       // Change line 41 in your test
cy.get(selectors.errorMessage)
  .should('be.visible')
  .and('have.text', 'Your username is invalid!'); // <-- FIX: Updated text

        // --- POSITIVE TEST: Valid Credentials ---
        cy.log('Attempting login with VALID credentials...');
        
        // 4. Reload the page or clear fields to start fresh (reloading is safer)
        cy.visit(url);
        
        // 5. Enter a valid username and password
        cy.get(selectors.usernameField).type(credentials.validUsername);
        cy.get(selectors.passwordField).type(credentials.validPassword);
        
        // 6. Submit the login form
        cy.get(selectors.submitButton).click();

        // 7. Verify the user successfully logs in to the dashboard
        // After successful login, the URL changes to /logged-in-successfully/
        cy.url().should('include', '/logged-in-successfully/');
        
        // Verify the success message on the dashboard page
        cy.get(selectors.successMessage)
          .should('be.visible')
          .and('contain', 'Logged In Successfully');
          
        // Optional: Verify the logout button is present
        cy.contains('Log out').should('be.visible');
    });
});