const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()

//string de conexao
mongoose.connect("mongodb://localhost:27017/clientes", {useNewUrlParser: true})

let db = mongoose.connection
db.on("error", console.log.bind(console, "connection error:"))
db.once("open", function(){
  console.log("conexão feita com sucesso")
})

//rotas
const index = require('../src/routes/index')
const clientes = require('../src/routes/clientesRoute')

app.use(function (req, res, next) {
    res.header('Acess-Control-Allow-Origin', '*')
    res.header(
        'Acess-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    )
    next()
})

app.use(bodyParser.json())

app.use('/', index)
app.use('/clientes', clientes)

module.exports = app