const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema(
    {
    servicio: { type: mongoose.Schema.Types.ObjectId, ref: 'Servicio', required: true },
    emprendedor: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
    fechaHora: { type: Date, required: true },
    estado: { type: String, enum: ['pendiente', 'confirmada', 'cancelada', 'completada'], default: 'pendiente' },
    notas: { type: String, trim: true },
    },
    { timestamps: true, collection: 'reservas' }
);

module.exports = mongoose.model('Reserva', BookingSchema);
