const mongoose = require('mongoose');


URI=('mongodb://localhost/veterinaria_animalcare')

mongoose.connect(URI,{
    useNewURLParser: true,
    useUnifiedTopology: true,
})
.then(db =>console.log('Base de datos conectada',db.connection.name))
.catch(error => console.log(error))

module.exports = mongoose