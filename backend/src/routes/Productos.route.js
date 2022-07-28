const {Router} = require('express')
const router = Router()
const ProductosCtrl = require ('../controller/productos')

router.post('/crear', ProductosCtrl.crear)
router.get('/ver', ProductosCtrl.listar)
router.get('/listar/:id',ProductosCtrl.listarId)
router.get('/listarporid/:id',ProductosCtrl.buscarProducto)
router.delete('/eliminar/:id',ProductosCtrl.eliminar)
router.put('/actualizar/:id',ProductosCtrl.actualizar)
router.get('/listarProductosCtrl',ProductosCtrl.ProductosConRoles)

module.exports = router