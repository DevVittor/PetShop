import express from "express";
const router = express.Router();

import Inicio from "../routes/InicioRoute.js";
import Loja from "../routes/LojaRoute.js";
import Sobre from "../routes/SobreRoute.js";
import Contato from "../routes/ContatoRoute.js";
import Carrinho from "../routes/CarrinhoRoute.js";
import Produto from "../routes/ProdutoRoute.js";
import Cadastrar from "../routes/CadastrarRoute.js";
import Acessar from "../routes/AcessarRoute.js";

router.use("/",Inicio);
router.use("/loja",Loja);
router.use("/sobre",Sobre);
router.use("/contato",Contato);
router.use("/carrinho",Carrinho);
router.use("/produto",Produto);
router.use("/cadastrar",Cadastrar);
router.use("/acessar",Acessar);

export default router;