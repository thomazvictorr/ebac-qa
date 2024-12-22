/// <reference types="cypress" />
const perfil = require('../../fixtures/exercicioPerfil.json')
import exercicioprodutosPage from "../../support/exercicioprodutosPage"

    context('Exercicio - Testes End-to-end - Fluxo de login', () => {

/*  Como cliente 
    Quero acessar a Loja EBAC */
    beforeEach(() => {
        cy.visit('/my-account');
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, aluno_ebac')
    })
 
/*  Para fazer um pedido de 4 produtos 
    Fazendo a escolha dos produtos
    Adicionando ao carrinho */

    context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    beforeEach(() => {
        exercicioprodutosPage.visitarUrl()
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
      cy.fixture('exercicioProdutos').then(dados => {
            exercicioprodutosPage.buscarProduto(dados[0].nomeProduto)
            exercicioprodutosPage.addProdutoCarrinho(
                dados[0].tamanho,
                dados[0].cor,
                dados[0].quantidade)
            cy.get('.woocommerce-message').should('contain', dados[0].nomeProduto)
        })

        cy.fixture('exercicioProdutos').then(dados => {
            exercicioprodutosPage.buscarProduto(dados[1].nomeProduto)
            exercicioprodutosPage.addProdutoCarrinho(
                dados[1].tamanho,
                dados[1].cor,
                dados[1].quantidade)
                cy.get('.woocommerce-message').should('contain', dados[1].nomeProduto)
        })

        cy.fixture('exercicioProdutos').then(dados => {
            exercicioprodutosPage.buscarProduto(dados[2].nomeProduto)
            exercicioprodutosPage.addProdutoCarrinho(
                dados[2].tamanho,
                dados[2].cor,
                dados[2].quantidade)
            cy.get('.woocommerce-message').should('contain', dados[2].nomeProduto)
    })

    cy.fixture('exercicioProdutos').then(dados => {
        exercicioprodutosPage.buscarProduto(dados[3].nomeProduto)
        exercicioprodutosPage.addProdutoCarrinho(
            dados[3].tamanho,
            dados[3].cor,
            dados[3].quantidade)
        cy.get('.woocommerce-message').should('contain', dados[3].nomeProduto)    
    })  
    
/*  Preenchendo todas opções no checkout */
    cy.preenchercheckout('Neil Ellwood', 'Peart', 'Estudante', 'Brasil', 'Rua Mario Rapadura', '213', 'Xique Xique', 'Bahia', '47403-038', '24 090907070', 'aluno_ebac@teste.com')
    
/*  E validando minha compra ao final */
    cy.get('.page-title', { timeout: 100000}).should('be.visible').should('contain', 'Pedido recebido')
    cy.get('.woocommerce-notice', { timeout: 100000}).should('be.visible').should('contain', 'Obrigado. Seu pedido foi recebido.')
    })
    
});
})