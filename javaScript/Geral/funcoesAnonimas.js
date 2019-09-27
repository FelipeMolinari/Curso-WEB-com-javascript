const soma = (x,y) => {
    return x+y
}
console.log(soma(2,4))

const executaOperacao = function (x,y, operacao = soma) {
    console.log(operacao(x,y))
}


executaOperacao(4,6)
executaOperacao(4,6, (x, y) => x-y)

const pessoa = {
    falar: function () {
     console.log("Ola")
    }
}

pessoa.falar()