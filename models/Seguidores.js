const { Schema, model } = require("mongoose");



const SeguidoresSchema = Schema({
    perfilseguido: {
        type: Schema.Types.ObjectId,
        ref: 'Perfil',
        require: true
    },
    seguidor: {
        type: Schema.Types.ObjectId,
        ref: 'Perfil',
        require: true
    },
})

module.exports = model('Seguidores', SeguidoresSchema);