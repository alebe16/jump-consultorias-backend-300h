const express = require('express');
const { crearRol, listarRoles } = require('../controllers/role.controller');
const router = express.Router();


router.get('/', listarRoles);
router.post('/', crearRol);

module.exports = router;
