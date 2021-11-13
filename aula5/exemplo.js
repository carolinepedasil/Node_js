function nomeDaMinhaFuncao() {
    console.log("Minha primeira função rodou!");
};

nomeDaMinhaFuncao();

function funcaoComParametro(meuParametro, meuSegundoParametro) {
    console.log(meuParametro, meuSegundoParametro);
}

funcaoComParametro(["1", "2", 100], "meu segundo parametro!");

function retornaValor() {
    return "Meu Valore Retornado";
}

function calculaSubtracao(primeiroValor, segundoValor) {
    return primeiroValor - segundoValor;
}

console.log(calculaSubtracao(10, 5));

function retornaVariavel(valorDaVariavel) {
    const minhaVariavel = valorDaVariavel;
    return valorDaVariavel;
}

console.log(retornaVariavel("Meu primeiro retorno com variavel"));

function retornoCondicional(){
    if (valor > 200) {
        return "Valor maior do que 200";
    } else {
        return "Valor menor do que 200";
    }
}

function retornoCondicitionalTernario(valor) {
    return valor > 200 ? "Valor maior do que 200" : "Valor menor do que 200";
}

console.log(retornoCondicitionalTernario(201));

const resultadoCondicional = retornoCondicitionalTernario(400);
console.log(resultadoCondicional);

// arrow function

function nomeDaMinhaFuncao() {
    console.log("Minha primeira função rodou!");
}

const nomeDaMinhaArrowFunction = () => {
    console.log("Minha primeira arrow function");
}

console.log(nomeDaMinhaArrowFunction());

const retornoCondicitionalTernario = (valor) => valor > 200 ? "Valor maior do que 200" : "Valor menor do que 200";

const resultado = retornoConditionalTernario(30);
console.log(resultado);