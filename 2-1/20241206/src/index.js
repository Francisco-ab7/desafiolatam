const express = require("express");
const app = express();
const productoRoute = require("./routes/producto.route.js");

app.use(express.json());

app.use("/api/v1/productos", productoRoute);

app.listen(3000, console.log("¡Servidor encendido!"));

module.exports = app;
