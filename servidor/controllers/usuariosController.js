const Usuarios = require("../models/usuarios");
const { validationResult } = require("express-validator");

exports.crearUsuario = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const usuario = new Usuarios(req.body);
    usuario.save();
    res.json(usuario);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error");
  }
};
