#language: pt

Funcionalidade: Configuração de Produto
    Como cliente da EBAC-SHOP
    Quero configurar meu produto de acordo com meu tamanho e gosto
    E escolher a quantidade
    Para depois inserir no carrinho

    Contexto: Acesso à página do produto
        Dado que estou na página do produto

    Esquema do Cenário: Seleção obrigatória de cor, tamanho e quantidade
        Quando eu seleciono a cor "<cor>"
        E eu seleciono o tamanho "<tamanho>"
        E eu escolho a quantidade de "<quantidade>"
        Então o produto deve ser configurado com cor, tamanho e quantidade

        Exemplos:
            | cor      | tamanho | quantidade |
            | Vermelho | M       | 2          |
            | Azul     | G       | 1          |
            | Preto    | P       | 3          |
            | Verde    | M       | 10         |
            | Amarelo  | GG      | 1          |

    Cenário: Limite de quantidade por produto
        Quando eu seleciono a cor "Preto"
        E eu seleciono o tamanho "G"
        E eu escolho uma quantidade de "11"
        Então uma mensagem de erro "O limite é de 10 produtos por venda" deve ser exibida

    Cenário: Limpar seleção de produto
        Dado que eu selecionei uma cor, tamanho e quantidade
        Quando eu clico no botão "limpar"
        Então todas as opções de cor, tamanho e quantidade devem voltar ao estado original

    Esquema do Cenário: Inserir produto no carrinho
        Dado que eu selecionei a cor "<cor>", tamanho "<tamanho>" e quantidade "<quantidade>"
        Quando eu clico no botão "adicionar ao carrinho"
        Então o produto configurado deve ser adicionado ao carrinho.

        Exemplos:
            | cor      | tamanho | quantidade |
            | Vermelho | M       | 2          |
            | Azul     | G       | 5          |
            | Preto    | P       | 1          |
            | Verde    | GG      | 3          |
            | Branco   | M       | 10         |

    Cenário: Adicionar produto ao carrinho sem seleção completa
        Quando eu tento adicionar o produto ao carrinho sem selecionar cor, tamanho ou quantidade
        Então uma mensagem de alerta "Cor, tamanho e quantidade são obrigatórios" deve ser exibida

# Explicação dos Cenários:
# Seleção obrigatória de cor, tamanho e quantidade: Garante que a seleção dessas opções seja obrigatória antes da configuração do produto.
# Limite de quantidade por produto: Testa o limite de 10 produtos por pedido.
# Limpar seleção de produto: Verifica se o botão “limpar” redefine todas as seleções para o estado original.
# Inserir produto no carrinho: Confirma que o produto configurado pode ser adicionado ao carrinho.
# Adicionar produto ao carrinho sem seleção completa: Verifica se uma mensagem de erro é exibida ao tentar adicionar o produto ao carrinho sem definir todas as opções. 