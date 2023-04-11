import { DataTypes } from "sequelize";

import sequelizeConnection from "../database/connection.js";

const User = sequelizeConnection.define('User', { // criar table no database
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

export default User;