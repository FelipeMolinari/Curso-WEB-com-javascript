const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Picole", "preco": 3.80}',
    '{"nome": "Arroz", "preco": 5.40}',
    '{"nome": "Frango", "preco": 10.80}',
]

//Retornar apenas o preço dos objetos

const jsonParaObjeto = elemento => JSON.parse(elemento)
const precoObj = elemento => elemento.preco

const results1 = carrinho.map(jsonParaObjeto).map(precoObj)
console.log(results1)
    