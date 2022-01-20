// https://docs.cypress.io/api/introduction/api.html

describe('Test e2e', () => {
  it('Visits the app', () => {
    cy.visit('/');
  });
  it('Add task', () => {
    cy.get('input[type="text"]').type('Test task');
    cy.get('form').submit();
    cy.get('li > label span:last-of-type').should('have.text', 'Test task');
    cy.get('input[type="text"]').type('Test task 2');
    cy.get('form').submit();
    cy.get('li:nth-child(2) > label span:last-of-type').should(
      'have.text',
      'Test task 2'
    );
    cy.get('input[type="text"]').type('Test task 3');
    cy.get('form').submit();
    cy.get('li:nth-child(3) > label span:last-of-type').should(
      'have.text',
      'Test task 3'
    );
    cy.get('input[type="text"]').type('Test task 4');
    cy.get('form').submit();
    cy.get('li:last-of-type > label span:last-of-type').should(
      'have.text',
      'Test task 4'
    );
  });
  it('Delete task', () => {
    cy.get('li').should('have.length', 4);
    cy.get('li:last-of-type button').click();
    cy.get('li').should('have.length', 3);
  });
  it('Task Count', () => {
    cy.get('footer p span:last-of-type').contains(3);
    cy.get('input[type="text"]').type('Test task 4');
    cy.get('form').submit();
    cy.get('footer p span:last-of-type').contains(4);
  });
  it('Toggle status', () => {
    cy.get('li input').should('not.have.checked');
    cy.get('li:first-of-type label').click();
    cy.get('li input').should('have.checked');
  });
  it('Task count Completed', () => {
    cy.get('footer p span:first-of-type').contains(1);
    cy.get('li:nth-child(2) label').click();
    cy.get('footer p span:first-of-type').contains(2);
  });
  it('Filter tasks', () => {
    cy.get('label').contains('All').click();
    cy.get('li label').contains('Test task').should('be.visible');
    cy.get('li label').contains('Test task 2').should('be.visible');
    cy.get('li label').contains('Test task 3').should('be.visible');
    cy.get('li label').contains('Test task 4').should('be.visible');
    cy.get('label').contains('Active').click();
    cy.get('li label').contains('Test task').should('not.exist');
    cy.get('li label').contains('Test task 2').should('not.exist');
    cy.get('li label').contains('Test task 3').should('be.visible');
    cy.get('li label').contains('Test task 4').should('be.visible');
    cy.get('label').contains('Completed').click();
    cy.get('li label').contains('Test task').should('be.visible');
    cy.get('li label').contains('Test task 2').should('be.visible');
    cy.get('li label').contains('Test task 3').should('not.exist');
    cy.get('li label').contains('Test task 4').should('not.exist');
  });
});
