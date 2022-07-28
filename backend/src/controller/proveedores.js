const ProveedorCtrl ={}
const Proveedor = require ('../models/proveedores')

ProveedorCtrl.crear = async(req,res)=>{
    const {
       nombre,direccion,pais,telefono,celular, correo   
    } = req.body
    const NuevoProveedor = new Proveedor({
        nombre,
        direccion,
        pais,
        telefono,
        celular,
        correo   
    })

     const respuesta = await NuevoProveedor.save()
     res.json({

        mensaje : 'Proveedor Creado',
        respuesta
     })

}
//lista de peticiones

// listar por id 
ProveedorCtrl.listarId = async(req,res)=>{
    const id = req.params.id
    const respuesta = await Proveedor.findById({_id:id})
    res.json(respuesta)
}


ProveedorCtrl.ProveedoresConRoles = async(req,res)=>{
    const id = req.params.id
    const respuesta = await Proveedor.find({roles:id})

}
// ver 
ProveedorCtrl.listar = async(req,res)=>{
    const respuesta = await Proveedor.find()
    res.json(respuesta)
}
//eliminar
ProveedorCtrl.eliminar = async(req,res)=>{
    const id = req.params.id
    await Proveedor.findByIdAndRemove({_id:id})
    res.json({
        mensaje:'Proveedor eliminado'
    })

}
//actualizar
ProveedorCtrl.actualizar = async(req,res)=>{
    const id = req.params.id
    await Proveedor.findByIdAndUpdate({_id:id},req.body  )
    res.json({
        mensaje:'Proveedor actualizado'
    })

}
// buscar
ProveedorCtrl.buscarProveedor = async(req,res)=>{
    const id = req.params.id
    try{
        const respuesta = await Proveedor.find({id:id})
        res.json(respuesta)

    }catch (error){
        return res.json.status(400).json({
            mensaje:'ocurrio un error ',
            error
        })

    }

}



module.exports=ProveedorCtrl
