const { Schema, model } = require("mongoose");



const AdopcionSchema = Schema({
    fechaAdopcion: {
        type: Date,
        required: true
    },
    recibe: {
        type: Schema.Types.ObjectId,
        ref: 'Perfil',
        require: true
    },
    entrega: {
        type: Schema.Types.ObjectId,
        ref: 'Perfil',
        require: true
    },
    mascota: {
        type: Schema.Types.ObjectId,
        ref: 'Mascota',
        require: true
    }
})

module.exports = model('Adopcion', AdopcionSchema);