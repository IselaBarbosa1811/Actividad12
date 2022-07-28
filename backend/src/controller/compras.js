const ComprasCtrl ={}
const Compra = require ('../models/compras');

ComprasCtrl.crear = async(req,res)=>{
    const {
        codigo,producto,precio,formapago,nombreproveedor,fecha,total
    } = req.body
    const NuevaCompra = new Compra({
        codigo,
        producto,
        precio,
        formapago,
        nombreproveedor,
        fecha,
        total
    })

     const respuesta = await NuevaCompra.save()
     res.json({

        mensaje : 'Compra Creada',
        respuesta
     })

}
//lista de peticiones


// listar por id 
ComprasCtrl.listarId = async(req,res)=>{
    const id = req.params.id
    const respuesta = await Compra.findById({_id:id})
    res.json(respuesta)
}


ComprasCtrl.ComprasConRoles = async(req,res)=>{
    const id = req.params.id
    const respuesta = await Compra.find({roles:id})

}
// ver 
ComprasCtrl.listar = async(req,res)=>{
    const respuesta = await Compra.find()
    res.json(respuesta)
}
//eliminar
ComprasCtrl.eliminar = async(req,res)=>{
    const id = req.params.id
    await Compra.findByIdAndRemove({_id:id})
    res.json({
        mensaje:'Compra eliminada'
    })

}
//actualizar
ComprasCtrl.actualizar = async(req,res)=>{
    const id = req.params.id
    await Compra.findByIdAndUpdate({_id:id},req.body  )
    res.json({
        mensaje:'Compra actualizada'
    })

}
// buscar
ComprasCtrl.buscarCompras = async(req,res)=>{
    const id = req.params.id
    try{
        const respuesta = await Compra.find({id:id})
        res.json(respuesta)

    }catch (error){

        return res.json.status(400).json({
            mensaje:'ocurrio un error ',
            error
        })

    }

}



module.exports=ComprasCtrl
