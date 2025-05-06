/// <reference types="cypress"/>

describe('Teste de API - Login', () => {
  it('Deve realizar login com sucesso', () => {
    cy.request({
      method: 'POST',
      url: 'login',
      body: {
          "email": "fulano@qa.com",
          "password": "teste"
      }
    }).then((response) =>{
      cy.log(response.body.authorization)
      expect(response.body.message).to.equal('Login realizado com sucesso')
      expect(response.status).to.equal(200)
    })
  })
})