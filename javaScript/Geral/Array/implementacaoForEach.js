const vetor = [0, 1, 2, 3]
function foreachfunc( funcaoPoritem){
    const vetorLen = this.length
    for (let index = 0; index < vetorLen; index++) {
        funcaoPoritem(this[index], index, this)
    }
}
Array.prototype.forEach2 = foreachfunc


vetor.forEach2(function (elementoVetor){
    console.log(elementoVetor)
})