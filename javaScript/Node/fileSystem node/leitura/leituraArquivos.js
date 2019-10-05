//Importa a dependencia File System
const fs = require("fs")

const caminho = __dirname + "/arquivo.json"

//Sincrono

const conteudo = fs.readFileSync(caminho, "utf-8")
// console.log(conteudo)

fs.readFile(caminho, "utf-8" ,(error, conteudo)=>{
    const conteudoObj = JSON.parse(conteudo)
    console.log(`${conteudoObj.db.host}:${conteudoObj.db.user}`)
});


const config = require(caminho)
console.log(config.db.host +":"+ config.db.user)