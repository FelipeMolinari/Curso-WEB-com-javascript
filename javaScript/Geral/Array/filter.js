const produtos = [
    {nome: "Notebook", preco: 2499, fragil: true},
    {nome: "IPad Pro", preco: 4199, fragil: true},
    {nome: "Copo de Vidro", preco: 12.49, fragil: true},
    {nome: "Copo e Plástico", preco: 18.90, fragil: false}
]

let caros = produto => produto.preco>=2000
let fragil = produto => produto.fragil
const filtradoFragileCaros = produtos.filter(caros).filter(fragil)
console.log(filtradoFragileCaros)