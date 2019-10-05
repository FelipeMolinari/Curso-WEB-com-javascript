const contadorA = require("./instanciaNova")()
const contadorB = require("./instanciaNova")()

const contadorC = require("./instanciaUnica")
const contadorD = require("./instanciaUnica")


contadorA.inc()
contadorA.inc()

console.log(contadorB.valor)

contadorC.inc()
contadorC.inc()

console.log(contadorD.valor)