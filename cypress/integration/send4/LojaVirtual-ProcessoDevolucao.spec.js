/// <reference types="Cypress" />


const testUrl = 'https://demo.sprint.troquefacil.com.br/'

 //teste 1 -  Troca de loja virtual
describe('Acessar a pagina Send4 para validar troca - Loja Virtual', () => {
    it('Acessar a pagina da loja virtual e cadastrar uma troca',() => {
        cy.visit(testUrl)


       cy.get('#introduction__start').contains('Começar')

       cy.get('#introduction__start').click()

       cy.get('.select-source-title').contains('Onde você comprou os seus produtos?')

       cy.get('#select-source__ecommerce').contains('Loja Virtual')
       cy.get('#select-source__ecommerce').click()

       cy.get('.order-title').contains('Qual é o seu número de pedido?')
       cy.get('.order-title').should('have.text','Qual é o seu número de pedido?')

       cy.get('#order-number').type('1')
       cy.get('#order-confirmation').type('teste@teste.com.br')
       cy.get('#order__continue').should('have.text','Buscar e continuar')
       cy.get('#order__continue').click()

       cy.get('.modern-toast__item')
       cy.get('.mb-1').should('have.text', 'Não foi possível encontrar seu pedido. Por favor, verifique os dados digitados. Caso persista o erro entre em contato com o E-commerce')





    })
})

