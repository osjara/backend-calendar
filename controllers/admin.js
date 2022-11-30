const { response } = require("express");
const Ciudad = require("../models/Ciudad");

const crearCiudad = async(req, res= response) => {

     const ciudad = new Ciudad(req.body);

     try {

        const ciudadCreada = await ciudad.save();

        res.json({
            ok: true,
            ciudad: ciudadCreada
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'La ciudad ya Esta Ingresada'
        });
    }

}


module.exports = {
    crearCiudad
}