// Adicionar os estados à tag "select" via JavaScript
let listaEstados = document.getElementById("estado");
let estados = [
  "Acre",
  "Alagoas",
  "Amapá",
  "Amazonas",
  "Bahia",
  "Ceará",
  "Espírito Santo",
  "Goiás",
  "Maranhão",
  "Mato Grosso",
  "Mato Grosso do Sul",
  "Minas Gerais",
  "Pará",
  "Paraíba",
  "Paraná",
  "Pernambuco",
  "Piauí",
  "Rio de Janeiro",
  "Rio Grande do Norte",
  "Rio Grande do Sul",
  "Rondônia",
  "Roraima",
  "Santa Catarina",
  "São Paulo",
  "Sergipe",
  "Tocantins",
  "Distrito Federal",
];
let botao = document.getElementById("submit");

for (let index = 0; index < estados.length; index += 1) {
  let estado = estados[index];

  let novoEstado = document.createElement("option");
  novoEstado.innerText = estado;

  listaEstados.appendChild(novoEstado);
}

botao.addEventListener("click", (event) => {
  // verificaDia();
  // verificaMes();
  // verificaAno();
  event.preventDefault();
});

// let dia = document.getElementById("dia");
// let mes = document.getElementById("mes");
// let ano = document.getElementById("ano");

// function verificaDia() {
//   if (dia.value < 0 || dia.value > 31) {
//     alert("Valor para 'dia' errado; Dias apenas entre 1 e 31");
//   }
// }

// function verificaMes() {
//   if (mes.value < 0 || mes.value > 12) {
//     alert("Valor para 'mês' errado; Meses apenas entre 1 e 12");
//   }
// }

// function verificaAno() {
//   if (ano.value < 0) {
//     alert("O ano não pode ser negativo");
//   }
// }
var field = document.getElementById('datepicker');
var picker = new Pikaday({
    onSelect: function(date) {
        field.value = picker.toString();
    }
});
field.parentNode.insertBefore(picker.el, field.nextSibling);

