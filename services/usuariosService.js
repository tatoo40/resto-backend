const fs = require("fs");
const Usuario       = require('../models').usuario;



function saveUsuarios(usuarios) {
  const result = crearUsuario(usuarios.nombre,usuarios.email,usuarios.password)
  return result;
}

async function readUsuarios() {
  //const usuarios = fs.readFileSync("usuarios.json", "utf-8");
  //const usuariosParsed = JSON.parse(usuarios);
  //return usuariosParsed;

  const usuarios = await obtenerUsuarios();
  console.log(usuarios)
  //const usuariosParsed = JSON.parse(usuarios);
  return usuarios;

}

async function obtenerUsuario(email) {

  const usuario = await obtenerUsuarioModelo(email);

  return usuario

}

async function loginBD(email,password) {

  const usuario = await loginModelo(email,password);

  return usuario

}


async function crearUsuario(nombre, email, password) {
  try {
    const nuevoUsuario = await Usuario.create({
      nombre: nombre,
      email: email,
      password: password,
      // Otras propiedades del usuario si las hay
    });

    // El nuevo usuario se ha creado y guardado en la base de datos
    return nuevoUsuario;

  } catch (error) {

    throw error;
  
  }
}


async function obtenerUsuarios() {
  try {
    const usuarios = await Usuario.findAll();
    return usuarios;
  } catch (error) {
    throw error;
  }
}


async function obtenerUsuarioModelo(email) {
  try {
    const usuario = await Usuario.findOne({
      where: {
        email: email
      }
    });

    // Si se encuentra un usuario con el correo electrónico proporcionado, se almacena en 'usuario'
    return usuario; // Puede ser 'null' si no se encuentra ningún usuario con ese email
  } catch (error) {

    throw error;

  }
}



async function loginModelo(email,password) {
  try {
    const usuario = await Usuario.findOne({
      where: {
        email: email
      }
    });

    // Si se encuentra un usuario con el correo electrónico proporcionado, se almacena en 'usuario'
    return usuario; // Puede ser 'null' si no se encuentra ningún usuario con ese email
  } catch (error) {

    throw error;

  }
}



module.exports = {
  saveUsuarios,
  readUsuarios,
  obtenerUsuario,
  loginBD
};