import express from "express";
const router = express.Router()

import Item from "../controllers/ProdutoController.js";
const produtoController = new Item();

router.post("/",produtoController.store);

export default router;