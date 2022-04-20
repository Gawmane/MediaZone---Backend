import EventModel from '../Models/event.model.js'

class EventController {
    constructor() {}

    //Henter list
    list = async(req, res) => {
        const result = await EventModel.findAll({
            //limit: 2,
            order: ['title']
        });
        res.send(result);
    }

    //Henter details
    get = async(req, res) => {
        try {
            const result = await EventModel.findAll({ where: { id: req.params.id } });
            return res.json(result);
        } catch (err) {
            return res.send(err);
        }
    }

    //Opret et event 
    create = async(req, res) => {
        //Fra database - skal være der for at oprette et eventt
        const { title, content, startdate, stopdate } = req.body;

        if (title && content && startdate && stopdate) {
            const model = await EventModel.create(req.body);
            return res.json({ newid: model.id });
        } else {
            return res.send(418)
        }
    }

    //Opdater et event 
    update = async(req, res) => {
        const { title, content, startdate, stopdate, id } = req.body;

        if (title && content && startdate && stopdate) {
            await EventModel.update(req.body, { where: { id: id } });
            return res.sendStatus(200);
        } else {
            return res.send(418)
        }
    }

    //Slet et event
    delete = async() => {
        try {
            await EventModel.destroy({ where: { id: req.params.id } });
            res.sendStatus(200)
        } catch (err) {
            res.send(err)
        }
    }
}

export default EventController