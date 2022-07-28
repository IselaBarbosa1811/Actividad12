const ClientesCtrl = {}
const Cliente = require('../models/clientes');

ClientesCtrl.crear = async (req, res) => {
    const {
        nombre,apellidos,celular,usuario,direccion,correo
    } = req.body
    const NuevoCliente = new Cliente({
        nombre,
        apellidos,
        celular,
        usuario,
        direccion,
        correo
    })

    const respuesta = await NuevoCliente.save()
    res.json({

        mensaje: 'Cliente Creado',
        respuesta
    })

}
//lista de peticiones


// listar por id 
ClientesCtrl.listarId = async (req, res) => {
    const id = req.params.id
    const respuesta = await Cliente.findById({ _id: id })
    res.json(respuesta)
}


ClientesCtrl.ClientesConRoles = async (req, res) => {
    const id = req.params.id
    const respuesta = await Cliente.find({ roles: id })

}
// ver 
ClientesCtrl.listar = async (req, res) => {
    const respuesta = await Cliente.find()
    res.json(respuesta)
}
//eliminar
ClientesCtrl.eliminar = async (req, res) => {
    const id = req.params.id
    await Cliente.findByIdAndRemove({ _id: id })
    res.json({
        mensaje: 'Cliente eliminado'
    })

}
//actualizar
ClientesCtrl.actualizar = async (req, res) => {
    const id = req.params.id
    await Cliente.findByIdAndUpdate({ _id: id }, req.body)
    res.json({
        mensaje: 'Cliente actualizado'
    })

}
// buscar
ClientesCtrl.buscarClientes= async (req, res) => {
    const id = req.params.id
    try {
        const respuesta = await  Cliente.find({ id: id })
        res.json(respuesta)

    } catch (error) {

        return res.json.status(400).json({
            mensaje: 'ocurrio un error ',
            error
        })

    }

}



module.exports = ClientesCtrl
