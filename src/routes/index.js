import express from "express";
const router = express.Router();

import Inicio from "../routes/InicioRoute.js";
import Loja from "../routes/LojaRoute.js";
import Sobre from "../routes/SobreRoute.js";
import Cadastrar from "../routes/CadastrarRoute.js";
import Acessar from "../routes/AcessarRoute.js";

router.use("/",Inicio);
router.use("/loja",Loja);
router.use("/sobre",Sobre);
router.use("/cadastrar",Cadastrar);
router.use("/acessar",Acessar);

export default router;