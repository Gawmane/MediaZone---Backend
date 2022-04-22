import TeamModel from '../Models/team.model.js'

class TeamController {
    constructor() {}

    list = async(req, res) => {
        const result = await TeamModel.findAll({
            //limit: 2,             
            order: ['name']
        });
        res.send(result);
    }

    get = async(req, res) => {
        try {
            const result = await TeamModel.findAll({ where: { id: req.params.id } });
            return res.json(result);
        }
        //Hvis fejl - send fejlmeddelse 
        catch (err) {
            return res.status(418).send('Kunne ikke åbne detaljer. Tjek om du har korrekt id.');
        }
    }

    create = async(req, res) => {
        const { name, startdate, stopdate } = req.body;

        if (name && startdate && stopdate) {
            const model = await TeamModel.create(req.body);
            return res.json({ newid: model.id });
        }
        //Hvis fejl - send fejlmeddelse 
        else {
            return res.status(418).send('Kunne ikke oprette team. Tjek om du har udfyldt alle felterne korrekt.');
        }
    }

    update = async(req, res) => {
        const { name, startdate, stopdate, id } = req.body;

        if (name && startdate && stopdate && id) {
            await TeamModel.update(req.body, { where: { id: id } });
            return res.sendStatus(200);
        }
        //Hvis fejl - send fejlmeddelse
        else {
            return res.status(418).send('Kunne ikke opdatere teamet. Tjek om du har udfyldt alle felterne korrekt.');
        }
    }

    delete = async(req, res) => {
        try {
            await TeamModel.destroy({ where: { id: req.params.id } });
            res.sendStatus(200)
        }
        //Hvis fejl - send fejlmeddelse 
        catch (err) {
            return res.status(418).send('Kunne ikke slette team. Tjek om du har valid id og prøv igen.');
        }
    }
}

export default TeamController