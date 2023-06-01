const express = require('express');
const router = express.Router()
const usuarioController = require('../controllers/usuariosController')
const { check } = require('express-validator')


router.post('/',
    [
        check('nombre', 'Nombre es obligatorio').not().isEmpty(),
        check('pais', 'Pais es obligatorio').not().isEmpty()
    ],
    usuarioController.crearUsuario
)

module.exports = router;