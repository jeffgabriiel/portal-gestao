const { DataTypes } = require('sequelize');
const db = require('../database/connection');
const User = db.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        //constaints
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});
module.exports = User;
