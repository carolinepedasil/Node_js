/*
    Aprendemos que os loops em Javascript podem ser usados em situações em que precisamos executar uma mesma ação diversas vezes porém usando um valor diferente em cada uma dessas execuções. 
    Por exemplo, suponhamos que temos uma lista (array) com várias tarefas (to-do list) para serem feitas atribuídas a uma variável toDoList, para saber o que precisamos fazer temos que imprimir essas tarefas no terminal. 
    Uma das formas que aprendemos foi acessando valores de lista pelo índice, então poderia ser algo como:

    const listaTarefas = ["Varrer a sala", "Lavar Roupa", "Comprar tomates", "Enviar email"]
    console.log(listaTarefas[0]) //Varrer a sala
    console.log(listaTarefas[1]) //Lavar Roupa
    console.log(listaTarefas[2]) //Comprar tomates
    console.log(listaTarefas[3]) //Enviar email

    Porém, as instruções console.log são exatamente iguais, a não ser pelo item que queremos exibir, certo? 
    Uma das formas de executar uma mesma ação várias vezes é usando o for,  que tem a seguinte sintaxe: 

    for ([inicialização]; [condição]; [expressão final])
    declaração

    Agora rode esse trecho de código e veja como ele acontece:

    const listaTarefas = ["Varrer a sala", "Lavar Roupa", "Comprar tomates", "Enviar email"]
    for(let indice = 0; indice < listaTarefas.length; indice++) {
    console.log(listaTarefas[indice]);

    Testando os conhecimentos! Crie uma função chamada criaPares que receba como parâmetro o array valoresNum, nessa função deve ser executado um for que imprime na tela apenas os valores pares.Lembre-se que a sintaxe de um for é a seguinte:
}
*/

    //setup
    const valoresNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for(let criaPares = 0; criaPares < valoresNum.length; criaPares++) {
        if(valoresNum[criaPares] % 2 === 0) {
            console.log(valoresNum[criaPares]);
        }
    }