describe('Stable Disabled Input Enable/Verify Test', () => {
  const url = 'https://rahulshettyacademy.com/AutomationPractice/';

  it('Should verify and change the enabled/disabled state of the input field', () => {
    // 1. Visit the page
    cy.visit(url);
    
    // Selectors for the elements in the Enable/Disable section
    const inputFieldSelector = '#disabled-box'; 
    // The controls are radio buttons that control the state
    const enableControlSelector = '#enable-example-input';
    const disableControlSelector = '#disabled-example-input';
    
    // Defensive measure: Scroll the element section into view to ensure visibility
    cy.get('legend:contains("Enable / Disable Example")').scrollIntoView();
    cy.wait(500); // Give the page a moment to settle after scrolling

    // --- Part 1: Verify Default Disabled State ---
    
    cy.log('Verifying default state of the input field...');

    // 2. Locate the input field and 3. Verify it is disabled by default
    // Using a longer timeout for this crucial element in case of slow loading
    cy.get(inputFieldSelector, { timeout: 10000 })
      .should('be.disabled') // Verify the 'disabled' property is present
      .and('have.value', ''); // Also ensure it is empty

    // --- Part 2: Enable the Input and Verify ---
    
    cy.log('Clicking the ENABLE radio button...');

    // 4. Enable the input field by clicking the 'Enable' radio button
    // We use .check() to select the radio button
    cy.get(enableControlSelector).check();

    // 5. Verify that the input field is now enabled and can be selected
    cy.get(inputFieldSelector)
      .should('not.be.disabled'); // Verify the 'disabled' property is removed

    cy.log('Verification successful: Input field is now enabled.');
    
    // Test interaction by typing into the now-enabled field
    const testText = 'Cypress Test Passed!';
    cy.get(inputFieldSelector)
      .type(testText)
      .should('have.value', testText);
      
    // --- Part 3: Optional: Disable the Input and Verify (using the other radio button) ---
    
    cy.log('Clicking the DISABLE radio button...');

    cy.get(disableControlSelector).check();

    cy.get(inputFieldSelector)
      .should('be.disabled'); // Verify it is disabled again
      
    cy.log('Verification successful: Input field is disabled again.');
  });
});