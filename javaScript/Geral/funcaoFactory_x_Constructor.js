/*class Pessoa{
    constructor(nome){
        this.nome = nome
    }
    falar(){
        console.log("Meu nome é "+ this.nome)
    }
}

const pessoa = new Pessoa("Felipe")
pessoa.falar()

const criarPessoa = nome =>{
    return {
        falar: () => console.log("Meu nome é "+ nome)
    }
}
const p1 = criarPessoa("Felipe")
p1.falar()
*/
// UTILIZANDO FUNÇÃO CONSTRUTORA

const construtora = function (nome){
    
    this.nome = nome;

    this.falar = function(){
        console.log("Meu nome é "+ nome)
    }

}


const p2 = new construtora("Luis")
p2.falar()
