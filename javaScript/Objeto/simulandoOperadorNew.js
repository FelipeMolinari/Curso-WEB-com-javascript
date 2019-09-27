function Aula(nome, IdAula){
    this.nome = nome
    this.IdAula = IdAula
}

const aula1 = new Aula("EDO", "123abc")
const aula2 = new Aula("PROG", "1a2b3c")

console.log(aula1, aula2)

//Simulando operador New
function novo(instanciaDe, ...params){
    const obj = {}
    obj.__proto__ = instanciaDe.__proto__
    instanciaDe.apply(obj, params)//Primeiro parâmetro é o objeto que será o this dessa função
    return obj
}
const aula3 = novo(Aula, "Fisica", "1a4s5g")
console.log(aula3)