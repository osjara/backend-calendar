const { response } = require('express');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/Usuario');


const crearUsuario = async(req, res = response) => {

    const { email, direccion, password } = req.body;

    try {

        let usuario = await Usuario.findOne({ email });
        
        if (usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'User already exists'
            });
        }

        usuario = new Usuario(req.body);
     
        // Encriptar contraseña
        const salt = await bcrypt.genSalt();
        usuario.password = await bcrypt.hashSync(password, salt);



        await usuario.save();
     

         res.status(201).json({
             ok: true,
            uid: usuario.id
         })
        
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'error, Comuniquese con administrador'
        })
    }


}

const loginUser = async (req, res) => {

    const { email, password } = req.body;

   try {
    const usuario = await Usuario.findOne({ email });
        
    if (!usuario) {
        return res.status(400).json({
            ok: false,
            msg: 'El Email no esta Registrado'
        });
    }

    //Confirmar los password
    const validPassword = bcrypt.compareSync( password, usuario.password );

    if (!validPassword) {
        return res.status(400).json({
            ok: false,
            msg: 'Password incorrecto'
        })
    }


    res.json({
        ok: true,
        uid: usuario.id,
    })
    
   } catch (error) {
    res.status(500).json({
        ok: false,
        msg: 'error, Comuniquese con administrador'
    })
   }
}

const obtenerUsuarios = async(req, res = response) => {

    const usuario = await User.findOne()
    res.json(
        usuario
    )
}


module.exports = {
    crearUsuario,
    loginUser,
    obtenerUsuarios
}