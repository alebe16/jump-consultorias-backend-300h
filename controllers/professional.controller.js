const Profesional = require('../models/professional');

exports.crearProfesional = async (req, res) => {
    try {
    const { usuario, nombrePublico, bio, especialidades = [], tarifaHora } = req.body;
    if (!usuario) return res.status(400).json({ error: 'usuario es obligatorio' });

    const prof = await Profesional.create({ usuario, nombrePublico, bio, especialidades, tarifaHora });
    res.status(201).json(prof);
    } catch (err) {
    console.error('Error creando profesional:', err);
    res.status(500).json({ error: 'Error del servidor' });
    }
};

exports.listarProfesionales = async (req, res) => {
    try {
    const profesionales = await Profesional.find().populate('usuario', 'nombre correo rol');
    res.json(profesionales);
    } catch (err) {
    console.error('Error listando profesionales:', err);
    res.status(500).json({ error: 'Error del servidor' });
    }
};
