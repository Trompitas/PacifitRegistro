const {Schema, model} = require("mongoose");

const usuarioSchema = Schema({
  nombreUsuario: {
    type: String,
    required: true,
  },
  nombreCompleto:{
    type: String,
    required: true,
  },
  primerApellido: {
    type: String,
    requiered: true,
  },
  contrasena: {
    type: String,
    required: true,
  },
},
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model('Usuario', usuarioSchema);