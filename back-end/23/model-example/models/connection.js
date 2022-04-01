const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'lucas',
  password: '84868880',
  database: 'model_example' });

module.exports = connection;