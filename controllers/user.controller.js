const Usuario = require('../models/user');

exports.crearUsuario = async (req, res) => {
    try {
    const { nombre, correo, password, rol } = req.body;
    if (!nombre || !correo || !password) {
        return res.status(400).json({ error: 'nombre, correo y password son obligatorios' });
    }

    const existe = await Usuario.findOne({ correo });
    if (existe) return res.status(409).json({ error: 'Ya existe un usuario con ese correo' });

    const usuario = await Usuario.create({ nombre, correo, password, rol });

    
    const plain = usuario.toObject();
    delete plain.password;

    res.status(201).json(plain);
    } catch (err) {
    console.error('Error creando usuario:', err);
    res.status(500).json({ error: 'Error del servidor' });
    }
};

exports.listarUsuarios = async (req, res) => {
    try {
    const usuarios = await Usuario.find().select('-password'); 
    res.json(usuarios);
    } catch (err) {
    console.error('Error listando usuarios:', err);
    res.status(500).json({ error: 'Error del servidor' });
    }
};
