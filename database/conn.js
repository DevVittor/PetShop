import Sequelize from "sequelize";

const conn = new Sequelize("pet","root","mint",{
    host:"localhost",
    dialect:"mysql"
});

export default conn;