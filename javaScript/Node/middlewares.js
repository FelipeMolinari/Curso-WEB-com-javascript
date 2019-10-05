//Design de Projeto Middleware

const passo1 = (ctx, next) => {
    ctx.value1 = 'mid1'
    next()
}

const passo2 = (ctx, next) => {
    ctx.value2 = 'mid2'
    next()
}

const passo3 = ctx => ctx.value3 = 'mid3'

const exec = (ctx, ...middleware) => {
    const execPassos = indice => {
        middleware && indice<middleware.length &&
            middleware[indice](ctx, () => execPassos(indice+1))
    }
    execPassos(0)
}

const context = {}
exec(context, passo2)
console.log(context)