describe('Business Registration Form Automation', () => {

  const formData = {
    firstName: 'James',
    lastName: 'Bond',
    businessName: 'Bond Company',
    contactNumber: '(000)0000000', 
    email: 'jbond@example.com',
    streetAddress: '123 London Street',
    streetAddressLine2: 'Apt 2',
    city: 'London',
    state: 'Maryland',
    postalCode: '20902',
    businessType: 'Store',
    message: 'This is a sample text.'
  };

  it('Should successfully fill out and submit the Business Registration Form', () => {
    // 1. Visit the site
    cy.visit('https://form.jotform.com/242354571450554');
    
    // Use the `form` selector to ensure all commands are scoped to the form
    cy.get('.jotform-form').as('registrationForm');

    // 2. Fill out Personal/Business Details
    cy.get('input[name="q1_firstName"]').type(formData.firstName);
    cy.get('input[name="q2_lastName"]').type(formData.lastName);
    cy.get('input[name="q3_businessName"]').type(formData.businessName);
    
   
    cy.get('input[name="q4_contactNumber[full]"]').type(formData.contactNumber); 
    
    cy.get('input[name="q5_email"]').type(formData.email);

    // 3. Fill out Address Section 
    // Using the field IDs or name attributes for the address fields:
    cy.get('input[name="q6_address[addr_line1]"]').type(formData.streetAddress);
    cy.get('input[name="q6_address[addr_line2]"]').type(formData.streetAddressLine2);
    cy.get('input[name="q6_address[city]"]').type(formData.city);
    // For a dropdown/select element, use `.select()`
    cy.get('select[name="q6_address[state]"]').select(formData.state); 
    cy.get('input[name="q6_address[zip]"]').type(formData.postalCode);

    // 4. Select Type of Business (Radio Button)
    // Find the radio button that has the value "Store" and click it
    cy.get('input[type="radio"][value="Store"]').check();

    // 5. Fill out the Message
    cy.get('textarea[name="q9_message"]').type(formData.message);

    // 6. Submit the Form
    // Find the submit button element and click it
    cy.get('#input_10').click(); // Using the button's specific ID
    
     });
});