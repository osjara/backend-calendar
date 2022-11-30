const { Schema, model } = require("mongoose");



const MeGustaSchema = Schema({
    autor: {
        type: Schema.Types.ObjectId,
        ref: 'Perfil',
        require: true
    },
    publicacion: {
        type: Schema.Types.ObjectId,
        ref: 'Publicacion',
        require: true
    }
})

module.exports = model('MeGusta', MeGustaSchema);