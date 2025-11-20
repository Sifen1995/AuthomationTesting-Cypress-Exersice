describe('Checkbox Selection Test', () => {
  const url = 'https://rahulshettyacademy.com/AutomationPractice/';

  it('Should select and verify multiple checkboxes by their value attribute', () => {
    // 1. Visit the page
    cy.visit(url);

    // Define the value attributes of the checkboxes we want to select
    const checkboxValues = ['option2', 'option3'];

    // 2. Locate and 3. Select (check) all of the chosen checkboxes
    // We use a .each() loop to iterate over the array of values
    cy.wrap(checkboxValues).each((value) => {
      // Locate the checkbox using the input tag and the specific value attribute
      // cy.get('input[type="checkbox"][value="value"]')
      const selector = `input[type="checkbox"][value="${value}"]`;

      // Log the selection action
      cy.log(`Attempting to check checkbox with value: ${value}`);

      // Check the checkbox. Cypress's .check() automatically handles
      // ensuring the element is visible and will uncheck it if it's already checked,
      // but in this case, it ensures it is checked.
      cy.get(selector).check(); 
    });

    // 4. Verify that each checkbox is marked as selected (checked)
    cy.wrap(checkboxValues).each((value) => {
      const selector = `input[type="checkbox"][value="${value}"]`;

      // Log the verification
      cy.log(`Verifying checkbox with value: ${value} is checked.`);

      // Assert that the element is checked
      cy.get(selector).should('be.checked');
    });

    // Optional: Verify that the third option (Option1) is NOT checked,
    // just to be thorough and ensure only the selected items were affected.
    cy.get('input[type="checkbox"][value="option1"]').should('not.be.checked');

  });
});