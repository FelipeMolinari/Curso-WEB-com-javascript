//URL contendo um arquivo json de funcionários
const url = "http://files.cod3r.com.br/curso-js/funcionarios.json"

//Faz o import do axios
const axios = require('axios')

let filterChineses = funcionario => funcionario.pais === 'China'
let filterMulheres = funcionario => funcionario.genero === 'F'

const menorSalario = (funcAtual, proxFunc) => {
    return funcAtual.salario>proxFunc.salario ? proxFunc : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    // console.log(funcionarios)
    const mulheresChinesas = funcionarios.filter(filterChineses).filter(filterMulheres).reduce(menorSalario)
    console.log(mulheresChinesas)

})

