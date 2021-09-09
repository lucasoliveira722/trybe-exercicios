function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

let dias = document.getElementById('days');
for (let index = 0; index < dezDaysList.length; index += 1) {
  let dia = dezDaysList[index]

  let listaDeDias = document.createElement('li');
  listaDeDias.innerText = dia;
  listaDeDias.className = 'day'

  if (dia === 24 || dia === 31) {
    listaDeDias.className = 'day holiday'
  }

  if (dia === 4 || dia === 11 || dia === 18) {
    listaDeDias.className = 'day friday'
  }

  if (dia === 25) {
    listaDeDias.className = 'day holiday friday'
  }

  dias.appendChild(listaDeDias)
}

//Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".

function criarBotaoFeriado(botao) {
  let container = document.querySelector('.buttons-container');

  let botaoCriado = document.createElement('button')
  botaoCriado.innerText = (botao);
  botaoCriado.id = 'btn-holiday';

  container.appendChild(botaoCriado)
}

criarBotaoFeriado('Feriados');

//Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday"

function trocaCorFundoFeriados() {
let botaoFeriado = document.getElementById('btn-holiday');
let feriados = document.querySelectorAll('.holiday');
let corDeFundo = 'rgb(238,238,238)';

botaoFeriado.addEventListener('click', function() {
  for (let index = 0; index < feriados.length; index += 1){
    if (feriados[index].style.backgroundColor === 'white') {
      feriados[index].style.backgroundColor = corDeFundo;
    } else {
      feriados[index].style.backgroundColor = 'white';
    }
  }
})
}

trocaCorFundoFeriados();


//Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".

function criarBotaoSexta(botao) {
  let container = document.querySelector('.buttons-container');

  let botaoCriado = document.createElement('button')
  botaoCriado.innerText = (botao);
  botaoCriado.id = 'btn-friday';

  container.appendChild(botaoCriado)
}

criarBotaoSexta('Sexta-Feira');

//Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
function trocaTextoSextas(arraySextas) {
  let botaoSexta = document.getElementById('btn-friday');
  let sextas = document.getElementsByClassName('friday');
  let textoSexta = 'Sexta-Feira';

  botaoSexta.addEventListener('click', function() {
    for (let index = 0; index < sextas.length; index += 1) {
      if (sextas[index].innerHTML !== textoSexta) {
          sextas[index].innerHTML = textoSexta;
      } else {
        sextas[index].innerHTML = arraySextas[index]
      }
    }
  })
};

let sextasFeiras = [ 4, 11, 18, 25 ];
trocaTextoSextas(sextasFeiras);