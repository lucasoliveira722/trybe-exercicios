const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: 'lucas',
  password: '84868880',
  database: process.env.MYSQL_DB_NAME
});

module.exports = connection;