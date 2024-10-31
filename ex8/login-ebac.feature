#language: pt

Feature: Login na plataforma EBAC-SHOP
    Como cliente da EBAC-SHOP
    Quero fazer o login na plataforma
    Para visualizar meus pedidos

    Background: Dado que eu estou na página de login

    Scenario: Login com dados válidos
        When eu insiro o nome de usuário "usuario_valido"
        And eu insiro a senha "senha_valida"
        And clico no botão de login
        Then sou direcionado para a tela de checkout

    Scenario: Login com dados inválidos
        When eu insiro o nome de usuário "usuario_invalido"
        And insiro a senha "senha_invalida"
        And clico no botão de login
        Then uma mensagem de alerta "Usuário ou senha inválidos" deve ser exibida

# Explicação dos Cenários:
# Login com dados válidos: Verifica se o usuário é direcionado à tela de checkout ao inserir credenciais válidas.
# Login com dados inválidos: Verifica se é exibida uma mensagem de alerta quando o usuário insere credenciais inválidas.