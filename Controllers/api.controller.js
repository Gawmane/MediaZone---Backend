import ApiFieldsModel from "../Models/api.fields.model.js";
import ApiRoutesModel from "../Models/api.routes.model.js";
import ApiRoutesSubModel from "../Models/api.routes.sub.model.js";

//En til mange relation (teams)
ApiRoutesModel.hasMany(ApiFieldsModel, { foreignKey: "api_id" });
ApiFieldsModel.belongsTo(ApiRoutesModel, { foreignKey: "api_id" });
ApiRoutesModel.hasMany(ApiRoutesSubModel, { foreignKey: "api_id" });
ApiRoutesSubModel.belongsTo(ApiRoutesModel, { foreignKey: "api_id" });

class ApiController {
	constructor() {}

	//Henter list
	list = async (req, res) => {
		const result = await ApiRoutesModel.findAll({
			include: [
				{
					model: ApiFieldsModel,
				},
				/* {
					model: ApiRoutesSubModel,
				}, */
			],
		});
		//Sender result || fejl
		res.send(result) || res.status(418).send("Kunne ikke åbne brugerne.");
		//
	};
}

export default ApiController;
