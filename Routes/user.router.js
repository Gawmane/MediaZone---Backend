import express from "express";
import UserController from "../Controllers/user.controller.js";

//Router express
const router = express.Router();
//Objekt med controller 
const user = new UserController();

//Kalder routes med controller functions

//Get List (user)
router.get('/api/user', (req, res) => { user.list(req, res) });

//Get details (Med id 0-9)
router.get('/api/user/:id([0-9]*)', (req, res) => { user.get(req, res) });

//Create ny user
router.post('/api/user', (req, res) => { user.create(req, res) });

//Opdater user 
router.put('/api/user', (req, res) => { user.update(req, res) });

//Slet user
router.delete('/api/user/:id([0-9]*)', (req, res) => { user.delete(req, res) });

//Søgefuntikon 
//router.get('/api/user/search', (req, res) => { user.search(req, res) });





export default router