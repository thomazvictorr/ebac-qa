/// <reference types="cypress"/>
let dadosLogin;

context('Funcionalidade Login', () => {
    before(() => {
        cy.fixture('perfil').then((usuarios) => {
            const usuario = usuarios [0];
            dadosLogin = usuario;
        });
    });

    beforeEach(() => {
        cy.visit('minha-conta');
    });

    it('Login com sucesso usando Comando customizado', () => {
        cy.login(dadosLogin.usuario, dadosLogin.senha);
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, ')
    });
});
