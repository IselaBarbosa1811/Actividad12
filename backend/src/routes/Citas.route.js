const {Router} = require('express')
const router = Router()
const CitasCtrl = require ('../controller/citas')

router.post('/crear', CitasCtrl.crear)
router.get('/ver',CitasCtrl.listar)
router.get('/listar/:id',CitasCtrl.listarId)
router.get('/listarporid/:id',CitasCtrl.buscarCitas)
router.delete('/eliminar/:id',CitasCtrl.eliminar)
router.put('/actualizar/:id',CitasCtrl.actualizar)
router.get('/listarCitasCtrl',CitasCtrl.CitasConRoles)

module.exports = router