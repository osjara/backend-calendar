const { Schema, model } = require("mongoose");



const PerfilSchema = Schema({
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    centroAdopcion: {
        type: Schema.Types.ObjectId,
        ref: 'CentroAdopcion'
    },
    nombre:{
        type: String,
        require: true
    },
    apellido:{
        type: String,
        require: true
    },
    userName:{
        type: String,
        require: true
    },
    fechaNacimiento: {
        type: Date,
        required: true
    },
    imagenPerfil:{
        type: String,
    },
    imagenPortada:{
        type: String,
    },
    telefono:{
        type: String,
        require: true
    },
    ciudad: {
        type: Schema.Types.ObjectId,
        ref: 'Ciudad'
    }

})

module.exports = model('Perfil', PerfilSchema);