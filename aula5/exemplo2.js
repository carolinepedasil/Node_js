// Loop

console.log(1);
console.log(2);
console.log(3);

// for
// for([bloco de inicializao]; [bloco de condicional]; [expressao final (incrementar ou decrementar)])
for(let contador = 1; contador === 5; contador++) { // contador = contador + 1
    console.log(contador);

    if(contador === 4) {
        break;
    }
}

const meuArray = [1, 2, 3, 4, 5];

for(let indice = 0; indice < meuArray.length; indice++) {
    console.log(meuArray[indice]);
}

const meuNome = ["Meu", "nome", "é", "Caroline"];

for(let indice = 0; indice < meuNome.length; indice++) {
    console.log(meuNome[indice]);
}
function repetidorWhile() {
    let contador = 1;
    while(contador <= 5) {
        console.log("Caroline");
        contador++;
    }
}

let contador = 1;
do {
    console.log("Caroline");
    contador++;
} while(contador <= 5);

while (contador <= 5) {
    console.log("Caroline");
    contador++;
}

// forEach

const meuArray = ["Meu", "nome", "é", "Caroline"];
meuArray.forEach(function(item) {
    console.log(item);
});

// map

const meuArray = [1, 2, 3, 4, 5, 6, 7];
const arrayAtualizado = meuArray.map(function(value) {
    return "Meu valor é " + value;
});

console.log(arrayAtualizado);

const meuArray = [1, 2, 3, 4, 5, 6, 7];

for (let indice = 0; indice < meuArray.length; indice++) {
    meuArray[indice]++;
}
console.log(meuArray);

const meuArray = [1, 2, 3, 4, 5, 6, 7];

console.log('meuArray antes do map', meuArray);

const arrayAtualizado = meuArray.map(function(item) {
    return item = item + 1;
});

console.log('meuArray depois do map', meuArray);
console.log('meuArrayAtualizado', arrayAtualizado);