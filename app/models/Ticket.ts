import { DataTypes } from "sequelize";

import sequelizeConnection from "../database/connection.js";

const Ticket = sequelizeConnection.define('Ticket', {
    partida: {
        type: DataTypes.STRING,
        allowNull: false
    },
    destino: {
        //constaints
        type: DataTypes.STRING,
        allowNull: false
    },
    preco: {
        type: DataTypes.STRING,
        allowNull: false
    },
}).belongsTo(require('./User'));

export default Ticket;