const mongoose = require ('mongoose')
const Schema = mongoose.Schema


const VentasSchema = new Schema({
    codigo: { type: String },
    producto: { type: String },
    precio: { type: String },
    cantidad: {type: Number},
    stock: { type: Number },
    formapago: {type: String},
    factura: { type: String },
    cliente: { type: String },
    fecha: {type: Date}
});

module.exports = mongoose.model('ventas', VentasSchema);