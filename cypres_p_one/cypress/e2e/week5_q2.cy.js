describe('Modal Window Visibility Test', () => {

    const url = 'https://demoqa.com/modal-dialogs';
    const selectors = {
        
        openModalButton: '#showSmallModal',         
        modalContainer: '.modal-content',        
        modalTitle: '#example-modal-title'
    };

    it('Should verify the modal is initially hidden and appears on click', () => {

        
       
        cy.visit(url);

       
        cy.get(selectors.modalContainer).should('not.exist');       
        
        cy.get(selectors.modalTitle).should('not.exist');
        
        cy.get(selectors.openModalButton).click();
        
        cy.get(selectors.modalContainer).should('exist');
        
       
        cy.get(selectors.modalTitle)
          .should('be.visible')
          .and('contain', 'Small Modal'); 
        cy.get('.modal-footer > button').click();
        cy.get(selectors.modalContainer).should('not.exist');
    });
});