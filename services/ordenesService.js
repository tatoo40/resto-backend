const fs = require("fs");
const archivoService = require("./manejoArchivoService");
const Orden       = require('../models').orden;

// Función para leer los datos del archivo productos.json
async function  obtenerOrdenes() {
  const ordenes =  await obtenerOrdenesBD();
  console.log(ordenes)
  //const usuariosParsed = JSON.parse(usuarios);
  return ordenes;
};

async function actualizarOrden (id, body) {
  
  
    const ordenes =  await actaulizarOrdenByIdBD(id,body);
    console.log(ordenes)
    //const usuariosParsed = JSON.parse(usuarios);
    return ordenes;


};

async function  obtenerOrdenId (id) {
  const ordenes =  await obtenerOrdenesByIdBD(id);
  console.log(ordenes)
  //const usuariosParsed = JSON.parse(usuarios);
  return ordenes;
};

async function eliminarOrden (id)  {


  const ordenEliminado =  await eliminarOrdenById(id);

  const ordenes =  await obtenerOrdenesBD();
  console.log(ordenes)
  //const usuariosParsed = JSON.parse(usuarios);
  return ordenes;
};

async function agregarOrden(orden){
  const ordenes =  await agregarOrdenBD(orden);
  console.log(ordenes)
  //const usuariosParsed = JSON.parse(usuarios);
  return ordenes;
};


async function agregarOrdenBD(orden) {
  try {
    const ordenes = await Orden.create({ nro: orden.nro, fecha: orden.fecha,hora: orden.hora,idEstado: orden.idEstado });
    return ordenes;
  } catch (error) {
    throw error;
  }
}

async function obtenerOrdenesBD() {
  try {
    const ordenes = await Orden.findAll();
    return ordenes;
  } catch (error) {
    throw error;
  }
}


async function obtenerOrdenesByIdBD(id) {
  try {
    const ordenes = await Orden.findAll({
      where: {
        nro: id
      }
    });
    //Book.findById(id
    return ordenes;
  } catch (error) {
    throw error;
  }
}


async function actaulizarOrdenByIdBD(id,body) {
  try {
    switch(body.idEstado){

      case 2:
        var hora_preparacion = body.hora_preparacion;
      break;
      case 3:
        var hora_finalizada = body.hora_finalizada;
      break;
      case 4:
        var hora_terminada = body.hora_terminada;
      break;

    }
    const ordenes =  await Orden.update({ 

      idEstado: body.idEstado,
      hora_preparacion:hora_preparacion,
      hora_finalizada:hora_finalizada,
      hora_terminada:hora_terminada
      
  
    
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
  obtenerOrdenes,
  obtenerOrdenId,
  agregarOrden,
  eliminarOrden,
  actualizarOrden,
};
