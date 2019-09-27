const func = function(a,b){return a * b}

const array = [function(a,b){return a + b}, func]

function fun(fun){
    fun()
}

function funct (){ console.log("Entrou aqui")}
fun(funct)