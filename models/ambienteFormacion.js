const mongoose = require('mongoose');

const ambienteSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    }
   
}, {
    timestamps: true
});

module.exports = mongoose.model('Ambiente', ambienteSchema); 



/* const mongoose = require('mongoose');

const tipoOficinaAmbienteEnum = ['Administrativo', 'Formación'];

const OficinaAmbienteSchema = new mongoose.Schema({
    ofiTipo: {
        type: String,
        enum: tipoOficinaAmbienteEnum,
        required: true
    },
    ofiNombre: {
        type: String,
        unique: true,
        required: true
    },
    fechaHoraCreacion: {
        type: Date,
        default: Date.now
    },
    fechaHoraActualizacion: {
        type: Date,
        default: Date.now
    }
});

module.exports = {
    OficinaAmbiente: mongoose.model('OficinaAmbiente', OficinaAmbienteSchema),} */