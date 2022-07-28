const {Router} = require('express')
const router = Router()
const ClientesCtrl = require ('../controller/clientes')

router.post('/crear', ClientesCtrl.crear)
router.get('/ver',ClientesCtrl.listar)
router.get('/listar/:id',ClientesCtrl.listarId)
router.get('/listarporid/:id',ClientesCtrl.buscarClientes)
router.delete('/eliminar/:id',ClientesCtrl.eliminar)
router.put('/actualizar/:id',ClientesCtrl.actualizar)
router.get('/listarClientesCtrl',ClientesCtrl.ClientesConRoles)

module.exports = router