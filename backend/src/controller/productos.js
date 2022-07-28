const ProductosCtrl ={}
const Producto = require ('../models/productos')

ProductosCtrl.crear = async(req,res)=>{
    const {
        nombre,categoria,proveedor,preciocompra,precioventa,pesodelproducto,stockdelproducto,descripción
        } = req.body
    const NuevoProducto = new Producto({
        nombre,
        categoria,
        proveedor,
        preciocompra,
        precioventa,
        pesodelproducto,
        stockdelproducto,
        descripción
    })

     const respuesta = await NuevoProducto.save()
     res.json({

        mensaje : 'Producto Creado',
        respuesta
     })

}
//lista de peticiones

// listar por id 
ProductosCtrl.listarId = async(req,res)=>{
    const id = req.params.id
    const respuesta = await Producto.findById({_id:id})
    res.json(respuesta)
}


ProductosCtrl.ProductosConRoles = async(req,res)=>{
    const id = req.params.id
    const respuesta = await Producto.find({roles:id})

}
// ver 
ProductosCtrl.listar = async(req,res)=>{
    const respuesta = await Producto.find()
    res.json(respuesta)
}
//eliminar
ProductosCtrl.eliminar = async(req,res)=>{
    const id = req.params.id
    await Producto.findByIdAndRemove({_id:id})
    res.json({
        mensaje:'Producto eliminado'
    })

}
//actualizar
ProductosCtrl.actualizar = async(req,res)=>{
    const id = req.params.id
    await Producto.findByIdAndUpdate({_id:id},req.body  )
    res.json({
        mensaje:'Producto actualizado'
    })

}
// buscar
ProductosCtrl.buscarProducto = async(req,res)=>{
    const id = req.params.id
    try{
        const respuesta = await Producto.find({id:id})
        res.json(respuesta)

    }catch (error){
        return res.json.status(400).json({
            mensaje:'ocurrio un error ',
            error
        })

    }

}



module.exports=ProductosCtrl
