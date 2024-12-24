/// <reference types="cypress" />

Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha, {log: false})
    cy.get('.woocommerce-form > .button').click()
})

Cypress.Commands.add('preCadastro', (email, senha, nome, sobrenome) => {
    cy.get('#reg_email').type(email)
    cy.get('#reg_password').type(senha)
    cy.get(':nth-child(4) > .button').click()        
    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
    cy.get('#account_first_name').type(nome)
    cy.get('#account_last_name').type(sobrenome)
    cy.get('.woocommerce-Button').click()
})

Cypress.Commands.add('detalhesConta', (nome, sobrenome, usuario) => {
    cy.get('#account_first_name').clear().type(nome)
    cy.get('#account_last_name').clear().type(sobrenome)
    cy.get('#account_display_name').clear().type(usuario)
    cy.get('.woocommerce-Button').click()
})

Cypress.Commands.add('completeCheckout', () => {
    cy.fixture('checkoutData').then(dados => {
      cy.visit('checkout')
    
      cy.get('#billing_first_name').clear().type(dados.nome)
      cy.get('#billing_last_name').clear().type(dados.sobrenome)
      cy.get('#billing_company').clear().type(dados.empresa)
      cy.get('#select2-billing_country-container').click().type(dados.país + '{enter}')
      cy.get('#billing_address_1').clear().type(dados.endereco)
      cy.get('#billing_address_2').clear().type(dados.complemento)
      cy.get('#billing_city').clear().type(dados.cidade)
      cy.get('#select2-billing_state-container').click().type(dados.estado + '{enter}')
      cy.get('#billing_postcode').clear().type(dados.cep)
      cy.get('#billing_phone').clear().type(dados.telefone)
      cy.get('#billing_email').clear().type(dados.email)
    })
});