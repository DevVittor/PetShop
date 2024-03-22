import bcrypt from "bcrypt";
import Usuario from "../models/Usuario.js";
class Cadastrar{

    async index(req,res){

        res.render("Cadastrar");

    }

    async store(req,res){

        const {nome,email,senha} = req.body;

        try {
            
            if(!nome) return res.status(404).json({msg:`É necessário ter um nome para prosseguir com o cadastro!`});
            if(!email) return res.status(404).json({msg:`É necessário ter um email para prosseguir com o cadastro!`});
            if(!senha) return res.status(404).json({msg:`É necessário ter um senha para prosseguir com o cadastro!`});

            const usuarioCadastrado = await Usuario.findOne({
                where:{
                    email:email
                }
            });

            if(usuarioCadastrado) return res.status(404).json({msg:`Esse usuário já foi cadastrado`});

            const salt = await bcrypt.genSaltSync(16);
            const hash = await bcrypt.hashSync(senha,salt);

            const criarConta = await Usuario.create({
                nome,
                email,
                senha:hash
            });

            await criarConta.save()
            .then(()=>{
                return res.status(201).json({msg:`Conta criada!`});
            }).catch((error)=>{
                return res.status(404).json({msg:`Não foi possível criar a conta por causa do error. ${error}`});
            })

        } catch (error) {
            return res.status(500).json({msg:`Não foi possível achar nada para prosseguir! ${error}`});
        }

    }

}

export default Cadastrar;