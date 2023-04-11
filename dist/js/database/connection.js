/* // conecção ao mysql pura
const mysql = require('mysql'); // conecção ao database MySQL

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'jeff1238',
    database: 'travelagency', // nome do database no mysql
});
module.exports = pool;
*/
//conecção usando o sequelize
import { Sequelize } from "sequelize";
const sequelizeConnection = new Sequelize('travelagency', 'root', 'jeff1238', {
    host: 'localhost',
    dialect: 'mysql'
});
try {
    sequelizeConnection.authenticate();
    console.log('Conectado ao banco de dados com sequelize');
}
catch (err) {
    console.log('Error: ', err);
}
export default sequelizeConnection;
