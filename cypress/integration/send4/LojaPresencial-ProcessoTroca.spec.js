/// <reference types="Cypress" />

// Variaveis
const testUrl = 'https://demo.sprint.troquefacil.com.br/'
const nome = 'User'
const sobrenome = 'Test'
const cpf = '99127126099'
const cpfformatted= '991.271.260-99'
const email = 'teste@teste.com'
const telefone = '4133667070'
const telefoneFormatted = '(41) 3366-7070'
const cep = '82940050'
const numero = '42'
const complemento = 'ap 02'
const empresa ='Empresa teste'
const cidade ='Curitiba'
const dataCompra ='2020-02-06'
const caminhoImageNF = '../../assets/NF-image.jpg'
const produtoNome = 'Produto de teste'
const produtoQtd = '2'
const produtoPreco = '2500'
const acao = 'Trocar'
const motivo = 'Defeito de troca'
const comentario = 'Teste executado de devolução'

 //teste 1
 describe('Acessar a pagina Send4 validar troca - Loja Física', () => {
    it('Acessa a pagina e cadastrar troca',() => {
        cy.visit(testUrl)


        cy.get('#introduction__start').contains('Começar')

        cy.get('#introduction__start').click()

        cy.get('.select-source-title').contains('Onde você comprou os seus produtos?')

        cy.get('#select-source__store').contains('Loja Física')
        cy.get('#select-source__store').click()

        cy.get('.customer-title').contains('Fale mais sobre você')


        cy.get(':nth-child(1) > h3').contains('Cliente')

        cy.get('#customer-firstName').type(nome)
        cy.get('#customer-firstName').should('have.value',nome)
        cy.get('#customer-lastName').type(sobrenome)
        cy.get('#customer-lastName').should('have.value',sobrenome)
        cy.get('#customer-document').type(cpf)
        cy.get('#customer-document').should('have.value',cpfformatted)
        cy.get('#customer-email').type(email)
        cy.get('#customer-email').should('have.value',email)
        cy.get('#customer-phone').type(telefone)
        cy.get('#customer-phone').should('have.value', telefoneFormatted)


        cy.get(':nth-child(2) > h3')

        cy.get('#address-zip_code').type(cep)

        cy.wait(20000)
        cy.get('#address-address').should('have.value','Rua José Fabiano Barcik')
        cy.get('#address-number').type(numero)
        cy.get('#address-neighborhood').should('have.value','Cajuru')
        cy.get('#address-city').should('have.value','Curitiba')
        cy.get('#address-state').should('have.value','PR')
        //cy.get('#address-complement').type('ap 02')
        //cy.get('#address-complement').should('have.value','ap 02')


        cy.get('#customer__back')
        cy.get('#customer__continue').click()

        cy.get('.seller-title').should('have.text','Pode nos passar mais detalhes de quem lhe fez a venda?')

        cy.get('#seller-company-name').type(empresa)
        cy.get('#seller-company-name').should('have.value',empresa)
        cy.get('#seller-city').type(cidade)
        cy.get('#seller-city').should('have.value',cidade)
        cy.get('#seller-state').should('exist')
        cy.get('#seller-purchase-date').click()
        cy.get('#seller-purchase-date').type(dataCompra)
        cy.get('#seller-purchase-date').should('have.value',dataCompra)

        cy.get('#seller-invoice-upload').should('exist')
        cy.get('#seller-invoice-upload').uploadFile(caminhoImageNF, 'image/jpeg');

        cy.wait(2000)

        cy.get('.modern-toast__item').should('exist')
        cy.get('.modern-toast__item__body.success').should('have.text', 'AtençãoArquivo enviado com sucesso!')

        cy.wait(8000)

        cy.get('.btn-primary').contains('Continuar')
        cy.get('.btn-primary').click()

        cy.get('.seller-title').contains('Produtos a serem trocados')

        cy.get('#product-name').type(produtoNome)
        cy.get('#product-qty').clear()
        cy.get('#product-qty').type(produtoQtd)
        cy.get('#product-value').type(produtoPreco)
        cy.xpath('/html/body/div[1]/section/main/div[2]/div[1]/div[1]/form/div[2]/div[1]/select').select(acao)
        cy.xpath('/html/body/div[1]/section/main/div[2]/div[1]/div[1]/form/div[2]/div[2]/select').select(motivo)
        cy.xpath('/html/body/div[1]/section/main/div[2]/div[1]/div[1]/form/div[3]/div/textarea').type(comentario)
        cy.get('.btn > span').click()

        cy.get('.product-item').should('exist')
        cy.get('[data-title="Produto"]').should('have.text',produtoNome)
        cy.get('[data-title="Qtd"]').should('have.text',' 2')
        cy.get('[data-title="Valor"]').should('have.text','R$ 25,00')
        cy.get('[data-title="Ação"]').should('have.text', acao)
        cy.get('[data-title="Motivos"]').should('have.text', motivo)
        cy.get('[data-title="Comentário"]').should('have.text', comentario)

        cy.get('.btn-primary').contains('Continuar')
        cy.get('.btn-primary').click()

        cy.get('.shipping-title').contains('Selecione o método de devolução')
        cy.get('.shipping-change-address').should('exist')
        cy.wait(2000)
        cy.get('.shipping-change-address--info').contains('Rua José Fabiano Barcik, 42 - Cajuru - PR')
        cy.get('.shipping-change-address > .pointer').click()
        cy.get('.modal-default-body').should('exist')
        cy.get('#address-zip_code').should('have.value','82940050')
        cy.get('#address-address').should('have.value','Rua José Fabiano Barcik')
        cy.get('#address-number').should('have.value','42')
        cy.get('#address-neighborhood').should('have.value','Cajuru')
        cy.get('#address-city').should('have.value','Curitiba')
        cy.get('#address-state').should('have.value','PR')
        cy.wait(2000)
        cy.get('#address-complement').type('ap 02')
        cy.get('#address-complement').should('have.value','ap 02')
        cy.wait(2000)
        cy.get('#shipping-address__save').click()
        cy.get('.shipping-change-address--info').contains('Rua José Fabiano Barcik, 42 - Cajuru - PR')

        cy.get('#shipping__continue').should('exist')
        cy.get('#shipping__continue').should('be.disabled')
    })
})