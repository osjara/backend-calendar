/*
    rutas de usuarios / auth
    host + /api/auth

*/



const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { createUser, loginUser, revalidarToken, obtenerUsuarios } = require('../controllers/auth');
const { validarJWT } = require('../middlewares/validar-jwt')

const router = Router();

router.post(
    '/new',
    [// middlewares
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'La contraseña debe tener minimo 6 caracteres').isLength({ min: 6 }),
        validarCampos
    ],
     createUser);


router.post(
    '/',
    [
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'La contraseña debe tener minimo 6 caracteres').isLength({ min: 6 }),
        validarCampos
    ],
    loginUser);


router.get('/renew', validarJWT, revalidarToken);


router.get('/obtenerUsuarios', obtenerUsuarios);


module.exports = router;