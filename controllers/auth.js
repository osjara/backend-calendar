const { response } = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const { generarJWT } = require('../helpers/jwt');


const createUser = async(req, res = response) => {

    const { email, password } = req.body;

    try {

        let user = await User.findOne({ email });
        
        if (user) {
            return res.status(400).json({
                ok: false,
                msg: 'User already exists'
            });
        }

        user = new User( req.body );
     
        // Encriptar contraseña
        const salt = await bcrypt.genSalt();
        user.password = await bcrypt.hashSync(password, salt);



        await user.save();
     
        // Generar JWT
        const token = await generarJWT( user.id, user.name ); 

         res.status(201).json({
             ok: true,
             uid: user.id,
             name: user.name,
             token
         })
        
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'error, Comuniquese con administrador'
        })
    }


}

const revalidarToken = async (req, res) => {

    const { uid, name } = req;

    const token = await generarJWT( uid, name ); 

    res.json({
        ok: true,
        uid, name,
        token
    })

}


const loginUser = async (req, res) => {

    const { email, password } = req.body;

   try {
    const user = await User.findOne({ email });
        
    if (!user) {
        return res.status(400).json({
            ok: false,
            msg: 'The email is not Registered'
        });
    }

    //Confirmar los password
    const validPassword = bcrypt.compareSync( password, user.password );

    if (!validPassword) {
        return res.status(400).json({
            ok: false,
            msg: 'Incorrect Password'
        })
    }

    // Generar JWT
    const token = await generarJWT( user.id, user.name ); 

    res.json({
        ok: true,
        uid: user.id,
        name: user.name,
        token
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
    createUser,
    loginUser,
    revalidarToken,
    obtenerUsuarios
}