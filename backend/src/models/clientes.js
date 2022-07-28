const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const ClientesSchema = new Schema({
    nombre: {type: String},
    apellidos: {type:String},
    celular: {type: String},
    usuario: {type:String},
    direccion: {type:String},
    correo: {type:String}

});

module.exports = mongoose.model('clientes', ClientesSchema);