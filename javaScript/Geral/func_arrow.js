let dobro = function (valor){
    return valor *2
}
console.log(dobro(Math.PI))

dobro = (valor) => {
    return valor *2
}

console.log(dobro(3))

dobro = valor => valor*2

let ola = function (){
    return "Ola"
}

ola = () => "Olá"
console.log(ola())