/*
    Uma outra coisa muito útil que conseguimos fazer em relação a objetos, é deletar propriedades deles. 

    const gato = {
        "nome": "Whiskers",
        "patas": 4,
        "caudas": 1,
        "principalInimigo": "água",
        "cor": "caramelo"
    };

    delete gato.cor;

    Depois dessa última linha, teríamos o seguinte resultado

    const gato = {
        "nome": "Whiskers",
        "patas": 4,
        "caudas": 1,
        "principalInimigo": "água",
    };

    Delete a propriedade patas do objeto meuCachorro e imprima-o em seguida. 
    Você pode usar a notação de ponto ou colchete.    
*/

    const meuCachorro = {
        nome: "Caramelo",
        patas: 4,
        caudas: 1,
        principalAmiga: "Caroline"
    }

    delete meuCachorro.patas;

    console.log(meuCachorro);