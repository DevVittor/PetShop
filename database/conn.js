import mysql from 'mysql2';

/*const conn = new Sequelize("pet","root","mint",{
    host:"localhost",
    dialect:"mysql"
});*/

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'mint',
  database: 'pet'
});

conn.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados MySQL:', err);
    return;
  }
  console.log('Conexão bem sucedida ao banco de dados MySQL!');
});

export default conn;
