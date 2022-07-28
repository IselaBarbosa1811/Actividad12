const {Router} = require('express')
const router = Router()
const ProveedorCtrl = require ('../controller/proveedores')

router.post('/crear', ProveedorCtrl.crear)
router.get('/ver', ProveedorCtrl.listar)
router.get('/listar/:id',ProveedorCtrl.listarId)
router.get('/listarporid/:id',ProveedorCtrl.buscarProveedor)
router.delete('/eliminar/:id',ProveedorCtrl.eliminar)
router.put('/actualizar/:id',ProveedorCtrl.actualizar)
router.get('/listarProveedorCtrl',ProveedorCtrl.ProveedoresConRoles)

module.exports = router