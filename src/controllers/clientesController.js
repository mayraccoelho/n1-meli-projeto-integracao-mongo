const Clientes = require('../model/clientes')

//GET
exports.getCliente = (req, res) => {
    Clientes.find(function (err, clientes) {
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
        res.status(200).send(clientes)
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