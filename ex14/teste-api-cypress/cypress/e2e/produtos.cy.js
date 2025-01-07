/// <reference types="cypress"/>

describe('Teste de API - Produtos', () => {

    let token
    beforeEach(() => {
        cy.token('fulano@qa.com', 'teste').then(tkn => {
            token = tkn
        })
    });

    it('Listar Produtos - GET', () => {
        cy.request({
            method: 'GET',
            url: 'produtos'
        }).should((response) => {
            expect(response.status).equal(200)
            expect(response.body).to.have.property('produtos')
        }) 
    });  

    it('Cadastrar produto - POST', () => {
        let produto = 'Produto EBAC ' + Math.floor(Math.random() * 1000000000)
        cy.cadastrarProduto (token, produto, 15, 'Cabo USB do tipo C', 100)
        .should((response) => {
            expect(response.status).equal(201)
            expect(response.body.message).equal('Cadastro realizado com sucesso')
        }) 
    });

    it('Deve validar mensagem de produto cadastrado anteriormente', () => {
        cy.cadastrarProduto (token, 'Cabo USB', 15, 'Cabo USB do tipo C', 100)
        .should((response) => {
            expect(response.status).equal(400)
            expect(response.body.message).equal('Já existe produto com esse nome')
        }) 
    });
});

