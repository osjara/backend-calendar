const { Schema, model } = require("mongoose");



const CentroAdopcionSchema = Schema({
    admin: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },fechaCreacion: {
        type: Date,
        required: true
    }

})

module.exports = model('CentroAdopcion', CentroAdopcionSchema);