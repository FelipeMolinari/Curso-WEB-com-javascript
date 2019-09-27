//IIFE => Função Imediatamente auto invocada
(function(){
    let variavel = "dentro da função"
    console.log("Entrou na função")
    console.log(variavel)

})()

//console.log(variavel) => não reconhece

let variavel = "fora da função"
console.log(variavel)

function seila() {
    let variavel = "seila"
    console.log(variavel)
}

console.log(variavel)
