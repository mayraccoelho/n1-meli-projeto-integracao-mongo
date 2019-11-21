const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()

//String de conexão com o MongoDb
//Conectar localhost "mongodb://localhost:27017/clientes"
//Conectar Nuvem Prof Marília "mongodb://admin:reprograma1@ds225902.mlab.com:25902/reprogramameli"
mongoose.connect("mongodb://localhost:27017/clientes", {useNewUrlParser: true})

//Representação da conexão com o Banco de Dados
let db = mongoose.connection

//Caso ocorra algum erro após a conexão, será logado o erro
db.on("error", console.log.bind(console, "connection error:"))

//Conexão realizada com sucesso, será exibida essa mensagem
db.once("open", function(){
  console.log("conexão feita com sucesso")
})

//Rotas
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

app.use('/clientes', clientes)

module.exports = app