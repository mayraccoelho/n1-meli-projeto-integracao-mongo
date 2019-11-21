const express = require('express')
const router = express.Router()
const controller = require('../controllers/clientesController')

router.get('/', controller.getCliente)
router.get('/compradores', controller.getCompradores)
router.get('/:cpf', controller.getCpf)
router.post('/', controller.postCliente)
router.put('/:cpf', controller.updateCliente)

module.exports = router