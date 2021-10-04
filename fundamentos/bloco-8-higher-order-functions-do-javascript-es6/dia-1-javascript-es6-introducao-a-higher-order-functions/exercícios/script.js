//Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .

// const register = (name) => {
//   const email = name.toLowerCase().split(" ").join("_");
//   return { name, email: `${email}@trybe.com` };
// };

// const newEmployees = (callback) => {
//   const employees = {
//     id1: callback("Pedro Guerra"),
//     id2: callback("Luiza Drumond"),
//     id3: callback("Carla paiva"),
//   };
//   return employees;
// };

// console.log(newEmployees(register));

// Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const checkResult = (number, callback) => {
  if (number === callback()) {
    console.log(number);
    console.log(callback());
    return "Parabéns você ganhou";
  } else {
  console.log(number);
  console.log(callback());
  return "Tente novamente";
  }
};

const verify = () => {
  let sortedNumber = Math.round(Math.random() * 10);
  return sortedNumber;
};

console.log(checkResult(4, verify));