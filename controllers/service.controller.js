const Servicio = require('../models/service');

exports.crearServicio = async (req, res) => {
    try {
    const { profesional, titulo, descripcion, precio, duracionMinutos, categoria } = req.body;
    if (!profesional || !titulo || precio == null) {
        return res.status(400).json({ error: 'profesional, titulo y precio son obligatorios' });
    }
    const servicio = await Servicio.create({ profesional, titulo, descripcion, precio, duracionMinutos, categoria });
    res.status(201).json(servicio);
    } catch (err) {
    console.error('Error creando servicio:', err);
    res.status(500).json({ error: 'Error del servidor' });
    }
};

exports.listarServicios = async (req, res) => {
    try {
    const servicios = await Servicio.find().populate({
        path: 'profesional',
        populate: { path: 'usuario', select: 'nombre correo rol' },
    });
    res.json(servicios);
    } catch (err) {
    console.error('Error listando servicios:', err);
    res.status(500).json({ error: 'Error del servidor' });
    }
};
