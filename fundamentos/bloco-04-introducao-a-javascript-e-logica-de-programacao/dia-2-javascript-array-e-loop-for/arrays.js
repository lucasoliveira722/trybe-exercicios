let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27, 4];

// //imprimir todos os valores contidos nele
// for (number of numbers) {
//   console.log(number)
// }

// //somar todos os valores no array
// var resultado = 0;
// for (var i = 0; i < numbers.length; i += 1) {
//   resultado = resultado + numbers[i];
// }
// console.log(resultado)

// //média aritmética e maior ou menor que 20
// var media = 0;
// for (var m = 0; m < numbers.length; m += 1) {
//   media += numbers[m];
// }
// media = media / numbers.length;

// if (media > 20) {
// console.log(media + ": valor maior que 20");
// } else {
//   console.log(media + ": valor menor ou igual a 20")
// }

// //maior valor contido no array
// var maior = numbers[0];
// for (var v = 0; v < numbers.length; v += 1) {
//   if (maior < numbers[v]) {
//     maior = numbers[v]
//   }
// }
// console.log(maior);

// //quantos valores ímpares existem no array
// var impares = 0;
// for (var p = 0; p < numbers.length; p++) {
//   if (numbers[p]%2) {
//     impares += 1;
//   }
// }
// if (impares > 0) {
//   console.log(impares)
// } else {
//   console.log("Nenhum valor ímpar encontrado")
// }

// //menor valor contido no array
// var menor = numbers[0];
// for (var v = 0; v < numbers.length; v += 1) {
//   if (menor > numbers[v]) {
//     menor = numbers[v]
//   }
// }
// console.log(menor);

//criar um array de 1 a 25 e imprimir o resultado, e a divisão de todos por 2
var vinteECinco = [];
for (var n = 1; n <= 25; n += 1) {
  vinteECinco.push(n)
}
//console.log(vinteECinco)

vinteECincoPorDois = []
for (var x = 0; x < 25; x+=1) {
  vinteECincoPorDois.push((vinteECinco[x]/2));
}
console.log(vinteECincoPorDois);