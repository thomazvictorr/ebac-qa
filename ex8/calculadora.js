const { Given, When, Then } = require('@cucumber/cucumber');
var expect = require ('chai').expect;

Given('que eu acesse a calculadora do sistema', function (){
    console.log("Teste de Calculadora")
});

When('eu somar {int} com {int}', function (valor1, valor2){
    soma = valor1 + valor2
});

Then('o resultado deve ser {int}', function (total){
    expect(soma).to.equal(total)
});
