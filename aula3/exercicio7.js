/*
    Declarações if são usadas para tomar decisões no código. 

    A palavra-chave if diz ao JavaScript para executar o código entre chaves sob certas condições, definidas entre parênteses. 
    Essas condições são conhecidas como Boolean condições e podem ser apenas true ou false.

    Quando a condição é avaliada como true, o programa executa a instrução dentro das chaves. Q
    uando a condição booleana for avaliada como false, a instrução dentro das chaves não será executada.

    //pseudocodigo
    if (*condição é verdadeira*) {
    *instrução é executada*
    }

    Exemplo
    var minhaVariavel = true;
    if (minhaVariavel) {
        console.log("é verdade")
    } else {
	    console.log("é falso)
    }

    Crie uma variável chamada hojeVaiChover e uma condicional if que imprima na tela o seguinte:
    - "Leve seu guarda-chuva, hoje vai chover" se o valor for verdadeiro
    - "Fique tranquilo, hoje será um dia se sol" se o valor for falso
*/

var hojeVaiChover = false; // pode ser true também
if (hojeVaiChover) {
    console.log("Leve seu guarda-chuva, hoje vai chover");
} else {
    console.log("Fique tranquilo, hoje será um dia se sol");
}