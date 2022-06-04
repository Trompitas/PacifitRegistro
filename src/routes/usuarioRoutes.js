const express = require("express");
const usuarioSchema = require("../models/usuarioModels");

const router = express.Router();

// create user
router.post("/usuario", (req, res) => {
  const usuario = usuarioSchema(req.body);

  usuario
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all users
router.get("/usuario", (req, res) => {
  usuarioSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// search user by name
router.get("/usuario/:name", (req, res) => {
  const { nombreUsuario } = req.params;
  const search = new RegExp(nombreUsuario, "i");
  usuarioSchema
    .find({$or: [{nombreUsuario: search}],}).lean()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete a user
router.delete("/usuario/:id", (req, res) => {
  const { id } = req.params;
  usuarioSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update a user
router.put("/usuario/:id", (req, res) => {
  const { id } = req.params;
  const { nombreUsuario, nombreCompleto,masculinofemenino, contrasena } = req.body;
  usuarioSchema
    .updateOne(
      { _id: id },
      { $set: { nombreUsuario, nombreCompleto,masculinofemenino, contrasena } }
    )
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
