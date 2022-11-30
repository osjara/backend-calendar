const { Schema, model } = require("mongoose");



const MascotaSchema = Schema({
    nombre:{
        type: String,
        require: true
    },
    fechaNacimiento: {
        type: Date,
        required: true
    },
    imagenMascota:{
        type: String,
    },
    tipo:{
        type: String,
        require: true
    },
    sexo:{
        type: String,
        require: true
    },
    duenio: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    centroAdopcion: {
        type: Schema.Types.ObjectId,
        ref: 'CentroAdopcion'
    },
    adoptado: {
        type: Boolean,
        require: true
    }
})

module.exports = model('Mascota', MascotaSchema);