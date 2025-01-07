/// <reference types="cypress" />
const perfil = require('../../fixtures/perfil.json')
import ProductPage from '../../support/pages/ProductPage';
import CartPage from '../../support/pages/CartPage';

    context('Exercicio - Testes End-to-end - Fluxo de login', () => {
    let dadosLogin;
/*  Como cliente 
    Quero acessar a Loja EBAC */
    beforeEach(() => {
        cy.visit('/my-account');
        cy.fixture('perfil').then((usuarios) => {
            const usuario = usuarios [1];
            dadosLogin = usuario;
            cy.login(dadosLogin.usuario, dadosLogin.senha)
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, aluno_ebac')
    })
    })
 
/*  Para fazer um pedido de 4 produtos 
    Fazendo a escolha dos produtos
    Adicionando ao carrinho */

    context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    beforeEach(() => {
        ProductPage.visitarUrl()
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
      cy.fixture('productInfo').then(dados => {
            ProductPage.buscarProduto(dados[0].nomeProduto)
            CartPage.addProdutoCarrinho(
                dados[0].tamanho,
                dados[0].cor,
                dados[0].quantidade)
            cy.get('.woocommerce-message').should('contain', dados[0].nomeProduto)
        })

        cy.fixture('productInfo').then(dados => {
            ProductPage.buscarProduto(dados[1].nomeProduto)
            CartPage.addProdutoCarrinho(
                dados[1].tamanho,
                dados[1].cor,
                dados[1].quantidade)
                cy.get('.woocommerce-message').should('contain', dados[1].nomeProduto)
        })

        cy.fixture('productInfo').then(dados => {
            ProductPage.buscarProduto(dados[2].nomeProduto)
            CartPage.addProdutoCarrinho(
                dados[2].tamanho,
                dados[2].cor,
                dados[2].quantidade)
            cy.get('.woocommerce-message').should('contain', dados[2].nomeProduto)
    })

    cy.fixture('productInfo').then(dados => {
            ProductPage.buscarProduto(dados[3].nomeProduto)
            CartPage.addProdutoCarrinho(
                dados[3].tamanho,
                dados[3].cor,
                dados[3].quantidade)
        cy.get('.woocommerce-message').should('contain', dados[3].nomeProduto)    
    })  
})
    
/*  Preenchendo todas opções no checkout */
describe('Finalizar checkout', () => {
    it('Deve completar o checkout com sucesso', () => {
      cy.completeCheckout();

      cy.get('#payment_method_bacs').click()
      cy.get('#terms').click()
      cy.get('#place_order').click();

/*  E validando minha compra ao final */
describe('Validando a compra', () => {
        cy.get('.page-title', { timeout: 100000}).should('be.visible').should('contain', 'Pedido recebido')
        cy.get('.woocommerce-notice', { timeout: 100000}).should('be.visible').should('contain', 'Obrigado. Seu pedido foi recebido.')
        });
    });
    })
})
})
