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
            Quando eu somar <num1> + <num2>
            Então deve exibir <resultado>

            Exemplos:
            | num1   | num2  | resultado |
            | "2"    | "2"   | "4"       |
            | "13"   | "13"  | "26"      |
            | "10"   | "2"   | "12"      |
            | "28"   | "12"  | "40"      |
            | "66"   | "70"  | "136"     |
            | "70"   | "70"  | "140"     |
            | "1200" | "40"  | "1240"    |
            | "90"   | "70"  | "160"     |
            | "2"    | "3"   | "5"       |
            | "20"   | "21"  | "41"      |
            | "720"  | "340" | "1060"    |
            | "15"   | "15"  | "30"      |
            | "30"   | "20"  | "50"      |
            | "22"   | "22"  | "44"      |
            | "50"   | "20"  | "70"      |
            | "12"   | "21"  | "33"      |
            | "1"    | "1"   | "2"       |
            | "-30"  | "50"  | "20"      | 