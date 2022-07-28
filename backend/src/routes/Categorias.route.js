const {Router} = require('express');
const router = Router();
const CategoriasCtrl = require ('../controller/categorias');

router.post('/crear', CategoriasCtrl.crear)
router.get('/ver',CategoriasCtrl.listar)
router.get('/listar/:id',CategoriasCtrl.listarId)
router.get('/listarporid/:id',CategoriasCtrl.buscarCategoria)
router.delete('/eliminar/:id',CategoriasCtrl.eliminar)
router.put('/actualizar/:id',CategoriasCtrl.actualizar)
router.get('/listarCategoriasCtrl',CategoriasCtrl.CategoriaConRoles)

module.exports = router