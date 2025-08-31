const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
    nombre: { type: String, required: true, trim: true },
    correo: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true, minlength: 6 },
    rol: { type: String, enum: ['admin', 'usuario'], default: 'usuario' },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Usuario', UserSchema);