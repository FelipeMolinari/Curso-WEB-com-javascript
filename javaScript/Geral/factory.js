fabricaPessoa = function() {
    return{
        nome:"Ana julia",
        endereco:"Rua alberto scharle"
    }

}

console.log(fabricaPessoa())

fabricaProdutos = function(nomeProduto, precoProduto, descontoProduto = 0.5){
    return {
        nome : nomeProduto,
        preco: precoProduto,
        desconto : descontoProduto
    }
}

console.log(fabricaPefabricaProdutosssoa("Arroz", 25))