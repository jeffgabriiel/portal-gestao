const mysql = require('mysql'); // conecção ao database MySQL
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'jeff1238',
    database: 'travelagency', // nome do database no mysql
});
module.exports = pool;
