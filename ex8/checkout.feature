#language: pt

Feature: Conclusão de cadastro na EBAC-SHOP
    Como cliente da EBAC-SHOP
    Quero fazer concluir meu cadastro
    Para finalizar minha compra

    Background: Dado que eu estou na página de cadastro

    Scenario: Cadastro completo com dados válidos
        When eu preencho todos os campos obrigatórios corretamente
        And eu clico em "Cadastrar"
        Then eu devo ser redirecionado para a página de confirmação
        And eu devo ver a mensagem "Cadastro concluído com sucesso!"

    Scenario: Cadastro com e-mail em formato inválido
        When eu preencho o campo e-mail com "usuario@dominio"
        And eu preencho os demais campos obrigatórios corretamente
        And eu clico em "Cadastrar"
        Then eu devo ver a mensagem de erro "Formato de e-mail inválido."

    Scenario: Tentativa de cadastro com campos vazios
        When eu deixo todos os campos obrigatórios em branco
        And eu clico em "Cadastrar"
        Then eu devo ver a mensagem de alerta "Todos os campos obrigatórios devem ser preenchidos."

    Scenario: Cadastro com alguns campos obrigatórios vazios
        When eu preencho apenas o campo nome e deixo o campo e-mail vazio
        And eu clico em "Cadastrar"
        Then eu devo ver a mensagem de alerta "Todos os campos obrigatórios devem ser preenchidos."

    Scenario: Cadastro com dados incompletos
        When eu preencho o campo nome e o campo e-mail com "usuario@dominio.com"
        And eu deixo o campo senha em branco
        And eu clico em "Cadastrar"
        Then eu devo ver a mensagem de alerta "Todos os campos obrigatórios devem ser preenchidos."

# Esses cenários abordam diferentes situações que um usuário pode enfrentar ao tentar completar seu cadastro na EBAC-SHOP, garantindo que os critérios de acessibilidade sejam testados especificamente. Se precisar de mais alguma coisa, é só avisar!#