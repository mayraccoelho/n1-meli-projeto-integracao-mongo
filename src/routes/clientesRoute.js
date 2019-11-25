const express = require('express')
const router = express.Router()
const controller = require('../controllers/clientesController')

//apidoc -i src/ -o public/apidoc

router.get('/', controller.getCliente)
/**
 * @api {get} /clientes
 * @apiGroup Clientes
 * * 
 * @apiSuccess {Object[]} clientes Lista de Clientes
 * 
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *   [{
 *       "email": "Cindy@gmail.com",
 *       "nome": "Cindy ",
 *       "cpf": 2234567890,
 *       "dataNascimento": "1992-04-03T03:00:00.000Z",
 *       "estadoCivil": "Solteira",
 *       "telefone": 444456789,
 *       "comprou": true
 *   }]
 *
 */

router.get('/compradores', controller.getCompradores)
/**
 * @api {get} /clientes/compradores
 * @apiGroup Clientes
 *
 * @apiSuccess {Object[]} clientes Lista de Clientes compradores
 * 
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *   [ 
 *   {
 *       "nome": "Cindy ",
 *       "email": "Cindy@gmail.com"
 *   },
 *   {
 *       "nome": "Aline Cardoso",
 *       "email": "alineProgramadoraSenior@outlook.com"
 *   }
 *   ]
 */

router.get('/:cpf', controller.getCpf)
/**
 * @api {get} /clientes/{cpf}
 * @apiGroup Clientes
 * @apiParam {Number} cpf CPF do cliente.
 *
 * @apiSuccess {Object[]} clientes Lista de Clientes compradores
 * 
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *   [{
 *       "email": "Cindy@gmail.com",
 *       "nome": "Cindy ",
 *       "cpf": 2234567890,
 *       "dataNascimento": "1992-04-03T03:00:00.000Z",
 *       "estadoCivil": "Solteira",
 *       "telefone": 444456789,
 *       "comprou": true
 *   }]
 */

router.post('/', controller.postCliente)
/**
 * @api {post} /clientes
 * @apiGroup Clientes
 * 
 * @apiParam (Request Body) {Number} cpf CPF do cliente.
 * @apiParam (Request Body) {String} nome Nome do cliente.
 * @apiParam (Request Body) {String} email Email do cliente.
 * @apiParam (Request Body) {String} dataNascimento Data de Nascimento do cliente.
 * @apiParam (Request Body) {String} estadoCivil Estado Civil do cliente.
 * @apiParam (Request Body) {Number} telefone Telefone do cliente.
 * @apiParam (Request Body) {Boolean} comprou Status do cliente.
 * 
 * @apiSuccess {Object[]} clientes Mensgem de sucesso ao incluir um cliente
 * 
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 201 Created
 *   {
 *       status: true,
 *       mensagem: "Cliente incluído com sucesso"
 *   }
 *
 */

router.put('/:cpf', controller.updateCliente)
/**
 * @api {put} /clientes/{cpf}
 * @apiGroup Clientes
 * @apiParam {Number} cpf CPF do cliente.
 * 
 * @apiParam (Request Body) {Number} cpf CPF do cliente.
 * @apiParam (Request Body) {String} nome Nome do cliente.
 * @apiParam (Request Body) {String} email Email do cliente.
 * @apiParam (Request Body) {String} dataNascimento Data de Nascimento do cliente.
 * @apiParam (Request Body) {String} estadoCivil Estado Civil do cliente.
 * @apiParam (Request Body) {Number} telefone Telefone do cliente.
 * @apiParam (Request Body) {Boolean} comprou Status do cliente.
 *
 * @apiSuccess {Object[]} clientes Mensgem de sucesso ao alterar um cliente
 * 
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *   { mensagem: "Atualizado com sucesso!" }
 * 
 */

router.delete('/:cpf', controller.delete)
/**
 * @api {delete} /clientes/{cpf}
 * @apiGroup Clientes
 * @apiParam {Number} cpf CPF do cliente.
 *
 * @apiSuccess {Object[]} clientes Mensgem de sucesso ao excluir um cliente
 * 
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *   { message: 'Cliente removido com sucesso...' }
 * 
 */

module.exports = router