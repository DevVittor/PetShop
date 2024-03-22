import {DataTypes} from "sequelize";
import conn from "../../database/conn.js";

const Usuario = conn.define("usuarios",{
    nome:{
        type:DataTypes.STRING(100),
        allowNull:false
    },
    email:{
        type: DataTypes.STRING,
        allowNull:false
    },
    senha:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

Usuario.sync()
.then(()=>{
    console.log(`A tabela usuarios foi criada!`);
}).catch((error)=>{
    console.log(`A tabela usuarios não pode ser criada. ${error}`);
})

export default Usuario;