/*
    Agora que aprendemos como criar, passar argumentos, retornar e atribuir valores com funções, vamos testar nossos conhecimentos! 
    Vamos construir uma função validaMaioridade para validar se o ano de nascimento fornecido corresponde a uma pessoa com mais de 18 e assim seja liberada ou não a entrada dela em um determinado show.

    a. Receba um parâmetro numérico anoNascimento;
    b. Valide se, pela data de nascimento, se trata de alguém com maior de 18 anos;
    c. Se for maior que 18 anos, retorne uma string dizendo "Liberação autorizada";
    d. Se for igual a 18 anos, retorne uma string dizendo "Validar documento de identidade";
    e. Se for menor de 18 anos, retorne uma string dizendo "ATENÇÃO: Liberação NÃO autorizada";
    f. Atribua o retorno a uma variável chamada resultado e imprima-a.
*/

    function validaMaioridade(anoNascimento) {
        if (anoNascimento > 18) {
            return "Liberação autorizada";
        } else if (anoNascimento = 18) {
            return "Validar documento de identidade";
        } else {
            return "ATENÇÃO: Liberação NÃO autorizada";
        }
    }

    var resultado = validaMaioridade(24);
    console.log(resultado);
