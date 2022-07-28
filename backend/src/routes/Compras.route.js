const {Router} = require('express')
const router = Router()
const ComprasCtrl = require ('../controller/compras')

router.post('/crear', ComprasCtrl.crear)
router.get('/ver', ComprasCtrl.listar)
router.get('/listar/:id',ComprasCtrl.listarId)
router.get('/listarporid/:id',ComprasCtrl.buscarCompras)
router.delete('/eliminar/:id',ComprasCtrl.eliminar)
router.put('/actualizar/:id',ComprasCtrl.actualizar)
router.get('/listarComprasCtrl',ComprasCtrl.ComprasConRoles)

module.exports = router