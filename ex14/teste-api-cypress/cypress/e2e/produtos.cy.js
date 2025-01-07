/// <reference types="cypress"/>

describe('Teste de API - Produtos', () => {

    it('Listar Produtos - GET', () => {
        cy.request({
            method: 'GET',
            url: 'produtos'
        }).should((response) => {
            expect(response.status).equal(200)
            expect(response.body).to.have.property('produtos')
        }) 
    });  

    it.only('Cadastrar produto - POST', () => {
        // TODO: Criar token dinamicamente
        let token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZ1bGFub0BxYS5jb20iLCJwYXNzd29yZCI6InRlc3RlIiwiaWF0IjoxNzM2MjA3NjE0LCJleHAiOjE3MzYyMDgyMTR9.Lx2zE6DpCyXGNCoGWg8LvPu3mP843lgaVjfS9SYse24"
        cy.request({
            method: 'POST',
            url: 'produtos',
            headers: {authorization: token},
            body: {
                // TODO: Criar produto dinamicamente
                "nome": "Cabo USB",
                "preco": 15,
                "descricao": "Cabo USB do tipo C",
                "quantidade": 100
            }
        }).should((response) => {
            expect(response.status).equal(201)
            expect(response.body.message).equal('Cadastro realizado com sucesso')
        }) 
        
    });
});