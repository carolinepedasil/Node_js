/*
    Você pode adicionar novas propriedades a objetos JavaScript existentes da mesma maneira que os modificaria ou acessaria. 
    Veja como adicionaríamos a propriedade brinquedoFavorito no nosso objeto gato.

        gato.brinquedoFavorito = "arranhador";
        //ou
        gato["brinquedoFavorito"] = "arranhador";
    
    Adicione uma propriedade brinquedoFavorito ao objeto meuCachorro criado anteriormente e defina-a, como "bolinha". 
    Você pode usar a notação de ponto ou colchete. Imprima-o.
*/

    const meuCachorro = {
        nome: "Caramelo",
        patas: 4,
        caudas: 1,
        principalAmiga: "Caroline"
    }

    meuCachorro.brinquedoFavorito = "bolinha";

    console.log(meuCachorro.brinquedoFavorito);