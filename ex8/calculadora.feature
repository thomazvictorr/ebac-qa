            #language: pt

            Funcionalidade: Calculadora
            Como não sei fazer conta de cabeça
            Quero usar a calculadora do sistema
            Para somar dois números

            Contexto:
            Dado que eu acesse a calculadora

            Cenário: Soma de 2 números com mais casas decimais
            Quando eu somar 2 com 2
            Então o resultado dever ser 4

            Cenário: Soma de 2 números com mais casas decimais
            Quando eu somar 10 com 1000
            Então o resultado deve ser 1010

            Cenário: Soma de 2 número negativos
            Quando eu somar -20 com 30
            Então o resultado deve ser 10

            Esquema do Cenário: Soma de 2 números com tabela
            Quando eu somar <valor1> com <valor2>
            Então o resultado deve ser o <total>

            Exemplos:
            | valor1 | valor2 | total  |
            | 2      | 2      | 4      |
