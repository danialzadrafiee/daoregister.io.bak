describe('CreateDao Form Test', () => {
    beforeEach(() => {
      cy.visit('http://localhost:8000/dao/create');
    });

    it('should fill out and submit the form', () => {
      cy.get('input[name="name"]').type('Test Name');
      cy.get('input[name="symbol"]').type('TST');
      cy.get('textarea[name="describe"]').type('Test Description');

      // Handle FilePond, Dropdowns, and other complex components as needed

      cy.get('button').contains('submit').click();
    });
  });
