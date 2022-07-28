const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const ComprasSchema = new Schema({
    codigo: { type: String },
    producto: { type: String },
    precio: { type: String },
    formapago: {type: String},
    nombreproveedor: { type: String },
    fecha: { type: Date },
    total: { type: String }
});

module.exports = mongoose.model('compras', ComprasSchema);