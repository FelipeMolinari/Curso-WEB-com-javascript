const acessandoModuloA = require("../../moduleA")
console.log(acessandoModuloA)

const lodashModule = require("lodash")

// imprime o arquivo index.js do modulo lodash. Se o modulo não tiver esse index, não será possível encontrar o módulo
console.log(lodashModule)


const http = require("http")
http.createServer((req, res)=> {
    res.write("Bom dia")
    res.end()
}).listen(8080)
//Conectando em http://localhost:8080 no brownser a mensagem aparecerá na tela