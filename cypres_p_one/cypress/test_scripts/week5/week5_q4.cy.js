describe('Navigation Link Validation', () => {

    const url = 'https://rahulshettyacademy.com/angularpractice/';

    it('Should verify the Shop link has the correct href attribute and navigates successfully', () => {
        // 1. Visit the page
        cy.visit(url);

        // 2. Locate the link
        const shopLink = cy.contains('a', 'Shop');

        // 3. Verify that the href attribute of this link is equal to the correct path
        shopLink
          .should('be.visible') // Ensure the link is visible
          .and('have.attr', 'href', '/angularpractice/shop'); // <-- CORRECTED PATH

        // 4. Click the link to verify navigation actually works
        shopLink.click();
        
        // 5. Verify the URL changes to the expected path
        cy.url().should('include', '/shop');
        
        // 6. Verify a key element on the new page is present
        cy.contains('Checkout').should('be.visible');
    });
});