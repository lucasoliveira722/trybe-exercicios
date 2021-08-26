const a;
const b;
const c;

if (a <= 0 || b <= 0 || c <= 0) {
  console.log("Nenhum ângulo pode ser negativo ou igual a zero")
} else {
  if (a + b + c == 180) {
    console.log("Podemos formar um triângulo")
  } else {
    console.log("Não é possível formar um triângulo com esses ângulos.")
  }
}