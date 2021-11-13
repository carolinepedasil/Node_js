/*
    Parâmetros são variáveis que agem como marcadores para os valores que devem ser inseridos em uma função quando ela é chamada. 
    Quando uma função é definida, normalmente ela é definida junto com um ou mais parâmetros.
    Os valores reais que são inseridos (ou "passados" ) em uma função quando ela é chamada são conhecidos como argumentos.
    Aqui está uma função com dois parâmetros param1e param2:

    function funcaoComParametros(param1, param2) {
        console.log(param1, param2);
    }
    
    Então, podemos chamar funcaoComParametros assim: funcaoComParametros("Olá", "Mundo");. 
    Passamos dois argumentos de string, Olá e Mundo. 

    Dentro da função, param1 será igual à string Olá e param2 será igual string Mundo. 
    Observe que você poderia chamar funcaoComParametros novamente com argumentos diferentes e os parâmetros assumiriam o valor dos novos argumentos.

    Então, podemos chamar funcaoComParametros assim: funcaoComParametros("Olá", "Mundo");. Passamos dois argumentos de string, Olá e Mundo. 

    a. Dentro da função, param1 será igual à string Olá e param2 será igual string Mundo. 
    Observe que você poderia chamar funcaoComParametros novamente com argumentos diferentes e os parâmetros assumiriam o valor dos novos argumentos.

    b. Chame a função com dois números como argumentos.
*/

    function calculaSoma(numero1, numero2) {
        console.log(numero1 + numero2);
    }

    console.log(calculaSoma(1, 2));