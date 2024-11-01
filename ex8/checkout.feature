#language: pt

Funcionalidade: Conclusão de cadastro na EBAC-SHOP
    Como cliente da EBAC-SHOP
    Quero fazer concluir meu cadastro
    Para finalizar minha compra

    Contexto: Dado que eu estou na página de cadastro

    Cenário: Cadastro completo com dados válidos
        Quando eu preencho todos os campos obrigatórios corretamente
        E eu clico em "Cadastrar"
        Então eu devo ser redirecionado para a página de confirmação
        E eu devo ver a mensagem "Cadastro concluído com sucesso!"

    Cenário: Cadastro com e-mail em formato inválido
        Quando eu preencho o campo e-mail com "usuario@dominio"
        E eu preencho os demais campos obrigatórios corretamente
        E eu clico em "Cadastrar"
        Então eu devo ver a mensagem de erro "Formato de e-mail inválido."

    Cenário: Tentativa de cadastro com campos vazios
        Quando eu deixo todos os campos obrigatórios em branco
        E eu clico em "Cadastrar"
        Então eu devo ver a mensagem de alerta "Todos os campos obrigatórios devem ser preenchidos."

    Cenário: Cadastro com alguns campos obrigatórios vazios
        Quando eu preencho apenas o campo nome e deixo o campo e-mail vazio
        E eu clico em "Cadastrar"
        Então eu devo ver a mensagem de alerta "Todos os campos obrigatórios devem ser preenchidos."

    Cenário: Cadastro com dados incompletos
        Quando eu preencho o campo nome e o campo e-mail com "usuario@dominio.com"
        E eu deixo o campo senha em branco
        E eu clico em "Cadastrar"
        Então eu devo ver a mensagem de alerta "Todos os campos obrigatórios devem ser preenchidos."

# Esses cenários abordam diferentes situações que um usuário pode enfrentar ao tentar completar seu cadastro na EBAC-SHOP, garantindo que os critérios de acessibilidade sejam testados especificamente.