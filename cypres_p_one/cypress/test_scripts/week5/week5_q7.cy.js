describe('Dropdown Option Selection Test', () => {
  const url = 'https://rahulshettyacademy.com/AutomationPractice/';

  it('Should select an option from the dropdown and verify the selection', () => {
    // 1. Visit the page
    cy.visit(url);

    // Define the desired option to select
    const optionToSelect = 'Option3';
    
    // 2. Locate the dropdown element (it has the ID 'dropdown-class-example')
    const dropdownSelector = '#dropdown-class-example';
    
    // Get the dropdown element
    cy.get(dropdownSelector).as('dropdown');

    // 3. Select an option from the dropdown by visible text
    // The .select() command takes the visible text, value, or index
    cy.get('@dropdown')
      .select(optionToSelect)
      .then(() => {
        cy.log(`Selected option: ${optionToSelect}`);
      });

    // 4. Verify that the selected option is displayed correctly in the dropdown
    // We assert that the value attribute of the dropdown matches the selected option's value.
    // In this case, 'Option3' visible text corresponds to the value 'option3'.
    cy.get('@dropdown')
      .should('have.value', 'option3')
      .and('contain', optionToSelect); // Also verify the displayed text

    // Verification by checking the text of the selected option
    cy.get('@dropdown')
        .find('option:selected')
        .should('have.text', optionToSelect);

  });
});