const CategoriasCtrl ={}
const Categoria = require ('../models/mascotas');

CategoriasCtrl.crear = async(req,res)=>{
    const {
        nombre,fecha
    } = req.body
    const NuevaCategoria = new Categoria({
        nombre,
        fecha    
    })
     const respuesta = await NuevaCategoria.save()
     res.json({

        mensaje : 'Categoria Creada',
        respuesta
     })

}
//lista de peticiones


// listar por id 
CategoriasCtrl.listarId = async(req,res)=>{
    const id = req.params.id
    const respuesta = await Categoria.findById({_id:id})
    res.json(respuesta)
}


CategoriasCtrl.CategoriaConRoles = async(req,res)=>{
    const id = req.params.id
    const respuesta = await Categoria.find({roles:id})

}
// ver 
CategoriasCtrl.listar = async(req,res)=>{
    const respuesta = await Categoria.find()
    res.json(respuesta)
}
//eliminar
CategoriasCtrl.eliminar = async(req,res)=>{
    const id = req.params.id
    await Categoria.findByIdAndRemove({_id:id})
    res.json({
        mensaje:'Categoria eliminada'
    })

}
//actualizar
CategoriasCtrl.actualizar = async(req,res)=>{
    const id = req.params.id
    await Categoria.findByIdAndUpdate({_id:id},req.body  )
    res.json({
        mensaje:'Categoria actualizada'
    })

}
// buscar
CategoriasCtrl.buscarCategoria = async(req,res)=>{
    const id = req.params.id
    try{
        const respuesta = await Categoria.find({id:id})
        res.json(respuesta)

    }catch (error){

        return res.json.status(400).json({
            mensaje:'ocurrio un error ',
            error
        })

    }

}



module.exports=CategoriasCtrl
