const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema(
    {
    profesional: { type: mongoose.Schema.Types.ObjectId, ref: 'Profesional', required: true },
    titulo: { type: String, required: true, trim: true },
    descripcion: { type: String, trim: true },
    precio: { type: Number, required: true, min: 0 },
    duracionMinutos: { type: Number, default: 60, min: 15 },
    categoria: { type: String, trim: true },
    },
    { timestamps: true, collection: 'servicios' }
);

module.exports = mongoose.model('Servicio', ServiceSchema);
