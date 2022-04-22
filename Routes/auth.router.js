import express from 'express';
import AuthController from '../Controllers/auth.controller.js'
import VerifyToken from '../Middelware/verfiyToken.js'

const router = express.Router();
const auth = new AuthController();

//Route til login 
router.post('/login', (req, res) => { auth.login(req, res) })

//Til beskyttelse af siden. VerifyToken = tjekker om token er ok
router.get('/protected', VerifyToken, (req, res) => { auth.protected(req, res) })

export default router