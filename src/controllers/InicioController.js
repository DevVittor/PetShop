import Produto from "../models/Produto.js";
class Inicio{

    async index(req,res){

        const produtos = await Produto.findAll({
            attributes:["nome","valor"]
        });
        //res.json({lista:produtos});
        res.render("Inicio",{Lista:produtos});
    }

    async store(req,res){

        //
    
    }

}

export default Inicio;