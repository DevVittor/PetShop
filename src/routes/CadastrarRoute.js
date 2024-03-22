import express from "express";
const router = express.Router();

import Cadastrar from "../controllers/CadastrarController.js";
const cadastrarController = new Cadastrar();

router.get("/",cadastrarController.index);
router.post("/",cadastrarController.store);

export default router;