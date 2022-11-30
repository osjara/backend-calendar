/*
    rutas de usuarios / auth
    host + /api/auth

*/



const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { loginUser, obtenerUsuarios, crearUsuario } = require('../controllers/auth');

const router = Router();

router.post(
    '/new',
    [// middlewares
        check('email', 'El email es obligatorio').isEmail(),
        check('direccion', 'La direccion es obligatoria').not().isEmpty(),
        check('password', 'La contraseña debe tener minimo 6 caracteres').isLength({ min: 6 }),
        validarCampos
    ],
     crearUsuario);


router.post(
    '/',
    [
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'La contraseña debe tener minimo 6 caracteres').isLength({ min: 6 }),
        validarCampos
    ],
    loginUser);



router.get('/obtenerUsuarios', obtenerUsuarios);


module.exports = router;