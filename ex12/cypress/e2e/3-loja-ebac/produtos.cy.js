/// <reference types="cypress"/>
import produtosPage from "../../support/page-objects/produtos.page";

describe('Funcionalidade: Produtos', () => {
    beforeEach(() => {
        produtosPage.visitarUrl()
});

    it('Deve selecionar um produto da lista', () => {
        produtosPage.buscarProdutoLista('Ariel Roll Sleeve Sweatshirt')
            cy.get('#tab-title-description > a').should('contain', 'Descrição')
    });

    it.only('Deve buscar um produto com sucesso', () => {
        let produto = 'Celeste Sports Br'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain', produto)
    });

    it('Deve visitar a página do produto', () => {

    });

    it('Deve adicionar o produto ao carrinho', () => {
        
    });
});