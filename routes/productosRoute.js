const express = require("express");
const router = express.Router(); 
const  productosController = require("../controllers/productosController")
const {validarProducto} = require("../middlewares/validarProducto");

router.get("/", productosController.obtengoPoductos);
router.get("/:id", productosController.obtengoPoductoId); 
router.post("/", validarProducto, productosController.agregarProducto);
router.delete("/:id", productosController.eliminarProducto);
router.put("/:id", validarProducto, productosController.actualizarProducto)


module.exports = router