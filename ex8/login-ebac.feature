#language: pt

Funcionalidade: Login na plataforma EBAC-SHOP
    Como cliente da EBAC-SHOP
    Quero fazer o login na plataforma
    Para visualizar meus pedidos

    Contexto: Dado que eu estou na página de login

    Cenário: Login com dados válidos
        Quando eu insiro o nome de usuário válido, senha válida e clico no botão de login
        Então sou direcionado para a tela de checkout

    Cenário: Login com dados inválidos
        Quando eu insiro o nome de usuário "usuario_invalido"
        E insiro a senha "senha_invalida"
        E clico no botão de login
        Então uma mensagem de alerta "Usuário ou senha inválidos" deve ser exibida

# Explicação dos Cenários:
# Login com dados válidos: Verifica se o usuário é direcionado à tela de checkout ao inserir credenciais válidas.
# Login com dados inválidos: Verifica se é exibida uma mensagem de alerta quando o usuário insere credenciais inválidas.