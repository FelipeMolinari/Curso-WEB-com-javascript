const pai = {nome: "Pedro", corCabelo: "preto"}

const filha1 = Object.create(pai)
filha1.nome = "Carla"

console.log(filha1.nome, filha1.corCabelo)
const filha2 = Object.create(pai, {
    nome: {value: "Bia", enumerable: true, writable: true}})
console.log(filha2.nome)
filha2.nome = "Gabriel"
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

for(let key in filha2){
    filha2.hasOwnProperty(key) ?
    console.log(key):console.log("Por herança: " + key)
}