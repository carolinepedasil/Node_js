/*
    Vimos que o forEach facilita muito quando precisamos iterar sobre elementos como o array. 
    Imagine que estamos em um restaurante e chegou 5 pedidos do aplicativo, esses pedidos devem ser exibidos na tela do chef, vamos ver como ficaria usando o for

    const pedidos = [
        { id: 1, prato: "x-bacon" },
        { id: 2, prato: "sundae" },
        { id: 3, prato: "fritas média" },
        { id: 4, prato: "nuggets" },
        { id: 5, prato: "x-tudo" },
    ];

    for(var indice = 0; indice < pedidos.length; indice++) {
        console.log(pedidos[indice].prato)
    }

    A mesma implementação com forEach ficaria assim, muito mais simples, não?

    pedidos.forEach(function(pedido) {
        onsole.log(pedido.prato);
    });

    Faça uma função que execute um forEach em pedidos, que agora tem um status e imprima mensagens ao usuário de acordo com ele. Se:

    a. Status for igual a "em preparo", imprima a mensagem "Seu pedido está sendo preparado"
    b. Status for igual a "a caminho", imprima a mensagem "Entregador a caminho, fique atento!"
    c. Status for igual a "entregue", imprima a mensagem "Pedido entregue"
    d. Se não for nenhum desses status, imprima "Aguarde, processando pedido..."
*/

    const pedidos = [
        { id: 1, prato: "x-bacon", status: "entregue" },
        { id: 2, prato: "sundae", status: "em preparo" },
        { id: 3, prato: "fritas média", status: "a caminho" },
        { id: 4, prato: "nuggets", status: "entregue" },
        { id: 5, prato: "x-tudo", status: "a caminho" },
    ];

    // a. Status for igual a "em preparo", imprima a mensagem "Seu pedido está sendo preparado"
    pedidos.forEach(function(pedido) {
        if(pedido.status === "em preparo") {
            console.log("Seu pedido está sendo preparado");
        }
    }
    );

    // b. Status for igual a "a caminho", imprima a mensagem "Entregador a caminho, fique atento!"
    pedidos.forEach(function(pedido) {
        if(pedido.status === "a caminho") {
            console.log("Entregador a caminho, fique atento!");
        }
    }
    );

    // c. Status for igual a "entregue", imprima a mensagem "Pedido entregue"
    pedidos.forEach(function(pedido) {
        if(pedido.status === "entregue") {
            console.log("Pedido entregue");
        }
    }
    );

    // d. Se não for nenhum desses status, imprima "Aguarde, processando pedido..."
    pedidos.forEach(function(pedido) {
        if(pedido.status !== "em preparo" && pedido.status !== "a caminho" && pedido.status !== "entregue") {
            console.log("Aguarde, processando pedido...");
        }
    }
    );
