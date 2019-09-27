const sequencia = {
    _valor: 1, // "_" representa uma convenção para atributos privados
    get valor(){ return this._valor++},
    set valor(valor){
        if(valor>this._valor){
            this._valor = valor
        }
    },
    imprime (){console.log(this)} 
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 100
console.log(sequencia.valor)
sequencia.imprime()


