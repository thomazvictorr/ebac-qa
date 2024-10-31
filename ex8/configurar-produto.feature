#language: pt

Feature: Configuração de Produto
  Como cliente da EBAC-SHOP
  Quero configurar meu produto de acordo com meu tamanho e gosto
  E escolher a quantidade
  Para depois inserir no carrinho

  Background: Acesso à página do produto
    Given que estou na página do produto

  Scenario Outline: Seleção obrigatória de cor, tamanho e quantidade
    When eu seleciono a cor "<cor>"
    And eu seleciono o tamanho "<tamanho>"
    And eu escolho a quantidade de "<quantidade>"
    Then o produto deve ser configurado com cor, tamanho e quantidade

    Examples:
      | cor      | tamanho | quantidade |
      | Vermelho | M       | 2          |
      | Azul     | G       | 1          |
      | Preto    | P       | 3          |
      | Verde    | M       | 10         |
      | Amarelo  | GG      | 1          |

  Scenario: Limite de quantidade por produto
    When eu seleciono a cor "Preto"
    And eu seleciono o tamanho "G"
    And eu escolho uma quantidade de "11"
    Then uma mensagem de erro "O limite é de 10 produtos por venda" deve ser exibida

  Scenario: Limpar seleção de produto
    Given que eu selecionei uma cor, tamanho e quantidade
    When eu clico no botão "limpar"
    Then todas as opções de cor, tamanho e quantidade devem voltar ao estado original

  Scenario Outline: Inserir produto no carrinho
    Given que eu selecionei a cor "<cor>", tamanho "<tamanho>" e quantidade "<quantidade>"
    When eu clico no botão "adicionar ao carrinho"
    Then o produto configurado com cor "<cor>", tamanho "<tamanho>", e quantidade "<quantidade>" deve ser adicionado ao carrinho

    Examples:
      | cor      | tamanho | quantidade |
      | Vermelho | M       | 2          |
      | Azul     | G       | 5          |
      | Preto    | P       | 1          |
      | Verde    | GG      | 3          |
      | Branco   | M       | 10         |

  Scenario: Adicionar produto ao carrinho sem seleção completa
    When eu tento adicionar o produto ao carrinho sem selecionar cor, tamanho ou quantidade
    Then uma mensagem de alerta "Cor, tamanho e quantidade são obrigatórios" deve ser exibida

# Explicação dos Cenários:
# Seleção obrigatória de cor, tamanho e quantidade: Garante que a seleção dessas opções seja obrigatória antes da configuração do produto.
# Limite de quantidade por produto: Testa o limite de 10 produtos por pedido.
# Limpar seleção de produto: Verifica se o botão “limpar” redefine todas as seleções para o estado original.
# Inserir produto no carrinho: Confirma que o produto configurado pode ser adicionado ao carrinho.
# Adicionar produto ao carrinho sem seleção completa: Verifica se uma mensagem de erro é exibida ao tentar adicionar o produto ao carrinho sem definir todas as opções. 