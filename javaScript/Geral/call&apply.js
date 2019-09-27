function getPreco(imposto = 0, moeda = "R$"){
    return (moeda + " "+ (this.preco * (1-this.desconto) * (1 + imposto)))
}

const produto = {
    nome: "Notebook",
    desconto: 0.1,
    preco: 4999,
    getPreco
}

console.log(produto.getPreco())

const carro = {
    nome: "Fiat Uno",
    desconto : 0.15,
    preco: 10000

}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))