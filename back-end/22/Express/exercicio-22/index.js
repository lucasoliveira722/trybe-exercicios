const express = require ('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

app.get('/drinks', function (req, res) {
  res.status(200).json(drinks);
});

app.get('/drinks/search', function (req, res) {
  const { name } = req.query;
  const filteredDrinks = drinks.filter((d) => d.name.includes(name));
  res.status(200).json(filteredDrinks);
});

app.get('/drinks/:id', function (req, res) {
  const { id } = req.params;
  const drink = drinks.find((d) => d.id === parseInt(id));

  if(!drink) return res.status(404).json({ message: 'Drink not found!' });
  res.status(200).json(drink);
})

app.listen(8888, () => {
  console.log('Aplicação ouvindo a porta 8888');
})