const express = require('express')
const router = express.Router()
const controller = require('../controllers/clientesController')

router.get('/', controller.getCliente)
router.get('/compradores', controller.getCompradores)
router.get('/:cpf', controller.getCpf)
router.post('/', controller.postCliente)

module.exports = router