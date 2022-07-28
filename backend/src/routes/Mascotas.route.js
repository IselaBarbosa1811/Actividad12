const {Router} = require('express')
const router = Router()
const MascotasCtrl = require ('../controller/mascotas')

router.post('/crear', MascotasCtrl.crear)
router.get('/ver', MascotasCtrl.listar)
router.get('/listar/:id',MascotasCtrl.listarId)
router.get('/listarporid/:id',MascotasCtrl.buscarMascota)
router.delete('/eliminar/:id',MascotasCtrl.eliminar)
router.put('/actualizar/:id',MascotasCtrl.actualizar)
router.get('/listarMascotasCtrl',MascotasCtrl.MascotaConRoles)

module.exports = router