const express = require('express')
const app = express()

const parse = require('body-parser')

app.use(parse.urlencoded({extended: true}))

app.post('/cadastros', (req, res)=>{
    res.send('<h1>Parabéns</h1>')
    console.log(req.body)
})

app.listen(3003)