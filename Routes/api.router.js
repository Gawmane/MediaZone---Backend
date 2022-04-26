import express from "express";
import ApiController from "../Controllers/api.controller.js";

const router = express.Router();
const api = new ApiController();

//Route til login
router.get("/api", (req, res) => {
	api.list(req, res);
});

export default router;
