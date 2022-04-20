import express from 'express';
import EventRouter from './Routes/user.router.js';
import UserRouter from './Routes/event.router.js';

import dotenv from 'dotenv';

//Kalder en environment vars
dotenv.config();

const port = process.env.PORT || 4000;

//Laver en json
const app = express();
app.use(express.urlencoded({
    extended: true
}));

//Brug router
app.use(EventRouter);
app.use(UserRouter);


//Kalder serveren 
app.listen(port, () => {
    console.log(`Server køre på port http://localhost:${port}`);
})