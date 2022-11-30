const { Router } = require("express");
const { crearCiudad } = require("../controllers/admin");

const router = Router();


router.post('/crearCiudad', crearCiudad);

module.exports = router;