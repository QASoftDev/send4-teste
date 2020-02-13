/// <reference types="Cypress" />


const testUrl = 'https://demo.sprint.troquefacil.com.br/'

const numPedido = 318;
const emailPedido = "tester@send4.com.br"
const detalheSolicitacao1 = 'Teste de troca de produto 1'
const detalheSolicitacao2 = 'Teste de troca de produto 2'
const caminhoImageNF = '../../assets/NF-image.jpg'

const avaliação = 'Site bem feito e muito fácil de usar'

 //teste 1 -  Troca de loja virtual
describe('Acessar a pagina Send4 para validar troca - Loja Virtual', () => {
    it('Acessar a pagina da loja virtual e cadastrar uma troca',() => {
        cy.visit(testUrl)

        // Escolhe onde comprou os produtos
       cy.get('#introduction__start').contains('Começar')

       cy.get('#introduction__start').click()

       cy.get('.select-source-title').contains('Onde você comprou os seus produtos?')

       cy.get('#select-source__ecommerce').contains('Loja Virtual')
       cy.get('#select-source__ecommerce').click()

       // Informa os dados da compra
       cy.get('.order-title').contains('Qual é o seu número de pedido?')
       cy.get('.order-title').should('have.text','Qual é o seu número de pedido?')

       cy.get('#order-number').type(numPedido)
       cy.get('#order-confirmation').type(emailPedido)
       cy.get('#order__continue').should('have.text','Buscar e continuar')
       cy.get('#order__continue').click()


        //Tela de seleção de produutos para troca
       cy.wait(2000)
       cy.get('.products-title').should('have.text', 'Quais produtos você quer trocar?')

       cy.get('.products-header__master-selection > .checkbox-default > .checkbox-default-label').click()

       cy.get('#product-ecommerce-qty-bd63d56a404f45547320ebcb3e86421e').select('1')

       cy.get('#product-ecommerce-action-bd63d56a404f45547320ebcb3e86421e').select('Trocar')

       cy.get('#product-ecommerce-reason-bd63d56a404f45547320ebcb3e86421e').select('Defeito de troca')

       cy.get('#product-ecommerce-comment-bd63d56a404f45547320ebcb3e86421e').type(detalheSolicitacao1)

       cy.get('#product-ecommerce-qty-09392cecd4077744e4b323756c62f5b3').should('have.text', 'Selecione1')

       cy.get('#product-ecommerce-action-09392cecd4077744e4b323756c62f5b3').select('Devolver')

       cy.get('#product-ecommerce-reason-09392cecd4077744e4b323756c62f5b3').select('Me arrependi')

       cy.get('#product-ecommerce-comment-09392cecd4077744e4b323756c62f5b3').type(detalheSolicitacao2)

       cy.get('#products-ecommerce__continue').click()


       // Tela de oferta de devolução em vale compra
       cy.get('h1').should('have.text', 'Sua devolução em Vale-Compras')

       cy.get('.voucher-description > b').should('have.text', 'Transforme seu crédito em Vale-Compras. É mais rápido e fácil.!')

       cy.get('#refund__accept-offer').should('exist')

       cy.get('.description').should('exist')
       cy.get('.description').should('have.text', 'Quero meu crédito* em Vale-Compras')

       cy.get('.amount').should('exist')
       cy.get('.amount').contains('R$ 60,00')

       cy.get('#refund__refuse-offer').click()

       //Tela oportunidade unica
       cy.get('#refund__offer__refuse-offer').click()


       // Tela de detalhes bancários
       cy.wait(3000)

       cy.get('h1').should('have.text',' Detalhes bancários ')

       cy.xpath('/html/body/div[1]/section/main/div[2]/div[1]/div/div[1]/div/select').select('Não tenho conta')

       cy.get('.btn').click()


       //Seleção de método de devolução
       cy.get('.shipping-title').should('have.text','Selecione o método de devolução')


       cy.get('.shipping-title').contains('Selecione o método de devolução')
        cy.get('.shipping-change-address').should('exist')
        cy.wait(2000)
        cy.get('.shipping-change-address--info').contains('Rua João Dembinski, 3246 - Cidade Industrial - PR - (casa)')
        cy.get('.shipping-change-address > .pointer').click()
        cy.get('.modal-default-body').should('exist')
        cy.get('#address-zip_code').should('have.value','81240-270')
        cy.get('#address-address').should('have.value','Rua João Dembinski')
        cy.get('#address-number').should('have.value','3246')
        cy.get('#address-neighborhood').should('have.value','Cidade Industrial')
        cy.get('#address-city').should('have.value','Curitiba')
        cy.get('#address-state').should('have.value','PR')
        cy.wait(2000)
        cy.get('#address-complement').should('have.value','casa')
        cy.wait(2000)
        cy.get('#shipping-address__save').click()
        cy.get('.shipping-change-address--info').contains('Rua João Dembinski, 3246 - Cidade Industrial - PR - (casa)')

        cy.get(':nth-child(1) > .couriers-button > button').click()
        cy.get('#shipping__continue').click()


        // Seção quase lá
        cy.get('.resume-title').should('have.text','Quase lá!')

        // Seção Dados do Cliente
        cy.get('.resume-customer > h3').should('have.text','Dados do cliente')
        cy.get('.customer > :nth-child(1) > p').should('have.text','Tester Send4')
        cy.get('.customer > :nth-child(2) > p').should('have.text',emailPedido)
        cy.get('.address > p').should('have.text','Rua João Dembinski, 3246 - Cidade Industrial - PR - (casa)')
        cy.get(':nth-child(3) > p').should('have.text','(41) 99999-9999')
        cy.get(':nth-child(4) > p').should('have.text','156.358.460-33')

        //Seção Produtos
        cy.get(':nth-child(1) > .product-item-details > [data-title="Produto"]').should('have.text','Camiseta Send4Lovers')
        cy.get(':nth-child(1) > .product-item-details > [data-title="Qtd"]').should('have.text','1')
        cy.get(':nth-child(1) > .product-item-details > [data-title="Motivos"]').should('have.text','Defeito de troca')
        cy.get(':nth-child(1) > .product-item-details > [data-title="Ação"]').should('have.text','Trocar')
        cy.get(':nth-child(1) > .product-item-comment > div').should('have.text',detalheSolicitacao1)

        cy.get(':nth-child(2) > .product-item-details > [data-title="Produto"]').should('have.text','Produto Teste 4')
        cy.get(':nth-child(2) > .product-item-details > [data-title="Qtd"]').should('have.text','1')
        cy.get(':nth-child(2) > .product-item-details > [data-title="Motivos"]').should('have.text','Me arrependi')
        cy.get(':nth-child(2) > .product-item-details > [data-title="Ação"]').should('have.text','Devolver')
        cy.get(':nth-child(2) > .product-item-comment > div').should('have.text',detalheSolicitacao2)


        cy.get('.shipping-informations > h4').should('have.text','Agência do Correios')

        cy.get('.checkbox-default-label').click()
        cy.get('#resume__continue').should('be.disabled')
        cy.get('.checkbox-default-label').click()
        //cy.get('.checkbox-default-label').should('be.checked')
        cy.get('#resume__continue').should('be.enabled')
        cy.get('#resume__continue').click()


        cy.get('.finish-title').should('have.text','Sua solicitação foi realizada com sucesso!O que você achou até agora?')
        cy.get('#rating-star-9').should('have.text','9')
        cy.get('#rating-star-9').click()
        cy.get('#finish-comment').should('be.visible')
        cy.get('#finish-comment').type(avaliação)
        cy.get('#finish-comment').should('have.text',avaliação)


        //cy.get('#finish__send-rating').click()

    })
})

