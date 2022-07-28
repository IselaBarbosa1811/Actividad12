const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const CategoriasSchema = new Schema({
    nombre: {type: String},
    fecha: {type: Date},

});

module.exports = mongoose.model('categorias', CategoriasSchema);