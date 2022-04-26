import { sequelize } from "../Config/db.config.js";
import { Sequelize, DataTypes, Model } from "sequelize";

class ApiRoutesSubModel extends Model {}

//Tabeller fra databasen (user)
ApiRoutesSubModel.init(
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
		endpoint: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		type: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
	},
	{
		sequelize, // Sequelize instance
		modelName: "api_routes_sub", // Table name
		freezeTableName: true, // Lås tabelnavne til ental
		underscored: true, // Brug underscores istedet for camelcase
	}
);

export default ApiRoutesSubModel;
