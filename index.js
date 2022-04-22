import express from 'express';
import EventRouter from './Routes/event.router.js';
import UserRouter from './Routes/user.router.js';
import UserGroupRouter from './Routes/usergroup.router.js';
import TeamRouter from './Routes/team.router.js';
import AuthRouter from './Routes/auth.router.js';
import { router } from './Routes/init.router.js';

import dotenv from 'dotenv';

//Kalder en environment vars
dotenv.config();


//Laver en json
const app = express();
app.use(express.json("application/json"))
app.use(express.urlencoded({
    extended: true
}));

const port = process.env.PORT || 4000;

//Brug router
app.use(router)
app.use(EventRouter);
app.use(UserRouter);
app.use(UserGroupRouter);
app.use(TeamRouter);
app.use(AuthRouter);

//Kalder serveren 
app.listen(port, () => {
    console.log(`Server køre på port http://localhost:${port}`);
})