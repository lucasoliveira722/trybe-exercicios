const bodyParser = require('body-parser');
const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT;

const Author = require('./controller/Author');
const errorMiddleware = require('./middlewares/error')

app.use(bodyParser.json());

app.get('/authors', rescue(Author.getAll));
app.get('/authors/:id', rescue(Author.findById));
app.post('/authors', rescue(Author.create));

app.use(errorMiddleware);

app.listen(port, () => console.log(`Ouvindo a porta ${port}`));