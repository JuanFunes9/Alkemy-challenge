const Personajes = require('../models/Personajes');

const validarId = async (id) => {
  if (id > 0) {
    const idValido = await Personajes.findOne({
      where: { id }
    });

    if (!idValido) {
      throw new Error(`El personaje con ID: ${id} no existe.`)
    }
  }
}

module.exports = validarId;