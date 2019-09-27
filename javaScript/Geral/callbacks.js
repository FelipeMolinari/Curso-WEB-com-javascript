/*SEGUNDO => Callbacks*/

/*const fabricantes = ["Mercedes", "BMW", "Fiat"]

function imprimirFabricantes (nomeFabricante, index) {
    console.log(`${index+1}. ${nomeFabricante}`)
}

fabricantes.forEach(imprimirFabricantes)

fabricantes.forEach(fabricante => console.log(fabricante))
*/
/*SEGUNDO => Callbacks*/

const notas = [0.5, 7.8, 9.8, 4.5, 2.1, 4.5, 9.8]

notasAbaixomedia = notas.filter(function (nota){
    return nota<7
})

console.log(notasAbaixomedia)

const notasMenorQue7 = nota => nota<7


const notasBaixas = notas.filter(notasMenorQue7)

console.log(notasBaixas)