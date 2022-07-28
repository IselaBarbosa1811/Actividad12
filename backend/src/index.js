const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const bodyparser= require('body-parser');
const { urlencoded } = require('body-parser');
require('./database');

app.set('Port',process.env.PORT || 4000);
app.use(morgan('dev'))
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
app.use(cors({origen: '*'}))

app.use('/veterinarios',require('./routes/Veterinarios.route'))
app.use('/ventas',require('./routes/Ventas.route'))
app.use('/usuarios',require('./routes/Usuarios.route'))
app.use('/proveedores',require('./routes/Proveedores.route'))
app.use('/productos',require('./routes/Productos.route'))
app.use('/mascotas',require('./routes/Mascotas.route'))
app.use('/compras',require('./routes/Compras.route'))
app.use('/clientes',require('./routes/Clientes.route'))
app.use('/citas',require('./routes/Citas.route'))
app.use('/categorias',require('./routes/Categorias.route'))




app.listen(app.get('Port'),()=>{
    console.log('Servidor esta escuchando por el puerto',app.get('Port'))
})