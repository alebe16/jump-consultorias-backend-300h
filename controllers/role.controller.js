const Rol = require('../models/role');

exports.crearRol = async (req, res) => {
    try {
    const { nombre, permisos = [] } = req.body;
    if (!nombre) return res.status(400).json({ error: 'nombre es obligatorio' });

    const existe = await Rol.findOne({ nombre });
    if (existe) return res.status(409).json({ error: 'Ya existe un rol con ese nombre' });

    const rol = await Rol.create({ nombre, permisos });
    res.status(201).json(rol);
    } catch (err) {
    console.error('Error creando rol:', err);
    res.status(500).json({ error: 'Error del servidor' });
    }
};

exports.listarRoles = async (req, res) => {
    try {
    const roles = await Rol.find();
    res.json(roles);
    } catch (err) {
    console.error('Error listando roles:', err);
    res.status(500).json({ error: 'Error del servidor' });
    }
};
