import Produto from "../models/Produto.js";
class Item{

    async index(req,res){
        res.render("Produto");
    }

    async store(req,res){

        const {nome,valor} = req.body;

        try {
            
            if(!nome) throw new Error(`Necessário ter um nome para prosseguir`);
            if(!valor) throw new Error(`Necessário ter um valor para prosseguir`);
            //if(!nome) return res.status(404).json({msg:`Necessário ter um nome para prosseguir`});
            //if(!valor) return res.status(404).json({msg:`Necessário ter um valor para prosseguir`});

            const criarProduto = await Produto.create({
                nome,
                valor
            });
            await criarProduto.save()
            return res.status(201).json({msg:`Produto criado com sucesso!`});
        } catch (error) {
            return res.status(500).json({msg:`Não foi possível pegar os dados para prosseguir! ${error}`});
        }

    }

}

export default Item;