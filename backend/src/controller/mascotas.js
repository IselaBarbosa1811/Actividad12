const MascotasCtrl = {}
const Mascota = require('../models/mascotas');

MascotasCtrl.crear = async (req, res) => {
    const {
        nombre, tipo, raza, dueño, fecha
    } = req.body
    const NuevaMascota = new Mascota({
        nombre,
        tipo,
        raza,
        dueño,
        fecha
    })

    const respuesta = await NuevaMascota.save()
    res.json({

        mensaje: 'Mascota Creada',
        respuesta
    })

}
//lista de peticiones


// listar por id 
MascotasCtrl.listarId = async (req, res) => {
    const id = req.params.id
    const respuesta = await Mascota.findById({ _id: id })
    res.json(respuesta)
}


MascotasCtrl.MascotaConRoles = async (req, res) => {
    const id = req.params.id
    const respuesta = await Mascota.find({ roles: id })

}
// ver 
MascotasCtrl.listar = async (req, res) => {
    const respuesta = await Mascota.find()
    res.json(respuesta)
}
//eliminar
MascotasCtrl.eliminar = async (req, res) => {
    const id = req.params.id
    await Mascota.findByIdAndRemove({ _id: id })
    res.json({
        mensaje: 'Mascota eliminada'
    })

}
//actualizar
MascotasCtrl.actualizar = async (req, res) => {
    const id = req.params.id
    await Mascota.findByIdAndUpdate({ _id: id }, req.body)
    res.json({
        mensaje: 'Masocta actualizada'
    })

}
// buscar
MascotasCtrl.buscarMascota = async (req, res) => {
    const id = req.params.id
    try {
        const respuesta = await Mascota.find({ id: id })
        res.json(respuesta)

    } catch (error) {

        return res.json.status(400).json({
            mensaje: 'ocurrio un error ',
            error
        })

    }

}



module.exports = MascotasCtrl
