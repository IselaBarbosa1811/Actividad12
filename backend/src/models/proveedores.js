const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const ProveedoresSchema = new Schema({
    nombre: {type: String},
    direccion: {type: String},
    pais: {type:String},
    telefono: {type:String},
    celular: {type: String},
    correo: {type:String},
});

module.exports = mongoose.model('proveedores', ProveedoresSchema);