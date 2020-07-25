const cy = require('cypress')

describe('tests', () => {
    it('can navigate to site', () => {
        cy.visit('http://localhost:3000/pizza')
        cy.url().should('include', 'localhost')
    })
    it('can input name in textbox', () => {
        cy.get('input[name=name]')
            .type('john smith')
    })
    it('can input instructions in textbox', () => {
        cy.get('input[name=instruct]')
            .type('add garlic')
    })
    it('can check checkboxes', () => {
        cy.get('[type="checkbox"]').check()
    })
    it('can submit form', () => {
        cy.get('form').submit()
    })  
})