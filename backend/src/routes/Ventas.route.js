const {Router} = require('express')
const router = Router()
const VentasCtrl = require ('../controller/ventas')

router.post('/crear', VentasCtrl.crear)
router.get('/ver',VentasCtrl.listar)
router.get('/listar/:id',VentasCtrl.listarId)
router.get('/listarporid/:id',VentasCtrl.buscarVentas)
router.delete('/eliminar/:id',VentasCtrl.eliminar)
router.put('/actualizar/:id',VentasCtrl.actualizar)
router.get('/listarVentasCtrl',VentasCtrl.VentasConRoles)

module.exports = router