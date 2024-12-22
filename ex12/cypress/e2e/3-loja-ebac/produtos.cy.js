/// <reference types="cypress"/>
import produtosPage from "../../commands/produtos.page"

describe('Funcionalidade: Produtos', () => {
    beforeEach(() => {
        produtosPage.visitarUrl()
});

    it('Deve selecionar um produto da lista', () => {
        produtosPage.buscarProdutoLista('Ariel Roll Sleeve Sweatshirt')
            cy.get('#tab-title-description > a').should('contain', 'Descrição')
    });

    it('Deve buscar um produto com sucesso', () => {
        let produto = 'Celeste Sports Br'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain', produto)
    });

    it('Deve visitar a página do produto', () => {
        produtosPage.visitarProduto('Celeste Sports Br')
        cy.get('.product_title').should('contain', 'Celeste')
    });

    it('Deve adicionar o produto ao carrinho', () => {
        let qtd = 4
        produtosPage.buscarProduto('Miko Pullover Hoodie')
        produtosPage.addProdutoCarrinho('L', 'Orange', qtd)
        cy.get('.woocommerce-message').should('contain',  qtd  + ' × “Miko Pullover Hoodie” foram adicionados no seu carrinho.')
    });

    it('Deve adicionar o produto ao carrinho buscando da massa de dados', () => {
        cy.fixture('produtos').then(dados => {
            produtosPage.buscarProduto(dados[2].nomeProduto)
            produtosPage.addProdutoCarrinho(
                dados[2].tamanho,
                dados[2].cor,
                dados[2].tamanho)
            cy.get('.woocommerce-message').should('contain', dados[2].nomeProduto)
        })
    });
});