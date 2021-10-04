// Ao chamar a função doingThings:
const doingThings = (func) => func;

const wakeUp = () => "Acordando!!";
const coffee = () => "Bora tomar café!!";
const sleep = () => "Partiu dormir!!";

console.log(doingThings(wakeUp()));

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!