const fs = require("fs");
const ordenesService = require("../services/ordenesService");

const obtengoOrdenes = (req, res) => {

  const ordenes = ordenesService.obtenerOrdenes()
  .then(orden => res.status(200).send(orden))
  .catch(error => res.status(400).send(error))

  
};

const obtengoOrdenId = (req, res) => {
  const { id } = req.params;
  const orden = ordenesService.obtenerOrdenId(id)
  .then(orden => res.status(200).send(orden))
  .catch(error => res.status(400).send(error))
};

const agregarOrden= (req, res) => {
  const { body } = req;
  const orden = ordenesService.agregarOrden(body)
  .then(orden => res.status(200).send(orden))
  .catch(error => res.status(400).send(error))
};

const actualizarOrden = (req, res) => {
  const { id } = req.params;
  const { body } = req;

  const orden = ordenesService.actualizarOrden(id, body)  
  .then(ordenes = ordenesService.obtenerOrdenes()
  .then(orden => res.status(200).send(orden))
  .catch(error => res.status(400).send(error)))
  .catch(error => res.status(400).send(error))
};

const eliminarOrden = (req, res) => {
  const { id } = req.params;
  const orden = ordenesService.eliminarOrden(id)
  .then(orden => res.status(200).send(orden))
  .catch(error => res.status(400).send(error))
};

module.exports = {
  agregarOrden,
  obtengoOrdenes,
  eliminarOrden,
  obtengoOrdenId,
  actualizarOrden,
};
