Object.prototype.attr0 = 220 //Não fazer isso pelo amor de Deus kkkkkkkkkkkk
const avo = { attr1: "A"}
const pai = {__proto__:avo, attr2: "B", attr3: 0}
const filho = {__proto__: pai, attr3: 100}

console.log(filho.attr0,filho.attr1, filho.attr2,filho.attr3)

const carro = {
    velAtual:0,
    velMax:200,
    acelerarMais(delta){
        if(this.velAtual + delta > this.velMax)
            this.velAtual = this.velMax
        else
            this.velAtual += delta
    },
    getStatusVelocidade(){
        return `Velocidade atual: ${this.velAtual}Km/h de ${this.velMax}Km/h`
    }

}

const ferrari = {
    velMax: 334,
    modelo: "F40" // shadowing
}
const volvo = {
    modelo: "V40",
    velMax:225,
    __proto__: carro, // Forma de fazer herança => volvo é filho e carro

    getStatusVelocidade(){
        return `${this.modelo}: ${super.getStatusVelocidade()}`
    }
}

Object.setPrototypeOf(ferrari, carro) // Forma de fazer herança => ferrari é filho e carro
ferrari.acelerarMais(100)
console.log(ferrari.getStatusVelocidade())

volvo.acelerarMais(100)
console.log(volvo.getStatusVelocidade())

