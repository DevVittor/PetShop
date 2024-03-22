import express from "express";
const router = express.Router();

import Acessar from "../controllers/AcessarController.js";
const acessarController = new Acessar();

router.get("/",acessarController.index);
router.post("/",acessarController.store);

export default router;