// Adicionar os estados à tag "select" via JavaScript
let listaEstados = document.getElementById('estado');
let estados = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins', 'Distrito Federal'];
let botao = document.getElementById('submit');

for (let index = 0; index < estados.length; index += 1) {
  let estado = estados[index];

  let novoEstado = document.createElement('option');
  novoEstado.innerText = estado;

  listaEstados.appendChild(novoEstado);
}

botao.addEventListener ('click', (event) => {
  event.preventDefault();
})