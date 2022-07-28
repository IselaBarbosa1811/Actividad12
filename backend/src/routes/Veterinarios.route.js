const {Router} = require('express')
const router = Router()
const VeterinariosCtrl = require ('../controller/veterinarios')

router.post('/crear', VeterinariosCtrl.crear)
router.get('/ver',VeterinariosCtrl.listar)
router.get('/listar/:id',VeterinariosCtrl.listarId)
router.get('/listarporid/:id',VeterinariosCtrl.buscarVeterinarios)
router.delete('/eliminar/:id',VeterinariosCtrl.eliminar)
router.put('/actualizar/:id',VeterinariosCtrl.actualizar)
router.get('/listarVeterinariosCtrl',VeterinariosCtrl.VeterinariosConRoles)

module.exports = router