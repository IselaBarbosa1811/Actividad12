const CitasCtrl = {}
const Citas = require('../models/citas');

CitasCtrl.crear = async (req, res) => {
    const {
        dueño, veterinario, mascota, tipo, servicio, precio, fecha
    } = req.body
    const NuevaCita = new Citas({
        dueño,
        veterinario,
        mascota,
        tipo,
        servicio,
        precio,
        fecha
    })

    const respuesta = await NuevaCita.save()
    res.json({

        mensaje: 'Cita creada',
        respuesta
    })

}
//lista de peticiones


// listar por id 
CitasCtrl.listarId = async (req, res) => {
    const id = req.params.id
    const respuesta = await Citas.findById({ _id: id })
    res.json(respuesta)
}


CitasCtrl.CitasConRoles = async (req, res) => {
    const id = req.params.id
    const respuesta = await Citas.find({ roles: id })

}
// ver 
CitasCtrl.listar = async (req, res) => {
    const respuesta = await Citas.find()
    res.json(respuesta)
}
//eliminar
CitasCtrl.eliminar = async (req, res) => {
    const id = req.params.id
    await Citas.findByIdAndRemove({ _id: id })
    res.json({
        mensaje: 'Cita eliminada'
    })

}
//actualizar
CitasCtrl.actualizar = async (req, res) => {
    const id = req.params.id
    await Citas.findByIdAndUpdate({ _id: id }, req.body)
    res.json({
        mensaje: 'Cita actualizada'
    })

}
// buscar
CitasCtrl.buscarCitas = async (req, res) => {
    const id = req.params.id
    try {
        const respuesta = await Citas.find({ id: id })
        res.json(respuesta)

    } catch (error) {

        return res.json.status(400).json({
            mensaje: 'ocurrio un error ',
            error
        })

    }

}



module.exports = CitasCtrl
