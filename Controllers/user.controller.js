import UserModel from '../Models/user.model.js'

class UserController {
    constructor() {}

    //Henter list
    list = async(req, res) => {
        const result = await UserModel.findAll({
            //limit: 2,
            order: ['firstname']
        });
        res.send(result);
    }

    //Henter details
    get = async(req, res) => {
        try {
            const result = await UserModel.findAll({ where: { id: req.params.id } });
            return res.json(result);
        } catch (err) {
            return res.send(err);
        }
    }

    //Opret en user 
    create = async(req, res) => {
        //Fra database - skal være der for at oprette et eventt
        const { firstname, lastname, email, password, class_id } = req.body;

        if (firstname && lastname && email && password && class_id) {
            const model = await UserModel.create(req.body);
            return res.json({ newid: model.id });
        } else {
            return res.send(418)
        }
    }

    //Opdater en user 
    update = async(req, res) => {
        const { firstname, lastname, email, password, id } = req.body;

        if (firstname && lastname && email && password) {
            await UserModel.update(req.body, { where: { id: id } });
            return res.sendStatus(200);
        } else {
            return res.send(418)
        }
    }

    //Slet en user
    delete = async(req, res) => {
        try {
            await UserModel.destroy({ where: { id: req.params.id } });
            res.sendStatus(200)
        } catch (err) {
            res.send(err)
        }
    }
}

export default UserController