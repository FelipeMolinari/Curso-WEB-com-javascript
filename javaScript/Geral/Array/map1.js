const nums = [1, 5, 9, 10, 50]

//Função map precisa ter um retorno
const results = nums.map(function(e){
    return e * 2
})

const soma10 = valor => valor + 10
const multiplica10 = valor => valor * 10
const transformaReal = valor => `R$${parseFloat(valor).toFixed(2).replace('.',',')}`

const resultReal = nums.map(soma10).map(multiplica10).map(transformaReal)
console.log(resultReal)