const mongoose = require ('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs');


const UsuariosSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});




module.exports = mongoose.model('usuarios', UsuariosSchema);