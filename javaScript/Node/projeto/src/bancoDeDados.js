const seq = {
    _id: 1,
    get getid(){ return this._id++}
}

const produtos = {}

function saveProdutos(produto){
    if(!produto.id){
        produto.id = seq.getid
    }
    produtos[produto.id] = produto
    return produto
}

function getProduto(id){
    return produtos[id] || {}
}

function excluirProduto(id){
    const produto = produtos[id]
    delete produtos[id]
    return produto
}
function getProdutos(){
    return Object.values(produtos)
}

module.exports = {saveProdutos, getProduto, getProdutos, excluirProduto}