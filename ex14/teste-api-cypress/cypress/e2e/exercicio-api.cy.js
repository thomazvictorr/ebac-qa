/// <reference types="cypress" />
import contrato from '../contratos/usuarios.contratos'
import { faker } from '@faker-js/faker'

describe('Testes da Funcionalidade Usuários', () => {

  let token
  beforeEach(() => {
    cy.token('fulano@qa.com', 'teste').then(tkn => {
      token = tkn
    })
  })

  it('Deve validar contrato de usuários', () => {
    cy.request('usuarios').then(response =>{
        return contrato.validateAsync(response.body)
    })
});

  it('Deve listar usuários cadastrados', () => {
    cy.request({
    method: 'GET',
    url: 'usuarios'
    }).then((response) =>{
      expect(response.status).to.equal(200)
      expect(response.body).to.have.property('usuarios')
    })
  });

  it('Deve cadastrar um usuário com sucesso', () => {
    let nomeFake = faker.person.fullName()
    let emailFake = faker.internet.email()
    let senhaFake = faker.internet.password()
    cy.cadastrarUsuario(nomeFake, emailFake, senhaFake, "true").should((response) => {
      expect(response.status).to.equal(201)
      expect(response.body.message).equal('Cadastro realizado com sucesso')
    })
  });
     

  it.only('Deve validar um usuário com email inválido', () => {
    let nomeFake = faker.person.fullName()
    let senhaFake = faker.internet.password()
    cy.cadastrarUsuario(nomeFake, "jack.a.gmail.com", senhaFake, "true").should((response) => {
      expect(response.status).to.equal(400)
      expect(response.body.email).equal('email deve ser um email válido')
    }) 
  });

  it('Deve editar um usuário previamente cadastrado', () => {
    let nomeFake = faker.person.fullName()
    let emailFake = faker.internet.email()
    let senhaFake = faker.internet.password()
    cy.cadastrarUsuario(nomeFake, emailFake, senhaFake, "true")
      .then((response) => {
        let id = response.body._id
        let nomeFakeEdit = faker.person.fullName()
        let emailFakeEdit = faker.internet.email()
        let senhaFakeEdit = faker.internet.password()
        cy.request({
          method: 'PUT',
          url: `usuarios/${id}`,
          body: {
            "nome": nomeFakeEdit,
            "email": emailFakeEdit,
            "password": senhaFakeEdit,
            "administrador": "true"
          }
        }).should((response) => {
          expect(response.status).to.equal(200)
          expect(response.body.message).equal('Registro alterado com sucesso')
        })
      }) 
  });

  it('Deve deletar um usuário previamente cadastrado', () => {
    let nomeFake = faker.person.fullName()
    let emailFake = faker.internet.email()
    let senhaFake = faker.internet.password()
    cy.cadastrarUsuario(nomeFake, emailFake, senhaFake, "true")
      .then((response) => {
        let id = response.body._id
        cy.request({
          method: 'DELETE',
          url: `usuarios/${id}`
        }).should(response => {
          expect(response.status).to.equal(200)
          expect(response.body.message).equal('Registro excluído com sucesso')
        })
      })
  }) 
  });
