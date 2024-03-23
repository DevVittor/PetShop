import express from "express";
const router = express.Router();

import Inicio from "../controllers/InicioController.js";
const inicioController = new Inicio();

router.get("/",inicioController.index);
router.post("/",inicioController.store);

export default router;