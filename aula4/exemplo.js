const meuPrimeiroObjeto = {};

const meuCarro = {
    modelo: "corolla", 
    cor: "cinza",
    ano: 2019,
    ehNovo: true
};

console.log(meuCarro.modelo);
console.log("Meu carro é novo? ", meuCarro.ehNovo);
console.log(meuCarro["cor"]);

const modeloCarro = "modelo";
console.log(meuCarro[modeloCarro]); // meuCarro.modelo ou meuCarro["modelo"]

meuCarro.temSeguro = true;
console.log(meuCarro);

meuCarro.ano = 2021;
console.log(meuCarro);

delete meuCarro.cor;