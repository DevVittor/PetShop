//import {DataTypes} from "sequelize";
import { DataTypes, Sequelize } from 'sequelize';
import conn from "../../database/conn.js";
const sequelize = conn; 
const Produto = sequelize.define("produtos",{
    nome:{
        type:DataTypes.STRING(150),
        allowNull:false
    },
    valor:{
        type:DataTypes.DECIMAL(10, 2),
        allowNull:false
    }
});

Produto.sync()
.then(()=>{
    console.log(`A tabela Produtos foi criada!`);
}).catch((error)=>{
    console.log(`Não foi possível criar a tabela Produtos ${error}`);
})

export default Produto;
