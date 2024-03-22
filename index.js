import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import compression from "compression";
//import session from "express-session";
import http from "node:http";
const createServer = http.createServer(app);
import router from "./src/routes/index.js";

//import Usuario from "./models/Usuario.js";
import conn from "./database/conn.js";
import path from "node:path";
import fs from "node:fs";

const viewsDirectory = path.join(fs.realpathSync(process.cwd()), 'src', 'views');
app.set('views', viewsDirectory);
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(compression());
app.disable("x-powered-by");

const port = process.env.PORT || 8080;

app.use((req,_,next)=>{
    console.log("Rota:",req.path,"Método:",req.method);
    next();
});
app.use("/",router);

conn.authenticate()
.then(()=>{
    console.log(`O banco de dados foi sincronizado com sucesso!`);
    createServer.listen(port,()=>{
        console.log(`Rodando na porta ${port}...`);
    })
}).catch((error)=>{
    console.log(`Não foi possível sincronizar o banco de dados. ${error}`);
})