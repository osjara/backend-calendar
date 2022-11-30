const { Schema, model } = require("mongoose");



const PublicacionSchema = Schema({
    fechaPublicacion: {
        type: Date,
        required: true
    },
    titulo:{
        type: String,
        require: true
    },
    contenido:{
        type: String,
        require: true
    },
    imagen:{
        type: String,
        require: true
    },
    autor: {
        type: Schema.Types.ObjectId,
        ref: 'Perfil',
        require: true
    }
})

module.exports = model('Publicacion', PublicacionSchema);