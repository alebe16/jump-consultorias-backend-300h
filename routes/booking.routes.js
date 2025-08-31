const express = require('express');
const { crearReserva, listarReservas } = require('../controllers/booking.controller');
const router = express.Router();

router.get('/', listarReservas);
router.post('/', crearReserva);

module.exports = router;
