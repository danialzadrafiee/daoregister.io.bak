describe('CreateDao Form Test', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8000/dao/create');
    });

    it('should fill out and submit the form', () => {
        cy.visit('http://localhost:8000/dao/create');
        cy.get('.\_field_r5c06_1:nth-child(1) > .\_wrap_r5c06_25:nth-child(2) > .\_input_r5c06_1').click();
        cy.get('.\_field_r5c06_1:nth-child(1) > .\_wrap_r5c06_25:nth-child(2) > .\_input_r5c06_1').type('Developerpie');
        cy.get('.\_field_r5c06_1:nth-child(2) .\_input_r5c06_1').type('DPI');
        cy.get('.filepond--drop-label').click();
        cy.get('#filepond--browser-a9ay08llp').click();
        cy.get('#filepond--browser-a9ay08llp').type('C:\fakepath\photo-1690740551294-50239800ca16.webp');
        cy.get('.\h-32').click();
        cy.get('.\h-32').type('This is a cool company ');
        cy.get('.\_field_r5c06_1:nth-child(3) > .\_wrap_r5c06_25:nth-child(1) > .\_input_r5c06_1').click();
        cy.get('.\_field_r5c06_1:nth-child(3) > .\_wrap_r5c06_25:nth-child(1) > .\_input_r5c06_1').type('12');
        cy.get('.gap-3').click();
        cy.get('.w-max').click();
        cy.get('.flex:nth-child(2) > .\_field_r5c06_1:nth-child(3) .\_input_r5c06_1').click();
        cy.get('.flex:nth-child(2) > .\_field_r5c06_1:nth-child(3) .\_input_r5c06_1').type('{backspace}');
        cy.get('.flex:nth-child(2) > .\_field_r5c06_1:nth-child(3) .\_input_r5c06_1').type('{backspace}');
        cy.get('.flex:nth-child(2) > .\_field_r5c06_1:nth-child(3) .\_input_r5c06_1').type('20');
        cy.get('.flex:nth-child(2) > .w-full .\_input_r5c06_1').click();
        cy.get('.\_card_yssq4_1:nth-child(4)').click();
        cy.get('.\_checkbox_regqa_1:nth-child(2) .\_text_regqa_11').click();
        cy.get('.\_checkbox_regqa_1:nth-child(2) > .\_input_regqa_15').click();
        cy.get('.\_checkbox_regqa_1:nth-child(1) .\_text_regqa_11').click();
        cy.get('.\_checkbox_regqa_1:nth-child(1) > .\_input_regqa_15').click();
        cy.get('.\_card_yssq4_1 > .button').click();
        cy.get('.max-w-4xl > .flex').submit();

    });
});
