const produto = new Object
produto.preco = 202
produto["marca produto"] = "Genérico"

const carro = {
    valor: 1000,
    modelo: "A4",
    proprietario: {
        nome: "Felipe",
        idade: 56,
        endereco: {
            rua: "Machado Nunes",
            numero: 58,
            bairro: "Salgado Filho"
        }
    },
    calculaValorSeguro: function (){
        // ....
    }
}

carro.proprietario.endereco.rua = "SEILA"
carro["proprietario"]["endereco"].rua

delete carro.calculaValorSeguro