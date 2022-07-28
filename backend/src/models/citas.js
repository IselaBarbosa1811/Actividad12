const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const CitasSchema = new Schema({
    dueño: { type: String },
    veterinario: { type: String },
    mascota: { type: String },
    tipo: { type: String },
    servicio: { type: String },
    precio: { type: String },
    fecha: { type: Date }
});

module.exports = mongoose.model('citas', CitasSchema);