const fs = require("fs");
const estadosService = require("../services/estadosService");

const obtengoEstados = (req, res) => {

  const estados = estadosService.obtenerEstados()
  .then(estado => res.status(200).send(estado))
  .catch(error => res.status(400).send(error))

  
};

const obtengoEstadoId = (req, res) => {
  const { id } = req.params;
  const estado = estadosService.obtenerEstadoId(id)
  .then(estado => res.status(200).send(estado))
  .catch(error => res.status(400).send(error))
};


module.exports = {

  obtengoEstados,
  obtengoEstadoId
};
