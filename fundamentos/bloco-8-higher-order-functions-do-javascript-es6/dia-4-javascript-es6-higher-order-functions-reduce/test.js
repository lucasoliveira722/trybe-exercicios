// // Faça uma lista com as suas frutas favoritas
// const specialFruit = ['Banana', 'Morango', 'Uva'];

// // Faça uma lista de complementos que você gostaria de adicionar
// const additionalItens = ['Leite Condensado', 'Granola', 'Paçoca'];

// const fruitSalad = (fruit, additional) => {
//   // Esreva sua função aqui
//   const completeSalad = [...fruit, ...additional]
//   return completeSalad;
// };

// console.log(fruitSalad(specialFruit, additionalItens));

// const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];
// const [salute, saluteFunc] = saudacoes;

// saluteFunc(salute); // Olá

// // Produza o mesmo resultado acima, porém utilizando array destructuring

// let comida = 'gato';
// let animal = 'água';
// let bebida = 'arroz';

// console.log(comida, animal, bebida); // arroz gato água

// // Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo
// [comida, animal, bebida] = [bebida, comida, animal];
// console.log(comida, animal, bebida); // arroz gato água
const getNationality = ({ firstName, nationality = 'Brazilian'}) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));