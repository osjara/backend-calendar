const { Schema, model } = require("mongoose");



const ComentarioSchema = Schema({
    autor: {
        type: Schema.Types.ObjectId,
        ref: 'Perfil',
        require: true
    },
    publicacion: {
        type: Schema.Types.ObjectId,
        ref: 'Publicacion',
        require: true
    },
    contenido:{
        type: String,
        require: true
    }
})

module.exports = model('Comentario', ComentarioSchema);