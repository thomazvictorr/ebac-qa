/// <reference types="cypress"/>
import contrato from '../contratos/produtos.contratos'

describe('Teste de API - Produtos', () => {

    let token
    beforeEach(() => {
        cy.token('fulano@qa.com', 'teste').then(tkn => {
            token = tkn
        })
    });

    it.only('Deve validar contrato de produtos com sucesso', () => {
        cy.request('produtos').then(response =>{
            return contrato.validateAsync(response.body)
        })
    });

    it('Deve listar produtos com sucesso - GET', () => {
        cy.request({
            method: 'GET',
            url: 'produtos'
        }).should((response) => {
            expect(response.status).equal(200)
            expect(response.body).to.have.property('produtos')
        }) 
    });  

    it('Deve cadastrar produto com sucesso - POST', () => {
        let produto = 'Produto EBAC ' + Math.floor(Math.random() * 1000000000)
        cy.cadastrarProduto (token, produto, 15, 'Cabo USB do tipo C', 100)
        .should((response) => {
            expect(response.status).equal(201)
            expect(response.body.message).equal('Cadastro realizado com sucesso')
        }) 
    });

    it('Deve validar mensagem de produto cadastrado anteriormente - POST', () => {
        cy.cadastrarProduto (token, 'Cabo USB', 15, 'Cabo USB do tipo C', 100)
        .should((response) => {
            expect(response.status).equal(400)
            expect(response.body.message).equal('Já existe produto com esse nome')
        }) 
    });

    it('Deve editar um produto com sucesso - PUT', () => {
        let produto = 'Produto Editado EBAC ' + Math.floor(Math.random() * 1000000000)
        cy.cadastrarProduto (token, produto, 150, 'Produto editado', 105)
            .then(response => {
                let id = response.body._id
                cy.request({
                    method: 'PUT',
                    url: `produtos/${id}`,
                    headers: {authorization: token},
                    body: {
                        "nome": produto,
                        "preco": 50,
                        "descricao": "Produto editado",
                        "quantidade": 10,
                    }
                }).should((response) => {
                    expect(response.status).equal(200)
                    expect(response.body.message).equal('Registro alterado com sucesso')
                }) 
            })
    });

    it('Deve deletar um produto com sucesso - DELETE', () => {
        cy.cadastrarProduto (token, 'Produto EBAC a ser deletado', 100, 'Deletar', 50)
            .then(response =>{
                let id = response.body._id
                cy.request ({
                    method: 'DELETE',
                    url: `produtos/${id}`,
                    headers: {authorization: token}
                }).should((response) => {
                    expect(response.status).equal(200)
                    expect(response.body.message).equal('Registro excluído com sucesso')
                }) 
            })
        
    });
});