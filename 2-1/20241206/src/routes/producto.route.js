const { Router } = require("express");
const {
  actualizarProducto,
  agregarProducto,
  borrarProducto,
  obtenerProducto,
  obtenerProductos,
} = require("../models/producto.model.js");

const router = Router();

// /api/v1/productos

router.get("/", async (req, res) => {
  try {
    const productos = await obtenerProductos();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const { nombre, marca, categoria, precio, stock, descripcion } = req.body;
    await agregarProducto(nombre, marca, categoria, precio, stock, descripcion);

    res.send("Producto agregado con éxito");
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const producto = await obtenerProducto(id);
    if (producto) {
      res.json(producto);
    } else {
      res.status(404).json({ message: "Producto no encontrado" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener el producto" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre } = req.query;
    const result = await actualizarProducto(id, nombre);
    res.send(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await borrarProducto(id);
    res.json({ message: "Producto eliminado con éxito" });
  } catch (error) {
    console.log(error);
    res.json({ error: error.message });
  }
});

module.exports = router;
