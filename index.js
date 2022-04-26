import express from "express";
import EventRouter from "./Routes/event.router.js";
import UserRouter from "./Routes/user.router.js";
import UserGroupRouter from "./Routes/usergroup.router.js";
import TeamRouter from "./Routes/team.router.js";
import AuthRouter from "./Routes/auth.router.js";
import ApiRouter from "./Routes/api.router.js";
import { router } from "./Routes/init.router.js";

import dotenv from "dotenv";

//Kalder en environment vars
dotenv.config();

//Laver en json
const app = express();
app.use(
	express.urlencoded({
		extended: true,
	}),

	express.json("application/json"),

	function (req, res, next) {
		// Website you wish to allow to connect

		res.setHeader("Access-Control-Allow-Origin", "*");

		// Request methods you wish to allow

		res.setHeader(
			"Access-Control-Allow-Methods",

			"GET, POST, OPTIONS, PUT, PATCH, DELETE"
		);

		// Request headers you wish to allow

		res.setHeader(
			"Access-Control-Allow-Headers",

			"X-Requested-With,content-type"
		);

		// Set to true if you need the website to include cookies in the requests sent

		// to the API (e.g. in case you use sessions)

		res.setHeader("Access-Control-Allow-Credentials", true);

		// Pass to next layer of middleware

		next();
	}
);

const port = process.env.PORT || 4000;

//Brug router
app.use(router);
app.use(EventRouter);
app.use(UserRouter);
app.use(UserGroupRouter);
app.use(TeamRouter);
app.use(AuthRouter);
app.use(ApiRouter);

//Kalder serveren
app.listen(port, () => {
	console.log(`Server køre på port http://localhost:${port}`);
});
