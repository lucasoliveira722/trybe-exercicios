const Redux = require ('redux');

const ESTADO_INICIAL = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

function criarCor() {
  const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let cor = '#';
  const aleatorio = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
    cor += oneChar[aleatorio()];
  }
  return cor;
}

const reducer = (state = ESTADO_INICIAL, action) => {
  switch(action.type) {
    case "NEXT_COLOR":
      return{
        ...state,
        index: state.index === state.colors.length - 1 ? 0: state.index + 1,
      }
    case "PREVIOUS_COLOR":
      return{
        ...state,
        index: state.index === 0 ? state.colors.length - 1 : state.index - 1,
      }
    case "RANDOM_COLOR":
      return{
        ...state,
        colors: [...state.colors, criarCor()],
        index: state.colors.length,
      }
    default: 
      return state;
  }
};

const next = document.getElementById('next');
const previous = document.getElementById('previous');
const random = document.getElementById('random');

next.addEventListener('click', () => {
  store.dispatch({ type: 'NEXT_COLOR' });
  // console.log('next color');
});

previous.addEventListener('click', () => {
  store.dispatch({ type: 'PREVIOUS_COLOR' });
  // console.log('previous color');
});

random.addEventListener('click', () => {
  store.dispatch({ type: 'RANDOM_COLOR' });
  // console.log('random color');
});

store.subscribe(() => {
  const { colors, index } = store.getState();
  document.getElementById('value').innerHTML = colors[index];
  document.getElementById('container').style.backgroundColor = colors[index];
})

const store = Redux.createStore(reducer);