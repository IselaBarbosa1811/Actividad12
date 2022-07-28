const VeterinariosCtrl ={}
const Veterinarios = require ('../models/veterinarios');

VeterinariosCtrl.crear = async(req,res)=>{
    const {
        nombre,apellidos,correo,direccion,celular 
    } = req.body
    const NuevoVeterinario = new Veterinarios({
        nombre,
        apellidos,
        correo,
        direccion,
        celular
    })

    const respuesta = await NuevoVeterinario.save()
    res.json({

       mensaje : 'Veterinario creado',
       respuesta
    })

}
//lista de peticiones


// listar por id 
VeterinariosCtrl.listarId = async(req,res)=>{
    const id = req.params.id
    const respuesta = await Veterinarios.findById({_id:id})
    res.json(respuesta)
}


VeterinariosCtrl.VeterinariosConRoles = async(req,res)=>{
    const id = req.params.id
    const respuesta = await Veterinarios.find({roles:id})

}
// ver 
VeterinariosCtrl.listar = async(req,res)=>{
    const respuesta = await Veterinarios.find()
    res.json(respuesta)
}
//eliminar
VeterinariosCtrl.eliminar = async(req,res)=>{
    const id = req.params.id
    await Veterinarios.findByIdAndRemove({_id:id})
    res.json({
        mensaje:'Veterinario eliminado'
    })

}
//actualizar
VeterinariosCtrl.actualizar = async(req,res)=>{
    const id = req.params.id
    await Veterinarios.findByIdAndUpdate({_id:id},req.body  )
    res.json({
        mensaje:'Veterinario actualizado'
    })

}
// buscar
VeterinariosCtrl.buscarVeterinarios = async(req,res)=>{
    const id = req.params.id
    try{
        const respuesta = await Veterinarios.find({id:id})
        res.json(respuesta)

    }catch (error){

        return res.json.status(400).json({
            mensaje:'ocurrio un error ',
            error
        })

    }

}



module.exports=VeterinariosCtrl
