import { sequelize } from "../Config/db.config.js";
import { Sequelize, DataTypes, Model } from 'sequelize';

class UserModel extends Model {}

//Tabeller fra databasen (user)
UserModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    firstname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    class_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    sequelize, // Sequelize instance
    modelName: 'user', // Table name
    freezeTableName: true, // Lås tabelnavne til ental
    underscored: true, // Brug underscores istedet for camelcase
    createdAt: false, // Custom name
    updatedAt: false // Undlad felt
})

export default UserModel