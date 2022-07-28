const  UsuariosCtrl = {}
const Usuario = require('../models/usuarios');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

UsuariosCtrl.crearRoles = async(req,res) =>{

    const{email,password} = req.body
    const NuevoUsuario = new Usuario({
        email,
        password
    })

    const emailRol = await Usuario.findOne({email: email})// crear un rol 
    if (emailRol) // si el correo esta creado pasa 
    {
        res.json({
            mensaje:'El correo ya existe'           
        })
    }
    else{
        NuevoUsuario.password = await bcrypt.hash(password,10)// si no esta en el sistema crea la contraseña y la encripta
        const token = jwt.sign({_id: NuevoUsuario._id},"Secreto")
        await NuevoUsuario.save()
        res.json({
            mensaje:'Bienvenido',
            id: NuevoUsuario._id,
            token

        })
    }
}

UsuariosCtrl.login = async(req,res)=>{
    const {email,password}= req.body
    const userExist = await usuario.findOne({email:email})
    if (!userExist){

        return res.json({
            mensaje: 'Email incorrecto'
        })

    }
    const match = await bcrypt.compare(password,userExist.password)
    if (match){

        const token = jwt.sign({_id: userExist._id},'Secreto')
        res.json({
            mensaje:'Bienvenido',
            id: userExist.nombre,
            token
        })
    }
    else {
        res.json({
            mensaje:'La contraseña es incorrecta'
        })
    }
}

module.exports = UsuariosCtrl;