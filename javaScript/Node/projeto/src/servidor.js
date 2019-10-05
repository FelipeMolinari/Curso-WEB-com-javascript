const porta = 3003

const express = require('express')
const app = express()

const bodyparse = require('body-parser')
const bancoDeDados = require("./bancoDeDados")

app.use(bodyparse.urlencoded({ extended: true }))



app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos()) //Retorna um JSON
})

app.post('/produtos', (req, res, next) => {
    const novoProduto = bancoDeDados.saveProdutos({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(novoProduto)
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto)
})

app.put('/produtos/:id', (req, res, next) => {
    const novoProduto = bancoDeDados.saveProdutos({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(novoProduto)
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id)) //Retorna um JSON
})



app.listen(porta, () => {
    console.log(`Servidor está eexecutando na porta ${porta}`)
})