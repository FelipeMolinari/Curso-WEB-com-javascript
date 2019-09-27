function MeuObjeto(){}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__)

MeuObjeto.prototype.nome = "Antônio"
MeuObjeto.prototype.falar = function(){
    console.log(`Bom dia! Meu nome é ${this.nome}`)
}

obj1.falar()

obj2.nome = "Rafael"
obj2.falar()

//Resumindo A DOIDERA

console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log((Function.prototype.__proto__ === Object.prototype))
console.log(Object.prototype.__proto__ === null)