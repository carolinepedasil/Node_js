const meuArray = [];

const meuArrayStrings = ["Caroline", "Campinas"]; // pode ter coisas repetidas também 
const meuArrayNumeros = [1, 2, 3, 4, 5];
const meuArrayBooleanos = [true, false]; 

const meuArrayObjetos = [{
    nome: "Caroline",
    idade: 24
} , { // o que separa um do outro é a virgula
    cidade: "Campinas",
}, {}, {}];

const meuArrayVariosTipos = ["Abacaxi", 700, true, { eletronico: "notebook" }];

console.log(meuArrayVariosTipos[0]);
console.log(meuArrayVariosTipos.length);

const tamanhoMeuArrayVariosTipos = meuArrayVariosTipos.length;
console.log(tamanhoMeuArrayVariosTipos);
console.log(meuArrayVariosTipos[tamanhoMeuArrayVariosTipos - 1]);
// ou também: console.log(meuArrayVariosTipos[meuArrayVariosTipos.length - 1]);
const indiceUltimoElemento = tamanhoMeuArrayVariosTipos - 1;
console.log(meuArrayVariosTipos[indiceUltimoElemento]);

meuArrayVariosTipos.push("Hello");
console.log(meuArrayVariosTipos);

meuArrayVariosTipos.push(500);
console.log(meuArrayVariosTipos);

meuArrayVariosTipos.unshift("Quinta feira");
console.log(meuArrayVariosTipos);

meuArrayVariosTipos[3] = "fone de ouvido";
console.log(meuArrayVariosTipos);

meuArrayVariosTipos.pop();
console.log(meuArrayVariosTipos);

meuArrayVariosTipos.shift();
console.log(meuArrayVariosTipos);

console.log(meuArrayVariosTipos.indexOf("Abacaxi"));
console.log(meuArrayVariosTipos.indexOf(700));

meuArrayVariosTipos.splice(3, 1);
console.log(meuArrayVariosTipos);

meuArrayVariosTipos.splice(22, 0, "carteira");
console.log(meuArrayVariosTipos);