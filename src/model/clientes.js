const mongoose = require('mongoose')

const clientesSchema = new mongoose.Schema({
    nome: { type: String },
    email: { type: String },
    cpf: { type: Number },
    dataNascimento: { type: Date },
    estadoCivil: { type: String },
    telefone: { type: Number },
    comprou: { type: Boolean }
}, { versionKey: false })

const clientes = mongoose.model('Clientes', clientesSchema)

module.exports = clientes