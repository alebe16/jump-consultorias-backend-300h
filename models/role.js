const mongoose = require('mongoose');

const RoleSchema = new mongoose.Schema(
    {
    nombre: { type: String, required: true, unique: true, trim: true }, 
    permisos: [{ type: String, trim: true }], 
    },
    { timestamps: true, collection: 'roles' }
);

module.exports = mongoose.model('Rol', RoleSchema);
