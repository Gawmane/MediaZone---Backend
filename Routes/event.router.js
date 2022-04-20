import express from "express";
import EventController from "../Controllers/event.controller.js";

//Router express
const router = express.Router();
//Objekt med controller 
const event = new EventController();

//Kalder routes med controller functions

//Get List (event)
router.get('/api/event', (req, res) => { event.list(req, res) });

//Get details (Med id 0-9)
router.get('/api/event/:id([0-9]*)', (req, res) => { event.get(req, res) });

//Create ny event
router.post('/api/event', (req, res) => { event.create(req, res) });

//Opdater event 
router.put('/api/event', (req, res) => { event.update(req, res) });

//Slet event
router.delete('/api/event/:id([0-9]*)', (req, res) => { event.delete(req, res) });

//Søgefuntikon 
//router.get('/api/event/search', (req, res) => { event.search(req, res) });





export default router