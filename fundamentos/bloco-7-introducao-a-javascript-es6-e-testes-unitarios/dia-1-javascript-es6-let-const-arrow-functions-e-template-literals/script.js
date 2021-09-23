// //Parte 1 exercício 1
// const testingScope = escopo => {
//   if (escopo === true) {
//     let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
//     console.log(ifScope);
//   } else {
//     let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//     console.log(elseScope);
//   }
// }

// testingScope(true);

// //Parte 1 exercício 2
// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// // Seu código aqui.
// oddsAndEvens.sort(function(a, b) {
//   return a - b;
// });

// console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente`); // será necessário alterar essa linha

//Parte 2 Exercício 1
//Função que retorne fatorial
function fatorial(n){
  let resultado = 1;
  if (n == 0 || n == 1){
    return resultado;
  }else{
    for(let i = n; i >= 1; i--){
      resultado = resultado * i;
    }
    return resultado;
  }  
}

console.log(fatorial(5));
