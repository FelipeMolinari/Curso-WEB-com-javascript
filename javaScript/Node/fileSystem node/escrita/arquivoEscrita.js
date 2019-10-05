const fs = require("fs")

const pessoa = {
    nome: "Felipe",
    idade: "23",
    apresentacao(){
        return `Oi meu nome é ${this.nome}`
    }
}

fs.writeFile(__dirname + "/arquivoGerado.json", JSON.stringify(pessoa), err =>{
    console.log(err || "Arquivo Gerado")
})