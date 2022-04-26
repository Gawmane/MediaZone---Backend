import { sequelize } from "../Config/db.config.js";
import { Sequelize, DataTypes, Model } from "sequelize";

class ApiFieldsModel extends Model {}

//Tabeller fra databasen (user)
ApiFieldsModel.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true,
		},
		api_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		friendly_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		type: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		sequelize, // Sequelize instance
		modelName: "api_fields", // Table name
		freezeTableName: true, // Lås tabelnavne til ental
		underscored: true, // Brug underscores istedet for camelcase
	}
);

export default ApiFieldsModel;
