/// <reference types="Cypress" />

// testes a realizar
/**
 * 
 * 
 */

 
 describe('Acessar a pagina de testes Fuel Savings Analysis e validar o resultado do consumo ', () => {

    //teste 1 Validar resultado para MPG do carro novo maior que do carro antigo,  mesmo valor de combustivel
    describe('1 - Validar resultado para MPG do carro novo maior que do carro antigo,  mesmo valor de combustivel', () => {
        it('Acessa a pagina e validar o resultado após o prenchimento dos campos para semanal',() => {
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
        
        cy.get('select').select('Week')
        cy.get('select').should('have.value','week')

        cy.xpath('//*[@id="app"]/div/div[2]/table[2]/tbody/tr/td[1]').contains("Savings")
        cy.xpath('//*[@id="app"]/div/div[2]/table[2]/tbody/tr/td[2]/table/tbody/tr[2]/td[1]').contains("$4,333.33")
        cy.xpath('//*[@id="app"]/div/div[2]/table[2]/tbody/tr/td[2]/table/tbody/tr[2]/td[2]').contains("$51,999.96")
        cy.xpath('//*[@id="app"]/div/div[2]/table[2]/tbody/tr/td[2]/table/tbody/tr[2]/td[3]').contains("$155,999.88")
        
        })
        it('Acessa a pagina e validar o resultado após o prenchimento dos campos para mensal',() => {
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
        
        cy.get('select').select('Month')
        cy.get('select').should('have.value','month')

        cy.xpath('//*[@id="app"]/div/div[2]/table[2]/tbody/tr/td[1]').contains("Savings")
        cy.xpath('//*[@id="app"]/div/div[2]/table[2]/tbody/tr/td[2]/table/tbody/tr[2]/td[1]').contains("$1,000")
        cy.xpath('//*[@id="app"]/div/div[2]/table[2]/tbody/tr/td[2]/table/tbody/tr[2]/td[2]').contains("$12,000")
        cy.xpath('//*[@id="app"]/div/div[2]/table[2]/tbody/tr/td[2]/table/tbody/tr[2]/td[3]').contains("$36,000")
        
        })
        it('Acessa a pagina e validar o resultado após o prenchimento dos campos para anual',() => {
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

        cy.xpath('//*[@id="app"]/div/div[2]/table[2]/tbody/tr/td[1]').contains("Savings")
        cy.xpath('//*[@id="app"]/div/div[2]/table[2]/tbody/tr/td[2]/table/tbody/tr[2]/td[1]').contains("$83.33")
        cy.xpath('//*[@id="app"]/div/div[2]/table[2]/tbody/tr/td[2]/table/tbody/tr[2]/td[2]').contains("$999.96")
        cy.xpath('//*[@id="app"]/div/div[2]/table[2]/tbody/tr/td[2]/table/tbody/tr[2]/td[3]').contains("$2,999.88")
        
        })
})

     //teste 2 Validar resultado para MPG do carro novo menor que do carro antigo,  mesmo valor de combustivel
    describe('2 - Validar resultado para MPG do carro novo menor que do carro antigo,  mesmo valor de combustivel', () => {
        it('Acessa a pagina e validar o resultado após o prenchimento dos campos para semanal',() => {
            cy.visit('http://localhost:3001/fuel-savings')

        cy.get('input[name="newMpg"]').click().type("5")
        cy.get('input[name="newMpg"]').should('have.value','5')
        cy.get('input[name="tradeMpg"]').click().type("10")
        cy.get('input[name="tradeMpg"]').should('have.value','10')
        cy.get('input[name="newPpg"]').click().type("10")
        cy.get('input[name="newPpg"]').should('have.value','10')
        cy.get('input[name="tradePpg"]').click().type("10")
        cy.get('input[name="tradePpg"]').should('have.value','10')
        cy.get('input[name="milesDriven"]').click().type("1000")
        cy.get('input[name="milesDriven"]').should('have.value','1000')
        
        cy.get('select').select('Week')
        cy.get('select').should('have.value','week')

        cy.xpath('//*[@id="app"]/div/div[2]/table[2]/tbody/tr/td[1]').contains("Loss")
        cy.xpath('//*[@id="app"]/div/div[2]/table[2]/tbody/tr/td[2]/table/tbody/tr[2]/td[1]').contains("$-4,333.33")
        cy.xpath('//*[@id="app"]/div/div[2]/table[2]/tbody/tr/td[2]/table/tbody/tr[2]/td[2]').contains("$-51,999.96")
        cy.xpath('//*[@id="app"]/div/div[2]/table[2]/tbody/tr/td[2]/table/tbody/tr[2]/td[3]').contains("$-155,999.88")
        
        })
        it('Acessa a pagina e validar o resultado após o prenchimento dos campos para mensal',() => {
            cy.visit('http://localhost:3001/fuel-savings')

        cy.get('input[name="newMpg"]').click().type("5")
        cy.get('input[name="newMpg"]').should('have.value','5')
        cy.get('input[name="tradeMpg"]').click().type("10")
        cy.get('input[name="tradeMpg"]').should('have.value','10')
        cy.get('input[name="newPpg"]').click().type("10")
        cy.get('input[name="newPpg"]').should('have.value','10')
        cy.get('input[name="tradePpg"]').click().type("10")
        cy.get('input[name="tradePpg"]').should('have.value','10')
        cy.get('input[name="milesDriven"]').click().type("1000")
        cy.get('input[name="milesDriven"]').should('have.value','1000')

        
        cy.get('select').select('Month')
        cy.get('select').should('have.value','month')

        cy.xpath('//*[@id="app"]/div/div[2]/table[2]/tbody/tr/td[1]').contains("Loss")
        cy.xpath('//*[@id="app"]/div/div[2]/table[2]/tbody/tr/td[2]/table/tbody/tr[2]/td[1]').contains("$-1,000")
        cy.xpath('//*[@id="app"]/div/div[2]/table[2]/tbody/tr/td[2]/table/tbody/tr[2]/td[2]').contains("$-12,000")
        cy.xpath('//*[@id="app"]/div/div[2]/table[2]/tbody/tr/td[2]/table/tbody/tr[2]/td[3]').contains("$-36,000")
        
        })
        it('Acessa a pagina e validar o resultado após o prenchimento dos campos para anual',() => {
            cy.visit('http://localhost:3001/fuel-savings')

        cy.get('input[name="newMpg"]').click().type("5")
        cy.get('input[name="newMpg"]').should('have.value','5')
        cy.get('input[name="tradeMpg"]').click().type("10")
        cy.get('input[name="tradeMpg"]').should('have.value','10')
        cy.get('input[name="newPpg"]').click().type("10")
        cy.get('input[name="newPpg"]').should('have.value','10')
        cy.get('input[name="tradePpg"]').click().type("10")
        cy.get('input[name="tradePpg"]').should('have.value','10')
        cy.get('input[name="milesDriven"]').click().type("1000")
        cy.get('input[name="milesDriven"]').should('have.value','1000')
        
        cy.get('select').select('Year')
        cy.get('select').should('have.value','year')

        cy.xpath('//*[@id="app"]/div/div[2]/table[2]/tbody/tr/td[1]').contains("Loss")
        cy.xpath('//*[@id="app"]/div/div[2]/table[2]/tbody/tr/td[2]/table/tbody/tr[2]/td[1]').contains("$-83.33")
        cy.xpath('//*[@id="app"]/div/div[2]/table[2]/tbody/tr/td[2]/table/tbody/tr[2]/td[2]').contains("$-999.96")
        cy.xpath('//*[@id="app"]/div/div[2]/table[2]/tbody/tr/td[2]/table/tbody/tr[2]/td[3]').contains("$-2,999.88")
        
        })
    })

        //teste 3 Validar resultado para MPG do carro novo maior que do carro antigo,  valor de combustivel do novo veiculo maior
        describe('3 - Validar resultado para MPG do carro novo maior que do carro antigo,  valor de combustivel do novo veiculo maior', () => {
        it('Acessa a pagina e validar o resultado após o prenchimento dos campos para semanal',() => {
            cy.visit('http://localhost:3001/fuel-savings')

        cy.get('input[name="newMpg"]').click().type("10")
        cy.get('input[name="newMpg"]').should('have.value','10')
        cy.get('input[name="tradeMpg"]').click().type("5")
        cy.get('input[name="tradeMpg"]').should('have.value','5')
        cy.get('input[name="newPpg"]').click().type("12")
        cy.get('input[name="newPpg"]').should('have.value','12')
        cy.get('input[name="tradePpg"]').click().type("10")
        cy.get('input[name="tradePpg"]').should('have.value','10')
        cy.get('input[name="milesDriven"]').click().type("1000")
        cy.get('input[name="milesDriven"]').should('have.value','1000')
        
        
        cy.get('select').select('Week')
        cy.get('select').should('have.value','week')

        cy.xpath('//*[@id="app"]/div/div[2]/table[2]/tbody/tr/td[1]').contains("Savings")
        cy.xpath('//*[@id="app"]/div/div[2]/table[2]/tbody/tr/td[2]/table/tbody/tr[2]/td[1]').contains("$3,466.67")
        cy.xpath('//*[@id="app"]/div/div[2]/table[2]/tbody/tr/td[2]/table/tbody/tr[2]/td[2]').contains("$41,600.04")
        cy.xpath('//*[@id="app"]/div/div[2]/table[2]/tbody/tr/td[2]/table/tbody/tr[2]/td[3]').contains("$124,800.12")
        
        })
        it('Acessa a pagina e validar o resultado após o prenchimento dos campos para mensal',() => {
            cy.visit('http://localhost:3001/fuel-savings')

        cy.get('input[name="newMpg"]').click().type("10")
        cy.get('input[name="newMpg"]').should('have.value','10')
        cy.get('input[name="tradeMpg"]').click().type("5")
        cy.get('input[name="tradeMpg"]').should('have.value','5')
        cy.get('input[name="newPpg"]').click().type("12")
        cy.get('input[name="newPpg"]').should('have.value','12')
        cy.get('input[name="tradePpg"]').click().type("10")
        cy.get('input[name="tradePpg"]').should('have.value','10')
        cy.get('input[name="milesDriven"]').click().type("1000")
        cy.get('input[name="milesDriven"]').should('have.value','1000')
        
        
        cy.get('select').select('Month')
        cy.get('select').should('have.value','month')

        cy.xpath('//*[@id="app"]/div/div[2]/table[2]/tbody/tr/td[1]').contains("Savings")
        cy.xpath('//*[@id="app"]/div/div[2]/table[2]/tbody/tr/td[2]/table/tbody/tr[2]/td[1]').contains("$800")
        cy.xpath('//*[@id="app"]/div/div[2]/table[2]/tbody/tr/td[2]/table/tbody/tr[2]/td[2]').contains("$9,600")
        cy.xpath('//*[@id="app"]/div/div[2]/table[2]/tbody/tr/td[2]/table/tbody/tr[2]/td[3]').contains("$28,800")
        
        })
        it('Acessa a pagina e validar o resultado após o prenchimento dos campos para anual',() => {
            cy.visit('http://localhost:3001/fuel-savings')

        cy.get('input[name="newMpg"]').click().type("10")
        cy.get('input[name="newMpg"]').should('have.value','10')
        cy.get('input[name="tradeMpg"]').click().type("5")
        cy.get('input[name="tradeMpg"]').should('have.value','5')
        cy.get('input[name="newPpg"]').click().type("12")
        cy.get('input[name="newPpg"]').should('have.value','12')
        cy.get('input[name="tradePpg"]').click().type("10")
        cy.get('input[name="tradePpg"]').should('have.value','10')
        cy.get('input[name="milesDriven"]').click().type("1000")
        cy.get('input[name="milesDriven"]').should('have.value','1000')
        
        cy.get('select').select('Year')
        cy.get('select').should('have.value','year')

        cy.xpath('//*[@id="app"]/div/div[2]/table[2]/tbody/tr/td[1]').contains("Savings")
        cy.xpath('//*[@id="app"]/div/div[2]/table[2]/tbody/tr/td[2]/table/tbody/tr[2]/td[1]').contains("$66.67")
        cy.xpath('//*[@id="app"]/div/div[2]/table[2]/tbody/tr/td[2]/table/tbody/tr[2]/td[2]').contains("$800.04")
        cy.xpath('//*[@id="app"]/div/div[2]/table[2]/tbody/tr/td[2]/table/tbody/tr[2]/td[3]').contains("$2,400.12")
        
        })
    })
    //teste 4 Validar resultado para MPG do carro novo menor que do carro antigo,   valor de combustivel do novo veiculo menor
    describe('4 - Validar resultado para MPG do carro novo menor que do carro antigo,   valor de combustivel do novo veiculo menor', () => {
        it('Acessa a pagina e validar o resultado após o prenchimento dos campos para semanal',() => {
            cy.visit('http://localhost:3001/fuel-savings')

        cy.get('input[name="newMpg"]').click().type("5")
        cy.get('input[name="newMpg"]').should('have.value','5')
        cy.get('input[name="tradeMpg"]').click().type("10")
        cy.get('input[name="tradeMpg"]').should('have.value','10')
        cy.get('input[name="newPpg"]').click().type("10")
        cy.get('input[name="newPpg"]').should('have.value','10')
        cy.get('input[name="tradePpg"]').click().type("12")
        cy.get('input[name="tradePpg"]').should('have.value','12')
        cy.get('input[name="milesDriven"]').click().type("1000")
        cy.get('input[name="milesDriven"]').should('have.value','1000')
        
        cy.get('select').select('Week')
        cy.get('select').should('have.value','week')

        cy.xpath('//*[@id="app"]/div/div[2]/table[2]/tbody/tr/td[1]').contains("Loss")
        cy.xpath('//*[@id="app"]/div/div[2]/table[2]/tbody/tr/td[2]/table/tbody/tr[2]/td[1]').contains("$-3,466.67")
        cy.xpath('//*[@id="app"]/div/div[2]/table[2]/tbody/tr/td[2]/table/tbody/tr[2]/td[2]').contains("$-41,600.04")
        cy.xpath('//*[@id="app"]/div/div[2]/table[2]/tbody/tr/td[2]/table/tbody/tr[2]/td[3]').contains("$-124,800.12")
        
        })
        it('Acessa a pagina e validar o resultado após o prenchimento dos campos para mensal',() => {
            cy.visit('http://localhost:3001/fuel-savings')

        cy.get('input[name="newMpg"]').click().type("5")
        cy.get('input[name="newMpg"]').should('have.value','5')
        cy.get('input[name="tradeMpg"]').click().type("10")
        cy.get('input[name="tradeMpg"]').should('have.value','10')
        cy.get('input[name="newPpg"]').click().type("10")
        cy.get('input[name="newPpg"]').should('have.value','10')
        cy.get('input[name="tradePpg"]').click().type("12")
        cy.get('input[name="tradePpg"]').should('have.value','12')
        cy.get('input[name="milesDriven"]').click().type("1000")
        cy.get('input[name="milesDriven"]').should('have.value','1000')
        
        cy.get('select').select('Month')
        cy.get('select').should('have.value','month')

        cy.xpath('//*[@id="app"]/div/div[2]/table[2]/tbody/tr/td[1]').contains("Loss")
        cy.xpath('//*[@id="app"]/div/div[2]/table[2]/tbody/tr/td[2]/table/tbody/tr[2]/td[1]').contains("$-800")
        cy.xpath('//*[@id="app"]/div/div[2]/table[2]/tbody/tr/td[2]/table/tbody/tr[2]/td[2]').contains("$-9,600")
        cy.xpath('//*[@id="app"]/div/div[2]/table[2]/tbody/tr/td[2]/table/tbody/tr[2]/td[3]').contains("$-28,800")
        
        })
        it('Acessa a pagina e validar o resultado após o prenchimento dos campos para anual',() => {
            cy.visit('http://localhost:3001/fuel-savings')

        cy.get('input[name="newMpg"]').click().type("5")
        cy.get('input[name="newMpg"]').should('have.value','5')
        cy.get('input[name="tradeMpg"]').click().type("10")
        cy.get('input[name="tradeMpg"]').should('have.value','10')
        cy.get('input[name="newPpg"]').click().type("10")
        cy.get('input[name="newPpg"]').should('have.value','10')
        cy.get('input[name="tradePpg"]').click().type("12")
        cy.get('input[name="tradePpg"]').should('have.value','12')
        cy.get('input[name="milesDriven"]').click().type("1000")
        cy.get('input[name="milesDriven"]').should('have.value','1000')
        
        cy.get('select').select('Year')
        cy.get('select').should('have.value','year')

        cy.xpath('//*[@id="app"]/div/div[2]/table[2]/tbody/tr/td[1]').contains("Loss")
        cy.xpath('//*[@id="app"]/div/div[2]/table[2]/tbody/tr/td[2]/table/tbody/tr[2]/td[1]').contains("$-66.67")
        cy.xpath('//*[@id="app"]/div/div[2]/table[2]/tbody/tr/td[2]/table/tbody/tr[2]/td[2]').contains("$-800.04")
        cy.xpath('//*[@id="app"]/div/div[2]/table[2]/tbody/tr/td[2]/table/tbody/tr[2]/td[3]').contains("$-2,400.12")
        
        })

    })
})