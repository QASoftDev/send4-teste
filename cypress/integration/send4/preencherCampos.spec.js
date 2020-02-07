/// <reference types="Cypress" />


 //teste 1
 describe('Acessar a pagina de testes Fuel Savings Analysis e validar o prrenchimento dos campos', () => {
    it('Acessa a pagina e validar o prrenchimento dos campos',() => {
        cy.visit('http://localhost:3001/fuel-savings')

       cy.get('input[name="newMpg"]').click().type("10")
       cy.get('input[name="newMpg"]').should('have.value','10')
       cy.get('input[name="tradeMpg"]').click().type("5")
       cy.get('input[name="tradeMpg"]').should('have.value','5')
       cy.get('input[name="newPpg"]').click().type("10")
       cy.get('input[name="newPpg"]').should('have.value','10')
       cy.get('input[name="tradePpg"]').click().type("10")
       cy.get('input[name="tradePpg"]').should('have.value','10')
       cy.get('input[name="milesDriven"]').click().type("1000")
       cy.get('input[name="milesDriven"]').should('have.value','1000')
       
       cy.get('select').select('Year')
       cy.get('select').should('have.value','year')
       
       cy.get('select').select('Week')
       cy.get('select').should('have.value','week')
       
       cy.get('select').select('Month')
       cy.get('select').should('have.value','month')

       cy.xpath('//*[@id="app"]/div/div[2]/table[1]/tbody/tr[6]/td[2]').get('value')
       
    })
})
