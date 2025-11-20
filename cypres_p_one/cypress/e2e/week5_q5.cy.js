describe('Checkbox Select and Unselect Test', () => {

    const url = 'https://rahulshettyacademy.com/AutomationPractice/';

    it('Should successfully check and then uncheck a checkbox element', () => {
        // 1. Visit the page
        cy.visit(url);

        // 2. Locate the checkbox element (Targeting 'Option1')
        // We use the ID #checkBoxOption1 for reliable selection.
        const checkboxSelector = '#checkBoxOption1';

        // Initial verification: Ensure the checkbox is NOT checked by default
        cy.get(checkboxSelector).should('not.be.checked');

        // 3. Select (check) the checkbox
        cy.get(checkboxSelector).check();

        // 4. Verify that the checkbox is marked as selected
        // We use the 'be.checked' assertion
        cy.get(checkboxSelector)
          .should('be.checked')
          .and('have.value', 'option1'); // Optional: Verify its value

        // 5. Unselect (uncheck) the checkbox
        // We use the .uncheck() command
        cy.get(checkboxSelector).uncheck();

        // 6. Verify that the checkbox is no longer selected
        // We use the 'not.be.checked' assertion again
        cy.get(checkboxSelector).should('not.be.checked');
    });
});