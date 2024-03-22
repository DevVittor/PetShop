import express from "express";
const router = express.Router();

import Loja from "../controllers/LojaController.js"
const lojaController = new Loja();

router.get("/",lojaController.index);

export default router;