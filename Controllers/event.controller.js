import EventModel from '../Models/event.model.js'

class EventController {
    constructor() {}

    //Henter list
    list = async(req, res) => {
        const result = await EventModel.findAll({
            //limit: 2,
            order: ['title']
        });
        //Sender result
        res.send(result);
        //Fejl meddelse 
        return res.status(418).send('Kunne ikke åbne eventerne.');
    }

    //Henter details
    get = async(req, res) => {
        try {
            const result = await EventModel.findAll({ where: { id: req.params.id } });
            return res.json(result);
        }
        //Hvis fejl - send fejlmeddelse 
        catch (err) {
            return res.status(418).send('Kunne ikke åbne detaljer. Tjek om du har korrekt id.');
        }
    }

    //Opret et event 
    create = async(req, res) => {
        //Fra database - skal være der for at oprette et eventt
        const { title, content, startdate, stopdate, location } = req.body;

        if (title && content && startdate && stopdate && location) {
            const model = await EventModel.create(req.body);
            return res.json({ newid: model.id });
        }
        //Hvis fejl - send fejlmeddelse 
        else {
            return res.status(418).send('Kunne ikke oprette eventet. Tjek om du har udfyldt alle felterne korrekt.');
        }
    }

    //Opdater et event 
    update = async(req, res) => {
        const { title, content, startdate, stopdate, id, location } = req.body;

        if (title && content && startdate && stopdate && location) {
            await EventModel.update(req.body, { where: { id: id } });
            return res.sendStatus(200);
        }
        //Hvis fejl - send fejlmeddelse 
        else {
            return res.status(418).send('Kunne ikke opdatere eventet. Tjek om du har udfyldt alle felterne korrekt.');
        }
    }

    //Slet et event
    delete = async(req, res) => {
        try {
            await EventModel.destroy({ where: { id: req.params.id } });
            res.sendStatus(200)
        }
        //Hvis fejl - send fejlmeddelse 
        catch (err) {
            return res.status(418).send('Kunne ikke slette eventet. Tjek om du har valid id og prøv igen.');
        }
    }
}

export default EventController