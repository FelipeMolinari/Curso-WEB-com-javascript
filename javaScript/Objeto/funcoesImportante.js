const pessoa = {
    nome: "Rebeca",
    idade: 18,
    peso: 45
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}:${valor}`)   
})

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}:${e[1]}`)
})

Object.defineProperty(pessoa, "dataDeNascimento", {
    enumerable:true,
    writable:false, //Como se eu desse um freeze na propriedade
    value: "24/05/1996"
})

const dest = {a:1, b:2}
const o1 = {a:2, c:3, d:4}
const o2 = {a:100, z:3, f:4}

Object.assign(dest,o1,o2)
console.log(Object.values(dest))