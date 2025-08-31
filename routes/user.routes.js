const express = require('express');
const { crearUsuario, listarUsuarios } = require('../controllers/user.controller');
const User = require("../models/user");
const router = express.Router();

router.get('/', listarUsuarios);
router.post('/', crearUsuario);



module.exports = router;