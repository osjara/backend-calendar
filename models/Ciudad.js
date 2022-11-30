const { Schema, model } = require("mongoose");



const CiudadSchema = Schema({
    nombreCiudad:{
        type: String,
        require: true,
        unique: true
    },
})

module.exports = model('Ciudad', CiudadSchema);