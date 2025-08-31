const express = require('express');
const { crearProfesional, listarProfesionales } = require('../controllers/professional.controller');
const router = express.Router();

router.get('/', listarProfesionales);
router.post('/', crearProfesional);

module.exports = router;
