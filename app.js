const cookieParser = require('cookie-parser');
const session = require ("express-session")

const sequelize = require ('./config');
const usuario       = require('./models').usuario;

const express = require("express");
const app = express();

app.use(cookieParser());

app.use(session({
  secret: 'mi-secreto', // Cambia esto por una cadena secreta aleatoria
  resave: false,
  saveUninitialized: false,
  cookie:{maxAge:6000}
}));

app.set("view engine", "ejs"); //motor de plantillas ejs
app.use(express.static("public")); //carpeta publica para archivos estaticos (css, js, img, etc)
app.use(express.urlencoded({ extended: true })); //para poder leer los datos de un formulario
app.use(express.json()); //para poder leer los datos de un formulario


const cors = require('cors');
app.use(cors())


async function iniciarProyecto() {
  try {
    await sequelize.sync(); // Esto crea las tablas si no existen
    console.log('Base de datos sincronizada correctamente.');
  } catch (error) {
    console.error('Error al sincronizar la base de datos:', error);
  }
}

iniciarProyecto();

usuario.findAll({})

// rutas principales, a las que se puede acceder sin estar logeado, ej pagina de inicio, pagina de registro, pagina de login
app.use("/", require("./routes/indexRoute")); //contiene la vista index, login, registro
// rutas protegidas, solo pueden acceder los que inician sesion, ej pagina de perfil
app.use("/admin",require("./routes/adminRoute")); //contiene la vista perfil
// // rutas de api para usuarios, para la lógica CRUD en usuarios. (GET, POST, PUT, DELETE)


app.use("/productos",require("./routes/productosRoute"))
app.use("/usuarios",require("./routes/usuariosRoute"))
app.use("/estados",require("./routes/estadosRoute"))
app.use("/ordenes",require("./routes/ordenesRoute"))

app.listen(4000, () => {
  console.log("Servidor iniciado en el puerto 4000");
});