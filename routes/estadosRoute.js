const express = require("express");
const router = express.Router(); 
const  estadosController = require("../controllers/estadosController")
//const {validarProducto} = require("../middlewares/validarEstado");

router.get("/", estadosController.obtengoEstados);
router.get("/:id", estadosController.obtengoEstadoId); 


module.exports = router