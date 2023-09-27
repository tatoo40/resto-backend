const fs = require("fs");
const archivoService = require("../services/manejoArchivoService");
const Producto       = require('../models').producto;

// Función para leer los datos del archivo productos.json
async function  obtenerProductos() {
  const productos =  await obtenerProductosBD();
  console.log(productos)
  //const usuariosParsed = JSON.parse(usuarios);
  return productos;
};

async function actualizarProducto (id, body) {
  
  
    const productos =  await actaulizarProductoByIdBD(id,body);
    console.log(productos)
    //const usuariosParsed = JSON.parse(usuarios);
    return productos;


};

async function  obtenerProductoId (id) {
  const productos =  await obtenerProductosByIdBD(id);
  console.log(productos)
  //const usuariosParsed = JSON.parse(usuarios);
  return productos;
};

async function eliminarProducto (id)  {


  const productoEliminado =  await eliminarProductoById(id);

  const productos =  await obtenerProductosBD();
  console.log(productos)
  //const usuariosParsed = JSON.parse(usuarios);
  return productos;
};

async function agregarProducto(producto){
  const productos =  await agregarProductoBD(producto);
  console.log(productos)
  //const usuariosParsed = JSON.parse(usuarios);
  return productos;
};


async function agregarProductoBD(producto) {
  try {
    const productos = await Producto.create({ nombre: producto.nombre, precio: producto.precio,descripcion: producto.descripcion,categoria_id: producto.categoria_id });
    return productos;
  } catch (error) {
    throw error;
  }
}

async function obtenerProductosBD() {
  try {
    const productos = await Producto.findAll();
    return productos;
  } catch (error) {
    throw error;
  }
}


async function obtenerProductosByIdBD(id) {
  try {
    const productos = await Producto.findAll({
      where: {
        id: id
      }
    });
    //Book.findById(id
    return productos;
  } catch (error) {
    throw error;
  }
}


async function actaulizarProductoByIdBD(id,body) {
  try {
    const productos =  await Producto.update({ 
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
    return productos;
  } catch (error) {
    throw error;
  }
}

async function eliminarProductoById(id) {
  try {
    const producto = await Producto.destroy({
      where: {
        id: id
      }
    });
    //Book.findById(id
    return producto;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  obtenerProductos,
  obtenerProductoId,
  agregarProducto,
  eliminarProducto,
  actualizarProducto,
};
