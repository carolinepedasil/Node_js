/*
    Crie variáveis para cada uma das comparações e imprima o resultado delas

    a. 5 é maior que 1
    b. 2000000 é menor que 3000000000
    c. "Banana" é igual a "Banana"
    d. "50" é estritamente igual a 50
    e. "Carro" é diferente de "bicicleta"
    f. 50 é maior que 27
    g. 975 é menor ou igual a 1200

    // exemplos de operadores de comparação
    == valor igual
    === valor igual e tipo igual
    != valor diferente
    !== valor e/ou tipo diferente
    > maior que
    < menor que
    >= maior ou igual 
    <= menor ou igual
*/

// a. 5 é maior que 1
var numero = 5;
if (numero > 1) {
    console.log(numero + " é maior que 1");
} else {
    console.log("1 é maior que " + numero);
}

// b. 2000000 é menor que 3000000000
var numero = 2000000;
if (numero < 3000000000) {
    console.log(numero + " é menor que 3000000000");
} else {
    console.log("3000000000 é menor que " + numero);
}

// c. "Banana" é igual a "Banana"
var primeiraFruta = "Banana";
var segundaFruta = "Banana";
if (primeiraFruta == segundaFruta) {
    console.log(primeiraFruta + " é igual a " + segundaFruta);
} else {
    console.log(primeiraFruta + " é diferente de " + segundaFruta);
}
/*
    // Outra possibilidade com true/false:

    var primeiraFruta = "Banana";
    var segundaFruta = "Banana";

    console.log(primeiraFruta == segundaFruta); //igual
    console.log(primeiraFruta === segundaFruta); //identico
*/

// d. "50" é estritamente igual a 50
//var numero = "50";
var numero = 50;
if (numero === 50) {
    console.log(numero + " é estritamente igual a 50");
} else {
    console.log(numero + " não é estritamente igual a 50");
}

/*
    // Outra possibilidade com true/false:

    //var primeiroNumero = 50;
    var primeiroNumero = "50";
    var segundoNumero = 50

    console.log(primeiroNumero == segundoNumero); //igual
    console.log(primeiroNumero === segundoNumero); //identico
*/

// e. "Carro" é diferente de "bicicleta"
var primeiroVeiculo = "Carro";
var segundoVeiculo = "bicicleta";
if (primeiroVeiculo != segundoVeiculo) {
    console.log(primeiroVeiculo + " é diferente de " + segundoVeiculo);
} else {
    console.log(primeiroVeiculo + " é igual a " + segundoVeiculo);
}

// f. 50 é maior que 27
var primeiroNumero = 50;
var segundoNumero = 27;
if (primeiroNumero > segundoNumero) {
    console.log(primeiroNumero + " é maior que " + segundoNumero);
} else {
    console.log(primeiroNumero + " não é maior que " + segundoNumero);
}

// g. 975 é menor ou igual a 1200
var primeiroNumero = 975;
var segundoNumero = 1200;
if (primeiroNumero <= segundoNumero) {
    console.log(primeiroNumero + " é menor ou igual a " + segundoNumero);
} else {
    console.log(primeiroNumero + " não é menor ou igual a " + segundoNumero);
}