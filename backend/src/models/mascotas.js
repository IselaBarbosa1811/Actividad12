const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const MascotasSchema = new Schema({
    nombre: {type: String},
    tipo: {type: String},    
    raza: {type: String},    
    dueño: {type:String},
    fecha: {type: Date}
});

module.exports = mongoose.model('mascotas', MascotasSchema);