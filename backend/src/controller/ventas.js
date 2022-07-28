const VentasCtrl ={}
const Ventas = require ('../models/ventas');

VentasCtrl.crear = async(req,res)=>{
    const {
        codigo,producto, precio,cantidad,stock,formapago,factura,cliente,fecha
    } = req.body
    const NuevaVenta = new Ventas({
        codigo,
        producto,
        precio,
        cantidad,
        stock,
        formapago,
        factura,
        cliente,
        fecha
    })

     const respuesta = await NuevaVenta.save()
     res.json({

        mensaje : 'Venta Creada',
        respuesta
     })

}
//lista de peticiones


// listar por id 
VentasCtrl.listarId = async(req,res)=>{
    const id = req.params.id
    const respuesta = await Ventas.findById({_id:id})
    res.json(respuesta)
}


VentasCtrl.VentasConRoles = async(req,res)=>{
    const id = req.params.id
    const respuesta = await Ventas.find({roles:id})

}
// ver 
VentasCtrl.listar = async(req,res)=>{
    const respuesta = await Ventas.find()
    res.json(respuesta)
}
//eliminar
VentasCtrl.eliminar = async(req,res)=>{
    const id = req.params.id
    await Ventas.findByIdAndRemove({_id:id})
    res.json({
        mensaje:'Venta eliminada'
    })

}
//actualizar
VentasCtrl.actualizar = async(req,res)=>{
    const id = req.params.id
    await Ventas.findByIdAndUpdate({_id:id},req.body  )
    res.json({
        mensaje:'Venta actualizada'
    })

}
// buscar
VentasCtrl.buscarVentas = async(req,res)=>{
    const id = req.params.id
    try{
        const respuesta = await Ventas.find({id:id})
        res.json(respuesta)

    }catch (error){

        return res.json.status(400).json({
            mensaje:'ocurrio un error ',
            error
        })

    }

}



module.exports=VentasCtrl
