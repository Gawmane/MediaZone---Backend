import UserModel from "../Models/user.model.js";

class UserController {
	constructor() {}

	//Henter list
	list = async (req, res) => {
		const result = await UserModel.findAll({
			//limit: 2,
			order: ["firstname"],
		});
		res.status(200).json({ status: "OK", data: result });
	};

	//Henter details
	get = async (req, res) => {
		try {
			const result = await UserModel.findAll({ where: { id: req.params.id } });
			return res.status(200).json({ status: "OK", data: result });
		} catch (err) {
			return res.status(400).json({ status: "ERROR", error: err });
		}
	};

	//Opret en user
	create = async (req, res) => {
		//Fra database - skal være der for at oprette et eventt
		const { firstname, lastname, email, password, class_id } = req.body;

		const errors = {};
		if (!firstname) errors["firstname"] = "string";
		if (!lastname) errors["lastname"] = "string";
		if (!email) errors["email"] = "string";
		if (!password) errors["password"] = "string";
		if (!class_id) errors["class_id"] = "int";

		if (firstname && lastname && email && password && class_id) {
			const model = await UserModel.create(req.body);
			return res.status(201).json({ status: "OK", id: model.id });
		} else {
			return res.status(400).json({
				status: "ERROR",
				missing: errors,
			});
		}
	};

	//Opdater en user
	update = async (req, res) => {
		const { firstname, lastname, email, password, id, class_id } = req.body;

		const errors = {};
		if (!firstname) errors["firstname"] = "string";
		if (!lastname) errors["lastname"] = "string";
		if (!email) errors["email"] = "string";
		if (!password) errors["password"] = "string";
		if (!class_id) errors["class_id"] = "int";
		if (!id) errors["id"] = "int";

		if (firstname && lastname && email && password) {
			await UserModel.update(req.body, { where: { id: id } });
			return res.status(200).json({ status: "OK", updated_id: id });
		} else {
			return res.status(400).json({
				status: "ERROR",
				missing: errors,
			});
		}
	};

	//Slet en user
	delete = async (req, res) => {
		try {
			await UserModel.destroy({ where: { id: req.params.id } });
			res.status(200).json({ status: "OK", deleted_id: req.params.id });
		} catch (err) {
			return res.status(400).json({
				status: "ERROR",
				missing: { id: "int" },
			});
		}
	};
}

export default UserController;
