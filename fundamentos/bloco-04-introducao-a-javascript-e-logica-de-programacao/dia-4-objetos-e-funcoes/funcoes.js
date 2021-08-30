// //Exercício 1: Verificar se uma palavra é um palíndromo
// let palavra = "papagaio";

// let palavrainversa = palavra.split("").reverse().join("");

// if (palavra === palavrainversa) {
//   console.log(true);
// } else {
//   console.log(false);
// }


// //Exercício 2: Retornar o índice do maior valor de um array de inteiros
// let array = [20, 3, 1, 10, 7, 1];
// var maiorNoArray = 0;

// for (let i = 0; i <= array.length; i += 1) {
//   if (array[i] > maiorNoArray) {
//     var maiorNoArray = array[i];
//     var indiceMaior = i;
//   }
// }
// console.log(indiceMaior);


// //Exercício 3: Retornar o índice do menor valor de um array de inteiros
// let array = [2, 4, 6, 7, 10, 0, -3];
// var menor = array[0];

// for (var i = 0; i < array.length; i++) {
//   if (array[i] < menor) {
//     menor = array[i];
//     indiceMenor = i;
//   }
// }
// console.log(indiceMenor);


//Exercício 4: encontre o nome com maior quantidade de caracteres no array
let palavras = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
function maiorPalavra(palavras) {
  let maiorPalavra = palavras[0];
  for (let indice in palavras) {
    if (maiorPalavra.length < palavras[indice].length) {
      maiorPalavra = palavras[indice];
    }
  }
  return maiorPalavra;
}

console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])); //Fernanda