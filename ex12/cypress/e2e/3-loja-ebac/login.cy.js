/// <reference types="cypress"/>

describe('Funcionalidade: Login', () =>{
    beforeEach(() => {
        cy.visit('minha-conta')
    });
    
    afterEach(() => {
        cy.screenshot()
    });
    
        it ('Deve fazer login com sucesso', () => {
            cy.get('#username').type('thomazvictorr@gmail.com')
            cy.get('#password').type('123456789')
            cy.get('.woocommerce-form > .button').click()
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, thomazvictorr (não é thomazvictorr? Sair)')
        })
    
        it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
            cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
            cy.get('#username').type('thomaz@gmail.com')
            cy.get('#password').type('123456789')
            cy.get('.woocommerce-form > .button').click() 
            cy.get('.woocommerce-error').should('contain' , 'Endereço de e-mail desconhecido.')
            cy.get('.woocommerce-error').should('exist')
        });
    
        it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
            cy.get('#username').type('thomazvictorr@gmail.com')
            cy.get('#password').type('12345678')
            cy.get('.woocommerce-form > .button').click() 
            cy.get('.woocommerce-error').should('contain' , 'Erro: A senha fornecida para o e-mail thomazvictorr@gmail.com está incorreta.')
            cy.get('.woocommerce-error').should('exist')
        });
    
    })