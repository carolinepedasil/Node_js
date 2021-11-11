/*
    + usado para somas
    - usado para subtrações
    * usado para multiplicações
    / usado para divisões
    % usado para resto da divisão
*/

var soma = 20 + 5;
var subtracao = 200 - 33;
var multiplicacao = 11 * 17;
var divisao = 66/3;
var restoDeDivisao = 20 % 7;

console.log(soma);
console.log(subtracao);
console.log(multiplicacao);
console.log(divisao);
console.log(restoDeDivisao);

var total = 300 + subtracao;
console.log(total);

// if...else

if (total > 500) {
    console.log("Total é maior que 500");
} else {
    console.log("Total é menor que 500");
}

if (total > 500) {
    console.log("Total é maior que 500");
} else if (total > 400) {
    console.log("Total é maior que 400");
} else {
    console.log("Total é menor que 400");
}

// ternario
var total = 2;

total > 500 
 ? console.log("Total é maior que 500")
 : console.log("Total é menor que 500");
// if else com ternario
total > 500 ? console.log("Total é maior que 500") : total > 400 ? console.log("Total é maior que 400") : console.log("Total é menor que 400");

/*
    Operadores de comparação:
    == igual
    === identico
    != diferente
    !== não identico
    > maior que
    < menor que
    >= maior ou igual
    <= menor ou igual
*/

var primeiroValor = 3;
var segundoValor = "3";

console.log(primeiroValor == segundoValor);
console.log(primeiroValor === segundoValor);
console.log(primeiroValor);
console.log(segundoValor);
console.log(typeof primeiroValor);
console.log(typeof segundoValor);
console.log(primeiroValor != segundoValor);
console.log(primeiroValor !== segundoValor);

var primeiroValor = 700;
var segundoValor = 90;

console.log(primeiroValor > segundoValor);
console.log(primeiroValor < segundoValor);
console.log(primeiroValor >= segundoValor);
console.log(primeiroValor <= segundoValor);