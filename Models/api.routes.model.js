import { sequelize } from "../Config/db.config.js";
import { Sequelize, DataTypes, Model } from "sequelize";

class ApiRoutesModel extends Model {}

//Tabeller fra databasen (user)
ApiRoutesModel.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true,
		},
		endpoint: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		friendly_name: {
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
		modelName: "api_routes", // Table name
		freezeTableName: true, // Lås tabelnavne til ental
		underscored: true, // Brug underscores istedet for camelcase
	}
);

export default ApiRoutesModel;
