const Clientes = require('../model/clientes')
const Joi = require('Joi')


//GET
exports.getCliente = (req, res) => {
    const filter = req.query
    Clientes.find(filter, function (err, clientes) {
        if (err) res.status(500).send(err)
        res.status(200).send(clientes)
    })
}

exports.getCompradores = (req, res) => {
    Clientes.find({ comprou: true }, function (err, clientes) {
        if (err) res.status(500).send(err)
        const clientesRetorno = clientes.map(cliente => {
            return {
                nome: cliente.nome,
                email: cliente.email
            }
        })
        res.status(200).send(clientesRetorno)
    })
}

exports.getCpf = (req, res) => {
    const cpf = req.params.cpf
    Clientes.find({ cpf }, function (err, cliente) {
        if (err) res.status(500).send(err)
        res.status(200).send(cliente)
    })
}

//POST
exports.postCliente = (req, res) => {
    let cliente = new Clientes(req.body)
    cliente.save(function (err) {
        if (err) res.status(500).send(err)
        res.status(201).send({
            status: true,
            mensagem: 'Cliente incluido com sucesso'
        })
    })
}

//PUT
exports.updateCliente = (req, res) => {

    if (!validaFormulario(req.body)) return res.status(400).send({ mensagem: "campos inválidos" });

    Clientes.updateOne(
        { cpf: req.params.cpf },
        { $set: req.body },
        { upsert: true },
        function (err) {
            if (err) return res.status(500).send(err);
            res.status(200).send({
                status: true,
                mensagem: 'Atualizado com sucesso'
            })
        }
    )
}

//DELETE

exports.delete = (req, res) => {
    const cpf = req.params.cpf

    Clientes.findOne({ cpf }, function (err, cliente) {
        if (err) return res.status(500).send(err);

        if (!cliente) {
            return res.status(200).send({ messagem: 'Não localizamos o cliente' })
        }

        cliente.remove(function (err) {
            if (!err) {
                res.status(200).send({ message: 'Cliente removido com sucesso' })
            }
        })
    })
}

//VALIDA FORMULÁRIO - JOI 

const validaFormulario = (campos) => {

    const schema = {
        nome: Joi.string(),
        email: Joi.string(),
        cpf: Joi.number(),
        dataNascimento: Joi.date(),
        estadoCivil: Joi.string(),
        telefone: Joi.number(),
        comprou: Joi.boolean()
    }

    const validation = Joi.validate(campos, schema);

    if (validation.error) {
        return false;
    }

    return true;
}
