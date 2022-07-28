const {Router} = require('express');
const router = Router();
const UsuariosCtrl = require ('../controller/usuarios')

router.post('/login',UsuariosCtrl.login)
router.post('/crear',UsuariosCtrl.crearRoles)

module.exports = router;