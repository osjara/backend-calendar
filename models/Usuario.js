const { Schema, model } = require("mongoose");



const UsuarioSchema = Schema({
    email:{
        type: String,
        require: true,
        unique: true
    },
    direccion:{
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
})

module.exports = model('Usuario', UsuarioSchema);