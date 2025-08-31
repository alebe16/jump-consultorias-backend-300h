const mongoose = require('mongoose');

const ProfessionalSchema = new mongoose.Schema(
    {
    usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true, unique: true },
    nombrePublico: { type: String, trim: true },
    bio: { type: String, trim: true },
    especialidades: [{ type: String, trim: true }],
    tarifaHora: { type: Number, min: 0 },
    },
    { timestamps: true, collection: 'profesionales' }
);

module.exports = mongoose.model('Profesional', ProfessionalSchema);
