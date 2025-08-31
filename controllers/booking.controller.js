const Reserva = require('../models/booking');

exports.crearReserva = async (req, res) => {
    try {
    const { servicio, emprendedor, fechaHora, notas } = req.body;
    if (!servicio || !emprendedor || !fechaHora) {
        return res.status(400).json({ error: 'servicio, emprendedor y fechaHora son obligatorios' });
    }
    const reserva = await Reserva.create({ servicio, emprendedor, fechaHora, notas });
    res.status(201).json(reserva);
    } catch (err) {
    console.error('Error creando reserva:', err);
    res.status(500).json({ error: 'Error del servidor' });
    }
};

exports.listarReservas = async (req, res) => {
    try {
    const reservas = await Reserva.find()
        .populate('servicio')
        .populate('emprendedor', 'nombre correo rol');
    res.json(reservas);
    } catch (err) {
    console.error('Error listando reservas:', err);
    res.status(500).json({ error: 'Error del servidor' });
    }
};
