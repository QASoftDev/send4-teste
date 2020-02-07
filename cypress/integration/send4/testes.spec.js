/// <reference types="Cypress" />

// testes a realizar
/**
 * 1- validar titulo da pagina
 * 2- validar os labels dos campos
 */

 //teste 1
describe('Acessar a pagina Send4 validar se está na página inicial', () => {
    it('Acessa a pagina e validar se está na página inicial',() => {
        cy.visit('https://demo.sprint.troquefacil.com.br/')

        cy.get('.introduction-title').contains('Bem-vindo ao Send4')
    })
})
 //teste 2
describe('Acessar a pagina Send4 validar troca - Loja Física', () => {
    it('Acessa a pagina e validar',() => {
        cy.visit('https://demo.sprint.troquefacil.com.br/')


       cy.get('#introduction__start').contains('Começar')

       cy.get('#introduction__start').click()

       cy.get('.select-source-title').contains('Onde você comprou os seus produtos?')

       cy.get('#select-source__store').contains('Loja Física')
       cy.get('#select-source__store').click()

       cy.get('.customer-title').contains('Fale mais sobre você')


       cy.get(':nth-child(1) > h3').contains('Cliente')

       cy.get('#customer-firstName').type('User')
       cy.get('#customer-firstName').should('have.value','User')
       cy.get('#customer-lastName').type('Test')
       cy.get('#customer-lastName').should('have.value','Test')
       cy.get('#customer-document').type('99127126099')
       cy.get('#customer-document').should('have.value','991.271.260-99')
       cy.get('#customer-email').type('teste@teste.com')
       cy.get('#customer-email').should('have.value','teste@teste.com')
       cy.get('#customer-phone').type('4133667070')
       cy.get('#customer-phone').should('have.value','(41) 3366-7070')


       cy.get(':nth-child(2) > h3')

       cy.get('#address-zip_code').type('82940050')
       //cy.get('#address-address').should('exist')
       //cy.get('#address-address').should('exist')
       cy.wait(20000)
       cy.get('#address-address').should('have.value','Rua José Fabiano Barcik')
       cy.get('#address-number').type('42')
       cy.get('#address-neighborhood').should('have.value','Cajuru')
       cy.get('#address-city').should('have.value','Curitiba')
       cy.get('#address-state').should('have.value','PR')
       cy.get('#address-complement').type('ap 02')
       cy.get('#address-complement').should('have.value','ap 02')


       cy.get('#customer__back')
       cy.get('#customer__continue').click()

    })
})
 //teste 3
describe('Acessar a pagina Send4 validar troca - Loja Física', () => {
    it('Acessa a pagina e validar',() => {
        cy.visit('https://demo.sprint.troquefacil.com.br/')


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

