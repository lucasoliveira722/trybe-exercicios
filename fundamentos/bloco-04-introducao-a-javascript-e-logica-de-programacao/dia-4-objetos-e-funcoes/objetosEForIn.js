let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

//Exercício 1
console.log("Bem vinda, " + info.personagem);

//Exercício 2: adicionar "recorrente" e imprimir o objeto
info.recorrente = "Sim";
console.log(info);

//Exercício 3: Exibir todas as chaves do objeto
for (let index in info) {
  console.log(index)
}

//Exercício 4: Exibir todos os valores das chaves do objeto
for (let index in info) {
  console.log(info[index])
}

//Exercício 5: adicionar um novo personagem com as mesmas chaves e imprimir utilizando valores de ambos os personagens
let char = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: "Sim"
};

console.log(info.personagem + " e " + char.personagem);
console.log(info.origem + " e " + char.origem);
console.log(info.nota + " e " + char.nota);
if (info.recorrente === "Sim" && char.recorrente ==="Sim") {
  console.log("Ambos recorrentes");
}
