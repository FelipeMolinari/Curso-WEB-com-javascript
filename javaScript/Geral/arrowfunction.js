let comparaComthis = function (param){
    console.log(this === param)
}


const obj = {}
comparaComthis = comparaComthis.bind(obj)
comparaComthis(obj)

let comparaComThisArrow = param => console.log(this === param)

comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
