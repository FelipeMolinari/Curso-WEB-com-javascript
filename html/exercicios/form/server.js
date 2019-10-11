const express = require('express')
const app = express()

const parse = require('body-parser')

app.use(parse.urlencoded({extended: true}))


app.post('/cadastros/:id', (req, res)=>{

    console.log(req.params.id)
    console.log(req.body)
    res.send('<h1>Parabéns Usuário alterado</h1>')


})  
app.post('/cadastros', (req, res)=>{
    res.send('<h1>Parabéns, usuário inserido</h1>')
    console.log(req.body)
})


app.listen(3003)