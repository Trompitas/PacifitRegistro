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
  masculinofemenino: {
    type: String,
    required: true,
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
