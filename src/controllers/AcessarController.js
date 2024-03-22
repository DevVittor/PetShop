import bcrypt from "bcrypt";
import Usuario from "../models/Usuario.js";
class Acessar{

    async index(req,res){
        res.render("Acessar");
    }

    async store(req,res){
        const {email,senha} = req.body;

        try {
            
            if(!email) return res.status(404).json({msg:`É necessário ter um email para prosseguir!`});
            if(!senha) return res.status(404).json({msg:`É necessário ter um senha para prosseguir!`});

            const usuarioExiste = await Usuario.findOne({
                where:{
                    email:email
                }
            });

            if(!usuarioExiste) return res.status(404).json({msg:`Esse email ${email} não foi cadastrado no sistema!`});

            const checarSenha = await bcrypt.compareSync(senha,usuarioExiste.senha);
            if(!checarSenha) return res.status(301).json({msg:`Essa senha não é compatível!`});

            return res.status(200).json({msg:`O login foi feito com sucesso!`});

        } catch (error) {
            return res.status(500).json({msg:`Não foi possível capturar nenhum dados necessário. ${error}`})
        }

    }

}

export default Acessar;