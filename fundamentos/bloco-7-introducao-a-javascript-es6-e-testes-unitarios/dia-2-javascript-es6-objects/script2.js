const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// //Crie uma função para adicionar o turno da noite na lesson2 
// function addNoite(object) {
//   object.turno = 'noite';
//   return object;
// }

// console.log(addNoite(lesson2));

// //Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
// function listKeys (object) {
//   console.log(Object.keys(object));
// }

// //Crie uma função para mostrar o tamanho de um objeto.
// function objectSize(object) {
//   let size = Object.keys(object);
//   console.log(size.length);
// }

// //Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
// function listValues (object) {
//   console.log(Object.values(object));
// }

//Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);

//Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
const totalDeAlunos = (object) => {
  let total = 0;
  const array = Object.keys(object);
  for (let index in array) {
    total += object[array[index]].numeroEstudantes
  }
  return total;
}
console.log(totalDeAlunos(allLessons));

//Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.
function pegarValor (object, numero) {
  return Object.values(object)[numero];
}

