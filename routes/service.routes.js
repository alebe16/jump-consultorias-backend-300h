const express = require('express');
const { crearServicio, listarServicios } = require('../controllers/service.controller');
const router = express.Router();

router.get('/', listarServicios);
router.post('/', crearServicio);

module.exports = router;
