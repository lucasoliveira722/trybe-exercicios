var vezes = 4;
// var caracter = "*";

// // for (var n = 0; n < vezes; n += 1) {
// //   console.log (caracter.repeat(vezes))
// // }

// var piramide = [];
// for (var n = 0; n < vezes; n += 1) {
//     piramide.push("*");
//     console.log(piramide)
//   }


  // var piramide = '';
  // for (var x = 0; x < vezes; x++) {
  //   piramide += "*";
  //   console.log(piramide)
  // }

  // console.log ("" * (vezes - n));

  // var linha = '';
  // var espaco = '';
  // var asterisco = 0;

  // for(var espaco = vezes; espaco > 0; espaco--) {
  //   linha += "-";
  // }

  // for (var asterisco = 0; asterisco < vezes; asterisco++) {
  //   linha += "*";
  //   console.log(linha)
  // }

var asterisco = "*";
var inputLine = "";
var inputPosition = vezes;

for (index = 0; index <= vezes; index +=1){
  for (let coluna = 0; coluna <= vezes; coluna +=1){
    if (coluna < inputPosition){
      inputLine = inputLine + " ";
    } else {
      inputLine = inputLine + asterisco
    }
  }
  console.log(inputLine);
  inputLine = '';
  inputPosition -= 1;
}

  //adicionar (vezes-x) espaços