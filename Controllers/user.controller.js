import UserModel from '../Models/user.model.js'
import TeamModel from "../Models/team.model.js"
import UserGroupModel from "../Models/usergroup.model.js"


//En til mange relation (teams)
TeamModel.hasMany(UserModel, { foreignKey: 'team_id' });
UserModel.belongsTo(TeamModel, { foreignKey: 'team_id' });

// Mange til mange relation (usergroups)
UserModel.belongsToMany(UserGroupModel, {
    through: "usergroup_rel",
    foreignKey: "user_id"
});

class UserController {
    constructor() {}

    //Henter list
    list = async(req, res) => {
        const result = await UserModel.findAll({
            //limit: 2,
            order: ['firstname'],
            // Inkluderer relationsdata - sættes i array når der er flere
            include: [{
                    // Team
                    model: TeamModel,
                    attributes: ["name"]
                },
                {
                    // Usergroups
                    model: UserGroupModel,
                    attributes: ["id", "name"]
                }
            ]
        });
        //Sender result
        res.send(result);
        //Fejl meddelse 
        return res.status(418).send('Kunne ikke åbne brugerne.');

    };

    //Henter details
    get = async(req, res) => {
        try {
            const result = await UserModel.findAll({
                where: { id: req.params.id },

                // Inkluderer relationsdata 
                include: [{
                        // Team
                        model: TeamModel,
                        attributes: ["name"]
                    },
                    {
                        // Usergroups
                        model: UserGroupModel,
                        attributes: ["id", "name"]
                    }
                ]
            });
            return res.json(result);
        }
        //Hvis fejl - send err meddelse 
        catch (err) {
            return res.status(418).send('Kunne ikke åbne detaljer. Tjek om du har korrekt id.');
        }
    };

    //Opret en user 
    create = async(req, res) => {
        //Fra database - skal være der for at oprette et eventt
        const { firstname, lastname, email, password, team_id } = req.body;

        if (firstname && lastname && email && password && team_id) {
            const model = await UserModel.create(req.body);
            return res.json({ newid: model.id });
        }
        //Hvis fejl - send fejlmeddelse  
        else {
            return res.status(418).send('Kunne ikke oprette brugeren. Tjek om du har udfyldt alle felterne korrekt.');
        }
    }

    //Opdater en user 
    update = async(req, res) => {
        const { firstname, lastname, email, password, team_id, id } = req.body;

        if (firstname && lastname && email && password && id) {
            await UserModel.update(req.body, {
                where: { id: id },
                //Tillader opdate af hooks 
                individualHooks: true
            });
            return res.sendStatus(200);
        }
        //Hvis fejl - send fejlmeddelse 
        else {
            return res.status(418).send('Kunne ikke opdatere brugeren. Tjek om du har udfyldt alle felterne korrekt.');

        }
    }

    //Slet en user
    delete = async(req, res) => {
        try {
            await UserModel.destroy({ where: { id: req.params.id } });
            res.sendStatus(200)
        }
        //Hvis fejl - send fejlmeddelse 
        catch (err) {
            return res.status(418).send('Kunne ikke slette brugeren. Tjek om du har valid id og prøv igen.');

        }
    }
}

export default UserController