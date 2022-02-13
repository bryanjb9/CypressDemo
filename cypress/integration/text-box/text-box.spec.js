/// <reference types="cypress" />
//import './support/commands'
import { CONFIG } from '../../support';

const selectors = {
    email: '#userEmail',
    output: '#output',
    outputFullName: '#output #name',
    outputEmail: '#output #email',
    outputCurrentAddress: '#output #currentAddress',
    outputPermanetAddress: '#output #permanentAddress'
}


describe('ToolsQA Text Box test suite', () => {
  
    beforeEach(() => {
      cy.visit('https://demoqa.com/text-box');
      cy.location('pathname').should('equal', '/text-box');

    });

    it('TEST 1', () => {
        cy.fillForm(
            CONFIG.TESTS.TEST1.FULL_NAME,
            CONFIG.TESTS.TEST1.EMAIL,
            CONFIG.TESTS.TEST1.CURRET_ADDRESS,
            CONFIG.TESTS.TEST1.PERMANET_ADDRESS
            );

        cy.get(selectors.outputFullName).should('include.text', CONFIG.TESTS.TEST1.FULL_NAME);
        cy.get(selectors.outputEmail).should('include.text',CONFIG.TESTS.TEST1.EMAIL);
        cy.get(selectors.outputCurrentAddress).should('include.text',CONFIG.TESTS.TEST1.CURRET_ADDRESS);
        cy.get(selectors.outputPermanetAddress).should('include.text', CONFIG.TESTS.TEST1.PERMANET_ADDRESS);

        cy.wait(5000);

    })

    it('TEST 2', () => {
        cy.fillForm(
            CONFIG.TESTS.TEST2.FULL_NAME,
            CONFIG.TESTS.TEST2.EMAIL,
            CONFIG.TESTS.TEST2.CURRET_ADDRESS,
            CONFIG.TESTS.TEST2.PERMANET_ADDRESS
            );

        cy.get(selectors.outputFullName).should('include.text', CONFIG.TESTS.TEST2.FULL_NAME);
        cy.get(selectors.outputEmail).should('include.text',CONFIG.TESTS.TEST2.EMAIL);
        cy.get(selectors.outputCurrentAddress).should('include.text',CONFIG.TESTS.TEST2.CURRET_ADDRESS);
        cy.get(selectors.outputPermanetAddress).should('include.text', CONFIG.TESTS.TEST2.PERMANET_ADDRESS);

        cy.wait(5000);

    })

    it('TEST 3', () => {
        cy.fillForm(
            CONFIG.TESTS.TEST3.FULL_NAME,
            CONFIG.TESTS.TEST3.EMAIL,
            CONFIG.TESTS.TEST3.CURRET_ADDRESS,
            CONFIG.TESTS.TEST3.PERMANET_ADDRESS
            );

        cy.get(selectors.email).should('have.class','field-error');
        cy.get(selectors.output).should('not.be.visible');

        cy.wait(5000);

    })
       
})
