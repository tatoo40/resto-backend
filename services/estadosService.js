const fs = require("fs");
const Estado       = require('../models').estado;

// Función para leer los datos del archivo productos.json
async function  obtenerEstados() {
  const estados =  await obtenerEstadosBD();
  console.log(estados)
  //const usuariosParsed = JSON.parse(usuarios);
  return estados;

};


async function  obtenerEstadoId (id) {
  const estados =  await obtenerEstadosByIdBD(id);
  console.log(estados)
  //const usuariosParsed = JSON.parse(usuarios);
  return estados;
};


async function obtenerEstadosBD() {
  try {
    const estados = await Estado.findAll();
    return estados;
  } catch (error) {
    throw error;
  }
}


async function obtenerEstadosByIdBD(id) {
  try {
    const estados = await Estado.findAll({
      where: {
        id: id
      }
    });
    //Book.findById(id
    return estados;
  } catch (error) {
    throw error;
  }
}


async function actaulizarOrdenByIdBD(id,body) {
  try {
    const ordenes =  await Orden.update({ 
      nombre: body.nombre,
      descripcion:body.descripcion,
      precio:body.precio,
      categoria_id:body.categoria_id
    
    }, {
        where: {
          id: id
        }
      }); 
    //Book.findById(id
    return ordenes;
  } catch (error) {
    throw error;
  }
}

async function eliminarOrdenById(id) {
  try {
    const orden = await Orden.destroy({
      where: {
        id: id
      }
    });
    //Book.findById(id
    return orden;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  obtenerEstados,
  obtenerEstadoId

};
