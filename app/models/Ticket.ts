module.exports = require('../database/connection').define('Ticket', {
    partida: {
        type: require('sequelize').STRING,
        allowNull: false,
        require: true,
    },
    destino: {
        //constaints
        type: require('sequelize').STRING,
        allowNull: false,
        require: true,
    },
    preco: {
        type: require('sequelize').FLOAT,
        allowNull: false,
        require: true,
    },
}).belongsTo(require('./User'));