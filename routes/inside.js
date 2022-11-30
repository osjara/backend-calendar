/*
    Rutas de Creacion dentro de perfil /inside
    host + api/inside
*/

const { Router } = require("express");
const { crearCentro, crearPerfil, crearMascota, crearPublicacion, crearComentario, meGusta, crearSeguidor, crearAdopcion } = require("../controllers/inside");




const router = Router();

router.post('/crearCentro', crearCentro);

router.post('/crearPerfil', crearPerfil);

router.post('/crearMascota', crearMascota);

router.post('/crearPublicacion', crearPublicacion);

router.post('/crearComentario', crearComentario);

router.post('/meGusta', meGusta);

router.post('/seguir', crearSeguidor);

router.post('/adoptar', crearAdopcion);


module.exports = router;