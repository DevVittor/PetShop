import mysql from 'mysql2';

/*const conn = new Sequelize("pet","root","mint",{
    host:"localhost",
    dialect:"mysql"
});*/

const conn = mysql.createConnection({
  host: 'seu_host_mysql',
  user: 'seu_usuario_mysql',
  password: 'sua_senha_mysql',
  database: 'seu_banco_de_dados_mysql'
});

export default conn;
