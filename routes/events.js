/*
    Event Routes
    /api/events

*/
const { Router } = require('express');
const { check } = require('express-validator');

const { isDate } = require('../helpers/isDate');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const { getEvents, createEvent, updateEvent, deleteEvents } = require('../controllers/events')


const router = Router();
//aplica validacion JWT en todas las Rutas debajo de esta linea de codigo
router.use( validarJWT );


router.get('/', getEvents );


router.post(
    '/',
    [
        check('title', 'El tituto es Requerido').not().isEmpty(),
        check('start', 'fecha de inicio es obligatoria').custom( isDate ),
        check('end', 'fecha de finalizacion es obligatoria').custom( isDate ),
        validarCampos
    ],
    createEvent 
);


router.put('/:id', updateEvent );


router.delete('/:id', deleteEvents );


module.exports = router;