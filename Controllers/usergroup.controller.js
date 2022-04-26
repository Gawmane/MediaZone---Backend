import UserGroupModel from "../Models/usergroup.model.js";

class UserGroupController {
	constructor() {}

	list = async (req, res) => {
		const result = await UserGroupModel.findAll({
			//limit: 2,
			order: ["name"],
		});
		res.send(result);
	};

	get = async (req, res) => {
		try {
			const result = await UserGroupModel.findAll({
				where: { id: req.params.id },
			});
			return res.json(result);
		} catch (err) {
			//Hvis fejl - send fejlmeddelse
			return res
				.status(418)
				.send("Kunne ikke åbne detaljer. Tjek om du har korrekt id.");
		}
	};

	create = async (req, res) => {
		const { name } = req.body;

		if (name) {
			const model = await UserGroupModel.create(req.body);
			return res.json({ newid: model.id });
		}
		//Hvis fejl - send fejlmeddelse
		else {
			return res
				.status(418)
				.send(
					"Kunne ikke oprette usergroup. Tjek om du har udfyldt alle felterne korrekt."
				);
		}
	};

	update = async (req, res) => {
		const { name, id } = req.body;

		if (name && id) {
			await UserGroupModel.update(req.body, { where: { id: id } });
			return res.sendStatus(200);
		}
		//Hvis fejl - send fejlmeddelse
		else {
			return res
				.status(418)
				.send(
					"Kunne ikke opdatere usergroup. Tjek om du har udfyldt alle felterne korrekt."
				);
		}
	};

	delete = async (req, res) => {
		try {
			await UserGroupModel.destroy({ where: { id: req.params.id } });
			res.sendStatus(200);
		} catch (err) {
			//Hvis fejl - send fejlmeddelse
			return res
				.status(418)
				.send(
					"Kunne ikke slette usergroup. Tjek om du har valid id og prøv igen."
				);
		}
	};
}

export default UserGroupController;
