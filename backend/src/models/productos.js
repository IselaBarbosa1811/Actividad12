const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const ProductosSchema = new Schema({
    nombre: {type: String},
    categoria: {type: String},
    proveedor: {type:String},
    preciocompra: {type:String},
    precioventa: {type:String},
    pesodelproducto: {type:String},
    stockdelproducto: {type:String},
    descripción: {type:String}

});

module.exports = mongoose.model('productos', ProductosSchema);