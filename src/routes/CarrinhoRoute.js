import express from "express";
const router = express.Router();

import Carrinho from "../controllers/CarrinhoController.js";
const carrinhoController = new Carrinho();

router.get("/",carrinhoController.index);
router.post("/",carrinhoController.store);

export default router;