/**
 *
 * teste 2 -  Troca de loja virtual
 *
 */

describe('Acessar a pagina Send4 para validar troca - Loja Virtual', () => {
    it('Acessar a pagina da loja virtual e cadastrar uma troca',() => {
        cy.visit(testUrl)

        // Escolhe onde comprou os produtos
       cy.get('#introduction__start').contains('Começar')

       cy.get('#introduction__start').click()

       cy.get('.select-source-title').contains('Onde você comprou os seus produtos?')

       cy.get('#select-source__ecommerce').contains('Loja Virtual')
       cy.get('#select-source__ecommerce').click()

       // Informa os dados da compra
       cy.get('.order-title').contains('Qual é o seu número de pedido?')
       cy.get('.order-title').should('have.text','Qual é o seu número de pedido?')

       cy.get('#order-number').type(numPedido)
       cy.get('#order-confirmation').type(emailPedido)
       cy.get('#order__continue').should('have.text','Buscar e continuar')
       cy.get('#order__continue').click()


        //Tela de seleção de produutos para troca
       cy.wait(2000)
       cy.get('.products-title').should('have.text', 'Quais produtos você quer trocar?')

       cy.get('.products-header__master-selection > .checkbox-default > .checkbox-default-label').click()
       cy.get('.products-header__master-selection > .checkbox-default > .checkbox-default-label').click()

       cy.xpath('/html/body/div/section/main/div[2]/div[1]/form/div[1]/div[2]/div/div[1]/div/label').click({force: true})

       cy.get('#product-ecommerce-qty-bd63d56a404f45547320ebcb3e86421e').select('1')

       cy.get('#product-ecommerce-action-bd63d56a404f45547320ebcb3e86421e').select('Devolver')

       cy.get('#product-ecommerce-reason-bd63d56a404f45547320ebcb3e86421e').select('Tamanho errado')

       cy.get('#product-ecommerce-comment-bd63d56a404f45547320ebcb3e86421e').type(detalheSolicitacao1)

       // Upload de imagem
       cy.wait(2000)

       cy.get('.product-uploader > .pointer').should('exist')
       cy.wait(3000)
       cy.get('.product-uploader > .pointer').click()
       cy.xpath('/html/body/div[1]/section/main/div[2]/div[1]/form/div[1]/div[2]/div[2]/div[2]/form/input').uploadFile(caminhoImageNF, 'image/jpeg')
       cy.wait(3000)

       cy.get('.input-product-preview').should('exist')
       cy.get('.input-product-preview > span').should('have.text','../../assets/NF-image.jpg')

    //    cy.get('.product-uploader > .pointer').uploadFile(caminhoImageNF, 'image/jpeg')

       cy.get('#products-ecommerce__continue').click()

       // Tela de oferta de devolução em vale compra
       cy.get('h1').should('have.text', 'Sua devolução em Vale-Compras')

       cy.get('.voucher-description > b').should('have.text', 'Transforme seu crédito em Vale-Compras. É mais rápido e fácil.!')

       cy.get('#refund__accept-offer').should('exist')

       cy.get('.description').should('exist')
       cy.get('.description').should('have.text', 'Quero meu crédito* em Vale-Compras')

       cy.get('.amount').should('exist')
       cy.get('.amount').contains('R$ 69,90')

       cy.get('#refund__refuse-offer').click()


       //Tela oportunidade unica
       cy.get('#refund__offer__refuse-offer').click()


       // Tela de detalhes bancários
       cy.wait(3000)

       cy.get('h1').should('have.text',' Detalhes bancários ')

       cy.xpath('/html/body/div[1]/section/main/div[2]/div[1]/div/div[1]/div/select').select('Não tenho conta')

       cy.get('.btn').click()


       //Seleção de método de devolução
       cy.get('.shipping-title').should('have.text','Selecione o método de devolução')

       cy.get('.shipping-title').contains('Selecione o método de devolução')
        cy.get('.shipping-change-address').should('exist')
        cy.wait(2000)
        cy.get('.shipping-change-address--info').contains('Rua João Dembinski, 3246 - Cidade Industrial - PR - (casa)')
        cy.get('.shipping-change-address > .pointer').click()
        cy.get('.modal-default-body').should('exist')
        cy.get('#address-zip_code').should('have.value','81240-270')
        cy.get('#address-address').should('have.value','Rua João Dembinski')
        cy.get('#address-number').should('have.value','3246')
        cy.get('#address-neighborhood').should('have.value','Cidade Industrial')
        cy.get('#address-city').should('have.value','Curitiba')
        cy.get('#address-state').should('have.value','PR')
        cy.wait(2000)
        cy.get('#address-complement').should('have.value','casa')
        cy.wait(2000)
        cy.get('#shipping-address__save').click()
        cy.get('.shipping-change-address--info').contains('Rua João Dembinski, 3246 - Cidade Industrial - PR - (casa)')

        cy.get(':nth-child(1) > .couriers-button > button').click()
        cy.get('#shipping__continue').click()


        // Seção quase lá
        cy.get('.resume-title').should('have.text','Quase lá!')

        // Seção Dados do Cliente
        cy.get('.resume-customer > h3').should('have.text','Dados do cliente')
        cy.get('.customer > :nth-child(1) > p').should('have.text','Tester Send4')
        cy.get('.customer > :nth-child(2) > p').should('have.text',emailPedido)
        cy.get('.address > p').should('have.text','Rua João Dembinski, 3246 - Cidade Industrial - PR - (casa)')
        cy.get(':nth-child(3) > p').should('have.text','(41) 99999-9999')
        cy.get(':nth-child(4) > p').should('have.text','156.358.460-33')

        //Seção Produtos
        cy.get(':nth-child(1) > .product-item-details > [data-title="Produto"]').should('have.text','Camiseta Send4Lovers')
        cy.get(':nth-child(1) > .product-item-details > [data-title="Qtd"]').should('have.text','1')
        cy.get(':nth-child(1) > .product-item-details > [data-title="Motivos"]').should('have.text','Tamanho errado')
        cy.get(':nth-child(1) > .product-item-details > [data-title="Ação"]').should('have.text','Devolver')
        cy.get(':nth-child(1) > .product-item-comment > div').should('have.text',detalheSolicitacao1)

        cy.get('.shipping-informations > h4').should('have.text','Agência do Correios')

        cy.get('.checkbox-default-label').click()
        cy.get('#resume__continue').should('be.disabled')
        cy.get('.checkbox-default-label').click()

        cy.get('#resume__continue').should('be.enabled')
        cy.get('#resume__continue').click()

        cy.get('.finish-title').should('have.text','Sua solicitação foi realizada com sucesso!O que você achou até agora?')
        cy.get('#rating-star-9').should('have.text','9')
        cy.get('#rating-star-9').click()
        cy.get('#finish-comment').should('be.visible')
        cy.get('#finish-comment').type(avaliação)
        cy.get('#finish-comment').should('have.text',avaliação)


        cy.get('#finish__send-rating').click()

    })
})

