const pessoa = {
    nome: "Felipe",
    endereco: "Rua machado nunes 58"
}

pessoa.nome = "Luis"

// irá gerar erro pois estou tentando alterar o endereço de memória de um objeto constante.
//pessoa = {nome: "Carlos"}

Object.freeze(pessoa) //Não consigo mais alterar os atributos de pessoa

pessoa.endereco = "Disney"
console.log(pessoa.endereco)