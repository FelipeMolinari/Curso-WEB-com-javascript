Array.prototype.filter2 = function(callback){
    const aux = []
    for (let index = 0; index < this.length; index++) {
        if(callback(this[index], index, this))
            aux.push(this[index])  
    }
    return aux
}
const produtos = [
    {nome: "Notebook", preco: 2499, fragil: true},
    {nome: "IPad Pro", preco: 4199, fragil: true},
    {nome: "Copo de Vidro", preco: 12.49, fragil: true},
    {nome: "Copo e Plástico", preco: 18.90, fragil: false}
]

let caros = produto => produto.preco>=2000
let fragil = produto => produto.fragil

const novo = produtos.filter2(caros)

console.log(novo)